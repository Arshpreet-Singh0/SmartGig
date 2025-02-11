import { Rate } from "antd";
import { ArrowRight, Clipboard, PersonStanding } from "lucide-react";

const MarketPreview = () => {
  return (
    <div className="text-white bg-gray-100 dark:bg-black-200">
      <h1 className="text-4xl font-bold text-center text-[#000] dark:text-white">Marketplace Preview</h1>
      <p className="text-center mt-4 text-gray-500">
        Discover top projects and talented freelancers in our diverse
        marketplace
      </p>
      <div className="flex flex-wrap justify-center gap-8 w-full lg:w-[70%] h-auto mx-auto px-6 lg:px-14 mt-12">
        <div className="w-full lg:w-1/2 h-full border dark:border-gray-700 rounded-lg">
          <FeaturedProjects />
        </div>
        <div className="w-full lg:flex-1 border dark:border-gray-600 rounded-lg">
          <TopFreelancers />
        </div>
      </div>

      <h2 className="flex items-center justify-center text-blue-600 mt-10">
        Explore More <ArrowRight className="ml-2" width={18} />
      </h2>

      <div className="py-16"></div>
    </div>
  );
};

export default MarketPreview;

const FeaturedProjects = () => {
  return (
    <div className="h-full w-full p-6 bg-gray-50 rounded-lg text-[#000] dark:text-white dark:bg-black-200 shadow-md">
      <h1 className="flex items-center text-xl">
        <Clipboard className="text-blue-600 mr-2" /> Featured Projects
      </h1>

      <div className="border border-gray-700 mt-5 p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <h3>Mobile App Development</h3>
          <div className="bg-gray-200 dark:bg-[#282848] px-4 py-1 rounded-full">
            <p className="text-sm">Mobile</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Looking for experienced React Native developer
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Budget: $5000 &nbsp; Duration: 2 months
        </p>
      </div>
      <div className="border border-gray-700 mt-5 p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <h3>Website Redesign</h3>
          <div className="bg-gray-200 dark:bg-[#282848] px-4 py-1 rounded-full">
            <p className="text-sm">Web</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          E-commerce website needs modern UI/UX redesign
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Budget: $3000 &nbsp; Duration: 1 month
        </p>
      </div>
    </div>
  );
};

const TopFreelancers = () => {
  return (
    <div className="h-full w-full p-6 bg-gray-50 text-[#000] dark:text-white dark:bg-black-200 rounded-lg shadow-md">
      <h1 className="flex items-center text-xl">
        <PersonStanding className="text-blue-600 mr-2" /> Top Freelancers
      </h1>

      <div className="flex flex-wrap items-center border border-gray-700 mt-5 p-3 rounded-lg">
        <div className="w-16 h-[5rem] flex justify-center items-center">
          <img
            src="https://avatar.iran.liara.run/public"
            alt=""
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="mt-2">Sarah Johnson</h2>
          <p className="text-gray-500 text-sm">Full Stack Developer</p>
          <p className="text-sm text-gray-500">
            <Rate value={5} className="text-sm" /> &nbsp; (4.9)
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center border border-gray-700 mt-5 p-3 rounded-lg">
        <div className="w-16 h-[5rem] flex justify-center items-center">
          <img
            src="https://avatar.iran.liara.run/public"
            alt=""
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="mt-2">Michael Chen</h2>
          <p className="text-gray-500 text-sm">UI/UX Designer</p>
          <p className="text-sm text-gray-500">
            <Rate value={5} className="text-sm" /> &nbsp; (4.8)
          </p>
        </div>
      </div>
    </div>
  );
};
