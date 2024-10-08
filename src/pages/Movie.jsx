import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviePage } from "../Style/StylesMovies";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <MoviePage>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="slogan">{movie.tagline}</p>
          <div>
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div>
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>

          <div>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>

          <div className="info">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p className="description">{movie.overview}</p>
          </div>
        </>
      )}
    </MoviePage>
  );
};

export default Movie;
