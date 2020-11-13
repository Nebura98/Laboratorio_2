import './styles.css';
import {Todo} from './classes/index';
import{TodoList} from './classes/index';
import { crearTodoHtml } from './js/componentes';
export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml);
console.log(todoList.todos);