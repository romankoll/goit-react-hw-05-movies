import { fetchById } from 'api/theMoviedb';
import Loader from 'components/Loader/Loader';
import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import css from './MoviesDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [movie, setMovie] = useState(null);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w400';
  const { movieId } = useParams();

  //   console.log(movieId);

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        await fetchById(movieId).then(data => setMovie(data));
      } catch (error) {
        console.log(error);
      }
    };
    getMovieInfo();
  }, [movieId]);
  // console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { genres } = movie;

  const movieGenres = genres.map(genre => genre.name).join(', ');

  let posterSrc = '';
  if (movie.poster_path) {
    posterSrc = `${imageBaseUrl}${movie.poster_path}`;
  }

  const rating = Math.round(movie.vote_average * 10) / 10;

  return (
    <div className={css.container}>
      <Link to={backLinkHref} className={css.btnBack}>
        Go back
      </Link>
      <div>
        {posterSrc && (
          <div className={css.imageContainer}>
            <img src={posterSrc} alt="" className="posterImage" />
          </div>
        )}
        <h2>{movie.title}</h2>

        <p>User Score: {rating}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul className="">
          <li>
            <Link to={'cast'} className="">
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className="">
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
