const { Teeny } = require('teeny.js');
const database = require('./blog/database.js');

const app = new Teeny(`${__dirname}/routes.js`, 7000);

console.log("Iniciando database");
database.criar_tabela();

app.exec();
