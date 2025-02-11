import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceBidForm from "../../../components/ui/PlaceBidForm";
import { message } from "antd";
import Nav from "../../../components/userDashboard/ui/Nav";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const EditProposal = () => {
  const [input, setInput] = useState({
    id: "",
    proposedBudget: "",
    proposedTimeline: "",
    coverLetter: "",
  });

  const { projectId } = useParams();

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/freelancer/proposal/${projectId}`,
          {
            withCredentials: true,
          }
        );

        setInput(res?.data?.proposal);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProposal();
  }, []);

  const handleChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${BACKEND_URL}/api/v1/freelancer/proposal/${input.id}`,
        input,
        {
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        message.success(res?.data?.message);
        setInput(res?.data?.proposal);
      }
    } catch (error) {
      console.log(error);
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
      <Nav />
      <PlaceBidForm
        input={input}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        editForm
      />
    </>
  );
};

export default EditProposal;
