// Import stylesheets
import './style.css';

// Import modules
import Todos from './todos';
import {userCredentials} from './userCredentials';
import { listTodos, addTodo, editTodo, deleteTodo } from './todoFunctions';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = "<h1>Todo list</h1>";

const todos: Todos = {
  userId:userCredentials.userId,
  todos:[]
};

// Add todos
addTodo(todos, 'Buy Phones');
addTodo(todos, 'Ride the bike');
addTodo(todos, 'Finish Lab 1');

// List todos
listTodos(todos);

// Edit a todo
editTodo(todos, 1, 'Buy new shoes');
listTodos(todos);

// Delete a todo
deleteTodo(todos, 0);
listTodos(todos);