import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';
export const getRandomQuote = async () => {
  return await axios.get('/quotes/random');
};
