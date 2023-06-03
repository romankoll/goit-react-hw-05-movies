import { fetchCasts } from 'api/theMoviedb';
import CastItem from 'components/CastItem/CastItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import css from './Cast.module.css';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    async function fetchCast() {
      try {
        await fetchCasts(movieId).then(data => setCredits(data.cast));
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);
  console.log(credits);
  //   console.log(credits);
  return (
    <section className="">
      <h3 className="">Cast</h3>
      {credits.length > 0 ? (
        <CastItem credits={credits} />
      ) : (
        <div className="">No info about the cast.</div>
      )}
    </section>
  );
};

export default Cast;
