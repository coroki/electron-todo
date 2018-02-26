import { app } from 'electron';
import { TodosWindow } from './windows/todos.window';

app.on('ready', () => new TodosWindow());
