(function() {
  var questions = [{
    question: "<IMG SRC='img2/n1.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Alegria', 'Nojo','Desprezo',  'Medo','Tristeza'],
    correctAnswer: 2
  }, {
     question: "<IMG SRC='img2/r1.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 0
  }, {
     question: "<IMG SRC='img2/m1.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Medo','Alegria', 'Desprezo', 'Nojo', 'Tristeza'],
    correctAnswer: 1
  }, {
     question: "<IMG SRC='img2/d1.gif' style='width:150px; height:200px;'>",
     choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
     correctAnswer: 2

       },{
    question: "<IMG SRC='img2/a1.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva',  'Desprezo', 'Nojo', 'Medo','Alegria','Tristeza'],
    correctAnswer: 4
  }, {
     question: "<IMG SRC='img2/t1.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo','Tristeza' ,'Nojo', 'Medo'],
    correctAnswer: 3
  },  {
     question: "<IMG SRC='img2/r2.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva',  'Desprezo','Surpreza', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 0
  }, {
     question: "<IMG SRC='img2/a2.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 1
  }, {
     question: "<IMG SRC='img2/m2.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Medo','Alegria', 'Desprezo', 'Nojo', 'Tristeza'],
    correctAnswer: 1
  }, {
     question: "<IMG SRC='img2/n2.gif' style='width:150px; height:200px;'>",
     choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
     correctAnswer: 3

       },{
    question: "<IMG SRC='img2/t2.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva',  'Desprezo', 'Nojo', 'Medo','Alegria','Tristeza'],
    correctAnswer: 5
  }, {
     question: "<IMG SRC='img2/d2.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo','Tristeza' ,'Nojo', 'Medo'],
    correctAnswer: 2
  },  {
     question: "<IMG SRC='img2/s2.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva',  'Desprezo','Surpreza', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 2
  }, {
     question: "<IMG SRC='img2/r3.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 0
  }, {
     question: "<IMG SRC='img2/m3.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Medo','Alegria', 'Desprezo', 'Nojo', 'Tristeza'],
    correctAnswer: 1
  }, {
     question: "<IMG SRC='img2/d3.gif' style='width:150px; height:200px;'>",
     choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
     correctAnswer: 2

       },{
    question: "<IMG SRC='img2/a3.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva',  'Desprezo', 'Nojo', 'Medo','Alegria','Tristeza'],
    correctAnswer: 4
  }, {
     question: "<IMG SRC='img2/t3.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo','Tristeza' ,'Nojo', 'Medo'],
    correctAnswer: 3
  },  {
     question: "<IMG SRC='img2/s3.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva',  'Desprezo','Surpreza', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 2
  },  {
     question: "<IMG SRC='img2/m4.gif' style='width:150px; height:200px;'>",
    choices: ['Raiva',  'Desprezo','Surpreza', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 4
  }];
  
    


  questions.sort();
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
    var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - --timeleft;
  if(timeleft <= 0)
	  document.getElementById("next").click();
    
},1000);
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Selecione um item!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
	  window.location.reload();
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
	
    questionCounter = 10;
    selections = [];
    displayNext();

	$('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
	  document.getElementById("radio1").checked = true;
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Expressão ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
	  timeleft=10;
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
		 
		
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
	  timeleft=99999;
    var score = $('<p>',{id: 'Pergunta'});
    var coreto = [];
    var numCorrect = 0;
	var q
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
		 coreto.push(i+1);
        numCorrect++;
		 
      }
    }
	
    alert('Questões: '+coreto +' Corretas');
	
    score.append('Voce acertou ' + numCorrect + ' perguntas de ' +
                 questions.length + ' !!!');
			
    return score;
	
	
	
  }
})();