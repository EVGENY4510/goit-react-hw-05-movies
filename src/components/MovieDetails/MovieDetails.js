import { useEffect, useRef, useState } from 'react';
import { ImUndo2 } from 'react-icons/im';
import css from './MovieDitales.module.css';

import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getById } from 'Api/Api';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    (async function moveInfo() {
      try {
        const getMovieInfo = await getById(movieId);
        setMovie(getMovieInfo);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  const genresArray = [];
  let userScore = 0;

  if (movie) {
    for (const item of movie.genres) {
      genresArray.push(item.name);
    }
    userScore = Math.round((movie.vote_average * 100) / 10);
  }
  const genres = genresArray.join(' ');

  return (
    <div className={css.ditalesWrapper}>
      {isLoading && <Loader />}
      {movie && (
        <div>
          <Link className={css.MDLink} to={backLinkHref.current}>
            <button className={css.btnLink} type="button">
              <ImUndo2 color="#e7a61a" size={25} />
              Go back
            </button>
          </Link>

          <div className={css.wrapperItems}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              width={300}
            />
            <div className={css.textWrapper}>
              <h1>{movie.title}</h1>
              <ul className={css.list}>
                <li className={css.score}>
                  User score
                  <p
                    className={css.pItem}
                    style={{ color: userScore > 50 ? '#008000' : 'red' }}
                  >
                    {userScore}%
                  </p>
                </li>
                <li className={css.overview}>
                  Overview<p className={css.spanItem}>{movie.overview}</p>
                </li>
                <li className={css.genres}>
                  Genres<p className={css.spanItem}>{genres}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <span className={css.titleCR}>Additional information</span>
      <ul className={css.wrapperCR}>
        <li className={css.itemCR}>
          <NavLink className={css.linkCR} to="cast">
            Cast
          </NavLink>
        </li>
        <li className={css.itemCR}>
          <NavLink className={css.linkCR} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
