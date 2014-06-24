var requi = require('requi');
var app = require(__dirname + '/lib/express');
var config = require(__dirname + '/config/general.json');
var mongoose = require('mongoose').connect(config.mongodb);
var http = require('http');
var server = http.createServer(app);

// Carregando todas os models
var models = requi(__dirname + '/model');

// Carregando todas as APIs
requi(__dirname + '/api');

// Carregando todos os packages
var packs = requi(__dirname + '/packages');
for(var i in packs){
    if(packs.hasOwnProperty(i)){
        var rss = new packs[i]();
        rss.load();
        /*rss.checkData('http://craphound.com/?feed=rss2', function(data){
            console.log(data);
        });*/
    }
}

//console.log(packs);
//Rss.load();

// Iniciando o servidor http
server.listen(config.port);
console.log('server started and listening on port: '+config.port);
