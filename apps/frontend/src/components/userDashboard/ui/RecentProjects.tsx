import { FileText } from "lucide-react";
import React from "react";
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
interface props {
  projects: Project[];
}
const RecentProjects : React.FC<props> = ({projects}) => {
  

  return (
    <div className="p-6">
      {/* Wrapper container with fixed height */}
      <div className="bg-white dark:bg-black-200 rounded-lg h-[18rem]">
        {/* Header */}
        <div className="p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold dark:text-white">Recent Projects</h2>
        </div>
        {/* Content Container with Scroll */}
        <div className="flex flex-col gap-4 p-4 overflow-y-scroll h-[15rem]">
          {projects.length > 0 ? (
            projects.slice(0,2).map((project:Project, index:number) => (
              <div
                className="flex px-6 py-4 bg-gray-100 dark:bg-[#2B2B2B] rounded-lg"
                key={index}
              >
                <div className="flex justify-between w-full">
                  <div className="flex">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg- dark:bg-[#404040] rounded-lg">
                      <FileText className="text-blue-600" />
                    </div>
                    {/* Project Details */}
                    <div className="flex-1 px-3">
                      <h3 className="dark:text-white text-md">{project?.title}</h3>
                      <p className="text-gray-400 text-sm">Due in {calculateDueInDays(project).daysRemaining} days</p>
                    </div>
                  </div>
                  {/* Project Status */}
                  <div className="flex justify-center items-center">
                    <div className="text-green-500 rounded-full bg-[#2D463C] px-2 py-1 text-xs">
                      {project?.status}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No recent projects</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;

interface DueInfo {
  deadline: Date;
  daysRemaining: number;
  isOverdue: boolean;
}

function calculateDueInDays(project: Project): DueInfo {
  const currentDate = new Date();
  const assignedAt = new Date(project.assignedAt);
  const durationInDays = parseInt(project.duration.split(' ')[0], 10); // Extract number of days

  // Calculate deadline by adding duration to assignedAt
  const deadline = new Date(assignedAt);
  deadline.setDate(deadline.getDate() + durationInDays);

  // Calculate days remaining
  const timeDifference = deadline.getTime() - currentDate.getTime(); // Difference in milliseconds
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

  return {
    deadline,
    daysRemaining: daysRemaining > 0 ? daysRemaining : 0, // Return 0 if overdue
    isOverdue: daysRemaining < 0, // Flag overdue
  };
}
