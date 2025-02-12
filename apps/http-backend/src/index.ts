import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import prisma from "./config/prisma";

import authRouter from './routes/user.routes';
import projectRouter from './routes/project.routes';
import freelancerRouter from './routes/freelancer.routes'
import clientRouter from './routes/client.routes'
import { isAuthenticated } from './middlewares/isAuthenticated';

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//api's

app.use('/api/v1/user', authRouter);
app.use('/api/v1/project', projectRouter);
app.use('/api/v1/freelancer', freelancerRouter);
app.use('/api/v1/client', clientRouter);

const PORT = process.env.PORT || 8080;

app.get('/', async(req:Request, res:Response)=>{
    res.send('Working');
})

app.get("/recent-chats", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const userId = Number(req.userId);

    // Fetch the latest message per user
    const latestMessages = await prisma.chat.findMany({
      where: {
        OR: [{ senderId: userId }, { receiverId: userId }],
      },
      orderBy: { timestamp: "desc" }, // Sort by newest messages first
      distinct: ["senderId", "receiverId"], // Ensure only one message per user
      select: {
        senderId: true,
        receiverId: true,
        message: true,
        timestamp: true,
      },
    });

    // Extract unique user IDs and messages
    const recentChatsMap = new Map<number, { message: string; createdAt: Date }>();

    for (const chat of latestMessages) {
      const chatUserId = chat.senderId === userId ? chat.receiverId : chat.senderId;
      
      // Only add if not already present (ensures one entry per user)
      if (!recentChatsMap.has(chatUserId)) {
        recentChatsMap.set(chatUserId, { message: chat.message, createdAt: chat.timestamp });
      }
    }

    // Fetch user details
    const users = await prisma.user.findMany({
      where: { id: { in: Array.from(recentChatsMap.keys()) } },
      select: { id: true, name: true },
    });

    // Combine user details with their last message
    const recentChats = users.map(user => ({
      id: user.id,
      name: user.name,
      lastMessage: recentChatsMap.get(user.id)?.message || null,
      lastMessageAt: recentChatsMap.get(user.id)?.createdAt || null,
    }));

    res.status(200).json({ recentChats });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/messages/:senderId', isAuthenticated, async (req, res) => {
  try {
    const userId = Number(req.userId);
    const senderId = Number(req.params.senderId);

    const chats = await prisma.chat.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: senderId },
          { senderId: senderId, receiverId: userId }
        ]
      },
      orderBy: {
        timestamp : 'asc' // Sort messages in chronological order
      },
      take : 50
    });

    res.json({ chats });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(PORT, ()=>{
    console.log(`Listening to Port ${PORT}`);
})