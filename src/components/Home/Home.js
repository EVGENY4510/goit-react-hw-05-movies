import { getTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';

export default function Home() {
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function trending() {
      try {
        const loadedPost = await getTrending();
        setPost(loadedPost.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <ul>
        {post &&
          post.map(({ title, id, poster_path }) => {
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
