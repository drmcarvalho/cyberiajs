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

    app.setPattern('index', 'listar_posts|index|home|inicio');

    app.action('GET', '/', './blog/listar_posts.js');
    app.action('GET', '/<myindex:index>', './blog/listar_posts.js');
    app.action('POST', '/cadastrar_post/<chaveacesso>', './blog/cadastrar_post.js');
    app.action('GET', '/post/<id:num>', './blog/selecionar_post.js');
    app.action('POST', '/deletar_post/<chaveacesso>-<id:num>', './blog/deletar_post.js');
}
