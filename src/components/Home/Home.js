import { getTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import ButtonMinus from 'components/ButtonMinus/ButtonMinus';
import ButtonPlus from 'components/ButtonPlus/ButtonPlus';

export default function Home() {
  const [movieTrend, setTrend] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const changePagePlus = () => {
    setPage(page + 1);
  };

  const changePageMinus = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    (async function trending() {
      try {
        const loadedPost = await getTrending(page);
        setTrend(loadedPost.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  return (
    <div>
      {isLoading && <Loader />}
      <ul>
        {movieTrend &&
          movieTrend.map(({ title, id, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`}>
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
      {movieTrend && page > 1 && (
        <ButtonMinus changePageMinus={changePageMinus} />
      )}
      {movieTrend && <ButtonPlus changePagePlus={changePagePlus} />}
    </div>
  );
}
