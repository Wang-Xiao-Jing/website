// 左下角小人的播放功能
// 获取音频元素
let Music = document.getElementById('mp3');
let Music1 = document.getElementById('mp4');

// 获取播放和暂停按钮
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');

// 获取音符元素
let note = document.querySelector('#note');
let note1 = document.querySelector('.note1');
let note2 = document.querySelector('.note2');
let note3 = document.querySelector('.note3');
let note4 = document.querySelector('.note4');
let note5 = document.querySelector('.note5');
let note6 = document.querySelector('.note6');

// 获取X元素
let x1 = document.querySelector('.x1');
let x2 = document.querySelector('.x2');
let x3 = document.querySelector('.x3');
let x4 = document.querySelector('.x4');

// 播放音乐函数
function playPause() {
	Music.play();
}

// 播放音乐函数
function playPause1() {
	Music1.play();
}

// 切换播放/暂停状态的函数
document.querySelector('.play').onclick = function() {
	this.classList.toggle('active');
	pause.classList.toggle('active');
	x1.classList.toggle('active');
	x2.classList.toggle('active');
	x3.classList.toggle('active');
	x4.classList.toggle('active');
	note1.classList.toggle('active');
	note2.classList.toggle('active');
	note3.classList.toggle('active');
	note4.classList.toggle('active');
	note5.classList.toggle('active');
	note6.classList.toggle('active');
	// 检查是否包含 'active' 类
	if (play.classList.contains('active')) {
		playPause(); // 播放Music
		Music1.pause(); // 暂停Music1

	} else {
		playPause1(); // 播放Music1
		Music.pause(); // 暂停Music

	}
}