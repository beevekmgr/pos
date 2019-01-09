let dashboardWindow;
const electron = require('electron')
const {BrowserWindow} = electron;
const {app} = electron;
const isDev = require("electron-is-dev");

const openDashboardWindow = (mainWindow) =>{
    dashboardWindow = new BrowserWindow({ width:900, height: 700 });
    dashboardWindow.loadURL(
      isDev
        ? "http://localhost:3000/app"
        : `file://${path.join(__dirname, "../build/index.html/app")}`
    );
    dashboardWindow.webContents.openDevTools({detached:true});
    dashboardWindow.on("closed", () => (dashboardWindow = null));
    mainWindow.close();
}

module.exports = openDashboardWindow