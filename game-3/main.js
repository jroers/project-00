// console.log("sanity check");

$(document).ready(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var player1height;
    var player2height;

    var player1random;
    var player2random;

    var player1wins = 0;
    var player2wins = 0;

    var player1mistakes = 0;
    var player2mistakes = 0;

    var playersReady = 0;

    function generatePlayer1Move() {
  		var randomNumber = Math.random();
  		if (randomNumber < 0.25) {
  	  		player1random = 87;
  	  		$(".player1-random").text("Press Up!");
  		} else if (randomNumber < 0.5) {
  	  		player1random = 65;
  	  		$(".player1-random").text("Press Left!");
  		} else if (randomNumber < 0.75) {
  	  		player1random = 83;
  	  		$(".player1-random").text("Press Down!");
  		} else if (randomNumber < 1) {
  	  		player1random = 68;
  	  		$(".player1-random").text("Press Right!");
  		}
  	}

	function generatePlayer2Move() {
		var randomNumber = Math.random();
	  	if (randomNumber < 0.25) {
	  	    player2random = 38;
	  	    $(".player2-random").text("Press Up!");
	  	} else if (randomNumber < 0.5) {
	  	    player2random = 37;
	  	    $(".player2-random").text("Press Left!");
	  	} else if (randomNumber < 0.75) {
	  	    player2random = 40;
	  	    $(".player2-random").text("Press Down!");
	  	} else if (randomNumber < 1) {
	  	    player2random = 39;
	  	    $(".player2-random").text("Press Right!");
	  	}
	}

  	function resetPlayers() {
  		generatePlayer1Move();
  		generatePlayer2Move();
  		ctx.fillRect(40, player1height = 750, 30, 40);
  		ctx.fillRect(130, player2height = 750, 30, 40);
  	}

	function startGame() {
		resetPlayers();
	  	$(document).keydown(function(event) {
	  		if (event.which === 87 || event.which === 65 || event.which === 83 || event.which === 68) {
		  	  	if (event.which === player1random) {
		  	  		ctx.clearRect(40, player1height, 30, 40);
		  	    	player1height -= 20;
		  	    	if (player1height <= 40) {
		  	    		player1height = 25;
		  	    		ctx.fillRect(40, player1height, 30, 40);
		  	    		$(".winner").text("Player 2 wins!");
		  	    		player1wins ++;
		  	    		$(".p1-wins").text("Wins: " + player1wins);
		  	    		$(".p1-mistakes").text("Total mistakes this round: " + player1mistakes);
			    		$(".p2-mistakes").text("Total mistakes this round: " + player2mistakes);
		  	    		$(document).off("keydown");
			    		$(".reset").show();
		  	    		return;
		  	    	}
		        	ctx.fillRect(40, player1height, 30, 40);
		        	generatePlayer1Move();
		  	  	} else {
		  	  		if (player1height > 600) {
		  	  		} else if (player1height > 400) {
			  	  	  	ctx.clearRect(40, player1height, 30, 40);
			      	 	player1height += 10;
			          	ctx.fillRect(40, player1height, 30, 40);
			  	  	} else if (player1height > 200) {
			  	  	  	ctx.clearRect(40, player1height, 30, 40);
			  	      	player1height += 20;
			          	ctx.fillRect(40, player1height, 30, 40);
			  	  	} else {
			  	  	  	ctx.clearRect(40, player1height, 30, 40);
			  	   	  	player1height += 40;
			          	ctx.fillRect(40, player1height, 30, 40);
			  	  	}
			  	  	player1mistakes ++;
  				}
  			} else if (event.which === 38 || event.which === 37 || event.which === 40 || event.which === 39) {
	  	  		if (event.which === player2random) {
	  	    		ctx.clearRect(130, player2height, 30, 40);
		  			player2height -= 20;
			  		if (player2height <= 40) {
			    		player2height = 25;
			    		ctx.fillRect(130, player2height, 30, 40);
			    		$(".winner").text("Player 2 wins!");
			    		player2wins ++;
			    		$(".p2-wins").text("Wins: " + player2wins);
			    		$(".p1-mistakes").text("Total mistakes this round: " + player1mistakes);
			    		$(".p2-mistakes").text("Total mistakes this round: " + player2mistakes);
			    		$(document).off("keydown");
			    		$(".reset").show();
			    		return;
		    		}
		    		ctx.fillRect(130, player2height, 30, 40);
		    		generatePlayer2Move();
		  	  	} else {
		  	  		if (player2height > 600) {
		  	  		} else if (player2height > 400) {
		  	  	  		ctx.clearRect(130, player2height, 30, 40);
		      	  		player2height += 10;
		          		ctx.fillRect(130, player2height, 30, 40);
		  	  		} else if (player2height > 200) {
			  	  	  	ctx.clearRect(130, player2height, 30, 40);
			  	      	player2height += 20;
			          	ctx.fillRect(130, player2height, 30, 40);
		  	  		} else {
		  	  	  		ctx.clearRect(130, player2height, 30, 40);
		  	   	  		player2height += 40;
		          		ctx.fillRect(130, player2height, 30, 40);
		  	  		}
		  	  		player2mistakes ++;
	  	  		}	  
	  		}
	  	});
	}

	function countdown() {
		$(".btn-primary").click(function() {
			$(this).addClass("btn-success");
			$(this).off("click");
			$(this).text("Ready!");
			playersReady ++;
			if (playersReady === 2) {
				playersReady = 0;
				$(".btn-primary").removeClass("btn-success");
				$(".btn-primary").hide();
				startGame();
			}
		});
	}

	$(".reset").click(function() {
		$(".reset").hide();
		$(".btn-primary").show();
		$(".winner").text("");
		$(".player1-random").text("");
		$(".player2-random").text("");
		player1mistakes = 0;
		player2mistakes = 0;
		ctx.clearRect(40, player1height, 30, 40);
  		ctx.clearRect(130, player2height, 30, 40);
		countdown();
	});

	$(".reset").hide();
	ctx.fillRect(40, player1height = 750, 30, 40);
  	ctx.fillRect(130, player2height = 750, 30, 40);
	countdown();

});