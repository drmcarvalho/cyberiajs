const database = require('./database.js');
const template = require('./template.js');

module.exports = function(request, response, params) {    
    database.query(function(result) {        
        const aplica_paramtros_template = (titulo, conteudo, data, id) => {
            return template.base_html_cyberia
                .replace('@template', template.post_html
                    .replace('@titulo', titulo)
                    .replace('@conteudo', conteudo)
                    .replace('@dataHora', data)
                    .replace('@dataHora', data))
                .replace('@identificador',  `id=${id}`);
        };

        if (result && result.length) {
            titulo = result[0].titulo;
            conteudo = result[0].conteudo;
            data = result[0].publicado_em;
            response.write(aplica_paramtros_template(titulo, conteudo, data, params.id));
        }                
        else {
            response.write(aplica_paramtros_template('Post não encontrado', '', '', params.id));
        }
        response.end();                        
    }, "select titulo, conteudo, publicado_em from posts where id = ?", [params.id]);
}