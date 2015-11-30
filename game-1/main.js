//console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  
  // ** This isn't needed anymore. Opted for unique coloring for each player's route. **
  //even numbered cell colors
  // var even;
  // var odd;
  // for (even = 2; even < 25; even += 2) {
  //   $("." + even).css("background-color", "blue");
  // }
  // for (odd = 1; odd < 25; odd += 2) {
  //   $("." + odd).css("background-color", "purple");
  // }

  //These two variables are what you input into the below replaceWithPlayer() function.
  var player1Position = 1;
  var player2Position = 1;

  //Hiding the reset button to prevent sore losers from restarting the game too soon
  $("button").hide();

  function replaceWithPlayer(player) {
    if (player === "X") {
      $(".pl-1." + player1Position).text("");
      player1Position ++;
      $(".pl-1." + player1Position).text(player);
    } else if (player === "O") {
      $(".pl-2." + player2Position).text("");
      player2Position ++;
      $(".pl-2." + player2Position).text(player);
    }    
  }

  //Decided to create this function to allow keypress to be enabled/disabled upon game completion.
  function gamePlayer() {
    $(window).on("keypress", function handler(event) {
      if (event.which === 97) { //97 yields "a". check https://api.jquery.com/keypress/ for a list of all keypresses
          if (player1Position < 39) {
              replaceWithPlayer("X");
          } else if (player1Position === 39) {
              replaceWithPlayer("X");
              //change the console.log to update a div with the winner
              $(".winner-text").text("X wins!");
              $(window).off("keypress");
              $("button").show();
          }
      } else if (event.which === 59) {
          if (player2Position < 39) {
              replaceWithPlayer("O");
          } else if (player2Position === 39) {
              replaceWithPlayer("O");
              //change the console.log to update a div with the winner
              $(".winner-text").text("O wins!");
              $(window).off("keypress");
              $("button").show();
          }
      }
      
    });
  }

  //Calling the function so the game can start on page-load
  gamePlayer();

  //The reset button moves the players back to the start and re-enables the keypress events to actually do something.
  $("button").click(function resetBoard() {
    $(".pl-1." + player1Position).text("");
    $(".pl-2." + player2Position).text("");
    $(".winner-text").text("");
    player1Position = 1;
    player2Position = 1;
    $(".pl-1." + player1Position).text("X");
    $(".pl-2." + player2Position).text("O");
    gamePlayer();
    $("button").hide();
  });

});

