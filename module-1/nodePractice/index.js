var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('I love my golden retriever, Honey, she is like my child.');
console.dir(result);