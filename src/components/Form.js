import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [genresData, setGenresData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=da8ece05a4536852db0048e34823a923&query=" +
          inputSearch +
          "&language=fr-FR"
      )
      .then((res) => setMoviesData(res.data.results));
    //pour chercher le genre equivalent au numéro de l'api
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?language=fr", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYThlY2UwNWE0NTM2ODUyZGIwMDQ4ZTM0ODIzYTkyMyIsInN1YiI6IjY2MTNmOGIxZTEwZjQ2MDE0YTM4ZDQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-RqTIQj5_P73JnGjjazv8n_rSLrn6KI2xJbA1AAGeGU",
        },
      })
      .then((res) => setGenresData(res.data.genres))
      .catch((err) => console.error(err));
  }, [inputSearch]);

  const getGenreNames = (genreIds) => {
    return genreIds.map((genreId) => {
      const genre = genresData.find((genre) => genre.id === genreId);
      return genre ? genre.name : "Unknown";
    });
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="nom de film"
            id="search-input"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>▶️</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop<span>▶️</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData.slice(0, 12).map((movie) => {
          const genres = getGenreNames(movie.genre_ids);
          return <Cards key={movie.id} movie={movie} genres={genres} />;
        })}
      </div>
    </div>
  );
};

export default Form;
