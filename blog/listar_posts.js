const database = require('./database.js');
const template = require('./template.js');

module.exports = function(request, response, status) {            
    database.query(function(dados) {
        let postagens_template_html = [];
        for (const post of dados) {
            postagens_template_html.push(`
                <article class="separador"> 
                    <a href="#${post.id}"> 
                        <h2 style="text-align: left; font-size: 3.2vh;">${post.titulo}</h2> 
                        <p>${post.conteudo.slice(3, 20) + '...'}</p> 
                        <footer> 
                            <p style="font-size: 1.3vh;">Publicado em <time datetime="${post.publicado_em}">${post.publicado_em}</time></p>
                        </footer> 
                    </a>
                </article>
            `);
        }
        
        const template_final_posts = template.base_lista_post_html.replace('@postagens', postagens_template_html.join(""));
        response.write(template.base_html_cyberia.replace('@template', template_final_posts).replace('@identificador', ''));
        response.end();
    }, "select * from posts", []);
};
