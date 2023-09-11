module.exports = function(request, response, params) {
    let r = new URL(request.url, `http://${request.headers.host}`)
    response.write(r.host + r.pathname);    
    response.end();
}