import React, { useEffect } from "react";
import '../styles.css';
import MovieCard from './MoviesCard';

export default function MoviesGrid() {
    const [movies, setMovies] = React.useState([]);

        
        useEffect (() => {
            fetch('movies.json')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
            })
            
        }, [])
        return (
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        );
}