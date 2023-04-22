"use strict"
const app = require('./app');

require('dotenv').config({path:'variables.env'});

app.set('port', process.env.port);
const server = app.listen(app.get('port'),() => {
    console.log("Servidor rodando na porta: "+ server.address().port);
});

