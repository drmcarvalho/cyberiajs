const database = require('./database.js');

module.exports = function(request, response, status) {            
    database.query(function(dados) {
        response.write("teste saida");
        console.log(dados);
    },"select * from posts",[]);

    response.write("fora da funcao query");
};