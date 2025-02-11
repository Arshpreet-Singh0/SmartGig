import { SunMoon } from "lucide-react";
import { useEffect} from "react";
import { useAppSelector } from "../../hooks/hook";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

const ThemeToggle = () => {
  const {theme} = useAppSelector(store=>store.theme);
  const dispatch = useDispatch();


  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.backgroundColor = "#171717"; 
    } else {
      root.classList.remove("dark");
      root.style.backgroundColor = "#F9FAFB";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleThemeLocal = () => {
    dispatch(toggleTheme())
  };

  return (
    <button
      onClick={toggleThemeLocal}
      className="p-2 text-black text-white"
    >
      <SunMoon className="opacity-80 text-[#000] dark:text-white"/>
    </button>
  );
};

export default ThemeToggle;
