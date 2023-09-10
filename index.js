const { Teeny } = require('teeny.js');
const database = require('./blog/database.js');

const app = new Teeny(`${__dirname}/routes.js`, 7000);

console.log("Criando tabela caso nao exista");
database.criar_tabela();

//database.cadastrar_post('teste 43', 'gato');

app.exec();
