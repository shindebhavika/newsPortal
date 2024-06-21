
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

const ArticleList = ({ articles }) => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const addToFavorites = (article) => {
    const updatedFavorites = [...favorites, article];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (article) => {
    const updatedFavorites = favorites.filter(fav => fav.url !== article.url);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (article) => {
    return favorites.some(fav => fav.url === article.url);
  };

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, []);

  const filteredArticles = articles.filter(article => 
    article.url && article.urlToImage && article.title && article.description
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredArticles.map((article) => (
        <div key={article.url} className="border p-4 rounded shadow relative">
          <div className="absolute top-4 right-4 text-xl cursor-pointer mt-3">
            <i
              onClick={() => isFavorite(article) ? removeFromFavorites(article) : addToFavorites(article)}
              className={`bi ${isFavorite(article) ? 'bi-heart-fill text-[#d00000]' : 'bi-heart text-black'}`}
              style={{ fontSize: "30px" }} // Adjust the size here as needed
            ></i>
          </div>
          <Link to={`/article/${encodeURIComponent(article.url)}`}>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p>{article.description}</p>
          </Link>
        </div>
      ))}
      
    </div>
  );
};

export default ArticleList;
