import React from "react";

const Cards = ({ movie, genres }) => {
  const date = new Date(movie.release_date).toLocaleDateString("fr-FR");
  return (
    <div className="card">
      <img
        src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
        alt={movie.original_title}
      />
      <h2>{movie.original_title}</h2>
      <h5>Sorti le : {date} </h5>
      <h4>
        {movie.vote_average.toFixed(1)}/10 <span>⭐</span>
      </h4>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      <div className="btn">Ajouter aux coups de coeur</div>
    </div>
  );
};

export default Cards;
