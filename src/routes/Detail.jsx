import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  console.log(movie);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <div>{movie.title}</div>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
};
