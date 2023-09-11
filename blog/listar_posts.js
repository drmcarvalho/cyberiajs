const database = require('./database.js');
const template = require('./template.js');

module.exports = function(request, response, status) {            
    database.query(function(dados) {        
        let postagens_template_html = [];
        for (const post of dados) {
            postagens_template_html.push(`
                <article> 
                    <a href="#${post.id}"> 
                        <h2>${post.titulo}</h2> 
                        <p>${post.conteudo.slice(3, 20) + '...'}</p> 
                        <footer> 
                            Publicado em <time datetime="${post.publicado_em}">${post.publicado_em}</time> 
                        </footer> 
                    </a>
                </article>
            `);        
        }
        let template_lista_postagens = template.base_lista_post_html.replace('@postagens', postagens_template_html.join(""));
        response.write(template.base_html_cyberia.replace('@template', template_lista_postagens).replace('@identificador', ''));
        response.end();
    },"select * from posts", []);        
};
