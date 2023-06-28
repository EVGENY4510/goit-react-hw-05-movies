import { getCast } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      {cast &&
        cast.map(({ original_name, profile_path, id }) => {
          return (
            <div key={id}>
              <img
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt={original_name}
                width={100}
              />
              <p>{original_name}</p>
            </div>
          );
        })}
    </div>
  );
}
