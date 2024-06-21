// src/App.js
import  { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import { getArticles } from './store/newsSlice';
import Favorites from './components/Favorites';
import BackToTopButton from './components/BackToTopButton';
import ThemeToggle from './components/ThemeToggle';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles({ category: '', page: 1 }));
  }, [dispatch]);

  return (
    <Router>
      
       <BackToTopButton />
      <div className="App">
        <ThemeToggle></ThemeToggle>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetailPage />} />
          <Route path="/my-fav" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
