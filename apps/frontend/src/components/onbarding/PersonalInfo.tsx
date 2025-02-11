import { User } from "lucide-react"
import { Input } from "../ui/Input"
import { FreelancerProfile } from "../../types/types"

const PersonalInfo = ({profile, updateProfile} : {
    profile : FreelancerProfile,
    updateProfile : (updates: Partial<FreelancerProfile>)=>void
}) => {
  return (
    <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={profile.name}
                  onChange={(e) => updateProfile({ name: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1 relative">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={profile.location}
                  onChange={(e) => updateProfile({ location: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role (Field in which you work)
              </label>
              <div className="mt-1 relative">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={profile.role}
                  onChange={(e) => updateProfile({ role: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1 px-10"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Professional Bio
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 bg-gray-50"
                rows={4}
                value={profile.about}
                onChange={(e) => updateProfile({ about: e.target.value })}
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>
  )
}

export default PersonalInfo