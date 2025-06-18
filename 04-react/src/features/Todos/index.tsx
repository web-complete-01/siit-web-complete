import { useEffect, useState } from 'react';
import type { Todo } from './types';
import { TodoItem } from './TodoItem';
import { useAuthContext } from '../Auth/AuthContext';

const apiUrl = import.meta.env.VITE_API_URL;

export function Todos() {
  const [todos, setTodos] = useState<null | Todo[]>(null);
  const { user, accessToken } = useAuthContext();

  useEffect(() => {
    async function getTodos() {
      const data = await fetch(`${apiUrl}/todos`).then((res) => res.json());

      setTodos(data);
    }

    getTodos();
  }, []);

  async function handleAddTodo(formData: FormData) {
    if (!user || !todos) {
      return;
    }

    const data = await fetch(`${apiUrl}/todos`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: formData.get('title'),
        completed: false,
        userId: user.id,
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);
  }

  async function handleCompleteTodo(todo: Todo) {
    await fetch(`${apiUrl}/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: todo.completed }),
    });

    setTodos([...todos!]);
  }

  async function handleDeleteTodo(todo: Todo) {
    await fetch(`${apiUrl}/todos/${todo.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setTodos(todos!.filter((t) => t !== todo));
  }

  return (
    <>
      <h1>Todos</h1>
      <form action={handleAddTodo}>
        <label htmlFor="title">What do you want to do?</label>{' '}
        <input type="text" id="title" name="title" />{' '}
        <button type="submit">Add Todo</button>
      </form>
      {!todos && <strong>Loading ...</strong>}
      {todos && todos.length === 0 && (
        <strong>You are all done for today!</strong>
      )}
      {todos && (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onComplete={handleCompleteTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}
