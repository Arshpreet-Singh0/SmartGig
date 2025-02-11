import { useState, useEffect, useRef } from "react";
import { LogOut, Search, User, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import { useAppSelector } from "../../hooks/hook";
import { isUserLoggedIn } from "../../redux/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const isUserExist = useAppSelector(isUserLoggedIn);
  const { user } = useAppSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

    const { theme } = useAppSelector(store=>store.theme);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      //@ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-[#171717] ext-black dark:text-white shadow-md">
      {/* Navbar */}
      <div className="flex items-center justify-between h-20 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center ">
          <img
            src={theme=="light" ? "https://res.cloudinary.com/djusmuols/image/upload/SmartGig__1_-removebg-preview_tu6unn.png" : "https://res.cloudinary.com/djusmuols/image/upload/SmartGig__3_-removebg-preview_szswyw.png"}
            alt="logo"
            className="w h-52 "
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-black dark:text-white">
            {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/projects">Project</Link>
          </li>
          {isUserExist ? (
            <>
              <li className="hover:text-blue-600">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <div ref={dropdownRef} className="relative">
                  <img
                    onClick={toggleDropdown}
                    src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                    alt="profile"
                    className="h-12 rounded-full cursor-pointer"
                  />
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white">
                      <div className="p-2">
                        <h1 className="text-lg text-center">{user?.name}</h1>
                      </div>
                      <div className="border-t border-gray-200">
                        <h2 className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                          <User className="mr-2" />
                          <Link to="/profile">Profile</Link>
                        </h2>
                        <h2 className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                          <LogOut className="mr-2" />
                          Logout
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-blue-600">
                <Link to="/signin">Sign in</Link>
              </li>
              <Button
                text="Join"
                variant="outline"
                className="hover:bg-blue-100 duration-300"
                onClick={() => navigate("/signup")}
              />
            </>
          )}
          <ThemeToggle />
        </ul>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-[#171717] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 shadow-lg md:hidden`}
      >
        <ul className="flex flex-col items-start p-6 gap-4 text-lg">
          <li className="hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/projects">Project</Link>
          </li>
          {isUserExist ? (
            <>
              <li className="hover:text-blue-600">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                  alt="profile"
                  className="h-10 rounded-full"
                />
                {user?.name}
              </li>
              <li className="hover:text-blue-600">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="hover:text-blue-600">
                <LogOut className="inline-block mr-2" />
                Logout
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-blue-600">
                <Link to="/signin">Sign in</Link>
              </li>
              <Button
                text="Join"
                variant="outline"
                className="hover:bg-blue-100 duration-300 w-full"
                onClick={() => navigate("/signup")}
              />
            </>
          )}
          <ThemeToggle />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
