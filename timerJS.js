// JavaScript Document

var timer = document.getElementById("timer");
var millisecondsCounter = document.getElementById("milliseconds");
var time = 0;

var runningTimer;

function startTimer() {
	time = time + 1;
	var minutes = Math.floor(time/3600);
	if(minutes.toString().length == 1) {
		minutes = "0" + minutes;
	} else {
		minutes = minutes.toPrecision(2);
	}
	var seconds = Math.floor(time/60)%60;
	if(seconds.toString().length == 1) {
		seconds = "0" + seconds;
	} else {
		seconds = seconds.toPrecision(2);
	}
	var milliseconds = (time%60).toPrecision(2).toString();
	if(milliseconds.includes(".")) {
		milliseconds = "0" + milliseconds.charAt(0);
	}
	timer.innerHTML = minutes + ":" + seconds;
	millisecondsCounter.innerHTML = milliseconds;
}

function start() {
	reset();
	runningTimer = setInterval(startTimer, 10);
}

function stop() {
	clearInterval(runningTimer);
}

function reset() {
	clearInterval(runningTimer);
	timer.innerHTML = "00:00";
	milliseconds.innerHTML = "00"
	time = 0;
}