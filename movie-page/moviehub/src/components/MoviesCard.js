import React from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
  const handleError = (e) => {
    e.target.src = "images/default.png"
};
    const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 6 && rating < 8) {
      return "rating-ok";
    } else {
      return "bad";
    }
  };
  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <h3 className="movie-card-title">{movie.title}</h3>
      <p className="movie-card-genre">{movie.genre}</p>
      <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
    </div>
  );
}
