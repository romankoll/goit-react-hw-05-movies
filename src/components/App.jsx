import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Cast = lazy(() => import('./Cast/Cast'));
const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('./pages/MoviesDetails/MoviesDetails'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// import Cast from './Cast/Cast';
// import Layout from './Layout/Layout';
// import HomePage from './pages/HomePage/HomePage';
// import MovieDetails from './pages/MoviesDetails/MoviesDetails';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import Reviews from './Reviews/Reviews';

const App = () => {
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
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
