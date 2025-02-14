import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  MessageCircle,
  Clock,
  IndianRupee,
} from "lucide-react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../../Config";
import axios from "axios";
import { message } from "antd";
import Modal from "../../components/ui/Model";

type Proposal = {
  id: number;
  coverLetter: string;
  proposedBudget: number;
  proposedTimeline: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  projectId: number;
  freelancerId: number;
  freelancer: {
    name: string;
    ratingCount: number;
    role: string | null;
  };
};

function ViewProposals() {
  const { id } = useParams<{ id: string }>();
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/v1/client/proposals/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProposals(data.proposals);
        if (data.proposals.length > 0) {
          setSelectedProposal(data.proposals[0]);
        }
      });
  }, [id]);

  const acceptProposal = async (proposalid: number) => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/client/accept-proposal/${id}/${proposalid}`,
        {},
        {
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        message.success(res?.data?.message);
        navigate("/dashboard");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(
          error?.response?.data?.message || "Internal Server error"
        );
      } else {
        message.error("Internal Server error");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Project Proposals
          </h1>
          {proposals.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1 space-y-4">
                {proposals.map((proposal) => (
                  <div
                    key={proposal.id}
                    className={`cursor-pointer rounded-lg p-4 transition-all ${
                      selectedProposal?.id === proposal.id
                        ? "bg-white shadow-md border-l-4 border-indigo-600"
                        : "bg-gray-100 hover:bg-white hover:shadow-sm"
                    }`}
                    onClick={() => setSelectedProposal(proposal)}
                  >
                    <h3 className="font-semibold">
                      {proposal.freelancer.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">
                        {proposal.freelancer.ratingCount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {selectedProposal && (
                <>
                <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} id={selectedProposal?.freelancerId}/>
                <div className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden p-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Proposal Details
                  </h2>

                  <h3 className="text-ld font-semibold mt-2">
                    Cover Letter :{" "}
                  </h3>
                  <p className="text-gray-700 ">
                    {selectedProposal.coverLetter}
                  </p>
                  <div className="mt-4 text-gray-700">
                    <div className="flex items-center mb-2 text-ld font-semibold mt-2">
                      <IndianRupee className="w-5 h-5 mr-2" />
                      <span>
                        Proposed Budget: {selectedProposal.proposedBudget}
                      </span>
                    </div>
                    <div className="flex items-center mb-2 text-ld font-semibold mt-2">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>
                        Proposed Duration: {selectedProposal.proposedTimeline}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                      onClick={() => acceptProposal(selectedProposal?.id)}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" /> Accept
                    </button>
                    <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                      <XCircle className="w-5 h-5 mr-2" /> Reject
                    </button>
                    <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={()=>setIsOpen(true)}>
                      <MessageCircle className="w-5 h-5 mr-2" /> Chat
                    </button>
                  </div>
                </div>
                </>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No proposals available for this project.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ViewProposals;
