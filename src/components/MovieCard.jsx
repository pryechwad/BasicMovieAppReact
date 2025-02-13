import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="border rounded-lg overflow-hidden shadow-md">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover"/>
      <div className="p-2">
        <h3 className="text-lg font-semibold">{movie.Title}</h3>
        <p className="text-sm text-gray-500">{movie.Year}</p>
      </div>
    </Link>
  );
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
