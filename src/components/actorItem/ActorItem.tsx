import React, { useState } from "react";
import { Actor } from "../../types";
import {StyledActorItem, StyledItemImg} from "./ActorItem.styles"
type Props = {
	actor: Actor;
	isSelected: boolean;
	onItemActorClick: (v : Actor) => void;
};
const ActorItem: React.FC<Props> = ({ 
	actor ,     
	isSelected = false, 
    onItemActorClick,
}) => {
	const [like, setLike] = useState(false);

	const likeClick = () => {
		setLike(true);
	};
	return (
		<StyledActorItem selected={isSelected}>
			<div onClick={() => onItemActorClick(actor)}>			
				<StyledItemImg src={actor.image} alt={actor.name}  />
				<div>Name: {actor.name}</div>
				<div>Surname: {actor.surname}</div>
				<div>Date of Birth: {actor.dateOfBirth}</div>
			</div>

			<button onClick={likeClick}>{like ? "Liked" : "Neutral"}</button>
		</StyledActorItem>
	);
};

export default ActorItem;
