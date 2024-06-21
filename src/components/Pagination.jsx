

import { useDispatch, useSelector } from 'react-redux';
import { setPage, getArticles } from '../store/newsSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, category } = useSelector((state) => state.news);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    dispatch(getArticles({ category, page: newPage }));
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Previous
      </button>
      <span className="px-4 py-2">{page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
