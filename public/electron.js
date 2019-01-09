const electron = require('electron');
const { ipcMain } = electron;
const { app, BrowserWindow } = electron;

const path = require('path');
const isDev = require('electron-is-dev');

const openDashboardWindow = require('./windows/dashboard');

let mainWindow, dashboardWindow;

function createWindow() {
	mainWindow = new BrowserWindow({ width: 500, height: 200 });
	mainWindow.loadURL(
		isDev ? 'http://localhost:3000/login' : `file://${path.join(__dirname, '../build/index.html/login')}`
	);
	mainWindow.webContents.openDevTools({ detached: true });
	mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

//listening to the commands from renderer process

ipcMain.on('open:dashboard', () => openDashboardWindow(mainWindow));

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
