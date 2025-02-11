import { useEffect, useState } from "react";
import Cards from "./ui/Cards";
import Projects from "./ui/Projects";
import RecentProjects from "./ui/RecentProjects";
import axios from "axios";
import Proposals from "./ui/Proposals";
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
  User : {
    name : string,
    email : string
}
}

const FreelancerDashBoard = () => {
  const [projects, setProjects] = useState<Project[] | []>([]);
  
  useEffect(() => {
    const fetchActiveProjects = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/freelancer/assigned-project`,
          {
            withCredentials: true,
          }
        );
        setProjects(res?.data?.projects || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchActiveProjects();
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-black-100">
        <Cards projects={projects.length}/>
        <RecentProjects projects={projects}/>
        <Projects projects={projects}/>
        <Proposals />
    </div>
  )
}

export default FreelancerDashBoard;