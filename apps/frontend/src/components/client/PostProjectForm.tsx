import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PostProjectForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    duration: "",
    deadline: "",
    skillsRequired: [],
    experienceLevel: "",
  });

  const [skill, setSkill] = useState("");

  const handleAddSkill = () => {
    if (!skill) return;

    //@ts-ignore
    setInput((input) => ({
      ...input,
      skillsRequired: [...input.skillsRequired, skill],
    }));
    setSkill("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const res = await axios.post(`${BACKEND_URL}/api/v1/client`, input, {
          withCredentials : true,
        })

        if(res?.data?.success){
          message.success(res?.data?.message || 'Project posted successfully');
          navigate('/dashboard');
        }
    } catch (error) {
      if(axios.isAxiosError(error)){
        console.error(error);
        message.error(error?.response?.data?.message);
      }
      else{
        console.error(error);
        message.error("Internal Server Error.");
      }
    }
  };
  return (
    <div className="w-[70%] mx-auto py-6">
      <h1 className="text-2xl font-semibold">Post a New Project</h1>
      <p className="mt-1 text-sm">
        Fill in the details below to post your project and find the perfect
        freelancer
      </p>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="bg-black-200 rounded-lg p-6 text-white">
          <h3 className="text-xl mb-4">Basic Information</h3>
          <label className="text-sm opacity-80">Project Title</label>
          <Input
            classname="w-full bg-[#404040] border border-gray-700 text-gray-300 mt-1 placeholder:text-sm mb-4"
            placeholder="Enter project title"
            name="title"
            value={input.title}
            onChange={handleInputChange}
          />
          <label htmlFor="category" className="text-sm opacity-80">
            Project Category
          </label>
          <div className="mb-5 mt-1">
            <select
              id="category"
              className="bg-[#404040] border border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full rounded-lg px-3 py-2 text-gray-300"
              name="category"
              value={input.category}
              onChange={handleInputChange}
            >
              <option value="student" selected>
                Select Category
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Design">Design</option>
              <option value="Writng">Writng</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <label className="text-sm opacity-80">Project Description</label>{" "}
          <br />
          <textarea
            className="w-full rounded-lg bg-[#404040] border border-gray-700 text-gray-300 mt-1 placeholder:text-sm mb-4 p-4"
            rows={4}
            placeholder="Describe your project in detail"
            name="description"
            value={input.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="bg-black-200 rounded-lg p-6 text-white mt-6">
          <h3 className="text-xl mb-4">Budget and Timeline</h3>

          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="text-sm opacity-80">Budget Range</label>
              <Input
                classname="w-full bg-[#404040] border border-gray-700 text-gray-300 mt-1 placeholder:text-sm mb-4"
                placeholder="Enter your budget"
                name="budget"
                value={input.budget}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1">
              <label className="text-sm opacity-80">
                Project Duration (in days)
              </label>
              <Input
                classname="w-full bg-[#404040] border border-gray-700 text-gray-300 mt-1 placeholder:text-sm mb-4"
                placeholder="Enter project durtion (in days)"
                name="duration"
                value={input.duration}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <label className="text-sm opacity-80">Project Deadline</label>
          <input
            type="date"
            className="w-full rounded-lg p-2 bg-[#404040] border border-gray-700 text-gray-300 mt-1 placeholder:text-sm mb-4"
            value={input.deadline}
            name="deadline"
            onChange={handleInputChange}
          />
        </div>
        <div className="bg-black-200 rounded-lg p-6 text-white mt-6">
          <h3 className="text-xl mb-4">Skills and Requirements</h3>
          <label className="text-sm opacity-80">Required skills</label> <br />
          <div className="flex flex-wrap">
            {input?.skillsRequired?.map((skill) => (
              <span className="bg-blue-950 mr-1 rounded-full px-3 text-blue-600 text-sm py-[2px] m-1">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-5 mb-5 mt-1">
            <div className="w-[80%]">
              <Input
                classname="px-1 w-full bg-[#404040] border border-gray-700 text-gray-300 placeholder:text-sm"
                placeholder="Enter skill and press add skill"
                onChange={(e) => setSkill(e.target.value)}
                value={skill}
              />
            </div>
            <Button
              text="Add skill"
              type="button"
              variant="primary"
              onClick={handleAddSkill}
            />
          </div>
          <label htmlFor="">Experience Level</label>
          <div className="flex gap-5 mt-2">
            <div
              className={`p-2 border text-center rounded-lg w-1/3 ${
                input.experienceLevel === "BEGINNER"
                  ? "border-blue-500"
                  : "border-gray-700"
              }`}
              onClick={() =>
                setInput((inp) => ({
                  ...inp,
                  experienceLevel: "BEGINNER",
                }))
              }
            >
              Beginner
            </div>
            <div
              className={`p-2 border text-center rounded-lg w-1/3 ${
                input.experienceLevel === "INTERMEDIATE"
                  ? "border-blue-500"
                  : "border-gray-700"
              }`}
              onClick={() =>
                setInput((inp) => ({
                  ...inp,
                  experienceLevel: "INTERMEDIATE",
                }))
              }
            >
              Intermediate
            </div>
            <div
              className={`p-2 border text-center rounded-lg w-1/3 ${
                input.experienceLevel === "EXPERT"
                  ? "border-blue-500"
                  : "border-gray-700"
              }`}
              onClick={() =>
                setInput((inp) => ({
                  ...inp,
                  experienceLevel: "EXPERT",
                }))
              }
            >
              Expert
            </div>
          </div>
        </div>

        <Button
          text="Post Project"
          type="submit"
          variant="primary"
          className="mt-4 py-3 mb-10 w-full"
        />
      </form>
    </div>
  );
};

export default PostProjectForm;
