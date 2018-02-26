import { app } from 'electron';

import { TodoWindow } from './todo.window';
import { Window } from './window';

export class TodosWindow extends Window {

    constructor() {
        super('/#todos', {
            title: 'Todos'
        });

        this.window.on('closed', app.quit);
    }

    protected getMenuTemplate() {
        return [
            {
                label: 'File',
                submenu: [
                    {
                        label: 'New Todo',
                        accelerator: 'CmdOrCtrl+N',
                        click: () => new TodoWindow()
                    },
                    {
                        label: 'Quit',
                        accelerator: 'CmdOrCtrl+Q',
                        click: () => app.quit()
                    }
                ]
            }
        ];
    }
}
