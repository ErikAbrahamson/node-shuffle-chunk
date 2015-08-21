var express = require('express');
var router = express.Router();
// var shuffle = require('/utility');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shuffle Chunk' });
});

router.post('/', function(req, res, next) {
  var people = req.body.people;
  var chunks = parseInt(req.body.chunks);
  var results = chunk(people, chunks);
  res.render('index', {
    title: 'Shuffle Chunk',
    results: results
  });
});

function shuffle(peopleList) {
  var array = peopleList.replace(/,/g, '').split(' ');
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
  var i = 0, j = 0, k = 0;
  for (i; i < temp.length; i +=chunkSize) {
    chunkedArray.push(temp.slice(i, i + chunkSize));
  }
  for (j; j < chunkedArray.length; j++) {
    if (chunkedArray[j].length !== chunkSize) {
      for (k; k < chunkSize - (chunkedArray[j].length - 1); k++) {
        chunkedArray[j].push('Placeholder');
      }
    }
  }
  return chunkedArray;
}

module.exports = router;
