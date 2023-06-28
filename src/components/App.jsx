import css from './App.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Cast = lazy(() => import('../components/Cast/Cast'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('../components/Movies/Movies'));
const Home = lazy(() => import('../components/Home/Home'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.appWrapper}>
      <header className={css.header}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.nutActive}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.nutActive}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </header>
      <main>
        <section className={css.section}>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </section>
      </main>
    </div>
  );
};
