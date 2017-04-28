
$( document ).ready(function() {
 
var enemyAnswer = ''

        $(".rock").click(function () {
        $('.playerGenerated').empty();
        $('.computerGenerated').empty();
        $('.playerGenerated').html('<img class="rock" src="http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg" height="50px" width="50px"/>')
        var playerInput = "rock"
        randomMe();
        compareAnswers(playerInput, enemyAnswer)
    });

        $(".paper").click(function () {
        $('.playerGenerated').empty();
        $('.computerGenerated').empty();
        $('.playerGenerated').html('<img class="rock" src="http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg" height="50px" width="50px"/>')
        var playerInput = "paper"
        randomMe();
        compareAnswers(playerInput, enemyAnswer)
    });

        $('.scissors').click(function () {
        $('.playerGenerated').empty();
        $('.computerGenerated').empty();
        $('.playerGenerated').html('<img class="rock" src="http://1000awesomethings.com/wp-content/uploads/2008/08/scissors.jpg" height="50px" width="50px"/>')
        var playerInput = "scissors"
        randomMe();
        compareAnswers(playerInput, enemyAnswer)
    });

    function randomMe () {
    var randomRPS = Math.floor(Math.random() * 3 )  
    console.log(randomRPS)
    switch (randomRPS) {
        case 0:
            enemyAnswer = "rock";
            $('.computerGenerated').html('<img src="http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg" height="50px" width="50px"/>')
            break;
        case 1: 
            enemyAnswer = "paper";
             $('.computerGenerated').html('<img src="http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg" height="50px" width="50px"/>')
             break;
        case 2:
            enemyAnswer = "scissors";
            $('.computerGenerated').html('<img src="http://1000awesomethings.com/wp-content/uploads/2008/08/scissors.jpg" height="50px" width="50px"/>')

            break; 
        }  
    }

    var compareAnswers = function(playerInput, enemyAnswer) {
        var sendToScreen
        if(playerInput === enemyAnswer) {
           sendToScreen = 'Player: ' + playerInput + ' vs ' + 'Computer: ' + enemyAnswer +  ' - Draw'
        } else if (playerInput == "rock" && enemyAnswer == "paper") {
           sendToScreen = 'Player: ' + playerInput + ' vs ' + 'Computer: ' + enemyAnswer + ' - Computer Wins'
        } else if (playerInput == "rock" && enemyAnswer == 'scissors') {
           sendToScreen = 'Player: ' + playerInput + ' vs ' + 'Computer: ' + enemyAnswer + ' - You Win'
        } else if (playerInput == "paper" && enemyAnswer == "rock") {
           sendToScreen = 'Player: ' + playerInput + ' vs ' + 'Computer: ' + enemyAnswer + ' - You Win'
        } else if (playerInput == "paper" && enemyAnswer == "scissors") {
           sendToScreen = 'Player: ' + playerInput + ' vs ' + 'Computer: ' + enemyAnswer + ' - Computer Wins'
        } else if (playerInput == "scissors" && enemyAnswer == "rock") {
           sendToScreen = 'Player: ' + playerInput + ' vs ' + 'Computer: ' + enemyAnswer + ' - Computer Wins'
        } else if (playerInput == "scissors" && enemyAnswer == "paper") {
            sendToScreen = 'Player: ' + playerInput + ' vs ' + 'Computer: ' + enemyAnswer + ' - You Win'
        }
        return $("#list").append("<li>" + sendToScreen + "</li>");
    };
    
    $('#clear').click( function() {
        $("#list").empty();
    });
        
});