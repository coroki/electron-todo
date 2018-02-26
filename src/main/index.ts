import { app } from 'electron';
import { todosWindow } from './windows/todos.window';

app.on('ready', todosWindow.launch);
