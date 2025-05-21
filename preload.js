const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // bisa digunakan jika kamu ingin menambahkan IPC di masa depan
});
