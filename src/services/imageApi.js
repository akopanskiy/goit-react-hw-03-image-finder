import axios from 'axios';

const key = '20407857-5cbc70afd557f45317642044e';
const url = 'https://pixabay.com/api/';
const fetchImages = ({ searchQuery = '', page = '' }) => {
  return axios
    .get(
      `${url}?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
