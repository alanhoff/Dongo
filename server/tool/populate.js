var async = require('async');
var requi = require('requi');
var mongoose = require('mongoose');
var models = requi(__dirname + '/../model');
var config = require(__dirname + '/../config/general.json');

// Conectando no banco de dados
mongoose.connect(config.mongodb);

// Essa populete tem como chave o nome dos models que
// você quer popular, e o valor é uma array com os documentos
// a serem criados
var populate = {
    'importStack' : [
        {
            title: 'Vodka',
            type: 'atom',
            link: 'http://vodkasong.blogspot.com/feeds/posts/default'
        },
        {
            title: 'Crap',
            type: 'rss',
            link: 'http://craphound.com/?feed=rss2'
        }
    ]
};


// Aqui ele passa por todas as chaves (models) na var populate
// e insere todos os documentos.
async.each(Object.keys(populate), function(model, callback){
    console.log('Populando model %s', model);
    var m = mongoose.model(model);

    async.each(populate[model], function(doc, callback){
        var d = new m(doc);
        d.save(callback);
    }, function(err){
        callback(err);
    });

}, function(err){
    if(err)
        throw err;

    console.log('Concluído.');
});


