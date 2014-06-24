var feed = require('feed-read');
var mongoose = require('mongoose');
var request = require('request');

function checkData(url, callback){
    request(url, function(err, res, body) {
        if (err)
            throw err;
        callback(feed.identify(body));
    });

}

function configure(callback){
    var Schema = mongoose.Schema;


    // Each article has the following properties:
    //
    //   * "title"     - The article title (String).
    //   * "author"    - The author's name (String).
    //   * "link"      - The original article link (String).
    //   * "content"   - The HTML content of the article (String).
    //   * "published" - The date that the article was published (Date).
    //   * "feed"      - {name, source, link}
    //

    var rssSchema = new Schema({

        title: String,
        author: String,
        link: String,
        content: String,
        published: {
            type: Date,
            default: Date.now
        },
        feed: {
            name: String,
            source: String,
            link: String,
        },
    });

    mongoose.model('rss', rssSchema);
}

function load(callback){

    console.log('Loading stack...');
    importStack = require(__dirname + '/../model/importStack');

    importStack.find(function(err, stack) {
        if (err) return console.error(err);
            console.log(stack);
    });

}

function run(callback){
    //import


}

function exporter(callback){
    //export

}

module.exports = function(){
    this.stack = [];

    this.checkData = function(url, callback){
        checkData(url, callback);
    };

    this.configure = function(callback){
        configure(callback);
    };

    this.load = function(callback){
        load(callback);
    };

    this.run = function(callback){
        run(callback);
    };

    this.exporter = function(callback){
        exporter(callback);
    };
};
