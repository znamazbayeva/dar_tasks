import React, { useState } from "react";
import { Actor } from "../../types";

type Props = {
	actor: Actor;
};
const ActorItem: React.FC<Props> = ({ actor }) => {
	const [like, setLike] = useState(false);

	const likeClick = () => {
		setLike(true);
	};
	return (
		<div className="actor-item" style={{ marginBottom: "1rem" }}>
			<img src={actor.image} alt={actor.name} style={{ width: "200px" }} />
			<div>Name: {actor.name}</div>
			<div>Surname: {actor.surname}</div>
			<div>Date of Birth: {actor.dateOfBirth}</div>
			<button onClick={likeClick}>{like ? "Liked" : "Neutral"}</button>
		</div>
	);
};

export default ActorItem;
