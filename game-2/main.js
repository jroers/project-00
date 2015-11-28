console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	var $player1 = $(".player1");
	var player1upDown = -15;
	var player1leftRight = 300;

	var $player2 = $(".player2");
	var player2upDown = -48;
	var player2leftRight = 300;

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

	//Since I wanted to use arrow keys, I was able to find out the values of the arrow keys here: http://jsfiddle.net/JamesD/8q7Mu/
	$(window).keydown(function keypressHandler(event) {
		//Button inputs for Player 1 - WASD mapping)
		//Right - D
		if (event.which === 68) {
			if (player1leftRight + 20 <= 720) {
				pl1moveRight();
			}
		//Down - S
		} else if (event.which === 83) {
			if (player1upDown + 20 <= 425) {
				pl1moveDown();
			}
		//Left - A
		} else if (event.which === 65) {
			if (player1leftRight - 20 >= -20) {
				pl1moveLeft();
			}
		//Up - W
		} else if (event.which === 87) {
			if (player1upDown - 20 >= -15) {
				pl1moveUp();
			}
		
		//Button inputs for Player 2 - Arrow key mapping
		//Right arrow
		} else if (event.which === 39) {
			if (player2leftRight + 20 <= 720) {
				pl2moveRight();
			}
		//Down arrow
		} else if (event.which === 40) {
			if (player2upDown + 20 <= 332) {
				pl2moveDown();
			}
		//Left arrow
		} else if (event.which === 37) {
			if (player2leftRight - 20 >= -20) {
				pl2moveLeft();
			}
		//Up arrow
		} else if (event.which === 38 ) {
			if (player2upDown - 20 >= -128) {
				pl2moveUp();
			}
		}
		
	});

});