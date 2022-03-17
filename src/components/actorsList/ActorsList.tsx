import React from "react";
import { Actor } from "../../types";
import ActorItem from "../actorItem/ActorItem";
import styles from "./ActorsList.module.scss"
type Props = {
	actors: Actor[];
	selectedId? : number;
	onActorClick: (v: Actor) => void;
};

const ActorsList: React.FC<Props> = ({ actors, selectedId, onActorClick }) => {
	return (
		<div className={styles.actorList} >
			{actors.map((actor) => (
				<div className={styles.actorListItem} key={actor.id}>
					<ActorItem  
						actor={actor} 
						isSelected={actor.id === selectedId}
						onItemActorClick={onActorClick}
					/>
				</div>
			))}
		</div>
	);
};

export default ActorsList;
