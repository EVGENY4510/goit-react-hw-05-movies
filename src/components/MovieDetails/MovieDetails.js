import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getById } from 'Api/Api';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
    <div>
      {isLoading && <Loader />}
      {movie && (
        <>
          {' '}
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            width={200}
          />
          <ul>
            <li>
              User score-
              <span>{userScore}%</span>
            </li>
            <li>
              Overview
              <span>{movie.overview}</span>
            </li>
            <li>
              Genres
              <span>{genres}</span>
            </li>
          </ul>
        </>
      )}

      {/* <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        width={200}
      />

      <ul>
        <li>
          User score-
          <span>{userScore}%</span>
        </li>
        <li>
          Overview
          <span>{movie.overview}</span>
        </li>
        <li>
          Genres
          <span>{genres}</span>
        </li>
      </ul> */}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
