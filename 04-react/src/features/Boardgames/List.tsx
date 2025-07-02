import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import type { Boardgame } from './types';
import { BoardgameItem } from './Item';
import { Pagination } from './Pagination';
import { useAuthContext } from '../Auth/AuthContext';
import clsx from 'clsx';

import styles from './Boardgames.module.css';

const apiUrl = import.meta.env.VITE_API_URL;
const itemsPerPage = 10;

export function List() {
  const [games, setGames] = useState<null | Boardgame[]>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [params] = useSearchParams();
  const page = Number(params.get('page')) || 1;
  const { accessToken } = useAuthContext();

  useEffect(() => {
    async function getGames() {
      const data = await fetch(
        `${apiUrl}/boardgames?_page=${page}&limit=${itemsPerPage}`
      ).then((res) => {
        setTotalCount(Number(res.headers.get('X-Total-Count')));
        return res.json();
      });
      setGames(data);
    }

    getGames();
  }, [page]);

  return (
    <section className={styles.contentWrapper}>
      <h1 className="fullWidth">Boardgames</h1>
      {!games && <strong>Loading ...</strong>}
      {games &&
        games.map((game) => <BoardgameItem key={game.id} game={game} />)}
      {totalCount && (
        <Pagination itemsPerPage={itemsPerPage} totalCount={totalCount} />
      )}
      {games && accessToken && (
        <Link to="add" className={clsx(styles.addGameBtn)}>
          <HiMiniPlusCircle />
        </Link>
      )}
    </section>
  );
}
