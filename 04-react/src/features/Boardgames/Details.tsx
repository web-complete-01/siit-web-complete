import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { Boardgame } from './types';

const apiUrl = import.meta.env.VITE_API_URL;

export function Details() {
  const [game, setGame] = useState<null | Boardgame>(null);
  const { id } = useParams();

  useEffect(() => {
    async function getGame() {
      const data = await fetch(`${apiUrl}/boardgames/${id}`).then((res) =>
        res.json()
      );
      setGame(data);
    }

    getGame();
  }, [id]);

  if(!game) {
    return <strong>Loading ...</strong>;
  }

  return (
    <>
      <h1>{game.name}</h1>
      <img src={game.image} alt={`${game.name} poster`} />
    </>
  );
}
