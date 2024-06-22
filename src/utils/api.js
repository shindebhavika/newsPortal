// src/utils/api.js

import axios from 'axios';

const API_KEY = '71e9044ea5cb447e95f1148d5528ef3f';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1, query = '') => {
  let url;
console.log("request")
  if (query) {
    url = `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}&page=${page}`;
  } else {
    url = `${BASE_URL}/top-headlines?country=us&category=${category}&page=${page}&apiKey=${API_KEY}`;
  }

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error up the call chain
  }
};
