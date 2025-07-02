import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import Modal from 'react-modal';
import type { Boardgame } from './types';
import { useAuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';

import styles from './Boardgames.module.css';

const apiUrl = import.meta.env.VITE_API_URL;

Modal.setAppElement('#root');

export function Details() {
  const [game, setGame] = useState<null | Boardgame>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const { accessToken, logout } = useAuthContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    async function getGame() {
      const data = await fetch(`${apiUrl}/boardgames/${id}`).then((res) =>
        res.json()
      );
      setGame(data);
    }

    getGame();
  }, [id]);

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleDelete() {
    await fetch(`${apiUrl}/boardgames/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      if (!res.ok && res.status === 401) {
        logout();
        navigate('/login', {
          state: { from: pathname },
        });
      }

      toast.info(`"${game!.name}" has been successfully deleted!`);
      navigate(-1);
    });
  }

  if (!game) {
    return <strong>Loading ...</strong>;
  }

  return (
    <>
      <h1>{game.name}</h1>
      {accessToken && (
        <div>
          <Link to="edit" className="btn">
            Edit
          </Link>{' '}
          <button
            type="button"
            className="btn btnDestructive"
            onClick={() => setIsModalOpen(true)}
          >
            Delete
          </button>
        </div>
      )}
      <img src={game.image} alt={`${game.name} poster`} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        <h2>Delete "{game.name}"?</h2>
        <p>
          Are you sure you want to delete "{game.name}"? This action is
          irreversible!
        </p>
        <footer>
          <button type="button" className="btn" onClick={closeModal}>
            Cancel
          </button>
          <button
            type="button"
            className="btn btnDestructive"
            onClick={handleDelete}
          >
            Delete
          </button>
        </footer>
      </Modal>
    </>
  );
}
