import { GraduationCap } from "lucide-react";
import { Input } from "../ui/Input";
import { FreelancerProfile } from "../../types/types";

const Eduation = ({profile, updateProfile} : {
    profile : FreelancerProfile,
    updateProfile : (updates: Partial<FreelancerProfile>)=>void
}) => {
  console.log(profile.education);
  
  return (
    <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h2>
            {profile?.education?.map((edu: any, index: number) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Degree
                  </label>
                   <Input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => {
                    const newEducation = [...profile.education];
                    newEducation[index].degree = e.target.value;
                    updateProfile({ education: newEducation });
                  }}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Institution
                  </label>
                  <Input
                  type="text"
                    value={edu.institution}
                    onChange={(e) => {
                      const newEducation = [...profile.education];
                      newEducation[index].institution = e.target.value;
                      updateProfile({ education: newEducation });
                    }}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Year
                  </label>
                  <Input
                  type="text"
                  value={edu.startYear}
                  onChange={(e) => {
                    const newEducation = [...profile.education];
                    newEducation[index].startYear = e.target.value;
                    updateProfile({ education: newEducation });
                  }}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Year
                  </label>
                  <Input
                  type="text"
                  value={edu.endYear}
                  onChange={(e) => {
                    const newEducation = [...profile.education];
                    newEducation[index].endYear = e.target.value;
                    updateProfile({ education: newEducation });
                  }}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="text-blue-600 hover:text-blue-800"
              onClick={() =>
                updateProfile({
                  education: [
                    ...profile.education,
                    { degree: "", institution: "", startYear: "" , endYear : ""},
                  ],
                })
              }
            >
              + Add Another Education
            </button>
          </div>
  )
}

export default Eduation