import { useEffect, useState } from "react";
import Cards from "./ui/Cards";
import axios from "axios";
import ActiveProjects from "./ui/ActiveProjects";
import PendingProjects from "./ui/PendingProjects";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface Project {
  id: number;
  title: string;
  description: string;
  budget: number;
  duration: string; // e.g., "22 days"
  skillsRequired: string[];
  status: string;
  experienceLevel: string;
  deadline: string | null;
  assignedAt: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  freelancerId: number;
  freelancer:{
    name : string
  }
}

const ClientDashBoard = () => {
  const [activeProjects, setProjects] = useState<Project[]>([]);
  const [pendingProjects, setPendingProjects] = useState<Project[]>([]);

  useEffect(()=>{
      const fetchProjects = async()=>{
        try {
          const res = await axios.get(`${BACKEND_URL}/api/v1/client/projects`, {
            withCredentials : true,
          });          
          setProjects(res.data.projects);
        } catch (error) {
          console.log(error);
          
        }
      };
      const fetchPendingProjects = async()=>{
        try {
          const res = await axios.get(`${BACKEND_URL}/api/v1/client/pending-projects`, {
            withCredentials : true,
          });
          console.log(res);
          
          setPendingProjects(res.data.projects);
        } catch (error) {
          console.log(error);
          
        }
      };
      fetchProjects();
      fetchPendingProjects();
  },[]);
  return (
    <div className="bg-white">
      <Cards />
      <ActiveProjects projects={activeProjects}/>
      <PendingProjects projects={pendingProjects}/>
    </div>
  )
}

export default ClientDashBoard;