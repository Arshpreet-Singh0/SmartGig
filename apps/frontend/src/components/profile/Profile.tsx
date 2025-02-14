import React, { useEffect, useState } from "react";
import {
  Star,
  MapPin,
  Clock,
  CheckCircle,
  DollarSign,
  Heart,
  Share2,
  Languages,
  GraduationCap,
  Calendar,
  X,
  Edit3,
  Camera,
} from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../../Config";
import { useAppSelector } from "../../hooks/hook";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";

interface Education {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
}
interface Profile {
  name: string;
  role: string;
  location: string;
  timezone: string;
  hourlyRate: string;
  about: string;
  skills: string[];
  education: Education[];
}
const languages = [
  { language: "English", level: "Native" },
  { language: "Spanish", level: "Professional" },
];
function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: "",
    role: "",
    location: "",
    timezone: "",
    hourlyRate: "",
    about: "",
    skills: [],
    education: [],
  });
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const { user } = useAppSelector((store) => store.auth);
  useEffect(() => {
    // if(!isUserExist) navigate(`/signin?next=profile`);

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/${id}`);

        if (res?.data?.success) {
          setProfile(res?.data?.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would make an API call here
    setIsEditing(false);
  };

  if (!loading && profile == null) {
    return <div>Profile not found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Profile Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                  alt="Profile"
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {profile?.name}
                    </h1>
                    <p className="text-lg text-gray-600 mt-1">
                      {profile?.role}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {profile?.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {profile?.timezone}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1 text-blue-500" />
                        Verified
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex gap-3">
                    {user && user?.id===id && <button
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                      <Edit3 className="w-4 h-4" />
                      Edit Profile
                    </button>}
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      Hire Me
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Heart className="w-6 h-6" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      ${profile?.hourlyRate}
                    </div>
                    <div className="text-sm text-gray-600">Hourly Rate</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Job Success</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">156</div>
                    <div className="text-sm text-gray-600">Total Jobs</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      4,521
                    </div>
                    <div className="text-sm text-gray-600">Hours Worked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">
                  {profile?.about}
                </p>
              </div>

              {/* Services */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Web Application Development",
                      price: "From $2,000",
                      description:
                        "Full-stack web applications with React and Node.js",
                    },
                    {
                      title: "API Development",
                      price: "From $1,500",
                      description:
                        "RESTful APIs and microservices architecture",
                    },
                    {
                      title: "Code Review & Optimization",
                      price: "$90/hour",
                      description:
                        "Performance optimization and best practices",
                    },
                    {
                      title: "Technical Consultation",
                      price: "$120/hour",
                      description:
                        "Architecture planning and technical guidance",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        <span className="text-blue-600 font-medium">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work History */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Work History</h2>
                <div className="space-y-6">
                  {[1, 2, 3].map((job) => (
                    <div
                      key={job}
                      className="border-b last:border-b-0 pb-6 last:pb-0"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            E-commerce Platform Development
                          </h3>
                          <div className="flex items-center mt-1">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-current"
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              5.0
                            </span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">$4,500</span>
                      </div>
                      <p className="text-gray-600 mt-2">
                        "Alex delivered an outstanding e-commerce solution. His
                        expertise in React and Node.js was evident throughout
                        the project. Communication was excellent, and he went
                        above and beyond to ensure everything worked perfectly."
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Completed Aug 2023
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          Fixed Price
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Skills */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {profile?.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">
                  Education & Certifications
                </h2>
                <div className="space-y-4">
                  {profile?.education?.map((edu) => (
                    <>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-gray-600 mr-2" />
                        <h3 className="font-semibold">{edu.degree}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {edu.institution}, {edu.startYear}-{edu.endYear}
                      </p>
                    </>
                  ))}
                  <div></div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Languages</h2>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Languages className="w-5 h-5 text-gray-600 mr-2" />
                        <span>{lang.language}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 bg-white">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-md">
              <div className="p-6 border-b sticky top-0 bg-white z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Edit Profile</h2>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <form onSubmit={handleProfileUpdate} className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile?.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Professional Title
                    </label>
                    <input
                      type="text"
                      value={profile.role}
                      onChange={(e) =>
                        setProfile({ ...profile, role: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) =>
                        setProfile({ ...profile, location: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hourly Rate (USD)
                    </label>
                    <input
                      type="number"
                      value={profile.hourlyRate}
                      onChange={(e) =>
                        setProfile({ ...profile, hourlyRate: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      About
                    </label>
                    <textarea
                      value={profile.about}
                      onChange={(e) =>
                        setProfile({ ...profile, about: e.target.value })
                      }
                      rows={4}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Skills (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={profile.skills.join(", ")}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          skills: e.target.value
                            .split(",")
                            .map((s) => s.trim()),
                        })
                      }
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
