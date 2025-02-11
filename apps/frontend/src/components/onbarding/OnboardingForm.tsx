import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { FreelancerProfile } from "../../types/types";
import axios from "axios";
import { BACKEND_URL } from "../../Congfig";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import ProfessionalDetails from "./ProfessionalDetails";
import Eduation from "./Eduation";
import Experience from "./Experience";

const initialProfile: FreelancerProfile = {
    name: "",
    location: "",
    role : "",
    about: "",
    skills: [],
    yearsOfExperience: 0,
    education: [{ degree: "", institution: "", startYear: "", endYear : "" }],
    experience: [
      { title: "", company: "", startDate: "", endDate: "", description: "" },
    ],
    hourlyRate: 0,
    availability: "full-time",
  };
  
const OnboardindForm = () => {

    const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<FreelancerProfile>(initialProfile);
  const naviagte = useNavigate();

  const updateProfile = (updates: Partial<FreelancerProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const handleSkillInput = (input: string) => {
    const skillsArray = input.split(",").map((skill) => skill.trim());
    updateProfile({ skills: skillsArray });
  };

  useEffect(()=>{
    const getUser = async()=>{
        
        try {
            const res = await axios.get(`${BACKEND_URL}/api/v1/user`, {
                withCredentials : true
            });
            console.log(res);
            
            if(res?.data?.success){
                setProfile(res?.data?.user);
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    getUser();
  },[]);

    const handleNext = () => setStep((prev) => Math.min(prev + 1, prev+1));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo profile={profile} updateProfile={updateProfile}/>
        );

      case 2:
        return (
          <ProfessionalDetails profile={profile} updateProfile={updateProfile} handleSkillInput={handleSkillInput}/>
        );

      case 3:
        return (
          <Eduation profile={profile} updateProfile={updateProfile}/>
        );

      case 4:
        return (
          <Experience profile={profile} updateProfile={updateProfile}/>
        );
    }
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
        const res = await axios.patch(`${BACKEND_URL}/api/v1/user/update-profile`, profile, {
            withCredentials : true,
        })

        if(res?.data?.success){
            message.success(res?.data?.message);
            naviagte('/dashboard')
        }
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Complete Your Profile
                </h1>
                <p className="mt-2 text-gray-600">
                  Let's get you set up as a freelancer
                </p>
              </div>
    
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {["Personal Info", "Professional", "Education", "Experience"].map(
                    (label, index) => (
                      <div
                        key={label}
                        className={`text-sm ${
                          step > index + 1
                            ? "text-blue-600"
                            : step === index + 1
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      >
                        {label}
                      </div>
                    )
                  )}
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${((step - 1) / 3) * 100}%` }}
                  />
                </div>
              </div>
    
              <div>
                {renderStep()}
    
                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Back
                    </button>
                  )}
                  <div className="ml-auto">
                    {step == 4 ? (
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Complete Profile
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Next
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default OnboardindForm