import { Briefcase } from "lucide-react"
import { FreelancerProfile } from "../../types/types"
import { Input } from "../ui/Input"

const ProfessionalDetails = ({profile, updateProfile, handleSkillInput} : {
    profile : FreelancerProfile,
    updateProfile : (updates: Partial<FreelancerProfile>)=>void;
    handleSkillInput : (input : string)=>void;
}) => {
  return (
    <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Professional Details
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills (comma-separated)
              </label>
              <Input
                  type="text"
                  value={profile?.skills?.join(", ")}
                  onChange={(e) => handleSkillInput(e.target.value)}
                  placeholder="React, TypeScript, Node.js"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Years of Experience
              </label>
              <Input
                  type="number"
                  value={profile.yearsOfExperience}
                  onChange={(e) =>
                    updateProfile({ yearsOfExperience: parseInt(e.target.value) })
                  }
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hourly Rate ($)
              </label>
              <Input
                  type="number"
                  value={profile.hourlyRate}
                  onChange={(e) =>
                    updateProfile({ hourlyRate: parseInt(e.target.value) })
                  }
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Availability
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                value={profile.availability}
                onChange={(e) =>
                  updateProfile({
                    availability: e.target
                      .value as FreelancerProfile["availability"],
                  })
                }
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
  )
}

export default ProfessionalDetails