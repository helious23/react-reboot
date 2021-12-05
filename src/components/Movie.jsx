import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Movie = ({ coverImg, title, summary, genres, id }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propType = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
