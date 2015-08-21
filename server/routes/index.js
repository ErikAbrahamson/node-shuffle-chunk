var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shuffle Chunk' });
});

function shuffle(array) {
  var shuffled = [];
  for (var i = 0; i < array.length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    shuffled.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
}

module.exports = router;
