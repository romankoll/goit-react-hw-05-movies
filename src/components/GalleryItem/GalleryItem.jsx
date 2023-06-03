import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ rating, state, path, poster, title }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w400';

  let posterSrc = '';
  if (poster) {
    posterSrc = `${imageBaseUrl}${poster}`;
  }

  return (
    <li className="">
      <Link to={path} state={state}>
        <article>
          <div>
            {posterSrc && <img src={posterSrc} alt="" />}
            <p className="">{title}</p>
            <div className="">
              <p>Rating: {rating}</p>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default GalleryItem;
