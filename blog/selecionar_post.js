const database = require('./database.js');
const template = require('./template.js');

module.exports = function(request, response, params) {        
    database.query(function(result) {        
        if (result && result.length) {
            titulo = result[0].titulo;
            conteudo = result[0].conteudo;
            response.write(template.base_html_post.replace('@titulo', titulo).replace('@conteudo', conteudo));
        }                
        else {
            response.write(template.base_html_post.replace('@titulo', 'Post não encontrado').replace('@conteudo', ''));
        }
        response.end();                        
    },"select titulo, conteudo from posts where id = ?", [params.id]);
}