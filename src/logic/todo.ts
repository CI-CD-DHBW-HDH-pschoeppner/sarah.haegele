import { writable } from "svelte/store";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  if (
    todo.value.length > 255 ||
    todo.value.length === 0 ||
    todos.some((t) => t.value.toLowerCase() === todo.value.toLowerCase())
  ) {
    return false;
  }
  return true;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  return {
    id: todo.id,
    value: todo.value.charAt(0).toUpperCase() + todo.value.slice(1),
    done: todo.done,
  };
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  let rgb = "";
  for (let i = 0; i < 3; i++) {
    rgb += Math.floor(Math.random() * 100 + 50);
    rgb += i < 2 ? "," : "";
  }
  return `rgb(${rgb})`;
}

export const todoList = writable<TodoItem[]>([]);
