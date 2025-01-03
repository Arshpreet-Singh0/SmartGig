import React, { useState } from "react"
import Form from "./Form"
import axios from "axios";
import { message } from "antd";

const Signup = () => {
    const [input, setInput] = useState({
        email: "",
        name : "",
        password: "",
        accountType : "",
    });
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setInput((prev)=>(
            {...prev, [e.target.name]: e.target.value}
        ));
    }

    const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/api/v1/user/signup", input);
            
            if(res?.data?.success){
                message.success( res?.data?.message || "Signup Successfull");

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
        
    }

  return (
    <> 
        <Form type="signup" onChange={handleChange} onSubmit={handleSubmit} input={input}/>
    </>
  )
}

export default Signup