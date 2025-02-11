import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRouter from './routes/user.routes';
import projectRouter from './routes/project.routes';
import freelancerRouter from './routes/freelancer.routes'
import clientRouter from './routes/client.routes'

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

app.listen(PORT, ()=>{
    console.log(`Listening to Port ${PORT}`);
})