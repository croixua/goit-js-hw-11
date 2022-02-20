import axios from 'axios';

const API_KEY = '25758429-81b852ff65ae4cd9549e3e09e';
const BASE_URL = 'https://pixabay.com/api';
const PARAMETRS = '&per_page=40&image_type=photo&orientation=horizontal&safesearch=true';

export const fetchImages = async (searchQuery, page) => {
  const url = `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&page=${page}${PARAMETRS}`;

  return await axios(url).then(({ data }) => {
    return data;
  });
};
