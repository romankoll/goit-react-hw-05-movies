import { fetchById } from 'api/theMoviedb';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

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
  console.log(movie);

  if (!movie) return;

  const { genres } = movie;

  const movieGenres = genres.map(genre => genre.name).join(', ');

  return (
    <div>
      <button>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt=""
        />
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
            <NavLink to={'cast'} className="">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={'reviews'} className="">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
