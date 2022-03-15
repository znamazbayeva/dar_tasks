import React from "react";
import { Actor } from "../../types";
import ActorItem from "../actorItem/ActorItem";
type Props = {
	actors: Actor[];
};

const ActorsList: React.FC<Props> = ({ actors }) => {
	return (
		<div className="actors-list">
			{actors.map((actor) => (
				<ActorItem key={actor.id} actor={actor} />
			))}
		</div>
	);
};

export default ActorsList;
