const { Teeny } = require('Teeny.js');
const database = require('./blog/database.js');

const app = new Teeny(`${__dirname}\\routes.js`, 7000);


console.log("Inicializado DB");
database.criar();

res = database.selecionar_post_por_id(2);
console.log(res);


app.exec();
