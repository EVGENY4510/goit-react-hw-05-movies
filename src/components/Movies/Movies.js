import { getMovieByQuery } from 'Api/Api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Link, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movie, setMovie] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    (async function getMovieFilter() {
      try {
        const loadedMovie = await getMovieByQuery(query);
        setMovie(loadedMovie.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);
  const handelOnClick = () => {
    setSearchParams({ query: inputValue });
    setInputValue('');
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="button" onClick={handelOnClick}>
          Search
        </button>
      </div>
      {isLoading && <Loader />}
      <ul>
        {movie &&
          movie.map(({ title, id, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    width={200}
                  />
                  {/* <h2>{title}</h2> */}
                </Link>
                ;
              </li>
            );
          })}
      </ul>
    </div>
  );
}
