import { fetchTrendingMovies } from 'api/theMoviedb';
import Gallery from 'components/Gallery/Gallery';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import css from './HomePage.module.css';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const fetchedMovies = await fetchTrendingMovies().then(data =>
          setMovies(data.results)
        );
        return fetchedMovies;
        // console.log(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    trendingMovies();
  }, []);

  // console.log(movies);
  return (
    <section className={css.section}>
      <h1 className={css.title}>Trending movies today</h1>

      <Gallery movies={movies} state={{ from: location }} path={'movies/'} />
    </section>
  );
};

export default HomePage;
