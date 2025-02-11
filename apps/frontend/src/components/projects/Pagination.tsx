import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ totalResults, resultsPerPage, currentPage, setCurrentPage }: any) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    setCurrentPage((page: number) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page: number) => page - 1);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * resultsPerPage - resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return `Showing ${startIndex + 1} to ${Math.min(endIndex, totalResults)} of ${totalResults} results`;
  };

  return (
    <div className="flex items-center justify-end space-x-2 h-20 bg-gray-50 dark:bg-black-200 text-[#000] dark:text-white px-10 fixed bottom-0 w-full pr-72">
      {/* Previous Button */}
      <button
        className="px-4 py-2 border rounded-md dark:hover:bg-gray-200"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>

      {/* Previous Page */}
      {currentPage > 1 && (
        <button
          className="px-4 py-2 border rounded-md hover:bg-gray-200"
          onClick={() => changePage(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      )}

      {/* Current Page */}
      <button className="px-4 py-2 border rounded-md bg-[#2463EB] text-white">
        {currentPage}
      </button>

      {/* Next Page */}
      {currentPage < totalPages && (
        <button
          className="px-4 py-2 border rounded-md hover:bg-gray-200"
          onClick={() => changePage(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      )}

      {/* Next Button */}
      <button
        className="px-4 py-2 border rounded-md hover:bg-gray-200"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>

      <div>
        {getPaginatedData()}
      </div>
    </div>
  );
};

export default Pagination;
