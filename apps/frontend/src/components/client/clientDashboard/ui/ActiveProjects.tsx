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
  freelancer:{
    name : string
  }
}

interface Props {
  projects: Project[];
}

const ActiveProjects: React.FC<Props> = ({ projects }) => {
  return (
    <div className="p-6">
      <div className="p-4 bg-black-200 rounded-lg">
        <h1 className="text-xl text-white opacity-80 font-semibold">Active Projects</h1>

        <div className="">
          <div className="grid grid-cols-6 mt-4 text-gray-300 border-b border-gray-700 pb-4">
            <div className="col-span-2 font-bold">Project Name</div>
            <div className="col-span-1 font-bold">Freelancer</div>
            <div className="col-span-1 font-bold">Deadline</div>
            <div className="col-span-1 font-bold">Budget</div>
            <div className="col-span-1 font-bold">Status</div>

          </div>
          <div className="h-56 overflow-y-auto">
            {
              projects.map((project) => (
                <div className="grid grid-cols-6 mt-4 text-gray-300 border-b border-gray-700 pb-5">
                <div className="col-span-2">{project.title}</div>
                <div className="col-span-1">{project.freelancer.name}</div>
                <div className="col-span-1">{project.duration}</div>
                <div className="col-span-1">&#8377; {project.budget}</div>
                <div className="col-span-1">
                  <span className="px-4 rounded-full bg-[#3c834b] py-[2px] text-green-400">
                    {project.status.toLowerCase()}
                  </span>
                </div>

            </div>
              ))
            }

          </div>

        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;
