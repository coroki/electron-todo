import { app, BrowserWindow, Menu, MenuItemConstructorOptions } from 'electron';
import { getLocaleFilePath } from '../utils/file.utils';
import { todoWindow } from './todo.window';
import { IWindow } from './window.interface';

class TodosWindow implements IWindow {

    private window: BrowserWindow | null = null;

    public launch = () => {
        this.window = new BrowserWindow({
            title: 'Todos'
        });
        const url = getLocaleFilePath('/#todos');
        this.window.loadURL(url);

        this.window.setMenu(this.buildMenu(process.platform));
    }

    private buildMenu = (platform: NodeJS.Platform): Menu => {
        const template: MenuItemConstructorOptions[] = [
            {
                label: 'File',
                submenu: [
                    {
                        label: 'New Todo',
                        accelerator: 'CmdOrCtrl+N',
                        click: todoWindow.launch
                    },
                    {
                        label: 'Quit',
                        accelerator: 'CmdOrCtrl+Q',
                        click: () => app.quit()
                    }
                ]
            }
        ];

        return Menu.buildFromTemplate(template);
    }
}

export const todosWindow = new TodosWindow();