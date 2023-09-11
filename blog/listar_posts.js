const database = require('./database.js');

module.exports = function(request, response, status) {            
    database.query(function(dados) {
        
    },"select * from posts",[]);        
};
