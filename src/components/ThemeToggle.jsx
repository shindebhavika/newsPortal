import  { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        className="sr-only" 
        checked={theme === 'dark'}
        onChange={toggleTheme} 
      />
      <div className="w-24 h-12 bg-gray-200 rounded-full relative shadow-inner">
        <div className="absolute top-1 left-1 w-10 h-10 bg-white rounded-full transition-transform duration-300 ease-in-out transform" style={{ transform: theme === 'dark' ? 'translateX(100%)' : 'translateX(0)' }}>
          <div className="flex items-center justify-center h-full">
            {theme === 'light' ? '☀️' : '🌑'}
          </div>
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;
