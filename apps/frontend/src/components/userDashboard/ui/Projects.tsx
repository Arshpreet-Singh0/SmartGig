import { Clock4 } from "lucide-react";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  budget: number;
  duration: string;
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
interface props {
  projects: Project[];
}

const Projects: React.FC<props> = ({ projects }) => {
  return (
    <div className="p-6 dark:text-white" id="projects">
      <div className=" p-2 pb-4 rounded-lg bg-white dark:bg-black-200">
        <div className="border-b border-gray-700 p-4">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <p className="opacity-60 text-md">
            Browse and manage your current projects
          </p>
        </div>

        <div className="grid grid-cols-3 mt-5 gap-6 p-2">
          {projects.length > 0 ? (
            <>
              {projects.map((project: Project, idx: number) => (
                <ProjectCard project={project} key={idx} />
              ))}
            </>
          ) : (
            <div className="text-lg text-gray-400">
              <h4>No projects found</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border dark:border-gray-700 rounded-lg dark:text-white dark:bg-black-200 bg-gray-100">
      <div className="p-4">
        <h2 className="font-semibold text-lg">{project.title}</h2>
        <p className="text-gray-400 text-sm">Client : {project.User.name}</p>

        <div className="py-5 text-gray-400 h-24 overflow-x-auto">{project.description}</div>

        <p className="flex text-gray-400">
          <Clock4 className="mr-2" width={18} /> Due in{" "}
          {calculateDueInDays(project).daysRemaining} Days
        </p>
      </div>

      <div className="flex justify-end items-center border-t border-gray-700 h-12 p-4 text-gray-400">
        + View Deatils
      </div>
    </div>
  );
};

interface DueInfo {
  deadline: Date;
  daysRemaining: number;
  isOverdue: boolean;
}

function calculateDueInDays(project: Project): DueInfo {
  const currentDate = new Date();
  const assignedAt = new Date(project.assignedAt);
  const durationInDays = parseInt(project.duration.split(" ")[0], 10); // Extract number of days

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
