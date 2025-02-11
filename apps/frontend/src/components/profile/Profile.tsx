import { useEffect, useState } from "react";
import About from "./About";
import PerformanceStatics from "./PerformanceStatics";
import ProfileCard from "./ProfileCard";
import AllSkills from "./Skills";
import EditProfileModal from "./EditProfileModal";
import { useAppSelector } from "../../hooks/hook";
import { isUserLoggedIn} from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Profile = () => {
  
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(profile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const isUserExist = useAppSelector(isUserLoggedIn);
  const { user } = useAppSelector(state => state.auth);

  useEffect(()=>{
    if(!isUserExist) navigate(`/signin?next=profile`);

    const fetchProfile = async()=>{
      setLoading(true);
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/${user.id}`);
    
        if(res?.data?.success){
            setProfile(res?.data?.user);
        }
        
      } catch (error) {
        console.log(error);
        
      }finally{
        setLoading(false);
      }
    };
    fetchProfile();
  },[]);
  console.log(profile);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className="bg-[#F5F5F5]">
      <ProfileCard profile={profile} showModal={showModal}/>
      <PerformanceStatics profile={profile}/>
      <About profile={profile}/>
      <AllSkills profile={profile}/>
      <EditProfileModal profile={profile} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setProfile={setProfile}/>
    </div>
  );
};

export default Profile;
