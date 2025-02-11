import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ClientProfile } from "../../../types/types";
import CompanyInfo from "./CompanyInfo";
import Communication from "./Communication";
import axios from "axios";
import { BACKEND_URL } from "../../../Congfig";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const initialProfile: ClientProfile = {
  name: "",
  companyName: "",
  position: "",
  location: "",
  industry: "",
  companySize: "small",
  website: "",
  projectDescription: "",
  projectType: "not-sure",
  estimatedDuration: "",
  requiredSkills: [],
  budget: {
    min: 0,
    max: 0,
  },
  startDate: "",
  preferredCommunication: "email",
  timezone: "",
  workingHours: {
    start: "09:00",
    end: "17:00",
  },
};

const ClientOnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<ClientProfile>(initialProfile);
  const navigate = useNavigate();

  const updateProfile = (updates: Partial<ClientProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CompanyInfo profile={profile} updateProfile={updateProfile}/>
        );
      case 2:
        return (
          <Communication profile={profile} updateProfile={updateProfile}/>
        );
    }
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const res = await axios.patch(`${BACKEND_URL}/api/v1/user/client/update-profile`, profile, {
            withCredentials : true,
        });

        if(res?.data?.success){
            message.success(res?.data?.message);
            navigate('/dashboard');
        }
    } catch (error) {
        console.log(error);
        
        if(axios.isAxiosError(error)){
            message.error(error?.response?.data?.message);
        }
        else{
            message.error("Something went wrong.")
        }
        
    }
    
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Client Registration
            </h1>
            <p className="mt-2 text-gray-600">
              Tell us about your company and project needs
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[
                "Company Info",
                "Communication",
              ].map((label, index) => (
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
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${step==1 ? '15' : "100"}%` }}
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
                {step < 2 ? (
                  <button
                  type="button" // Prevents form submission
                  onClick={handleNext}
                  className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
                
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    onClick={handleSubmit}
                  >
                    Complete Registration
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOnboardingForm;
