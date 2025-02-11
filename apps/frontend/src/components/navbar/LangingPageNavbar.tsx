import { Link } from "react-router-dom"
import { Button } from "../ui/Button"
import ThemeToggle from "../ui/ThemeToggle"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 w-[90%] mx-auto bg-white rounded-full dark:bg-black dark:text-white dark:border border-gray-800">
        <div className="ml-8">
            {/* <h1 className="text-2xl text-blue-100">SmartGig</h1> */}
            <img src="/src/assets/logo.png" alt="logo" className="w-36 h-32"/>
        </div>
        <div className="mr-8">
            <ul className="flex items-center gap-16">
                <li className="text-blue-100">Home</li>
                <li className="opacity-75 hover:opacity-100">Find Work</li>
                <li className="opacity-75 hover:opacity-100">Find Freelancers</li>
                <li className="opacity-75 hover:opacity-100"><Link to="/signin">Log In</Link></li>
                <li className="opacity-75 hover:opacity-100"><Link to="/signup">Sign Up</Link></li>
                <li><Button text="Post a Project" variant="primary" className="rounded-3xl"/></li>
                <li><ThemeToggle /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar