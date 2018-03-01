import { BrowserWindow } from 'electron';

import { Window } from './window';

export class TodoWindow extends Window {

    constructor(parent: BrowserWindow) {
        super('/#todo', {
            title: 'Add Todo',
            modal: true,
            maximizable: false,
            minimizable: false,
            movable: false,
            width: 350,
            height: 175,
            parent
        });
    }

    protected getMenuTemplate() {
        return [
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Close',
                        click: () => {
                            if (this.window) {
                                this.window.close();
                            }
                        }
                    }
                ]
            }
        ];
    }
}
