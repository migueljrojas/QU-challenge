import axios from 'axios';

const apiUrl = 'https://swapi.dev/api/';

const API = axios.create({
  baseURL: apiUrl
});

const getPlanets = (page) => {
  return API.get(`/planets${page ? `?page=${page}` : ''}`);
}

const serviceApi = {
  getPlanets: getPlanets
};

export default serviceApi;