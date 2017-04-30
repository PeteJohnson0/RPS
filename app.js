
$( document ).ready(function() {

var enemyAnswer = ''

        $("#rock").click(function () {
        var playerInput = "rock"
        randomMe();
        compareAnswers(playerInput, enemyAnswer);
    });

        $("#paper").click(function () {
        var playerInput = "paper"
        randomMe();
        compareAnswers(playerInput, enemyAnswer)
    });

        $('#scissors').click(function() {
        var playerInput = "scissors"
        randomMe();
        compareAnswers(playerInput, enemyAnswer)
    });

    $("#clearBtn").click( function() {
        $("#list").empty()
    })

    var randomMe = function() {
        var randomRPS = Math.floor(Math.random() * 3 )  
        switch (randomRPS) {
            case 0:
                enemyAnswer = "rock";
                break;
            case 1: 
                enemyAnswer = "paper";
                break;
            case 2:
                enemyAnswer = "scissors";
                break; 
        }  
    }

    var compareAnswers = function(playerInput, enemyAnswer) {        
        if(playerInput === enemyAnswer) {
            $("ul").append('<li><p align="left">TIE</p></li>')           
        } else if (playerInput == "rock" && enemyAnswer == "paper") {
            $("ul").append('<li><div id="winner" class="inlineImage"><i class="fa fa-hand-rock-o fa-2x" style="color:red"></i></div><div class="inlineImage"><i class="fa fa-hand-paper-o fa-2x" aria-hidden="true"></i></div</li>')
        } else if (playerInput == "rock" && enemyAnswer == 'scissors') {
            $("ul").append('<li><div id="loser" class="inlineImage""><i class="fa fa-hand-rock-o fa-2x" style="color:green"></i></div><div class="inlineImage"><i class="fa fa-hand-scissors-o fa-2x" aria-hidden="true"></i></div</li>')
        } else if (playerInput == "paper" && enemyAnswer == "rock") {
            $("ul").append('<li><div id="winner" class="inlineImage"><i class="fa fa-hand-paper-o fa-2x" style="color:green"></i></div><div class="inlineImage"><i class="fa fa-hand-rock-o fa-2x" aria-hidden="true"></i></div</li>')
        } else if (playerInput == "paper" && enemyAnswer == "scissors") {
            $("ul").append('<li><div id="loser" class="inlineImage"><i class="fa fa-hand-paper-o fa-2x" style="color:red"></i></div><div class="inlineImage"><i class="fa fa-hand-scissors-o fa-2x" aria-hidden="true"></i></div</li>')
        } else if (playerInput == "scissors" && enemyAnswer == "rock") {
            $("ul").append('<li><div id="loser" class="inlineImage"><i class="fa fa-hand-scissors-o fa-2x" style="color:red"></i></div><div class="inlineImage"><i class="fa fa-hand-rock-o fa-2x" aria-hidden="true"></i></div</li>')
        } else if (playerInput == "scissors" && enemyAnswer == "paper") {
            $("ul").append('<li><div id="winner" class="inlineImage"><i class="fa fa-hand-scissors-o fa-2x" style="color:green"></i></div><div class="inlineImage"><i class="fa fa-hand-paper-o fa-2x" aria-hidden="true"></i></div</li>')
        }
    };
    
    
    $('#clear').click( function() {
        $("#list").empty();
    });
        
});