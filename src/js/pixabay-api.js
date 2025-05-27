import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50418934-092a9418718642a9f59a6e549';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => error.message);
}
