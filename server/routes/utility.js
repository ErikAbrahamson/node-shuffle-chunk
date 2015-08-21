 var shuffler = {
  shuffle: function(peopleList) {
    var array = peopleList.replace(/,/g, '').split(' ');
    var arrayCopy = array.slice();
    var shuffled = [];
    while (arrayCopy.length > 0) {
      var randomIndex = Math.floor(Math.random() * arrayCopy.length);
      shuffled.push(arrayCopy[randomIndex]);
      arrayCopy.splice(randomIndex, 1);
    }
    return shuffled;
  },
  chunk: function(array, chunkSize) {
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
          chunkedArray[j].push(Math.ceil(Math.random() * 10));
        }
      }
    }
    return chunkedArray;
  }
};
module.exports = shuffler;
