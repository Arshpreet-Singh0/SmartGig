import { Briefcase } from "lucide-react";
import { Input } from "../ui/Input";
import { FreelancerProfile } from "../../types/types";

const Experience = ({profile, updateProfile} : {
    profile : FreelancerProfile,
    updateProfile : (updates: Partial<FreelancerProfile>)=>void
}) => {
  return (
    <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Work Experience
            </h2>
            {profile?.experience?.map((exp: any, index: number) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Job Title
                  </label>
                  <Input
                  type="text"
                  value={exp.title}
                  onChange={(e) => {
                    const newExperience = [...profile.experience];
                    newExperience[index].title = e.target.value;
                    updateProfile({ experience: newExperience });
                  }}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={exp.company}
                    onChange={(e) => {
                      const newExperience = [...profile.experience];
                      newExperience[index].company = e.target.value;
                      updateProfile({ experience: newExperience });
                    }}
                  />
                  <Input
                  type="text"
                  value={exp.company}
                  onChange={(e) => {
                    const newExperience = [...profile.experience];
                    newExperience[index].company = e.target.value;
                    updateProfile({ experience: newExperience });
                  }}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <Input
                  type="date"
                      value={exp.startDate}
                      onChange={(e) => {
                        const newExperience = [...profile.experience];
                        newExperience[index].startDate = e.target.value;
                        updateProfile({ experience: newExperience });
                      }}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <Input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => {
                    const newExperience = [...profile.experience];
                    newExperience[index].endDate = e.target.value;
                    updateProfile({ experience: newExperience });
                  }}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={3}
                    value={exp.description}
                    onChange={(e) => {
                      const newExperience = [...profile.experience];
                      newExperience[index].description = e.target.value;
                      updateProfile({ experience: newExperience });
                    }}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="text-blue-600 hover:text-blue-800"
              onClick={() =>
                updateProfile({
                  experience: [
                    ...profile.experience,
                    {
                      title: "",
                      company: "",
                      startDate: "",
                      endDate: "",
                      description: "",
                    },
                  ],
                })
              }
            >
              + Add Another Experience
            </button>
          </div>
  )
}

export default Experience