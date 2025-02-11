import { Facebook, Instagram, Mail, MapPin, PhoneCall, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-10 border-t border-gray-700  bg-gray-100 text-[#000] dark:bg-black-200">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl font-bold mb-3 text-blue-600">Smart Gig</h1>
            <p className="dark:text-gray-400 text-center lg:text-left">
              Powerful Freelance Marketplace System with ability to connect
              Freelancers & Clients seamlessly.
            </p>
            <div className="flex gap-5 mt-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-blue-600 transition" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-600 transition" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-600 transition" />
            </div>
          </div>

          {/* For Clients */}
          <div className="flex flex-col items-center lg:items-start text text-[#000] dark:text-white">
            <h2 className="text-xl font-semibold mb-5 ">For Clients</h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 transition cursor-pointer dark:text-gray-400">Find Freelancers</li>
              <li className="hover:text-blue-600 transition cursor-pointer dark:text-gray-400">Post Project</li>
              <li className="hover:text-blue-600 transition cursor-pointer dark:text-gray-400">Refund Policy</li>
              <li className="hover:text-blue-600 transition cursor-pointer dark:text-gray-400">Privacy Policy</li>
            </ul>
          </div>

          {/* For Freelancers */}
          <div className="flex flex-col items-center lg:items-start text-[#000] dark:text-white">
            <h2 className="text-xl font-semibold mb-5 ">For Freelancers</h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-600 transition cursor-pointer dark:text-gray-400">Find Work</li>
              <li className="hover:text-blue-600 transition cursor-pointer dark:text-gray-400">Create Account</li>
              <li className="hover:text-blue-600 transition cursor-pointer dark:text-gray-400">Login</li>
              <li className="hover:text-blue-600 transition cursor-pointer dark:text-gray-400">Help & Support</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center lg:items-start text-[#000] dark:text-white">
            <h2 className="text-xl font-semibold mb-5">Contact Us</h2>
            <div className="space-y-4">
              <p className="flex items-center dark:text-gray-400">
                <MapPin className="w-5 h-5 mr-3" /> India
              </p>
              <p className="flex items-center dark:text-gray-400">
                <PhoneCall className="w-5 h-5 mr-3" /> +91 8888800000
              </p>
              <p className="flex items-center dark:text-gray-400">
                <Mail className="w-5 h-5 mr-3" /> arshsomal100@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-5 text-center text-sm text-gray-500 border-gray-700">
          &copy; {new Date().getFullYear()} Smart Gig. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
