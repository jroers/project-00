//console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	//if each quarter contains a value of 1, then the number of laps will increase.
	function Racer() {
		this.quarter1 = 0;
		this.quarter2 = 0;
		this.quarter3 = 0;
		this.lap = 0;
	}

	//player 1 move right
	function pl1moveRight() {
		$player1.html('<img src="player1/right.png">');
		player1leftRight += 20;
		$player1.css("left", player1leftRight + "px");
	}

	//player 1 move down
	function pl1moveDown() {
		$player1.html('<img src="player1/down.png">');
		player1upDown += 20;
		$player1.css("top", player1upDown + "px");
	}

	//player 1 move left
	function pl1moveLeft() {
		$player1.html('<img src="player1/left.png">');
		player1leftRight -= 20;
		$player1.css("left", player1leftRight + "px");
	}
	//player 1 move up
	function pl1moveUp() {
		$player1.html('<img src="player1/up.png">');
		player1upDown -= 20;
		$player1.css("top", player1upDown + "px");
	}

	//player2 move right
	function pl2moveRight() {
		$player2.html('<img src="player2/right.png">');
		player2leftRight += 20;
		$player2.css("left", player2leftRight + "px");
	}

	//player 2 move down
	function pl2moveDown() {
		$player2.html('<img src="player2/down.png">');
		player2upDown += 20;
		$player2.css("top", player2upDown + "px");
	}

	//player 2 move left
	function pl2moveLeft() {
		$player2.html('<img src="player2/left.png">');
		player2leftRight -= 20;
		$player2.css("left", player2leftRight + "px");
	}

	//player 2 move up
	function pl2moveUp() {
		$player2.html('<img src="player2/up.png">');
		player2upDown -= 20;
		$player2.css("top", player2upDown + "px");
	}

	function startRace() {
		//Since I wanted to use arrow keys, I was able to find out the values of the arrow keys here: http://jsfiddle.net/JamesD/8q7Mu/
		$(window).keydown(function keypressHandler(event) {
			//Button inputs for Player 1 - WASD mapping)
			if (event.which === 68 || event.which === 83 || event.which === 65 || event.which === 87) {
				//This if statement didn't work. I wanted to prevent the player from entering the middle ground, but it gets locked once you get too close. Need to troubleshoot.
				// Maybe change the <div class="racetrack"> to a <canvas>?
				// if (player1upDown + 20 > 45 && player1upDown -20 < 345 && player1leftRight + 20 > 80 && player1leftRight - 20 < 620) {
				// 	console.log("movement not allowed");
				// } else {

				//Right - D
				if (event.which === 68) {
					if (player1leftRight + 20 <= 720 && player1upDown < 345) {
						pl1moveRight();
					}
				//Down - S
				} else if (event.which === 83) {
					if (player1upDown + 20 <= 425 && player1leftRight > 80) {
						pl1moveDown();
					}
				//Left - A
				} else if (event.which === 65) {
					if (player1leftRight - 20 >= -20 && player1upDown > 45) { //the second part prevents the player from moving left when they're supposed to move right.
						pl1moveLeft();
					}
				//Up - W
				} else if (event.which === 87) {
					if (player1upDown - 20 >= -15 && player1leftRight < 620) {
						pl1moveUp();
					}
				}

				// }
			}
			
			//Button inputs for Player 2 - Arrow key mapping
			//Right arrow
			if (event.which === 39) {
				if (player2leftRight + 20 <= 720 && player2upDown < 252) {
					pl2moveRight();
				}
			//Down arrow
			} else if (event.which === 40) {
				if (player2upDown + 20 <= 332 && player2leftRight > 80) {
					pl2moveDown();
				}
			//Left arrow
			} else if (event.which === 37) {
				if (player2leftRight - 20 >= -20 && player2upDown > -48) {
					pl2moveLeft();
				}
			//Up arrow
			} else if (event.which === 38 ) {
				if (player2upDown - 20 >= -128 && player2leftRight < 620) {
					pl2moveUp();
				}
			}

			//Player 1 win conditions
			if (player1upDown === 205 && player1leftRight >= 620 && player1.quarter1 === 0) {
				player1.quarter1 = 1;
			} else if (player1leftRight === 340 && player1upDown >= 345 && player1.quarter2 === 0) {
				player1.quarter2 = 1;
			} else if (player1upDown === 205 && player1leftRight <= 80 && player1.quarter3 === 0) {
				player1.quarter3 = 1;
			} else if (
				player1leftRight === 340 &&
				player1upDown <= 45 && 
				player1.quarter3 === 1 && 
				player1.quarter2 === 1 && 
				player1.quarter1 === 1
				)
			{
				player1.lap = 1;
				$(".winner").html("<h1>Player 1 wins!</h1>");
				$(window).off("keydown");
				$("button").show();
			
			//Player 2 win conditions
			} else if (player2upDown === 92 && player2leftRight >= 620 && player2.quarter1 === 0) {
				player2.quarter1 = 1;
			} else if (player2leftRight === 340 && player2upDown >= 252 && player2.quarter2 === 0) {
				player2.quarter2 = 1;
			} else if (player2upDown === 92 && player2leftRight <= 80 && player2.quarter3 === 0) {
				player2.quarter3 = 1;
			} else if (
				player2leftRight === 340 &&
				player2upDown <= -48 && 
				player2.quarter3 === 1 && 
				player2.quarter2 === 1 && 
				player2.quarter1 === 1
				)
			{
				player2.lap = 1;
				$(".winner").html("<h1>Player 2 wins!</h1>");
				$(window).off("keydown");
				$("button").show();
			}	
		});
	}

	function restartGame() {
		player1upDown = -15;
		player1leftRight = 300;
		$player1.html('<img src="player1/right.png">');
		$player1.css("left", player1leftRight + "px");
		$player1.css("top", player1upDown + "px");
		player1.quarter1 = 0;
		player1.quarter2 = 0;
		player1.quarter3 = 0;
		player1.lap = 0;

		player2upDown = -42;
		player2leftRight = 300;
		$player2.html('<img src="player2/right.png">');
		$player2.css("left", player2leftRight + "px");
		$player2.css("top", player2upDown + "px");
		player2.quarter1 = 0;
		player2.quarter2 = 0;
		player2.quarter3 = 0;
		player2.lap = 0;

		$(".winner").html("<h1>Ready? Go!</h1>");
	}

	$("button").click(function handler() {
		restartGame();
		$("button").hide();
		startRace();
	});

	var player1 = new Racer();

	var player2 = new Racer();

	var $player1 = $(".player1");
	var player1upDown = -15;
	var player1leftRight = 300;

	var $player2 = $(".player2");
	var player2upDown = -48;
	var player2leftRight = 300;

	$("button").hide();

	startRace();
});