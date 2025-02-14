import { Filter, Search } from "lucide-react";
import Pagination from "./Pagination";
import ProjectCard from "./ProjectCard";

const Project = ({ projects, currentPage, setCurrentPage, totalProjects, loading }: any) => {
  return (
    <>
      <div className="w-[85%] mx-auto">
        <div className="flex items-center justify-center flex-col sm:flex-row gap-4 h-20 bg-gray-50 p-5 dark:bg-black-100">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24 bg-gray-50 p-5 dark:bg-black-100">
          {loading
            ? Array.from({ length: 9 }).map((_, index) => <SkeletonCard key={index} />) // Show 6 skeletons while loading
            : projects?.map((project: any) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
      
      {!loading && (
        <Pagination
          totalResults={totalProjects}
          resultsPerPage={9}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default Project;

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse dark:bg-black-200">
      <div className="h-6 w-3/4 bg-gray-300 rounded-md mb-4 dark:bg-gray-600"></div>
      <div className="h-12 w-full bg-gray-200 rounded-md mb-4 dark:bg-gray-700"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-2 dark:bg-gray-600"></div>
      <div className="h-4 w-1/3 bg-gray-300 rounded-md mb-4 dark:bg-gray-600"></div>
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-gray-300 rounded-md dark:bg-gray-600"></div>
        <div className="h-6 w-20 bg-gray-300 rounded-md dark:bg-gray-600"></div>
      </div>
    </div>
  );
};
