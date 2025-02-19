import React, { useState } from "react"
import Form from "./Form"
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Config";

const Signup = () => {
    const [input, setInput] = useState({
        email: "",
        name : "",
        password: "",
        accountType : "",
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const naviagte = useNavigate();
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setInput((prev)=>(
            {...prev, [e.target.name]: e.target.value}
        ));
    }

    const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try {
            setLoading(true);
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, input ,{
                withCredentials : true,
            });
            
            if(res?.data?.success){
                message.success( res?.data?.message || "Signup Successfull");
                dispatch(setUser(res?.data?.user));

                if(input.accountType==="FREELANCER"){
                    naviagte('/freelancer/onboarding')
                }
                else{
                    naviagte('/client/onboarding');
                }
            }
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage =
                  error.response?.data?.message || "An unexpected error occurred.";
                  message.error(errorMessage);
              } else {
                message.error("Something went wrong.");
                console.error(error);
              }
        }finally{
            setLoading(true);
        }
        
    }

  return (
    <> 
        <Form type="signup" onChange={handleChange} onSubmit={handleSubmit} input={input} loading={loading}/>
    </>
  )
}

export default Signup