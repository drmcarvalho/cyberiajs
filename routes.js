module.exports = (app) => {
    // Enable (or disable) debug mode
    app.setDebug(true);

    // Define require function for load from current path
    app.setRequire(require);    

    // Define default charset
    // app.setDefaultCharset('ISO-8859-1');

    app.handlerCodes([403, 404, 405, 500], (request, response, status) => {
        return `Error page: ${status}`;
    });


    app.action('GET', '/listar_posts', './blog/listar_posts.js');
    app.action('POST', '/cadastrar_post', './blog/cadastrar_post.js');
    app.action('GET', '/selecionar/<id:num>', './blog/selecionar_post.js');
}
