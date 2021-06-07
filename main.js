const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 500
    });
    mainWindow.setPosition(-780, 50);
    mainWindow.loadURL('https://youtube.com/', {
        userAgent: 'Chrome'
    });
    //mainWindow.webContents.openDevTools();
    subWindow = new BrowserWindow({
        width: 700,
        height: 500
    });
    subWindow.setPosition(-780, 550);
    subWindow.loadURL('https://trello.com/', {
        userAgent: 'Chrome'
    });
    // amaWindow = new BrowserWindow({
    //     width: 700,
    //     height: 500
    // });
    // amaWindow.setPosition(2700, 50);
    // amaWindow.loadURL('https://music.amazon.co.jp/', {
    //     userAgent: 'Chrome'
    // });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    subWindow.on('closed', function () {
        mainWindow = null;
    });
    /*amaWindow.on('closed', function () {
        mainWindow = null;
    });
    */
    let checked = false;
    setInterval(function () {
        let mousePos = electron.screen.getCursorScreenPoint();
        console.log(mousePos);
        if (!checked && mousePos.x < 5 && mousePos.y <= 850) {
            mainWindow.setPosition(0, 50);
        } else if (!checked && mousePos.x < 5 && mousePos.y > 850) {
            subWindow.setPosition(0, 550);
        } else {
            if (!checked && mousePos.x >= 750 && mousePos.y > 1010) {
                mainWindow.setPosition(-780, 50);
                subWindow.setPosition(-780, 550);
            }
        }
    }, 1000);
});