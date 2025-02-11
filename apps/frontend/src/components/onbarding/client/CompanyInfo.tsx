import { Input } from '../../ui/Input'
import { Building2 } from 'lucide-react'
import { ClientProfile } from '../../../types/types'

const CompanyInfo = ({profile, updateProfile} : {
    profile : ClientProfile,
    updateProfile : (updates: Partial<ClientProfile>)=>void;
}) => {
  return (
    <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Company Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  value={profile.name}
                  onChange={(e) => updateProfile({ name: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <Input
                  type="text"
                  value={profile.companyName}
                onChange={(e) => updateProfile({ companyName: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Position
              </label>
              <Input
                  type="text"
                  placeholder="e.g (CEO, SDE)"
                  value={profile.position}
                    onChange={(e) => updateProfile({ position: e.target.value })}
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <Input
                  type="text"
                  value={profile.industry}
                onChange={(e) => updateProfile({ industry: e.target.value })}
                placeholder="e.g., Technology, Healthcare, Finance"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Size
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 bg-gray-50"
                value={profile.companySize}
                onChange={(e) =>
                  updateProfile({
                    companySize: e.target.value as ClientProfile["companySize"],
                  })
                }
              >
                <option value="startup">Startup (1-10 employees)</option>
                <option value="small">Small (11-50 employees)</option>
                <option value="medium">Medium (51-200 employees)</option>
                <option value="large">Large (201-1000 employees)</option>
                <option value="enterprise">Enterprise (1000+ employees)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Website
              </label>
              <Input
                  type="text"
                  value={profile.website}
                onChange={(e) => updateProfile({ website: e.target.value })}
                placeholder="https://example.com"
                  classname="bg-gray-50 dark:bg-[#404040] border dark:border-gray-700 focus:ring-gray-700 focus:border-blue-500 w-full dark:text-gray-300 mt-1"
                />
            </div>
          </div>
  )
}

export default CompanyInfo