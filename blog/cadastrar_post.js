const qs = require('querystring');
const database = require('./database');

module.exports = function(request, response, params) {
    if (!(process.env.CHAVE_ACESSO !== undefined && process.env.CHAVE_ACESSO && process.env.CHAVE_ACESSO === params.chaveacesso)) {
        response.end('Acesso negado\n')
        return;
    }

    let body = '';
    request.on('data', chunk => (body += chunk))
        .on('end', () => {
            const obj = qs.parse(body);
            if ((!'titulo' in obj || !'conteudo' in obj) || (!obj.titulo || !obj.conteudo)) {
                response.end("Verrifique os parametros 'titulo' e 'conteudo'\n")
                console.log('teste erro cadastro');
                return;
            }

            database.cadastrar_post(obj.titulo, obj.conteudo);
            response.end("Cadastrado\n");
        });    
};
