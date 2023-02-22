import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0bf9a11da9d083f4751315d07dcbd89b',
  },
};

export const getTrandingApi = async () => {
  const response = await axios(config);
  return response.data.results;
};

export const getMovieCredits = async movieId => {
  const config = {
    url: `/movie/${movieId}/credits`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '0bf9a11da9d083f4751315d07dcbd89b',
    },
  };

  const response = await axios(config);
  return response.data.cast;
};

export const getMovieDetailsById = async movieId => {
  const config = {
    url: `/movie/${movieId}`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '0bf9a11da9d083f4751315d07dcbd89b',
    },
  };

  const response = await axios(config);

  return response.data;
};

export const getMovieReviews = async movieId => {
  const config = {
    url: `/movie/${movieId}/reviews`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '0bf9a11da9d083f4751315d07dcbd89b',
    },
  };

  const response = await axios(config);
  return response.data.results;
};

export const getMovieSearch = async params => {
  const config = {
    url: `/search/movie`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '0bf9a11da9d083f4751315d07dcbd89b',
      query: params,
    },
  };

  const response = await axios(config);
  return response.data.results;
};
