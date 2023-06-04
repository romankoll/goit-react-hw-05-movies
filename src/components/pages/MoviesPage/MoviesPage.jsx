import { fetchByQuery } from 'api/theMoviedb';
import Gallery from 'components/Gallery/Gallery';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;

    async function fetchMovie() {
      try {
        await fetchByQuery(searchQuery).then(data =>
          setSearchedMovies(data.results)
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ searchQuery: form.elements.query.value.trim() });
  };

  return (
    <div className={css.container}>
      <h1>Search movies</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          placeholder="Type what you want to find here"
          className={css.input}
        />

        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      {searchedMovies.length > 0 && (
        <Gallery
          movies={searchedMovies}
          // state={{ from: location }}
          path={''}
        />
      )}
    </div>
  );
};

export default MoviesPage;
