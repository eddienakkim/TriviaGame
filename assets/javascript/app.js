$( document ).ready(function() {
    var questions = [
        {
            question: "What is the Iron Bank's representative, played by Mark Gatiss, called?",
            answers: ["Xaro Xhoan Daxon", "Howard from the Halifax", "Tycho Nestoris", "Quorin Halfhand"],
            values: [false, false, true, false],
            gif: "assets/images/tumblr_n53dxpslvp1rp1voro2_500.webp",
          },
          {
            question: "Who was responsible for the creation of the Night King?",
            answers: ["The Lord of Light", "The Children of the Forest", "The Drowned God", "The First Men"],
            values: [false, true, false, false],
            gif: "assets/images/source.gif",
          },
          {
            question: "In the TV show, what was Hodor called before he got his tragic door-holding nickname?",
            answers: ["Wylis", "Howard from the Halifax", "Tycho Nestoris", "Quorin Halfhand"],
            values: [true, false, false, false],
            gif: "assets/images/hodor.gif",
          },
          {
            question: "Who was the leader of the Golden Company sellswords when Dany ransacked King;s Landing?",
            answers: ["Wes Bordland", "Harry Strickland", "Kiefer Sutherland", "Robert Westland"],
            values: [false, true, false, false],
            gif: "assets/images/harrystrickland.gif",
          },
          {
            question: "Dany's dragons are(or were) called Dragon, Viserion and ______ ?",
            answers: ["Dougal", "Vhagar", "Rhaegal", "Balerion"],
            values: [false, false, true, false],
            gif: "assets/images/tenor.gif",
          },
          {
            question: "Iwan Rheon, who played Ramsay Bolton, was almost cast as which character?",
            answers: ["Jon Snow", "Gendry", "Podrick Payne", "Robb Stark"],
            values: [true, false, false, false],
            gif: "assets/images/jonsnow.gif",
          },
          {
            question: "Who said: 'I don't plan on knitting by the fire while men fight for me'?",
            answers: ["Lyanna Mormont", "Sansa Stark", "Ser Brienne of Tarth", "Olenna Tyrell"],
            values: [true, false, false, false],
            gif: "assets/images/LyannaMormont.gif",
          },
          {
            question: "Which body part did Kit Harington say was in severe pain when filming the dragon-riding scenes in season eight?",
            answers: ["Right arm", "Right knee", "Right sholder", "Right testicle"],
            values: [false, false, false, true],
            gif: "assets/images/riding.gif",
          },
          {
            question: "Which UK drama had Hannah Murray(Gilly) and Joe Dempsie(Gendry) appeared in together before Game of Thrones?",
            answers: ["Misfits", "Skins", "Hollyoaks", "Sugar Rush"],
            values: [false, true, false, false],
            gif: "assets/images/skins.gif",
          },
          {
            question: "What is the name of the giant dragon-slaying crossbow that failed to protect King's Landing?",
            answers: ["Millipede", "The 'You're Making Me Very Cross(bow)'", "Scorpion", "Mantis"],
            values: [false, false, true, false],
            gif: "assets/images/scorpion.gif",
          },
    ]


    var currentQuestion = 0;
    var correct = 0; 
    var wrong = 0; 
    var timeout = 0; 


    $("#start").on("click", ()=>{
        $("#start").fadeToggle("slow")
        $(".lead").fadeToggle("slow")
        displayQ()
       })

    
    

    function displayQ () {
      $(".message-content").remove();
      $("#start").remove();
      var questionArea = $("<div>")
      var timer = $("<h2>")
      var question = $("<h2>")

      $("#content").append(questionArea)
      questionArea.append(timer)
      questionArea.append(question)

      // Set up the timer.
    var time = 30;
    timer.html("<h2>" + time + " seconds remaining</h2>")
    
    // Countdown function that will stop when the time hits 0
    var countDown = setInterval( function() {
      time--;
      timer.html("<h2>" + time + " seconds remaining</h2>")

      // If time reaches 0, the question times out, none increases in value, and the timedOut function is called
      if (time === 0) {
        clearInterval(countDown)
        questionArea.fadeToggle("slow", timedOut)
        tiemout++;
      }
    }, 1000);


    question.html(questions[currentQuestion].question)

    // Display the answers as list items using a for loop
    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
      var answers = $("<button>")
      answers.html(questions[currentQuestion].answers[i])
      answers.addClass("answer-buttons")
      answers.attr("value", questions[currentQuestion].values[i])
      answers.attr("id", "a" + i)
      answers.appendTo(questionArea)
    };
    // Slides the answers into place
    $("#a0").animate({"left": "+=600px"})



    // If and else if statements to determine what happens, depending on correct answer clicked, or incorrect
    // First, the click cases
    $(".answer-buttons").on("click", function() {
      //checking value of 'this'
      console.log($(this).attr("value"));

      // If the value is true, clear the content area, stop the counter, and display the correct answer screen
      if ($(this).attr("value") === "true") {
        questionArea.fadeToggle("slow", displayCorrect)
        clearInterval(countDown);
        correct++;
      };
      // If false, clear content area, stop counter, and display wrong answer screen
      if ($(this).attr("value") === "false") {
        questionArea.fadeToggle("slow", displayWrong)
        clearInterval(countDown)
        wrong++;
      };
    });
  

    
    function displayCorrect() {
    var cycle = setTimeout(displayQ, 5000)
    var messageArea = $("<div>");    
    messageArea.addClass("message-content")
    // Declare content that will go into the messageArea
    var winMessage = $("<h2>");
    var image = $("<img>")
    // Append it all to the content container and add text and images
    messageArea.appendTo($("#content"));
    winMessage.appendTo($(messageArea));
    image.appendTo($(messageArea))
    winMessage.text("Correct!");
    image.attr("src", questions[currentQuestion].gif)


    // If there are no questions left, then run this function to display gameOver
    if (currentQuestion === (questions.length - 1)) {
      clearTimeout(cycle);
      var gameEnd = setTimeout(gameOver, 5000)
    }
    currentQuestion++;
  };

  // This function will display the wrong answer screen
  function displayWrong() {
    var cycle = setTimeout(displayQ, 5000);
    var messageArea = $("<div>");
    messageArea.addClass("message-content")
    var lossMessage = $("<h2>");
    var image = $("<img>")
    // Append it all to the content container and add text and images
    messageArea.appendTo($("#content"));
    lossMessage.appendTo(messageArea)
    image.appendTo($(messageArea))
    lossMessage.html("Wrong! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
    image.attr("src", questions[currentQuestion].gif)

    // If there are no questions left, then run this function to display gameOver
    if (currentQuestion === (questions.length - 1)) {
      clearTimeout(cycle);
      var gameEnd = setTimeout(gameOver, 5000)
    }
    currentQuestion++;
  };

  // This will display the time out screen
  function timedOut() {
    var cycle = setTimeout(displayQ, 5000);
    var messageArea = $("<div>");
    messageArea.addClass("message-content")
    var lossMessage = $("<h2>");
    var image = $("<img>")
    // Append it all to the content container and add text and images
    messageArea.appendTo($("#content"));
    lossMessage.appendTo(messageArea)
    image.appendTo($(messageArea))
    lossMessage.html("You timed out! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
    image.attr("src", questions[currentQuestion].gif)

    // If there are no questions left, then run this function to display gameOver
    if (currentQuestion === (questions.length - 1)) { 
      clearTimeout(cycle);
      var gameEnd = setTimeout(gameOver, 5000)
    }
    currentQuestion++;
  };

  // This will display when the currentQuestion amount is equal to questions.length - 1. In other words, when all questions have been answered
  function gameOver() {
    // Clear out the post-question message
    $(".message-content").remove();
    var totalCorrect = $("<h3>")
    var totalIncorrect = $("<h3>")
    var totaltimeout = $("<h3>")
    var restart = $("<button>")
    totalCorrect.appendTo("#content")
    totalCorrect.html("You got " + correct + " correct!")
    totalIncorrect.appendTo("#content")
    totalIncorrect.html("You got " + wrong + " wrong.")
    totaltimeout.appendTo("#content")
    
    // If block to determine if question or questions should be used
    if (timeout === 1) {
      totaltimeout.html("You didn't answer " + timeout + " question.")
    }
    if (timeout > 1 || timeout === 0) {
      totaltimeout.html("You didn't answer " + timeout + " questions.")
    }
    
    
    // Restart button
    restart.addClass("restart")
    restart.text("Restart")
    restart.appendTo("#content")


    //Reset button onclick function
    $(".restart").on("click", function() {
      totalCorrect.remove();
      totalIncorrect.remove();
      totaltimeout.remove();
      restart.remove();
      currentQuestion = 0;
      correct = 0; //records number of correct answers
      wrong = 0; //records number of wrong answers
      timeout = 0;
      displayQ();
    })

  }
    }

    

    })