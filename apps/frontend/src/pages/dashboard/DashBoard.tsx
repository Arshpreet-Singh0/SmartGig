import { useEffect } from "react";
import { useAppSelector } from "../../hooks/hook";
import { isUserLoggedIn } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import ClientDashBoard from "../../components/client/clientDashboard/DashBoard";
import FreelancerDashBoard from "../../components/userDashboard/DashBoard";

const DashBoard = () => {
  const { user } = useAppSelector((store) => store.auth);
  const isUserExist = useAppSelector(isUserLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserExist) {
      message.error("Please login to continue to DashBoard");
      navigate("/signin?next=/dashboard");
    }
  }, []);
  return (
    <>
      {user && user.accountType === "FREELANCER" ? (
        <FreelancerDashBoard />
      ) : (
        <ClientDashBoard />
      )}
    </>
  );
};

export default DashBoard;
