import React, { useState } from "react";
import { Actor } from "../../types";
import {StyledActorItem, StyledItemImg} from "./ActorItem.styles"
type Props = {
	actor: Actor;
};
const ActorItem: React.FC<Props> = ({ actor }) => {
	const [like, setLike] = useState(false);

	const likeClick = () => {
		setLike(true);
	};
	return (
		<StyledActorItem selected={like}>
			<StyledItemImg src={actor.image} alt={actor.name}  />
			<div>Name: {actor.name}</div>
			<div>Surname: {actor.surname}</div>
			<div>Date of Birth: {actor.dateOfBirth}</div>
			<button onClick={likeClick}>{like ? "Liked" : "Neutral"}</button>
		</StyledActorItem>
	);
};

export default ActorItem;
