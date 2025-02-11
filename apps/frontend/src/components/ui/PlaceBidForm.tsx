import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface propsType {
  handleChange?: (e: React.ChangeEvent) => void;
  handleSubmit?: (e: React.FormEvent) => void;
  input: {
    proposedBudget: string;
    proposedTimeline: string;
    coverLetter: string;
  };
  disabled?: boolean;
  editForm? : boolean;
}

interface Project {
  id: number;
  title: string;
  budget: string;
  duration: string;
  experienceLevel: string;
}
const PlaceBidForm: React.FC<propsType> = ({
  input,
  handleChange,
  handleSubmit,
  disabled,
  editForm,
}) => {
  const [project, setProject] = useState<Project | null>();
  const navigate = useNavigate();
  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/project/project/${projectId}`
        );

        setProject(res.data.project);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, []);

  const handleEditForm = (e:React.FormEvent)=>{
    e.preventDefault();
    navigate(`/bid/edit/${project?.id}`)
  }
  return (
    <div className="w-[80%] mx-auto dark:text-white p-5">
      <h1 className="text-2xl font-semibold">{editForm ? 'Edit Proposal' : 'Submit Proposal'}</h1>
      <p className="opacity-75 text-sm mt-1">Project : {project?.title}</p>

      <div className="grid grid-cols-3 shadow-md rounded-lg mt-8 p-5 dark:bg-black-200 bg-white">
        <div className="px-5">
          <p className="opacity-70 text-sm">Client Budget : </p>
          <p className="text-lg font-bold text-green-500">
            {" "}
            &#8377; {project?.budget}
          </p>
        </div>
        <div className="px-5">
          <p className="opacity-70 text-sm">Project Duration : </p>
          <p className="text-lg font-bold">{project?.duration}</p>
        </div>
        <div className="px-5">
          <p className="opacity-70 text-sm">Experience Level</p>
          <p className="text-lg font-bold">{project?.experienceLevel}</p>
        </div>
      </div>

      <div className="mt-8 shadow-md rounded-lg p-5 dark:bg-black-200 bg-white">
        <form onSubmit={disabled==true ? handleEditForm : handleSubmit} >
          <label htmlFor="" className="text-sm">
            Your bid amount :{" "}
          </label>
          <div className="flex gap-2 items-center">
            <p className="text-2xl ">&#8377;</p>
            <div className="flex-1">
              <Input
                classname="bg-gray-50 dark:bg-[#404040] border-gray-700 w-full mt-1"
                type="number"
                placeholder="Enter your bid amount"
                name="proposedBudget"
                value={input.proposedBudget}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>
          <p className="text-xs opacity-50 mt-2">Platform fee 10%</p>
          <div className="mt-2">
            <label htmlFor="" className="text-sm">
              Estimated Duration :{" "}
            </label>
            <Input
              classname="bg-gray-50 dark:bg-[#404040] border-gray-700 w-full mt-1"
              placeholder="Enter estimated duration (In Days)"
              name="proposedTimeline"
              value={input.proposedTimeline}
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-sm">
              Cover Letter :{" "}
            </label>
            <textarea
              className="bg-gray-50 dark:bg-[#404040] border-gray-700 w-full mt-4 rounded-lg p-3"
              rows={6}
              placeholder="Explain why you are best fit for this project..."
              name="coverLetter"
              value={input.coverLetter}
              onChange={handleChange}
              disabled={disabled}
            ></textarea>
          </div>

          {disabled==true ? (
            <Button
              text="Edit Proposal"
              variant="primary"
              className="mt-5 w-32"
            />
          ) : (
            <Button text="Submit" variant="primary" className="mt-5 w-32" />
          )}
        </form>
      </div>
    </div>
  );
};

export default PlaceBidForm;
