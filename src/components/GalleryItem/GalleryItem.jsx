import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GalleryItem = ({ rating, state, path, poster, title }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w400';

  let posterSrc = '';
  if (poster) {
    posterSrc = `${imageBaseUrl}${poster}`;
  }
  const ratingScor = Math.round(rating * 10) / 10;
  return (
    <li className="item">
      <Link to={path} state={state}>
        <article>
          <div>
            {posterSrc && <img src={posterSrc} alt="" />}
            <p className="">{title}</p>
            <div className="">
              <p>Rating: {ratingScor}</p>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

GalleryItem.propTypes = {
  rating: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default GalleryItem;
