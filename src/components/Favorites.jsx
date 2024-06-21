
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, []);

  const removeFromFavorites = (article) => {
    const updatedFavorites = favorites.filter(fav => fav.url !== article.url);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h2 className="text-2xl font-bold mb-4 col-span-full">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="col-span-full text-center">No favorites added yet.</p>
      ) : (
        favorites.map((article) => (
          <div key={article.url} className="border p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl">{article.title}</h3>
              <button
                onClick={() => removeFromFavorites(article)}
                className="text-red-500 hover:text-red-700"
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
            <Link to={`/article/${encodeURIComponent(article.url)}`}>
              <img
                src={article.urlToImage || 'https://via.placeholder.com/150'}
                alt={article.title}
                className="w-full h-48 object-cover mb-2 rounded"
              />
            </Link>
            <p className="mb-2">{article.description}</p>
            <Link
              to={`/article/${encodeURIComponent(article.url)}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Read more
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
