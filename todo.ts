// module
export default interface Todo {
  id: 'number | string';
  title: string;
  description?: string;
  dueDate: string;
  status: boolean;
  type: 'task' | 'event';
 }