import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="h-auto mx-auto px-5 py-16 text-white pb-10 bg-gray-100 dark:bg-black-200">
      <div className="flex flex-wrap w-full max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-5 lg:px-10 mb-10 lg:mb-0">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#000] dark:text-white">
              Connect with Top{" "}
              <span className="text-blue-600">Freelancers</span> & Businesses
            </h1>
            <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed">
              Find expert freelancers and quality projects in our trusted{" "}
              <br className="hidden md:block" />
              marketplace. Start collaborating today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-8">
              <Button
                text="Hire Talent"
                variant="primary"
                className="py-3 sm:py-4 px-6 sm:px-8 shadow-2xl font-extrabold"
              />
              <Button
                text="Find Work"
                variant="outline"
                className="py-3 sm:py-4 px-6 sm:px-8 text-[#000] dark:text-white shadow-2xl font-extrabold"
                onClick={() => navigate("/projects")}
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center ">
          <div className="flex justify-center items-center h-64 sm:h-80 lg:h-full w-full rounded-lg bg-[#DDDDDD]">
            {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-500 font-semibold">
              Platform Preview
            </h1> */}
            <img src="https://lemon.io/wp-content/uploads/2020/03/pic-landing-best-freelance-platf-hero@3x.jpg" className="rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
