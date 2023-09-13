const database = require('./database.js');

module.exports = function(request, response, params) {
    if (!(process.env.CHAVE_ACESSO !== undefined && process.env.CHAVE_ACESSO && process.env.CHAVE_ACESSO === params.chaveacesso)) {
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
