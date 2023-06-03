import PropTypes from 'prop-types';
// import css from './ReviewsList.module.css';

export const ReviewsItem = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content }) => {
        return (
          <li key={author} className="">
            <p className="">Author: {author}</p>
            <p className="">
              Review: <br />"{content}"
            </p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewsItem.propTypes = {
  reviews: PropTypes.array.isRequired,
};
