//AUDIO
let Music = document.getElementById('myAudio');
let playButton = document.getElementById('playButton');

//Toggle Button
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let line4 = document.querySelector('.line4');
let line5 = document.querySelector('.line5');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

//To pause the circle animations, define the following
let circle = document.querySelector('.circle');
let circle2 = document.querySelector('.circle2');

function playPause() {
	Music.play();
}
document.querySelector('.play').onclick = function() {
	this.classList.toggle('active');
	line1.classList.toggle('active');
	line2.classList.toggle('active');
	line3.classList.toggle('active');
	line4.classList.toggle('active');
	line5.classList.toggle('active');
	pause.classList.toggle('active');
	circle.classList.toggle('active');
	circle2.classList.toggle('active');

	if (play.classList.contains('active')) {
		playPause();
	} else {
		Music.pause();
	}
}