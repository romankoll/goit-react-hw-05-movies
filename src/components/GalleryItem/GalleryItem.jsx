import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ movie, title, id }) => {
  // console.log(movie);
  return (
    <li>
      <Link to={`${id}`}>{title}</Link>
    </li>
  );
};

export default GalleryItem;
