const sqlite = require('sqlite3');
const db = new sqlite.Database('cyberia.db');

var query = function(callback, sql, params) {    
    db.all(sql, params, function(err, rows) {
        if (err) {
            callback(err);
        }
        else {
            callback(rows);
        }
    });
};

function cadastrar_post(titulo, conteudo) {
    db.run("insert into posts(titulo, conteudo) values (?,?)", [titulo, conteudo]);
}

module.exports.query = query;
module.exports.cadastrar_post = cadastrar_post;
