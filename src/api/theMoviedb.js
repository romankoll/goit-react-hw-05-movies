const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b3dd64485b75b15c7b12230b13e4ccc3';

export async function fetchTrendingMovies() {
  return await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    res => {
      if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
      return res.json();
    }
  );
}

export async function fetchByQuery(query) {
  return await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`
  ).then(res => {
    if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
    return res.json();
  });
}

export async function fetchById(id) {
  return await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(res => {
    if (!res.ok) Promise.reject(new Error('Opps...something going wrong'));
    return res.json();
  });
}
