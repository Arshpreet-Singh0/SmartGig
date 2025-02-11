import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

interface inputType {
  email: string;
  password: string;
  name?: string;
  accountType?: string;
}

interface FormProps {
  type: "signin" | "signup";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: inputType;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Form = ({ type, onSubmit, input, onChange }: FormProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center py-20 dark:bg-black-100 bg-gray-50 w-full px-5 pb-52">
      <div className="p-8  rounded-lg bg-white dark:bg-[#262626] w-[27rem] shadow-md">
        {/* Navigation Tabs */}
        <div className="flex dark:text-gray-400 mb-5 justify-evenly border-b border-gray-700 pb-2">
          <div
            role="button"
            className={`px-2 pb-3 cursor-pointer ${
              type === "signin"
                ? "border-b-2 border-blue-600 "
                : ""
            }`}
            onClick={() => navigate("/signin")}
          >
            Login
          </div>
          <div
            role="button"
            className={`px-2 pb-3 cursor-pointer ${
              type === "signup"
                ? "border-b-2 border-blue-600 dark:text-gray-300"
                : ""
            }`}
            onClick={() => navigate("/signup")}
          >
            Register
          </div>
        </div>

        {/* Heading */}
        <h2 className="dark:text-white text-2xl font-bold text-center">
          {type === "signin" ? "Welcome back" : "Create an account"}
        </h2>
        <p className="dark:text-gray-400 text-sm mt-1 text-center">
          {type === "signin"
            ? "Sign in to your account"
            : "Join SmartGig to explore opportunities"}
        </p>

        {/* Form */}
        <form className="mt-6" onSubmit={onSubmit}>
          {type === "signup" && (
            <div className="mb-5">
              <label htmlFor="name" className="block dark:text-gray-400 mb-2 ">
                Name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                value={input.name}
                onChange={onChange}
                classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300"
              />
            </div>
          )}

          <div className="mb-5">
            <label htmlFor="email" className="block dark:text-gray-400 mb-2">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={onChange}
              classname="dark:bg-[#404040] bg-gray-50 border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block dark:text-gray-400 mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              value={input.password}
              onChange={onChange}
              classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300"
            />
          </div>

          {type === "signup" && (
            <div className="mb-5">
              <label htmlFor="accountType" className="block dark:text-gray-400 mb-2">
                Account Type
              </label>
              <select
                id="accountType"
                className="bg-gray-50 dark:bg-[#404040] border border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full rounded-lg px-3 py-2 dark:dark:text-gray-300"
                value={input.accountType}
                onChange={onChange}
                name="accountType"
              >
                <option value="student" selected>Select Account Type</option>
                <option value="FREELANCER">Freelancer</option>
                <option value="CLIENT">Client</option>
              </select>
            </div>
          )}

          {type === "signin" && (
            <div className="flex items-center justify-between dark:text-gray-400 text-sm mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-700 bg-[#404040]"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <Button
            variant="primary"
            text={type === "signin" ? "Sign In" : "Sign Up"}
            className="mt-6 w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
