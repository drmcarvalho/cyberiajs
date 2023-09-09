const { Teeny } = require('Teeny.js');
const database = require('./blog/database');

const app = new Teeny(`${__dirname}\\routes.js`, 7000);


console.log("Inicializado DB");
database.criar();


app.exec();
