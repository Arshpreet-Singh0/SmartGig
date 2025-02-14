import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { useAppDispatch } from "../../hooks/hook";
import { setUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { BACKEND_URL } from "../../Config";

const Signin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, input, {
        withCredentials: true,
      });

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form
        type="signin"
        onChange={handleChange}
        onSubmit={handleSubmit}
        input={input}
        loading={loading}
      />
    </>
  );
};

export default Signin;
