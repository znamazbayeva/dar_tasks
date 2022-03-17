import React from "react";
import { Actor } from "../../types";
import ActorItem from "../actorItem/ActorItem";
import styles from "./ActorsList.module.scss"
type Props = {
	actors: Actor[];
};

const ActorsList: React.FC<Props> = ({ actors }) => {
	return (
		<div className={styles.actorList} >
			{actors.map((actor) => (
				<div className={styles.actorListItem} key={actor.id}>
					<ActorItem  actor={actor} />
				</div>
			))}
		</div>
	);
};

export default ActorsList;
