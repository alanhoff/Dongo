/*var mongoose = require('mongoose');
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
*/
