import React, { useEffect } from "react";
import "../styles.css";
import MovieCard from "./MoviesCard";

export default function MoviesGrid() {
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [genre, setGenre] = React.useState("All Genres");
  const [rating, setRating] = React.useState('All Ratings');

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

      <div className="filter-bar">
            <div className="filter-slot">
                <label>Genre</label>
                <select className="filter-dropdown">
                    <option value="All Genres">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                </select>
            </div>
            <div className="filter-slot">
                <label>Rating</label>
                <select className="filter-dropdown">
                <option value="All">All</option>
                    <option value="Good">Good</option>
                    <option value="Ok">Ok</option>
                    <option value="Bad">Bad</option>
                </select>
            </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}