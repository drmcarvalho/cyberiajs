const database = require('./database.js');
const autorizacao = require('./autorizacao');

module.exports = function(request, response, params) {
    if (!autorizacao.possui_autorizacao(params.chaveacesso)) {
        response.end('Acesso negado\n')
        return;
    }
    
    database.query(function(dados) {
        if (!dados || !dados.length) {            
            response.end(`Post ${params.id} não foi encontrado\n`);
            return;
        }

        database.deletar_post(params.id);
        response.end(`Post ${params.id} deletado\n`);        
    }, 'select id from posts where id = ?', [params.id]);        
}
