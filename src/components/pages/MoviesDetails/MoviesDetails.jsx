import { fetchById } from 'api/theMoviedb';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

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

  return (
    <div>
      <Link to={backLinkHref} className="">
        Go back
      </Link>
      <div>
        {posterSrc && <img src={posterSrc} alt="" />}
        <h2>{movie.title}</h2>

        <p>User Score:{}%</p>
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
            <Link to={'reviews'} className="">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
