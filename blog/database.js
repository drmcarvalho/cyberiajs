const sqlite = require('sqlite3');
const db = new sqlite.Database('cyberia.db');

function criar() {
    db.serialize(() => {
        db.run("create table if not exists posts(id integer primary key AUTOINCREMENT, titulo text, conteudo text)");
    });
}

function cadastrar_post(titulo, conteudo) {
    db.run("insert into posts(titulo, conteudo) values ($titulo, $conteudo)", {
        $titulo: titulo, 
        $conteudo: conteudo
    });    
}

function listar_todos_post() {
    let posts = [];
    db.each("select * from posts order by id", (err, row) => {
        posts.push({
            $titulo: row.titulo, 
            $conteudo: row.conteudo
        })
    });
    return posts;
}

function selecionar_post_por_id(id) {
    let post = {};
    db.each("select titulo, conteudo from posts where id = $id limit 1", {$id: id}, (err, row) => {
        post = {
            $titulo: row.titulo, 
            $conteudo: row.conteudo
        };
    });
    return post;
}

module.exports.criar = criar;
module.exports.cadastrar_post = cadastrar_post;
module.exports.listar_todos_post = listar_todos_post;
module.exports.selecionar_post_por_id = selecionar_post_por_id;