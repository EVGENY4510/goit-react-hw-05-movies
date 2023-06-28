import { getCast } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    (async function castInfo() {
      try {
        const getCastInfo = await getCast(movieId);
        setCast(getCastInfo.cast);
      } catch (error) {
      } finally {
      }
    })();
  }, [movieId]);

  console.log(cast);
  return (
    <div className={css.castWrapper}>
      {cast &&
        cast.map(({ original_name, profile_path, id }) => {
          return (
            <div className={css.castCard} key={id}>
              <img
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt={original_name}
                width={150}
              />
              <div className={css.textCast}>
                <p>{original_name}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
