const express = require('express');
const path = require('path');
const app = express();

// Definir el root de la aplicación
app.use(express.static(path.join(__dirname, 'dist/angularapp/')));

// Cuando se acceda al root enviar el fichero del proyecto
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/angularapp/', 'index.html'));
});

// Escuchar en el puerto 9000
app.listen(9000);
