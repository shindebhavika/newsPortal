const API_KEY = '7b6a3b1f49893d663a29bb3da91a48ab';  // Replace with your actual GNews API key
const BASE_URL = 'https://gnews.io/api/v4';

export const fetchArticles = async (category = 'general', page = 1, query = '') => {
  let url;
  console.log("request");

  if (query) {
    url = `${BASE_URL}/search?q=${query}&token=${API_KEY}&lang=en&max=10&page=${page}`;
  } else {
    // Note: GNews supports 'topics' instead of 'category'
    url = `${BASE_URL}/top-headlines?token=${API_KEY}&lang=en&max=10&topic=${category}&page=${page}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error up the call chain
  }
};
