import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const Cast = lazy(() => import('../components/Cast/Cast'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const NotFound = lazy(() => import('../components/NotFound/NotFound'));
const Movies = lazy(() => import('../components/Movies/Movies'));
const Home = lazy(() => import('../components/Home/Home'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Header = lazy(() => import('../components/Header/Header'));
export const App = () => {
  return (
    <section className={css.section}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </section>
  );
};
