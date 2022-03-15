import React from "react";
import ActorsList from "../../components/actorsList/ActorsList";
import MoviesList from "../../components/moviesList/MoviesList";
import { movies, actors } from "../../mock";

const Main = () => {
	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			<div>
				<h2>Movies ({movies.length})</h2>
				<MoviesList movies={movies} />
			</div>
			<div>
				<h2>Actors</h2>
				<ActorsList actors={actors} />
			</div>
		</div>
	);
};

export default Main;
