import GalleryItem from 'components/GalleryItem/GalleryItem';
import React from 'react';
// import { Link } from 'react-router-dom';

const Gallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(
        movie => (
          <GalleryItem
            movie={movie}
            key={movie.id}
            title={movie.title}
            id={movie.id}
          />
        )
        //   <li key={movie.id}>
        //     <Link to="">{movie.title}</Link>
        //   </li>
      )}
    </ul>
  );
};

export default Gallery;
