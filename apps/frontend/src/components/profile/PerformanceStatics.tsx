import { Progress, Rate } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Clock4, MessageSquareMore, Star } from "lucide-react";

const PerformanceStatics = ({profile}:any) => {
  return (
    <div className="p-8 bg-gray-100 w-[80%] mx-auto">
      <div className="py-5">
        <h1 className="text-2xl font-bold ">Performance Statistics</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-5 border border-gray-200 pb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Project Completion</p>
              <p className="text-3xl font-semibold">{profile?.successRate ? profile?.successRate : "0"}%</p>
            </div>
            <div className="flex items-center justify-center w-9 h-9 bg-green-100 rounded-full">
              <CheckCircleOutlined className="text-green-600 font-bold text-xl" />
            </div>
          </div>
          <div>
          </div>
          <Progress
            percent={profile?.successRate}
            status="active"
            strokeColor={"#21C55D"}
            showInfo={false}
            className="mt-3"
          />
        </div>
        <div className="bg-white rounded-lg p-5 border border-gray-200 pb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Project Completion</p>
              <p className="text-3xl font-semibold">{profile?.successRate ? "" : "0"}%</p>
            </div>
            <div className="flex items-center justify-center w-9 h-9 bg-blue-200 rounded-full">
              <Clock4 className="text-blue-100 font-bold text-xl" />
            </div>
          </div>
          <div>
          </div>
          <Progress
            percent={profile?.successRate}
            status="active"
            strokeColor={"#3B81F6"}
            showInfo={false}
            className="mt-3"
          />
        </div>
        <div className="bg-white rounded-lg p-5 border border-gray-200 pb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
              <p className="text-3xl font-semibold">{profile?.rating}/5</p>
            </div>
            <div className="flex items-center justify-center w-9 h-9 bg-yellow-200 rounded-full">
              <Star className="text-yellow-600 font-bold text-xl" />
            </div>
          </div>
          <div>
          </div>
          <p className="flex items-center text-gray-500 mt-3">
          <Rate allowHalf defaultValue={profile?.rating} />
          ( {profile.projectsCompleted} reviews )

          </p>
        </div>
        <div className="bg-white rounded-lg p-5 border border-gray-200 pb-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Response Rate</p>
              <p className="text-3xl font-semibold">100%</p>
            </div>
            <div className="flex items-center justify-center w-9 h-9 bg-purple-100 rounded-full">
              <MessageSquareMore className="text-purple-600 font-bold text-xl" />
            </div>
          </div>
          <p className="text-gray-500 mt-3">Response Time : {profile?.responseTime} hour</p>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStatics;