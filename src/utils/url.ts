import axios from 'axios';

export const encodeURL = (url: string) => encodeURIComponent(url);

export const getShortedURL = (url: string) => {
  return axios.get(`https://api.1pt.co/addURL`, { params: { long: url } } )
}