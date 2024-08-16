import axios from 'axios';
import { FetchImagesResponse } from './types';

const API_KEY = 'PDHStH5mxHV095DtxjsECzkISjP_I7PD1K--Q147VV0';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = { orientation: 'landscape', per_page: 12 };

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const res = await axios.get<FetchImagesResponse>(
    `search/photos/?client_id=${API_KEY}&query=${query}&page=${page}`
  );
  return res.data;
};
