import axios from "axios";
import { Star, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface Proposal{
  coverLetter : string;
  proposedBudget : string;
  proposedTimeline : string;
  freelancer : {
    name : string;
    ratingCount : string;
  }

}

const ProjectProposals = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const {projectId} = useParams();

  useEffect(()=>{
    const fetchProposals = async()=>{
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/client/proposals/${projectId}`);
        setProposals(res?.data?.proposals);
          console.log(res);
          
      } catch (error) {
        console.log(error);
        
      }
    };
    fetchProposals();
  },[])
  return (
    <div className="mt-10 bg-gray-200 dark:bg-black-200 p-10 text-[#000] dark:text-white">
      <div className="w-[80%] mx-auto">
          <h1 className="text-2xl text-white font-semibold">Project Proposals</h1>

          <div className="mt-5">
              {
                proposals?.map((proposal)=>(
                  <div className="p-5 rounded-lg bg-gray-50 dark:bg-[#404040] mb-5">
                    <div className="flex justify-between">
                      <div className="flex gap-5">
                        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-white dark:bg-[#525252]">
                          <User2 className="text-blue-500"/>
                        </div>

                        <div>
                          <h3 className="font-semibold">{proposal?.freelancer?.name}</h3>
                          <div className="flex items-center mt-1">
                          <Star width={15} height={15} className=" mr-2 text-yellow-500"/>
                          <p className="">{proposal.freelancer?.ratingCount}</p>

                          </div>
                        </div>

                      </div>

                      <div>
                          <h2 className="text-xl font-semibold text-blue-500 mr-10">&#8377; {proposal?.proposedBudget}</h2>
                          <h3 className="ml-4 text-sm opacity-70">{proposal?.proposedTimeline} days</h3>
                      </div>

                    </div>

                    <div className="mt-2 px-2 opacity-80 h-24 overflow-x-auto">
                      {proposal.coverLetter}
                    </div>
                  </div>
                ))
              }
          </div>
      </div>
    </div>
  )
}

export default ProjectProposals