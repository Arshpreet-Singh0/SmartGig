import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/Button";
import { Check, Clock4, Globe, MessageSquareText, User2 } from "lucide-react";

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
  User: {
    name: string;
    email: string;
  };
}

const ProjectDetails = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/project/project/${projectId}`
        );
        setProject(res?.data?.project);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Project not found!
        </p>
      </div>
    );
  }

  console.log(project);
  

  return (
    <div className="w-[90%] md:w-[80%] mx-auto pt-10 text-black dark:text-white">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">{project.title}</h1>
        <p className="mt-2 text-gray-400 text-lg">
          Posted {daysAgo(project.createdAt)} days ago
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="p-4 rounded-lg bg-white dark:bg-black-200 h-36 text-center">
          <h2 className="text-white text-2xl font-semibold">Budget</h2>
          <h2 className="text-blue-600 text-3xl font-semibold mt-2">
            &#8377; {project.budget}
          </h2>
          <p className="text-lg text-gray-500">Fixed Price</p>
        </div>
        <div className="p-4 rounded-lg bg-white dark:bg-black-200 h-36 text-center">
          <h2 className="text-white text-2xl font-semibold">Timeline</h2>
          <h2 className="text-blue-600 text-3xl font-semibold mt-2">
            {project.duration}
          </h2>
          <p className="text-lg text-gray-500">Expected Duration</p>
        </div>
        <div className="p-4 rounded-lg bg-white dark:bg-black-200 h-36 text-center">
          <h2 className="text-white text-2xl font-semibold">Proposals</h2>
          <h2 className="text-blue-600 text-3xl font-semibold mt-2">12</h2>
          <p className="text-lg text-gray-500">Submitted Bids</p>
        </div>
      </div>

      <div className="flex justify-center gap-10 mt-10">
        <Button text="Place Bid" variant="primary" className="px-9 py-3" onClick={()=>navigate(`/place-bid/${projectId}`)}/>
        <Button
          text="Chat With Client"
          variant="outline"
          className="px-9 py-3 border-none dark:bg-[#404040] bg-white text-black dark:text-white"
        />
      </div>

      <div className="mt-16 p-6 bg-white dark:bg-black-200 rounded-lg dark:text-white">
        <h3 className="text-2xl font-semibold">Project Brief</h3>

        <p className="opacity-75 mt-2">{project.description}</p>
        <div className="mt-5">
          {project?.skillsRequired?.map((s) => (
            <span className="bg-gray-200 dark:bg-[#404040] mr-2 px-2 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 dark:bg-black-200 p-6 rounded-lg text-[#000] dark:text-white">
        <h1 className="text-2xl font-semibold">
          Client Information
        </h1>
        <div className="flex">
          <div className="mt-5 w-1/2">
            <div className="flex gap-5">
              <div className="flex justify-center items-center w-14 h-14 rounded-full border">
                <User2 className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{project?.User.name}</h3>
                <p className="opacity-65">Tech Company CEO</p>
              </div>
            </div>

            <div className="mt-5 p-2">
              <p className="flex gap-5">
                <Globe className="text-blue-500" />
                <p className="opacity-70">United States</p>
              </p>
              <p className="flex gap-5 mt-3">
                <Clock4 className="text-blue-500" />
                <p className="opacity-70">Member since 2024</p>
              </p>
              <p className="flex gap-5 mt-3">
                <Check className="text-blue-500" />
                <p className="opacity-70">Payment Verified</p>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-lg flex-1 mt-5">
            <div className="bg-gray-200 dark:bg-[#404040] p-4 w-full rounded-lg text-[#000] dark:text-white">
              <h2 className="text-xl font-semibold">Client Statistics</h2>

                <div className="grid grid-cols-2 mt-2 gap-y-4">
                  <div className="col-span-1 text-center">
                    <h2 className="text-blue-500 text-3xl font-semibold ">15</h2>
                    <p className="opacity-70">Projects Posted</p>
                  </div>
                  <div className="col-span-1 text-center">
                    <h2 className="text-blue-500 text-3xl font-semibold ">12</h2>
                    <p className="opacity-70">Completed Projects</p>
                  </div>
                  <div className="col-span-1 text-center">
                    <h2 className="text-blue-500 text-3xl font-semibold ">4.8</h2>
                    <p className="opacity-70">Average Rating</p>
                  </div>
                  <div className="col-span-1 text-center">
                    <h2 className="text-blue-500 text-3xl font-semibold ">98%</h2>
                    <p className="opacity-70">Payment Success</p>
                  </div>
                </div>
                
            </div>

            <Button text="Contact Client" variant="primary" startIcon={<MessageSquareText />} className="mt-5 py-3" fullWidth/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

const daysAgo = (date: string): number => {
  const currDate = Date.now();
  const diffInMilliseconds = currDate - new Date(date).getTime();
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  return diffInDays;
};
