// import { Bell } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { clearUser } from '../../../redux/authSlice' 
import { useDispatch } from "react-redux";
// import ThemeToggle from "../../ui/ThemeToggle";
import { useAppSelector } from "../../../hooks/hook";

const Nav = () => {
  const dispatch = useDispatch();
  const {user} = useAppSelector(store=>store.auth);
  const navigate = useNavigate();
  const logout = ()=>{
      dispatch(clearUser());
      navigate('/signin?next=/dashboard');
  }
  return (
    <div className="flex items-center justify-between h-20 bg-gray-50 dark:bg-black-200 w-full px-6 text-white sticky top-0 border-b dark:border-gray-700 z-10">
        <div>
            <h2 className="text-xl font-semibold text-[#000] dark:text-white">Dashbaord</h2>
        </div>
        <div className="flex justify-center items-center gap-10">
          {/* <ThemeToggle /> */}
            <Link to={'/projects'} className="text-[#000] dark:text-white font-semibold opacity-70 hover:opacity-100 transition-all duration-200">All Projects</Link>
            <Link to={`/profile/${user?.id}`} className="text-[#000] dark:text-white font-semibold opacity-70 hover:opacity-100 transition-all duration-200">Profile</Link>
            {/* <Bell className="opacity-80 text-[#000] dark:text-white"/> */}
            <p className="cursor-pointer text-[#000] dark:text-white font-semibold opacity-70 hover:opacity-100 transition-all duration-200" onClick={logout}>Logout</p>

            <div className="h-10 w-10 rounded-full">
                    <img src="https://avatar.iran.liara.run/public" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav