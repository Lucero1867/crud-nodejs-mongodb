const path =require('path');
const express = require('express');
const app = express(); //ambas lineas ayudan a que el archivo funcione con el framework//

//importando routes

//configuración
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middlewares


//comienzo del servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port, ${app.get('port')}`);
});