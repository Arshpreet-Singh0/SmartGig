import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import PlaceBidForm from "../../../components/ui/PlaceBidForm";
import Navbar from "../../../components/navbar/Navbar";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PlaceBid = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    proposedBudget: "",
    proposedTimeline: "",
    coverLetter: "",
  });
  const { projectId } = useParams();

  const handleChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/freelancer/${projectId}`, input, {
        withCredentials : true,
      });
  
      if(res?.data?.success){
        message.success(res?.data?.message);
        navigate('/dashboard');
      }
      
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || "An unexpected error occurred.";
        message.error(errorMessage);
      } else {
        message.error("Something went wrong.");
        console.error(error);
      }
    }
    
  }

  return (
    <>
    <Navbar />
    <PlaceBidForm input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
};

export default PlaceBid;
