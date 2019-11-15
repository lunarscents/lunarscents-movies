import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key='ba66374530285a2c880e3a0fb27a8f12',
        language ='en-US'
    }
});

export const moviesApi = {
    nowPlaying: () => api.get('movie/now_playing'),
    upcoming: () => api.get('movie/upcoming'),
    popular: () => api.get('movie/popular'),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: 'videos'
        }
    }),
    search: (term) => api.get('search/movie', {
        parmas: {
            query: encodeURIComponent(term)
        }
    })
 }

export const tvApi = {
    topRated: () => api.get('tv/top_rated'),
    popular: () => api.get('tv/popular'),
    airingToday: () => api.get('/tv/airing_today'),
    showDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: 'videos'
        }
    }),
    search: (term) => api.get('search/tv', {
        parmas: {
            query: encodeURIComponent(term)
        }
    })
};

api.get('tv/popular');

export default api;