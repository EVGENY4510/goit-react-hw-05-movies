// import Cast from './Cast/Cast';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Movies from './Movies/Movies';
// import Home from './Home/Home';
// import Reviews from './Reviews/Reviews';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const Cast = lazy(() => import('../components/Cast/Cast'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('../components/Movies/Movies'));
const Home = lazy(() => import('../components/Home/Home'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <section>
          <Suspense fallback={<Loader />}>
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
