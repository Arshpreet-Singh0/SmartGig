import { Rate } from "antd";
import { ArrowRight } from "lucide-react";
import React from "react";

const SuccessStories = () => {
  return (
    <div className="dark:text-white px-4 bg-gray-100 dark:bg-black-200 text-[#000]">
      <h1 className="text-4xl font-bold text-center">Success Stories</h1>
      <p className="text-center mt-4 text-gray-500">
        Real stories from real clients and freelancers who found success on our
        platform
      </p>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[90%] lg:w-[70%] mx-auto gap-8 mt-12 md:mt-20 px-2 md:px-14">
        <ReviewCard
          author="Sarah Thompson"
          role="Tech Startup Founder"
          rating={5}
          review="Finding the right developers for our startup was crucial. Through this platform, we connected with exceptional talent that helped us launch our MVP in record time. The quality of work and communication exceeded our expectations."
          info1="Mobile App Development"
          info2="$25,000 Project"
        />
        <ReviewCard
          author="Michael Chen"
          role="Full Stack Developer"
          rating={5}
          review="This platform has transformed my freelancing career. The quality of clients and projects available here is outstanding. I've been able to build long-term relationships and grow my business significantly."
          info1="$150K+ Earned"
          info2="50+ Projects Completed"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full md:w-[90%] lg:w-[70%] mx-auto gap-8 mt-12 md:mt-16 px-2 md:px-14">
        <Card heading="$100M+" text="Paid to Freelancers" />
        <Card heading="95%" text="Client Satisfaction" />
        <Card heading="50K+" text="Active Freelancers" />
        <Card heading="10K+" text="Completed Projects" />
      </div>

      {/* Read More Section */}
      <h3 className="flex items-center justify-center mt-10 text-blue-600 cursor-pointer hover:underline">
        Read More Success Stories <ArrowRight className="ml-2" width={18} />
      </h3>

      <div className="py-16"></div>
    </div>
  );
};

export default SuccessStories;

interface props {
  author: string;
  role: string;
  rating: number;
  review: string;
  info1: string;
  info2: string;
}

const ReviewCard: React.FC<props> = ({
  author,
  role,
  rating,
  review,
  info1,
  info2,
}) => {
  return (
    <div className="rounded-lg p-6 shadow-md dark:bg-black-100">
      <div className="flex gap-4">
        <div>
          <img
            src="https://avatar.iran.liara.run/public"
            alt=""
            className="w-16 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-lg">{author}</h1>
          <p className="text-sm dark:text-gray-500">{role}</p>
          <Rate value={rating} className="text-sm" />
        </div>
      </div>
      <div>
        <p className="text-md dark:text-gray-300 p-4">"{review}"</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 text-gray-500 text-sm">
        <li>{info1}</li>
        <li>{info2}</li>
      </div>
    </div>
  );
};

interface cardProps {
  heading: string;
  text: string;
}
const Card: React.FC<cardProps> = ({ heading, text }) => {
  return (
    <div className="p-4 rounded-lg text-center shadow-md dark:bg-black-100">
      <h1 className="text-2xl md:text-3xl text-blue-600 font-semibold">
        {heading}
      </h1>
      <p className="text-gray-500 mt-2">{text}</p>
    </div>
  );
};
