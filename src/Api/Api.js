import axios from 'axios';

export const getTrending = async page => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: { language: 'en-US', page: page },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQ2YzhjNmY3ZTkyNWM4YWFkYjdhYWY1NzcwOTFjMSIsInN1YiI6IjY0OTQxYWVlOWEzNThkMDEzOWRmZWFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wya1Td3_9_NzmdPCkqGhInhKY-7eMReOMfmPPSI2T1o',
    },
  };
  const { data } = await axios.request(options);
  return data;
};

export const getById = async id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQ2YzhjNmY3ZTkyNWM4YWFkYjdhYWY1NzcwOTFjMSIsInN1YiI6IjY0OTQxYWVlOWEzNThkMDEzOWRmZWFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wya1Td3_9_NzmdPCkqGhInhKY-7eMReOMfmPPSI2T1o',
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getMovieByQuery = async (query, page) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: query,
      include_adult: 'false',
      language: 'en-US',
      page: page,
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQ2YzhjNmY3ZTkyNWM4YWFkYjdhYWY1NzcwOTFjMSIsInN1YiI6IjY0OTQxYWVlOWEzNThkMDEzOWRmZWFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wya1Td3_9_NzmdPCkqGhInhKY-7eMReOMfmPPSI2T1o',
    },
  };
  const { data } = await axios.request(options);
  return data;
};

export const getCast = async id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQ2YzhjNmY3ZTkyNWM4YWFkYjdhYWY1NzcwOTFjMSIsInN1YiI6IjY0OTQxYWVlOWEzNThkMDEzOWRmZWFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wya1Td3_9_NzmdPCkqGhInhKY-7eMReOMfmPPSI2T1o',
    },
  };
  const { data } = await axios.request(options);
  return data;
};

export const getReviews = async id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQ2YzhjNmY3ZTkyNWM4YWFkYjdhYWY1NzcwOTFjMSIsInN1YiI6IjY0OTQxYWVlOWEzNThkMDEzOWRmZWFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wya1Td3_9_NzmdPCkqGhInhKY-7eMReOMfmPPSI2T1o',
    },
  };
  const { data } = await axios.request(options);
  return data;
};
