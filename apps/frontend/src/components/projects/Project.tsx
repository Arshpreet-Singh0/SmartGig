import { Filter, Search } from "lucide-react"
import Pagination from "./Pagination"
import ProjectCard from "./ProjectCard"

const Project = ({projects, currentPage, setCurrentPage, totalProjects}:any) => {
  return (
    <div className="w-[85%] mx-auto">
    {/* <Categories /> */}
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
      {
        projects?.map((project:any)=>(
          <ProjectCard project={project}/>
        ))
      }
    </div>

    <Pagination totalResults={totalProjects} resultsPerPage={9} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Project