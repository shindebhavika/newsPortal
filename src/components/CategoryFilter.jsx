import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPage, getArticles } from '../store/newsSlice';

const categories = [
  'Business',
  'Technology',
  'Entertainment',
  'Sports',
  'Science',
  'Health',
  'General',
  'Politics',
  'World',
  'Finance',
  'Environment',
];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.news.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
    dispatch(getArticles({ category, page: 1 }));
  };

  return (
    <div className="flex justify-center space-x-4 w-[90%] flex-wrap m-5">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category.toLowerCase())}
          className={`px-4 py-2 m-5 rounded hover:bg-red-500 ${
            selectedCategory === category.toLowerCase() ? 'bg-red-500 text-white' : '  border border-red-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
