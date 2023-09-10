const { Teeny } = require('teeny.js');
const database = require('./blog/database.js');

const app = new Teeny(`${__dirname}/routes.js`, 7000);

database.query(function(dados){console.log(dados);}, "select * from posts", []);

//database.cadastrar_post('teste 43', 'gato');

//database.sql(function(dados){console.log(dados);}, "select * from posts where id = ?", [2]);

app.exec();
