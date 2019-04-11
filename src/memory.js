var MemoryGame = function (cards) {
  this.cards = cards;
  this.pairsClicked = 0;
  this.pickedCards = [];
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
  
  //inhouse shuffle
  // let result = [];
  // for (; array.length > 0; ) {
  //   let randomNumber = Math.floor(Math.random() * array.length);
  //   let randomCard = array.splice(randomNumber, 1);

  //   result.push(randomCard[0]);
  // }
  // console.log(result);
  // return result;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked +=1;
  let isMatch = firstCard.dataset.data-card-name === secondCard.dataset.data-card-name;
console.log(isMatch + "    "+ firstCard.dataset);
}

MemoryGame.prototype.isFinished = function () {
};