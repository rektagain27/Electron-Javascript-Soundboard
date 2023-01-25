const { app, BrowserWindow } = require('electron');

/* const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
}); */

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    icon: __dirname + '/media/2227.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});