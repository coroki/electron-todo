import { Window } from './window';

export class TodoWindow extends Window {

    constructor() {
        super('/#todo', {
            title: 'Add Todo',
            width: 350,
            height: 175,
            resizable: false
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
