import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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
  freelancer: {
    name: string;
  };
}

interface Props {
  projects: Project[];
}

const PendingProjects: React.FC<Props> = ({ projects }) => {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const naviagte = useNavigate();

  return (
    <div className="p-6">
      <div className="p-4 bg-gray-50 dark:bg-black-200 rounded-lg">
        <h1 className="text-xl dark:text-white opacity-80 font-semibold">Pending Projects</h1>

        <div className="">
          <div className="grid grid-cols-7 mt-4 dark:text-gray-300 border-b border-gray-700 pb-4">
            <div className="col-span-2 font-bold">Project Name</div>
            <div className="col-span-2 font-bold">Deadline</div>
            <div className="col-span-1 font-bold">Budget</div>
            <div className="col-span-1 font-bold">Status</div>
            <div className="col-span-1 font-bold">Action</div>
          </div>
          <div className="h-64 overflow-y-auto">
            {projects?.map((project) => (
              <div key={project.id} className="grid grid-cols-7 mt-4 dark:text-gray-300 border-b border-gray-700 pb-5 relative">
                <div className="col-span-2">{project.title}</div>
                <div className="col-span-2">{project.duration}</div>
                <div className="col-span-1">&#8377; {project.budget}</div>
                <div className="col-span-1">
                  <span className="px-4 rounded-full bg-[#3c834b] py-[2px] text-green-400">
                    {project.status.toLowerCase()}
                  </span>
                </div>
                <div className="col-span-1 relative">
                  <button onClick={() => setMenuOpen(menuOpen === project.id ? null : project.id)}>
                    <FiMoreVertical className="text-xl cursor-pointer" />
                  </button>
                  {menuOpen === project.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg py-2 z-10">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-700" onClick={()=>naviagte(`/project/proposals/${project.id}`)}>
                        View Proposals
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingProjects;