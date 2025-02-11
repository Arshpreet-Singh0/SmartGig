import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceBidForm from "../../../components/ui/PlaceBidForm";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ViewProposal = () => {
    const [input, setInput] = useState({
        proposedBudget: "",
        proposedTimeline: "",
        coverLetter: "",
      });

    const {projectId} = useParams();

    useEffect(()=>{
        const fetchProposal = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/api/v1/freelancer/proposal/${projectId}`, {
                    withCredentials : true,
                });
                
                setInput(res?.data?.proposal);
            } catch (error) {
                console.log(error);   
            }
        };
        fetchProposal();
    },[]);
    
  return (
    <div>
        <PlaceBidForm input={input} disabled/>
    </div>
  )
}

export default ViewProposal