import { getMovieByQuery } from 'Api/Api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import ButtonMinus from 'components/ButtonMinus/ButtonMinus';
import ButtonPlus from 'components/ButtonPlus/ButtonPlus';

export default function Movies() {
  const [movie, setMovie] = useState('');
  const [condition, setCondition] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [page, setPage] = useState(1);

  const location = useLocation();

  const changePagePlus = () => {
    setPage(page + 1);
  };

  const changePageMinus = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    (async function getMovieFilter() {
      setCondition(false);
      setIsLoading(true);
      try {
        const loadedMovie = await getMovieByQuery(query, page);

        if (loadedMovie.results.length !== 0) {
          setCondition(false);
          return setMovie(loadedMovie.results);
        }
        setCondition(true);
        setMovie('');
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, page]);

  const handelOnSubmit = e => {
    e.preventDefault();

    if (inputValue.toLowerCase().trim() === '') {
      setSearchParams({});
      setMovie('');
      return alert('Please enter a request!');
    }
    setSearchParams({ query: inputValue });
    setInputValue('');
    setPage(1);
    setMovie('');
  };

  return (
    <div>
      <div>
        <form onSubmit={handelOnSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button>
            <AiOutlineSearch size={25} />
          </button>
        </form>
      </div>
      {isLoading && <Loader />}
      <ul>
        {condition && <div>No match for your search</div>}
        {movie &&
          movie.map(({ title, id, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    width={200}
                  />
                </Link>
                ;
              </li>
            );
          })}
      </ul>
      {movie && page > 1 && <ButtonMinus changePageMinus={changePageMinus} />}
      {movie && <ButtonPlus changePagePlus={changePagePlus} />}
    </div>
  );
}
