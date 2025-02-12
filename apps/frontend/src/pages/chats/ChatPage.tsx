import React, { useEffect, useState, useRef } from "react";
import { Send, User, UserCircle2, Search } from "lucide-react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../../Config";
import { useSocket } from "../../hooks/useSocket";
import { useAppSelector } from "../../hooks/hook";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  message: string;
  senderId: number;
  timestamp: Date;
}

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageAt: Date;
}

function ChatPage() {
  const [recentChats, setRecentChats] = useState<Chat[]>([]);
  const [currChatUser, setCurrChatUser] = useState<Chat | null>(null);
  const { ws, loading } = useSocket();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();

  // Create a ref to hold the messages container
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom when messages change or when a new chat is loaded
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // This will trigger scrolling whenever `messages` updates

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/recent-chats`, {
          withCredentials: true,
        });
        setRecentChats(res?.data?.recentChats || []);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };
    getChats();
  }, []);

  useEffect(() => {
    if (ws) {
      ws.onmessage = (e) => {
        const parsedData = JSON.parse(e.data);
        console.log(parsedData);
        setMessages((prev) => [...prev, parsedData]);
      };
    }
  }, [ws]);

  // Fetch messages when a chat user is selected
  useEffect(() => {
    if (currChatUser) {
      const fetchMessages = async () => {
        try {
          const res = await axios.get(
            `${BACKEND_URL}/messages/${currChatUser.id}`,
            { withCredentials: true }
          );
          setMessages(res?.data?.chats || []);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };
      fetchMessages();
    }
  }, [currChatUser]);

  const handleSend = async () => {
    if (!newMessage.trim() || !currChatUser) return;

    const newMsg: Message = {
      id: messages.length + 1,
      message: newMessage,
      senderId: Number(user.id), // Assuming the current user is the sender
      timestamp: new Date(),
    };

    // Send message via WebSocket
    ws?.send(
      JSON.stringify({
        message: newMessage,
        receiverId: currChatUser.id,
        type: "chat",
      })
    );

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {recentChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setCurrChatUser(chat)}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                  currChatUser?.id === chat.id ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex items-start space-x-3">
                  <UserCircle2 className="w-12 h-12 text-gray-400" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 truncate">
                        {chat.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1">
          <div className="max-w-4xl mx-auto p-4">
            {/* Chat Header */}
            <div className="bg-white rounded-t-lg shadow-sm p-4 border-b">
              {currChatUser ? (
                <div className="flex items-center space-x-3">
                  <UserCircle2 className="w-10 h-10 text-gray-400" />
                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {currChatUser.name}
                    </h2>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">
                  Select a chat to start messaging
                </p>
              )}
            </div>

            {/* Chat Messages */}
            <div className="bg-white h-[600px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === Number(user.id)
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[70%] ${
                      message.senderId === Number(user.id)
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >
                    <User className="w-8 h-8 text-gray-400 flex-shrink-0" />
                    <div
                      className={`rounded-lg p-3 ${
                        message.senderId === Number(user.id)
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.senderId === Number(user.id)
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {/* Timestamp logic */}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Scroll to the bottom */}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            {currChatUser && (
              <div className="bg-white p-4 border-t flex items-center space-x-2">
                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !e.shiftKey && handleSend()
                  }
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPage;
