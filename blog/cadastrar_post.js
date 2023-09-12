const qs = require('querystring');
const database = require('./database');

module.exports = function(request, response, params) {
    if (process.env.CHAVE_ACESSO !== undefined && process.env.CHAVE_ACESSO && process.env.CHAVE_ACESSO === params.chaveacesso) {
        let body = '';    
        request.on('data', chunk => {
            body += chunk;    
        })
        .on('end', () => {
            const obj = qs.parse(body);       
            if ('titulo' in obj && 'conteudo' in obj) {
                database.cadastrar_post(obj.titulo, obj.conteudo);   
                response.write("Cadastrado");
            }
            else {
                response.write("Verrifique os parametros 'titulo' e 'conteudo'")
            }            
        });    
    }
    else {
        response.write('acesso nao permitido')
    }
    response.end();    
};
