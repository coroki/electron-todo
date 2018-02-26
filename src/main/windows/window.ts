import { BrowserWindow, BrowserWindowConstructorOptions, Menu, MenuItemConstructorOptions } from 'electron';

export abstract class Window {

    protected window: BrowserWindow;

    constructor(url: string, options?: BrowserWindowConstructorOptions) {
        this.window = new BrowserWindow(options);

        const prefix = process.env.NODE_ENV === 'development'
            ? 'http:localhost:8080/'
            : `file://${__dirname}/`;

        this.window.loadURL(prefix + url);

        const menu = this.getMenu();
        this.window.setMenu(menu);
    }

    protected abstract getMenuTemplate(): MenuItemConstructorOptions[];

    private getMenu() {
        const menuTemplate = this.getMenuTemplate();
        if (process.env.NODE_ENV === 'development') {
            menuTemplate.push({
                label: 'Developer',
                submenu: [
                    {
                        label: 'Toggle Developer Tools',
                        accelerator: 'Ctrl+Shift+I',
                        click: (item, focusedWindow) => focusedWindow.webContents.toggleDevTools()
                    }
                ]
            });
        }
        const menu = Menu.buildFromTemplate(menuTemplate);
        return menu;
    }

}
