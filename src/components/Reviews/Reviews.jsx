import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ReviewsItem } from '../ReviewsItem/ReviewsItem';
import { fetchReviews } from 'api/theMoviedb';
// import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchReview() {
      try {
        await fetchReviews(movieId).then(data => setReviews(data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [movieId]);

  return (
    <section className="">
      <h3 className="">Reviews</h3>
      {reviews.length > 0 ? (
        <ReviewsItem reviews={reviews} />
      ) : (
        <div className="">No reviews for this movie.</div>
      )}
    </section>
  );
};
export default Reviews;
