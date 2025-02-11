import {
  ChartColumnDecreasing,
  Clock4,
  FileText,
  MessagesSquare,
  PersonStanding,
  ShieldCheck,
} from "lucide-react";
import { Card } from "./HowItWorks";
import { Button } from "../ui/Button";

const PlatformFeatures = () => {
  return (
    <div className="dark:text-white px-4 bg-gray-100 dark:bg-black-200 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Platform Features
      </h1>
      <p className="text-center mt-4 text-gray-4500">
        Powerful tools and features to make your freelancing experience seamless
        and <br className="hidden md:block" /> successful
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full md:w-[90%] lg:w-[70%] mx-auto gap-8 mt-12 md:mt-20 px-2 md:px-14">
        <Card
          icon={<ShieldCheck className="text-blue-600" />}
          heading="Secure Payments"
          description="Protected payments and milestone-based release system for peace of mind"
        />
        <Card
          icon={<PersonStanding className="text-blue-600" />}
          heading="Smart Matching"
          description="AI-powered matching system to connect you with the perfect clients or freelancers"
        />
        <Card
          icon={<Clock4 className="text-blue-600" />}
          heading="Time Tracking"
          description="Built-in time tracking tools for accurate billing and project management"
        />
        <Card
          icon={<MessagesSquare className="text-blue-600" />}
          heading="Collaboration Tools"
          description="Integrated chat, file sharing, and project management tools for seamless teamwork"
        />
        <Card
          icon={<FileText className="text-blue-600" />}
          heading="Contract Management"
          description="Professional contract templates and e-signature capabilities for legal protection"
        />
        <Card
          icon={<ChartColumnDecreasing className="text-blue-600" />}
          heading="Analytics Dashboard"
          description="Comprehensive analytics and reporting tools to track your success"
        />
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col md:flex-row justify-between items-center dark:bg-black-100 w-full md:w-[90%] lg:w-[64%] mx-auto mt-12 md:mt-20 rounded-lg p-6 md:p-8 gap-6 md:gap-0 bg-gray-50 shadow-md">
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold">
            Ready to experience these features?
          </h1>
          <p className="text-gray-500 mt-2">
            Join thousands of successful freelancers and clients
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <Button text="Start Hiring" variant="secondary" className="py-3 px-6" />
          <Button
            text="Start Freelancing"
            variant="outline"
            className="py-3 px-6"
          />
        </div>
      </div>

      <div className="py-16"></div>
    </div>
  );
};

export default PlatformFeatures;
