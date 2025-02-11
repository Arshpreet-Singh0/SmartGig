import { Rate } from "antd";
import { BookOpen, CircleDollarSign, MessagesSquare, Zap } from "lucide-react";
import { Button } from "../ui/Button";

const Community = () => {
  return (
    <div className="bg-gray-100 dark:bg-black-200">

    <div className="dark:text-white w-[90%] mx-auto px-4 md:w-[70%] ">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
            Join Our Global Community of Freelancers
          </h1>

          <p className="mt-4 text-gray-500 text-center md:text-left">
            Connect with talented professionals, share knowledge, and grow your
            network in our thriving community.
          </p>

          <div className="flex items-center justify-center md:justify-start mt-5">
            <div className="flex items-center relative">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="icon"
                className="w-10 h-10 z-10 border-l border-black-100 rounded-full"
              />
              <img
                src="https://avatar.iran.liara.run/public"
                alt="icon"
                className="w-10 h-10 z-20 -ml-2 border-l-2 border-black-100 rounded-full"
              />
              <img
                src="https://avatar.iran.liara.run/public"
                alt="icon"
                className="w-10 h-10 z-30 -ml-2 border-l-2 border-black-100 rounded-full"
              />
            </div>
            <p className="text-gray-500 ml-4">Join 50,000+ members</p>
          </div>

          <div className="flex justify-center md:justify-start mt-4">
            <Rate value={5} className="text-md" allowHalf />
            <p className="text-gray-500 ml-4">4.9/5 average rating</p>
          </div>

          <div>
            <h3 className="text-lg mt-4 text-center md:text-left">Community Benefits:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <p className="flex">
                <CircleDollarSign className=" text-blue-600 mr-2" /> Networking
                Events
              </p>
              <p className="flex">
                <BookOpen className=" text-blue-600 mr-2" /> Skill Workshops
              </p>
              <p className="flex">
                <MessagesSquare className=" text-blue-600 mr-2" /> Discussion
                Forums
              </p>
              <p className="flex">
                <Zap className=" text-blue-600 mr-2" /> Exclusive Resources
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center md:justify-start">
            <Button
              text="Join Community"
              variant="primary"
              className="py-3 px-6 font-extrabold shadow"
            />
            <Button text="Learn More" variant="outline" className="py-3 px-8 font-extrabold shadow" />
          </div>
        </div>

        <div className="flex-1 p-4 md:p-10 mt-10 md:mt-0">
          <div className="h-full w-full rounded-lg dark:bg-[#1E1E1E] p-6 shadow-md">
            <div className="flex gap-4">
              <img
                src="https://avatar.iran.liara.run/public"
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-lg">Latest Community Activity</h3>
                <p className="text-gray-500">Active discussions and events</p>
              </div>
            </div>
            <div className="shadow-md p-4 rounded-lg mt-5 bg-gray-50 dark:bg-black-200">
              <div className="flex items-center gap-4">
                <span className="bg-[#292951] text-blue-600 px-2 py-1 rounded text-sm">
                  Event
                </span>
                <p className="text-gray-500">Tomorrow, 2:00 PM</p>
              </div>
              <h3 className="px-1 mt-2">Freelancing Best Practices Workshop</h3>
              <p className="text-gray-500 text-sm px-1">
                Join us for tips on growing your freelance business
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-black-200 shadow-md p-4 rounded-lg mt-5">
              <div className="flex items-center gap-4">
                <span className="bg-[#292951] text-blue-600 px-2 py-1 rounded text-sm">
                  Discussion
                </span>
                <p className="text-gray-500">Active Now</p>
              </div>
              <h3 className="px-1 mt-2">Client Communication Strategies</h3>
              <p className="text-gray-500 text-sm px-1">
                Share your experiences and learn from others
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16"></div>
    </div>
    </div>
  );
};

export default Community;
