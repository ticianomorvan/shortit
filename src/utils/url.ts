import axios from 'axios';

const baseURL = 'https://api.1pt.co/';

export const encodeURL = (url: string) => encodeURIComponent(url);

export const getShortedURL = (url: string) => {
  return axios.get(`${baseURL}addURL`, { params: { long: url } } )
}