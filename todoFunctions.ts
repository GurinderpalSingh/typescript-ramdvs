// todoFunctions.ts

import { Todos } from './todos';

// Function to list todos
export function listTodos(todos: Todos): void {
  console.log('Todo List:');
  todos.todos.forEach((todo, index) => {
    console.log('${index + 1}. ${todo}');
  });
}

// Function to add a todo
export function addTodo(todos: Todos, newTodo: string): void {
  todos.todos.push(newTodo);
  console.log('Todo added successfully.');
}

// Function to edit a todo
export function editTodo(todos: Todos, index: number, updatedTodo: string): void {
  if (index >= 0 && index < todos.todos.length) {
    todos.todos[index] = updatedTodo;
    console.log('Todo edited successfully.');
  } else {
    console.log('Invalid index.');
  }
}

// Function to delete a todo
export function deleteTodo(todos: Todos, index: number): void {
  if (index >= 0 && index < todos.todos.length) {
    todos.todos.splice(index, 1);
    console.log('Todo deleted successfully.');
  } else {
    console.log('Invalid index.');
  }
}