import { useState } from 'react';
import { fetchMovies } from '../api/movieApi';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    const data = await fetchMovies(query);
    if (data.Response === 'True') {
      setMovies(data.Search);
      setError('');
    } else {
      setMovies([]);
      setError(data.Error);
    }
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
