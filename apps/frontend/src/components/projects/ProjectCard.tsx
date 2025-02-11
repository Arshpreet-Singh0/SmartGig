import { Briefcase, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

const ProjectCard = ({ project }: any) => {
  const navigate = useNavigate();
  const timeAgo = (timeString: string): string => {
    const pastTime = new Date(timeString);
    const currentTime = new Date();
    const diffInMilliseconds = currentTime.getTime() - pastTime.getTime();
  
    const diffInHours = Math.floor(diffInMilliseconds / 3600000);
    const days = Math.floor(diffInHours / 24);
    const hours = diffInHours % 24;
  
    return `${days} day${days !== 1 ? "s" : ""} ${hours} hour${hours !== 1 ? "s" : ""} ago`;
  };
  

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full dark:bg-black-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
        {project.budget}
        </span>
      </div>

      <div className="h-12 overflow-hidden">
        <p className="text-gray-600 mb-4 dark:text-gray-200">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 mt-2">
        {project?.skillsRequired?.slice(0,4).map((skill: string) => (
          <span
            key={skill}
            className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Spacer to push the last section to the bottom */}
      <div className="flex-grow"></div>
      <div className="mt-2">
        <Button variant="primary" text="See  Details" onClick={()=>navigate(`/view-deatils/${project?.id}`)}/>
      </div>

      <div className="flex items-center justify-between text-sm text-gray- mt-4 text-gray-500 dark:text-gray-200">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {project.duration} days
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {project?.proposals}5 proposals
          </span>
        </div>
        <span>{timeAgo(project?.createdAt)}</span>
      </div>

    </div>
  );
};

export default ProjectCard;
