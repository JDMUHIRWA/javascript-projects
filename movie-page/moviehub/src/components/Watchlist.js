import React from 'react';
import '../styles.css';

export default function Watchlist (movies, watchlist, toggleWatchlist) {
    return (
        <div className='watchlist'>
            <h1>My Watchlist</h1>
            <p>You have no movies in your watchlist. Add some!</p>
        </div>
    )
}