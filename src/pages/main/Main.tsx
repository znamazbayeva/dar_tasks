import React, { useState } from "react";
import ActorsList from "../../components/actorsList/ActorsList";
import MoviesList from "../../components/moviesList/MoviesList";
import { movies, actors } from "../../mock";
import { Movie } from "../../types";
import "./Main.scss"

const Main = () => {
	const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

	const movieClickHandler = (v: Movie) => {
		setSelectedMovie(v);
	};
	return (
		<div className="MainPage">
			<div className="element">
				<h2 className="header">Movies ({movies.length})</h2>
				<MoviesList selectedId={selectedMovie?.id} onMovieClick={movieClickHandler}  movies={movies}  />
			</div>
			<div className="element">
				<h2 className="header">Actors</h2>
				<ActorsList actors={actors} />
			</div>
		</div>
	);
};

export default Main;
