var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shuffle Chunk' });
});

function shuffle(array) {
  var arrayCopy = array.slice();
  var shuffled = [];
  while (arrayCopy.length > 0) {
    var randomIndex = Math.floor(Math.random() * arrayCopy.length);
    shuffled.push(arrayCopy[randomIndex]);
    arrayCopy.splice(randomIndex, 1);
  }
  return shuffled;
}
function chunk(array, chunkSize) {
  var shuffledArray = shuffle(array);
  var temp = shuffledArray.slice();
  var chunkedArray = [];
  for (var i = 0; i < temp.length; i +=chunkSize) {
    chunkedArray.push(temp.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

module.exports = router;
