const database = require('./database.js');

module.exports = function(request, response, params) {
    if (process.env.CHAVE_ACESSO !== undefined && process.env.CHAVE_ACESSO && process.env.CHAVE_ACESSO === params.chaveacesso) {
        database.query(function(dados) {
            if (dados && dados.length) {
                database.deletar_post(params.id);
                response.end(`Post ${params.id} deletado\n`);
            }
            else {
                response.end(`Post ${params.id} não foi encontrado\n`);
            }
        }, 'select id from posts where id = ?', [params.id]);
    }
    else {
        response.end('Acesso negado\n');
    }    
}
