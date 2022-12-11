interface Props {
  page: number;
  setPage: (v: number) => void;
  totalPages: number;
}

const Pagination = ({ page, setPage, totalPages }: Props) => {
  
  const handleNextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-row items-center justify-center gap-5 my-4">
      {page > 1 && (
        <button
          onClick={handlePrevPage}
          className="w-7 h-7 rounded-full cursor-pointer bg-[#87CD53]"
        >
          <p className="text-white font-bold">{page - 1}</p>
        </button>
      )}
      <div className="w-8 h-8 rounded-full bg-[#02B1C8] flex items-center justify-center">
        <p className="text-white font-bold">{page}</p>
      </div>
      {page !== totalPages && (
        <button
          onClick={handleNextPage}
          className="w-7 h-7 rounded-full bg-[#87CD53]"
        >
          <p className="text-white font-bold">{page + 1}</p>
        </button>
      )}
    </div>
  );
};

export default Pagination;
