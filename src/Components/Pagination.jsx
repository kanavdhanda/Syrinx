import '../Css/pagination.css';
export default function Pagination({ numberOfPages, currentPage, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className="flex flex-row space-x-2 mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`pixelated-btn px-4 py-2 ${
            number === currentPage ? 'bg-blue-700 text-white' : 'bg-blue-500 text-black hover:bg-blue-600'
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
