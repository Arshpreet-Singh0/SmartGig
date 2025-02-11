import { StarFilled } from "@ant-design/icons";
import { Button } from "../ui/Button";
import { Clock4, MapPin } from "lucide-react";

interface propsType {
  profile : any,
  showModal : () => void
}

const ProfileCard  = ({profile, showModal}:propsType) => {

  return (
    <>
      <div className="flex h-[17rem] bg-[#262626] p-5 ">
        <div className="flex flex-col items-center w-2/5 h-full ">
          <img
            src={profile.imageUrl}
            alt=""
            className="w-28"
          />
          <h2 className="mt-4 text-2xl text-white font-semibold">{profile.name}</h2>
          <p className="text-gray-400 ">{profile.role}</p>

          <h4 className="flex text-white mt-2">
            {" "}
            <StarFilled className="text-yellow-500 text-lg mr-2" /> {profile.rating}{" "}
            <span className="ml-2 text-gray-400">( {profile?.ratingCount} reviews )</span>
          </h4>
        </div>
        <div className="flex-1 h-full">
          <div className="flex justify-between gap-10">
            <div className="w-1/3 border border-gray-500 rounded-lg p-4">
              <h2 className="text-white text-xl">Project Completed</h2>
              <h1 className="text-white text-3xl font-semibold mt-2">{profile.projectsCompleted}</h1>
            </div>
            <div className="w-1/3 border border-gray-500 rounded-lg p-4">
              <h2 className="text-white text-xl">Success Rate</h2>
              <h1 className="text-white text-3xl font-semibold mt-2">{profile.successRate ? profile.successRate : "0"} %</h1>
            </div>
            <div className="w-1/3 border border-gray-500 rounded-lg p-4">
              <h2 className="text-white text-xl">Response Time</h2>
              <h1 className="text-white text-3xl font-semibold mt-2">{profile.responseTime}h</h1>
            </div>
          </div>
          <div className="flex gap-10 mt-8">
            <Button text="Contact me" variant="secondary" className="text-gray-200"/>
            <Button text="Download Resume" variant="outline" className="text-gray-200"/>
            <Button text="Share Profile" variant="outline" className="text-gray-200"/>
            <Button text="Edit Profile" variant="outline" className="text-gray-200" onClick={showModal}/>
          </div>
          <div className="flex gap-20 mt-5">
            <p className="flex text-gray-200"><MapPin className="mr-1" strokeWidth={2} width={20}/> {profile.location}</p>
            <p className="flex text-gray-200"><Clock4 className="mr-1 " strokeWidth={2} width={20}/> Available full time</p>
          
          </div>
        </div>
      </div>

      
    </>
  );
};

export default ProfileCard;
