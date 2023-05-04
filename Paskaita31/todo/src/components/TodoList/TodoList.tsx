import React, { useState } from 'react';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    if (inputValue) {
      setTodos((prev) => [...prev, inputValue]);
    }
  }

  function handleDelete(index: number) {
    setTodos((prev) => prev.filter((value, i) => index !== i));
  }

  return (
    <div>
      <label htmlFor="todo">Add Todo</label>
      <input id="todo" type="text" value={inputValue} onChange={inputHandler} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, i) => {
        return <Todo key={i} text={todo} onDelete={() => handleDelete(i)} />;
      })}
    </div>
  );
}
