import type { Boardgame } from "./types"

import styles from "./Boardgames.module.css";
import { Link } from "react-router";

type BoardgameItemProps = {
  game: Boardgame;
}
export function BoardgameItem({ game }: BoardgameItemProps) {
  return (
    <article className={styles.card}>
      <Link to={String(game.id)}>
        <img src={game.thumbnail} alt={`${game.name} poster`} />
        <h2>{game.name}</h2>
      </Link>
    </article>
  )
}
