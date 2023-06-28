import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/Api';

export default function Reviews() {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    (async function reviewsInfo() {
      try {
        const getReviewsInfo = await getReviews(movieId);
        setReviews(getReviewsInfo.results);
      } catch (error) {
      } finally {
      }
    })();
  }, [movieId]);

  console.log(reviews);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        reviews.map(({ author, content, id }) => {
          return (
            <div key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

// We don't have any rewiews for this movie.
