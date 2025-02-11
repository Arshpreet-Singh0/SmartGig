import {
  FileText,
  Home,
  Menu,
  MessageSquareMore,
  Plus,
  User,
  WalletCards,
} from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "../../hooks/hook";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSlected] = useState(1);
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.auth);
  return (
    <div className="flex flex-col gap-4 bg-gray-50 dark:bg-[#262626] w-64 h-screen sticky top-0 z-10 text-[#DBDBDB] px-6 border-r dark:border-gray-700">
      <div className="flex items-center h-16">
        <h1 className="text-3xl font-semibold text-[#000] dark:text-[#DBDBDB]">
          Smart Gig
        </h1>
      </div>
      {user.accountType == "FREELANCER" ? (
        <>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
              selected == 1 ? "bg-gray-200 dark:bg-[#404040]" : ""
            } dark:hover:bg-[#404040] hover:bg-gray-200`}
            onClick={() => setSlected(1)}
          >
            <Menu className="mr-4" width={22} />
            <p className="text-sm">DashBoard</p>
          </div>
          <a href={"#projects"} className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
                selected == 2 ? "dark:bg-[#404040] bg-gray-200" : ""
              } dark:hover:bg-[#404040] hover:bg-gray-200`}
              onClick={() => setSlected(2)}
            >
              <WalletCards className="mr-4" width={22} />
              Projects
            </div>
          </a>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
              selected == 3 ? "dark:bg-[#404040] bg-gray-200" : ""
            } dark:hover:bg-[#404040] hover:bg-gray-200`}
            onClick={() => setSlected(3)}
          >
            <MessageSquareMore className="mr-4" width={22} />
            <p className="text-sm">Messages</p>
          </div>
          <a href="#Proposals" className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
                selected == 4 ? "dark:bg-[#404040] bg-gray-200" : ""
              } dark:hover:bg-[#404040] hover:bg-gray-200`}
              onClick={() => setSlected(4)}
            >
              <FileText className="mr-4" width={22} />
              Proposals
              {/* <p className="text-sm"></p> */}
            </div>
          </a>
        </>
      ) : (
        <>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
              selected == 1 ? "dark:bg-[#404040] bg-gray-200" : ""
            } dark:hover:bg-[#404040] hover:bg-gray-200`}
            onClick={() => setSlected(1)}
          >
            <Home className="mr-4" width={22} />
            <p className="text-sm">DashBoard</p>
          </div>
          <a href={"#projects"} className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
                selected == 2 ? "dark:bg-[#404040] bg-gray-200" : ""
              } dark:hover:bg-[#404040] hover:bg-gray-200`}
              onClick={() => setSlected(2)}
            >
              <FileText className="mr-4" width={22} />
              Projects
            </div>
          </a>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
              selected == 3 ? "dark:bg-[#404040] bg-gray-200" : ""
            } dark:hover:bg-[#404040] hover:bg-gray-200`}
            onClick={() => navigate("/post-project")}
          >
            <Plus className="mr-4" width={22} />
            Post
          </div>
          <a href={"#projects"} className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
                selected == 4 ? "dark:bg-[#404040] bg-gray-200" : ""
              } dark:hover:bg-[#404040] hover:bg-gray-200`}
              onClick={() => setSlected(4)}
            >
              <User className="mr-4" width={22} />
              Hire
            </div>
          </a>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
              selected == 5 ? "dark:bg-[#404040] bg-gray-200" : ""
            } dark:hover:bg-[#404040] hover:bg-gray-200`}
            onClick={() => setSlected(5)}
          >
            <MessageSquareMore className="mr-4" width={22} />
            <p className="text-sm">Messages</p>
          </div>
          <a href="#payments" className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg text-[#000] dark:text-white ${
                selected == 6 ? "dark:bg-[#404040] bg-gray-200" : ""
              } dark:hover:bg-[#404040] hover:bg-gray-200`}
              onClick={() => setSlected(6)}
            >
              <FileText className="mr-4" width={22} />
              Payments
              {/* <p className="text-sm"></p> */}
            </div>
          </a>
        </>
      )}
    </div>
  );
};

export default Sidebar;
