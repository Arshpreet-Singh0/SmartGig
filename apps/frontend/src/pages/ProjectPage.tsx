import axios from "axios";
import { useEffect, useState } from "react";
import Project from "../components/projects/Project";
import Navbar from "../components/navbar/Navbar";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const JobPage = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProjects, setTotalProjects] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/api/v1/project/${currentPage}`);

        setTotalProjects(res.data.totalProjects);
        setProjects(res.data.projects);
        
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    fetchProjects();
  },[currentPage]);
  
  return (
    <div className="flex-1">
      <Navbar />
      <Project projects={projects} currentPage={currentPage} setCurrentPage={setCurrentPage} totalProjects={totalProjects} loading={loading}/>
    </div>
  )
}

export default JobPage