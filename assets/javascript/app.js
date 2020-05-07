$( document ).ready(function() {
    let questions = [
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


    $("#start").on("click", function() {
        $("#start").fadeToggle("slow")
        $(".lead").fadeToggle("slow")
       })

})
