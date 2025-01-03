import {
  BriefcaseBusiness,
  ChevronRight,
  Clipboard,
  PersonStanding,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/Button";

const HowItWorks = () => {
  return (
    <div className="text-white pb-20">
      <h1 className="text-4xl text-center font-semibold">How It Works</h1>
      <p className="text-gray-400 text-md text-center mt-4">
        Simple steps to start your journey with FreelanceHub - whether you're
        hiring or looking <br /> for work.
      </p>

      <div className="flex justify-between w-[70%] h-[15rem] mx-auto mt-10 px-14">
        <Card
          icon={<Clipboard className="text-[#6366F1]" />}
          heading="Post a Project"
          description="Describe your project in detail, including requirements, timeline, and budget."
          visible
        />
        <Card
          icon={<BriefcaseBusiness className="text-[#6366F1]" />}
          heading="Submit Proposals"
          description="Browse available projects and submit your best proposal to win the work."
          visible
        />
        <Card
          icon={<PersonStanding className="text-[#6366F1]" />}
          heading="Collaborate
"
          description="Work together efficiently with secure payments and communication tools."
          visible
        />
      </div>

      <div className="flex justify-center mt-12">
        <Button
          text="Get Started Now"
          variant="secondary"
          className="py-4 px-8"
        />
      </div>
    </div>
  );
};

export default HowItWorks;

interface props {
  icon: React.ReactElement;
  heading: string;
  description: string;
  visible?: boolean;
}
export const Card: React.FC<props> = ({
  icon,
  heading,
  description,
  visible,
}) => {
  return (
    <div>
      <div className={`rounded-lg shadow-md p-6 w-[21.5rem] ${visible ? 'h-[15rem]' : 'h-[14rem]'} border border-gray-700`}>
        <div className="flex justify-center items-center rounded-lg bg-[#282848] h-12 w-12 ">
          {icon}
        </div>

        <h3 className="text-xl mt-3">{heading}</h3>
        <p className="mt-4 text-gray-400">{description}</p>
        {visible && (
          <p className="flex items-center mt-4 text-sm text-[#6366F1]">
            Learn More <ChevronRight className="ml-2" width={18} />
          </p>
        )}
      </div>
    </div>
  );
};
