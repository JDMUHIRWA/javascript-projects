import React, { useEffect } from "react";
import "../styles.css";
import MovieCard from "./MoviesCard";

export default function MoviesGrid() {
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

    const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    };

    const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies.."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      ></input>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}