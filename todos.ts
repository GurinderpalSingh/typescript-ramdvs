// module
import Todo from './todo';

export default interface Todos {
  userId?: number | string;
  todos: Todo[];
}