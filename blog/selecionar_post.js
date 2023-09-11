const database = require('./database.js');
const template = require('./template.js');

module.exports = function(request, response, params) {    
    response.write("Id informado " + params.id);    
    response.end();
}