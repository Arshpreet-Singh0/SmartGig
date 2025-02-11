import { Clock } from "lucide-react"
import { Input } from "../../ui/Input"
import { ClientProfile } from "../../../types/types";

const Communication = ({profile, updateProfile} : {
    profile : ClientProfile,
    updateProfile : (updates: Partial<ClientProfile>)=>void;
}) => {
  return (
    <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Communication Preferences
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Communication Method
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 bg-gray-50"
                value={profile.preferredCommunication}
                onChange={(e) =>
                  updateProfile({
                    preferredCommunication: e.target
                      .value as ClientProfile["preferredCommunication"],
                  })
                }
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="slack">Slack</option>
                <option value="teams">Microsoft Teams</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Timezone
              </label>
              <Input
                  type="text"
                  value={profile.timezone}
                  onChange={(e) => updateProfile({ timezone: e.target.value })}
                  placeholder="e.g., UTC-5, EST"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Working Hours Start
                </label>
                <Input
                  type="text"
                  value={profile?.workingHours?.start}
                  onChange={(e) =>
                    updateProfile({
                      workingHours: {
                        ...profile.workingHours,
                        start: e.target.value,
                      },
                    })
                  }
                  placeholder="e.g., UTC-5, EST"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Working Hours End
                </label>
                <Input
                  type="text"
                  value={profile?.workingHours?.end}
                  onChange={(e) =>
                    updateProfile({
                      workingHours: {
                        ...profile.workingHours,
                        end: e.target.value,
                      },
                    })
                  }
                  placeholder="e.g., UTC-5, EST"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
              </div>
            </div>
          </div>
  )
}

export default Communication