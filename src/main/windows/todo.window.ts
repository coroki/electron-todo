import { BrowserWindow, Menu, MenuItemConstructorOptions } from 'electron';
import { getLocaleFilePath } from '../utils/file.utils';
import { IWindow } from './window.interface';

class TodoWindow implements IWindow {

    private window: BrowserWindow | null = null;

    public launch = () => {
        this.window = new BrowserWindow({
            title: 'Add Todo',
            width: 350,
            height: 175,
            resizable: false
        });
        const url = getLocaleFilePath('/#todo');
        this.window.loadURL(url);

        this.window.setMenu(this.buildMenu(process.platform));
    }

    private buildMenu = (platform: NodeJS.Platform): Menu => {
        const template: MenuItemConstructorOptions[] = [
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

        return Menu.buildFromTemplate(template);
    }
}

export const todoWindow = new TodoWindow();
