import { useId } from 'react';
import type { Todo } from './types';

type TodoItemProps = {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onComplete: (todo: Todo) => void;
};

export function TodoItem({ todo, onDelete, onComplete }: TodoItemProps) {
  const id = useId();
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={todo.completed}
        onChange={(e) => {
          todo.completed = e.target.checked;
          onComplete(todo);
        }}
      />{' '}
      <label htmlFor={id}>{todo.title}</label>{' '}
      <button onClick={() => onDelete(todo)}>&#x2718;</button>
    </li>
  );
}
