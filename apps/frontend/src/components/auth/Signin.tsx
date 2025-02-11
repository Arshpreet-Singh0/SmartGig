import React, { useState } from 'react'
import Form from './Form';
import axios from 'axios';
import { useAppDispatch } from '../../hooks/hook';
import { setUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Signin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
            email: "",
            password: "",
        });
        const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
            setInput((prev)=>(
                {...prev, [e.target.name]: e.target.value}
            ));
        }
    
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          try {
            const res = await axios.post(
              "http://localhost:8080/api/v1/user/signin",
              input,
              {
                withCredentials: true,
              }
            );
        
            if (res?.data?.success) {
              message.success(res?.data?.message);
              dispatch(setUser(res.data.user));
              navigate("/dashboard");
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
          }
        };
        
  return (
    <> 
        <Form type="signin" onChange={handleChange} onSubmit={handleSubmit} input={input}/>
    </>
  )
}

export default Signin