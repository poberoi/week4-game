$(document).ready(function(){
	//declare variables and functions
	var randNum;
	var randGemNum=[];
	var playScore=0;
	var totalWins=0;
	var totalLosses=0;
	function reset(){
		randNum = (Math.floor(Math.random() * (121 - 19)) + 19);
		$('#randomNumber').html(randNum);
		console.log(randNum);
		for (i=0; i<4; i++){
			randGemNum[i] = (Math.floor(Math.random() * (13-1)) + 1);
			console.log(randGemNum[i]);
		}
		playScore = 0;
		$('#playerScore').html(playScore);

	}
	function checkScore(x){
		if (x === randNum){
			totalWins++;
			$('#wins').html(totalWins);
			reset();
		} else if (x > randNum){
			totalLosses++;
			$('#losses').html(totalLosses);
			reset();
		} else {
			return;
		};
	}
	
	reset();
	
	
	$("#gem1").on("click", function(){
    playScore= playScore+randGemNum[0];
    $('#playerScore').html(playScore);
    checkScore(playScore);
	});
	$("#gem2").on("click", function(){
    playScore= playScore+randGemNum[1];
    $('#playerScore').html(playScore);
    checkScore(playScore);
	});
	$("#gem3").on("click", function(){
    playScore= playScore+randGemNum[2];
    $('#playerScore').html(playScore);
    checkScore(playScore);
	});
	$("#gem4").on("click", function(){
    playScore= playScore+randGemNum[3];
    $('#playerScore').html(playScore);
    checkScore(playScore);
	});

});