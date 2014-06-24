var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stackSchema = new Schema({

    title: String,
    type: String,
    link: String,
    published: {
        type: Date,
        default: Date.now
    },
});

var importStack = mongoose.model('importStack', stackSchema);
/*
var stk = new importStack({
    title: "Vodka",
    type: "atom",
    link: "http://vodkasong.blogspot.com/feeds/posts/default"
});

var stk2 = new importStack({
    title: "Crap",
    type: "rss",
    link: "http://craphound.com/?feed=rss2"
});
*/
