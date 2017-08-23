 $(document).ready(function() {

//variables that will be needed

//randomNumber will hold the target number generated by the computer
var randomNumber = 1;
//wins will be the player win count
var wins = 0;
//losses will be the player loss count
var losses = 0;
//totalScore will be the sum of the clicked crystal numbers
var totalScore = 0;
//number value associated with green crystal
var greenCrystal = 0;
//number value associated with red crystal
var redCrystal = 0;
//number value associated with blue crystal
var blueCrystal = 0;
//number value associated with yellow crystal
var yellowCrystal = 0;
//listens for a win
var youWin = false;
//listens for a loss
var youLose = false;

//created a function for the win & loss code (see below), but could not get it to call the function. I would get an error saying youWin(); is not a function.
function youWin (){
		win = true;
		alert("You Win! Press Play to play again!");
		console.log(win);
		wins = ++wins
		$("#winCount").html("Wins: " + wins);
}

function youLose (){
		lose = true;
		alert("You Lose! Press Play to play again!");
		losses = ++losses
		$("#lossCount").html("Losses: " + losses);	
}


//The below function loss was meant to overcome the issue where even when the player score exceeded the random number the game would not register a loss until a crystal button was clicked again.
//I understand that the cause of this bug is because the win/loss code is called inside the click listener, but was not able to get it to work properly if moved outside the click listener. 
//function loss () {
	// if (totalScore === randomNumber){
	// 	$("#playerScore").html("Your Total Score: " + totalScore);
	// 	win = true;
	// 	alert("You Win! Press Play to play again!");
	// 	console.log(win);
	// 	wins = ++wins
	// 	$("#winCount").html("Wins: " + wins);

	// 	letsPlay();

	// }
	// if (totalScore > randomNumber){
	// 	$("#playerScore").html("Your Total Score: " + totalScore);
	// 	lose = true;
	// 	alert("You Lose! Press Play to play again!");
	// 	losses = ++losses
	// 	$("#lossCount").html("Losses: " + losses);
	// 	console.log("You Lose!");

	// 	letsPlay();
	// }





//will need to generate a number that the player is guessing against
$("#play-button").click(function letsPlay(){
randomNumber = 1;
totalScore = 0;
greenCrystal = 0;
redCrystal = 0;
blueCrystal = 0;
yellowCrystal = 0;
youWin = false;
youLose = false;
$("#playerScore").html("Your Total Score: " + totalScore);


	if (randomNumber = 1){
		randomNumber = Math.floor(Math.random() * 32) + 42;
		$("#randomNumber").html("Random Number: " + randomNumber);
	}

	if (greenCrystal === 0){
		greenCrystal = Math.floor(Math.random() * 15) + 1;
		console.log(greenCrystal);
	}

	if (redCrystal === 0){
		redCrystal = Math.floor(Math.random() * 15) + 1;
		console.log(redCrystal);
	}

	if (blueCrystal === 0){
		blueCrystal = Math.floor(Math.random() * 15) + 1;
		console.log(blueCrystal);
	}

	if (yellowCrystal === 0){
		yellowCrystal = Math.floor(Math.random() * 15) + 1;
		console.log(yellowCrystal);
	}
})


//will need a click listener event for each of the crystal buttons which will randomly generate a number
$("#greenCrystal").click(function setGreenCrystal() {

	if (totalScore < randomNumber){
		totalScore += greenCrystal;
		console.log(totalScore);
		$("#playerScore").html("Your Total Score: " + totalScore);
			// if(totalScore == randomNumber){
			// 	youWin();
			// }
			// else if(totalScore > randomNumber){
			// 	youLose();
			// }
	}

	//loss();
	else if (totalScore === randomNumber){
		win = true;
		alert("You Win! Press Play to play again!");
		console.log(win);
		wins = ++wins
		$("#winCount").html("Wins: " + wins);
		//created a function for the win code, but could not get it to call the function. I would get an error saying youWin(); is not a function.
	}
	else if (totalScore > randomNumber){
		lose = true;
		alert("You Lose! Press Play to play again!");
		losses = ++losses
		$("#lossCount").html("Losses: " + losses);
	}
})

$("#redCrystal").click(function setRedCrystal() {

	if (totalScore < randomNumber){
	totalScore += redCrystal;
	console.log(totalScore);
	$("#playerScore").html("Your Total Score: " + totalScore);
		// if(totalScore == randomNumber){
		// 	youWin();
		// }
		// else if(totalScore > randomNumber){
		// 	youLose();
		// }
	}
	else if (totalScore === randomNumber){
		win = true;
		alert("You Win! Press Play to play again!");
		console.log(win);
		wins = ++wins
		$("#winCount").html("Wins: " + wins);
	}
	else if (totalScore > randomNumber){
		lose = true;
		alert("You Lose! Press Play to play again!");
		losses = ++losses
		$("#lossCount").html("Losses: " + losses);
	}
})

$("#blueCrystal").click(function setBlueCrystal() {

	if (totalScore < randomNumber){
	totalScore += blueCrystal;
	console.log(totalScore);
	$("#playerScore").html("Your Total Score: " + totalScore);
		// if(totalScore == randomNumber){
		// 	youWin();
		// }
		// else if(totalScore > randomNumber){
		// 	youLose();
		// }
	}
	else if (totalScore === randomNumber){
		win = true;
		alert("You Win! Press Play to play again!");
		console.log(win);
		wins = ++wins
		$("#winCount").html("Wins: " + wins);
	}
	else if (totalScore > randomNumber){
		lose = true;
		alert("You Lose! Press Play to play again!");
		losses = ++losses
		$("#lossCount").html("Losses: " + losses);
	}
})

$("#yellowCrystal").click(function setYellowCrystal() {

	if (totalScore < randomNumber){
	totalScore += yellowCrystal;
	console.log(totalScore);
	$("#playerScore").html("Your Total Score: " + totalScore);

	}
	else if (totalScore === randomNumber){
		win = true;
		alert("You Win! Press Play to play again!");
		console.log(win);
		wins = ++wins
		$("#winCount").html("Wins: " + wins);
	}
	else if (totalScore > randomNumber){
		lose = true;
		alert("You Lose! Press Play to play again!");
		losses = ++losses
		$("#lossCount").html("Losses: " + losses);
		//youLose();
	}
})

//loss();

});
