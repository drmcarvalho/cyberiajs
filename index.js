const { Teeny } = require('teeny.js');
const database = require('./blog/database.js');

const app = new Teeny(`${__dirname}/routes.js`, 3000);

console.log("Iniciando banco de dados");
database.criar_tabela();

app.exec();
