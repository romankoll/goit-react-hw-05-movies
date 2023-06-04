import GalleryItem from 'components/GalleryItem/GalleryItem';
import React from 'react';
import css from './Gallery.module.css';
import PropTypes from 'prop-types';

const Gallery = ({ movies, path, state }) => {
  console.log(movies);
  return (
    <ul className={css.list}>
      {movies.map(
        ({ vote_average, id, poster_path, title, overview }) => {
          const pathToMovie = `${path}${id}`;

          return (
            <GalleryItem
              key={id}
              title={title}
              id={id}
              path={pathToMovie}
              state={state}
              overview={overview}
              poster={poster_path}
              rating={vote_average}
            />
          );
        }
        //   <li key={movie.id}>
        //     <Link to="">{movie.title}</Link>
        //   </li>
      )}
    </ul>
  );
};

Gallery.propTypes = {
  movies: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
};

export default Gallery;
