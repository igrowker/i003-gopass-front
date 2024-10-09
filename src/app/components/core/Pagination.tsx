import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type PaginationProps = {
  currentPage: number;
  totalTickets: number;
  ticketsPerPage: number;
  onNext: () => void;
  onPrev: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalTickets,
  ticketsPerPage,
  onNext,
  onPrev,
}) => {
  return (
    <div className="mt-4 flex w-full items-center justify-around">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="flex items-center rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
      >
        <IoIosArrowDropleft className="mr-2 text-3xl" />
      </button>
      <span className="text-center">Página {currentPage}</span>
      <button
        onClick={onNext}
        disabled={totalTickets < ticketsPerPage}
        className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
      >
        <IoIosArrowDropright className="mr-2 text-3xl" />
      </button>
    </div>
  );
};

export default Pagination;