
import axios from 'axios';

const API_KEY = 'fabd21c7764148ee8af486bff97c789e';
const BASE_URL = 'https://newsapi.org/v2';

const CACHE_KEY_PREFIX = 'newsAPI_cache_';

export const fetchArticles = async (category = '', page = 1) => {
  const cacheKey = `${CACHE_KEY_PREFIX}${category}_${page}`;

  // Check if data is cached
  const cachedData = JSON.parse(localStorage.getItem(cacheKey));
  if (cachedData) {
    console.log('Returning cached data:', cachedData);
    return cachedData;
  }

  // Fetch fresh data from API
  const url = `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&apiKey=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    // Update cache with fresh data
    localStorage.setItem(cacheKey, JSON.stringify(data));

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error up the call chain
  }
};
