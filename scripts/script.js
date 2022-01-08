var random;
var squareArray;
var randomOrder = [];
var computerIsPlaying = false;
var userClickCnt = 0;

function init() {
  // find squares
	squareArray = $('.square');
  // attach a click listener for each square
  squareArray.each(function (i) {
    var el = $(this);
    el.click(function () {
    	onSquareClicked(el, i);
    });
  });  
}

function onSquareClicked(square, idx) {

		// computer may not be interrupted
		if (computerIsPlaying) {
    	return;
    }
    
    // did user click exactly the square at current pos in the list?
    if (idx === randomOrder[userClickCnt]) {
      square.css('background-color', 'green');
      square.css('opacity', '0.5');
      setTimeout(function() {
        square.css('background-color', '#ccc')
        square.css('opacity', '1');
      }, 300);
      // either wait for next user click or turn over to computer
      if (++userClickCnt == randomOrder.length) {
        setTimeout(computerPlays, 500);
      }
    } else {
      // user clicked wrong square
      square.css('background-color', 'red');
      $(msg).text('game over');
    }
}

function computerPlays() {
  computerIsPlaying = true;
  $('#msg').text('computer is playing');
  $('#counter').text(randomOrder.length + 1);
  // reset user click count
	userClickCnt = 0;
  // get next square
	var random = Math.floor(Math.random() * squareArray.length);
  randomOrder.push(random);
  // blinky blink
  playSequence(); 
  
}

function playSequence() {
  // simply start with first square in list
  _blink(0);
}

function _blink (p) {
  // stop if end of list is reached
	if (p === randomOrder.length) {
    computerIsPlaying = false;
    $('#msg').text('your turn');
  	return;
  }
  
  // get x-th square from list and highlight it
	var square = squareArray.eq(randomOrder[p]);
  square.css('opacity', '0.5');
  setTimeout(function() {
    square.css('opacity', '1');
  }, 300);
  
  // schedule next blink
  setTimeout(function () {
  	_blink(++p);
  }, 500);
}

function reset() {
    randomOrder = [];
    userClickCnt = 0;
    squareArray.each(function (i) {
      var el = $(this);
      el.css('background-color', '#ccc');
    });
}

function start() {
	reset();
  computerPlays();
}

$('button').click(function() {
    start();
});

init();