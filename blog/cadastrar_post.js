const qs = require('querystring');
const database = require('./database');

module.exports = function(request, response) {
    let body = '';
    let obj = null;
    request
        .on('data', chunk => {
            body += chunk;    
        })
        .on('end', () => {
            obj = qs.parse(body);            
            if ('titulo' in obj && 'conteudo' in obj)
                database.cadastrar_post(obj.titulo, obj.conteudo);
            else
                console.log("enviar resposta");
        });
};