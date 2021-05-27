import axios from 'axios';

const KEY = '20407857-5cbc70afd557f45317642044e';
const URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = URL;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
const fetchImages = ({ searchQuery = '', page = '' }) => {
  return axios
    .get(`?q=${searchQuery}&page=${page}&key=${KEY}&`)
    .then(response => response.data.hits);
};

export default { fetchImages };
