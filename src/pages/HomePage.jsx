
import{ useEffect ,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import { getArticles } from '../store/newsSlice';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, [favorites]);

  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.news);
  console.log(articles)
  useEffect(() => {
    dispatch(getArticles({ category, page }));
  
  }, [dispatch, category, page]);

  return (
    <div className="container mx-auto p-4  flex flex-col justify-center items-center">

     <div className='flex  items-center flex-wrap justify-evenly w-full
       '>
<div>      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcWsN_w61HOLmzDXFFN-Q_p4JZSefLnk0Gg&s" alt=""  /></div>
        
     <SearchBar />
      <Link to="/my-fav">
      <div className="relative  ">
        <div className="flex  shadow-sm p-2 rounded-full text-white" >
          <input type="radio" id="radio-1" name="tabs" className="hidden" checked />
          <button className="flex items-center bg-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-red-600 duration-300 hover:gap-2 hover:translate-x-3 relative  ">
            My Favorites
            <svg
              className="w-5 h-5 mr-6"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <span className="notification absolute flex items-center justify-center w-4 h-4 -top-1 -right-1 text-xs bg-red-200 rounded-full text-[20px] p-3 text-black">
              {favorites.length}
            </span>
          </button>
        </div>
      </div>
    </Link>
     </div>
      
      <CategoryFilter />
      {status === 'loading' && <div className="flex justify-center items-center h-screen">
  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
</div>
}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <ArticleList articles={articles} />}
      <Pagination />
    </div>
  );
};

export default HomePage;