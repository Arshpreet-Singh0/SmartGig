import Navbar from "../../components/navbar/Navbar";
import ProjectDeatils from "../../components/projects/ProjectDeatils";
import ProjectProposals from "../../components/projects/ProjectProposals";

const ViewProjectDetails = () => {
  return (
    <div className="bg-gray-50 dark:bg-black-100">
      <Navbar />
      <ProjectDeatils />
      <ProjectProposals />
    </div>
  );
};

export default ViewProjectDetails;
