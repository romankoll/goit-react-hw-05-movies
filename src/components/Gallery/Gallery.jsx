import GalleryItem from 'components/GalleryItem/GalleryItem';
import React from 'react';
// import { Link } from 'react-router-dom';

const Gallery = ({ movies, path, state }) => {
  console.log(movies);
  return (
    <ul>
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

export default Gallery;
