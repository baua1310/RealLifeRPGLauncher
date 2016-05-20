const electron = require('electron');
const BrowserWindow = require('electron').remote
const app = require('electron').remote
const shell = require('electron').shell;
const storage = require('electron-json-storage')
const Winreg = require('winreg')
const {dialog} = require('electron').remote
const {ipcRenderer} = require('electron');

getLauncherNotification(showNotf);

function showNotf(jsonData, success) {
    if (success) {
        document.getElementById('dialog_notf_text').innerHTML = jsonData.Notification;

        if (jsonData.UseNotification) {
            var dialog = $('#dialog_notf').data('dialog');
            dialog.open();
        }
    } else {
        console.log('Error requesting Notification: ' + jsonData);
    }
}