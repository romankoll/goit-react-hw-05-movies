import axios from 'axios';

const API_KEY = 'b3dd64485b75b15c7b12230b13e4ccc3'; // Замініть на свій API-ключ themoviedb.org

const searchMovies = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const movies = response.data.results;
    // Обробка отриманих даних з API
    console.log(movies);
  } catch (error) {
    // Обробка помилки
    console.error(error);
  }
};

export default searchMovies;
