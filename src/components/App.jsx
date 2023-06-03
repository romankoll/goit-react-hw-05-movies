import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';

import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import MovieDetails from './pages/MoviesDetails/MoviesDetails';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
