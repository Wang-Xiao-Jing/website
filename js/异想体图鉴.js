// 实现异想体盒子的隐藏
var A = document.querySelectorAll(".AA,.AD");
var W = document.querySelectorAll(".W,.WD");
var H = document.querySelectorAll(".H,.HD");
var T = document.querySelectorAll(".T,.TD");
var Z = document.querySelectorAll(".Z,.ZD");
// 声明变量按钮
var Default = document.querySelector("#default0");
var Zayin = document.querySelector("#ZAYIN0");
var Teth = document.querySelector("#TETH0");
var He = document.querySelector("#HE0");
var Waw = document.querySelector("#WAW0");
var Aleph = document.querySelector("#ALEPH0");
// 遍历
Default.addEventListener("click", function() {
	// i = 0：初始化循环变量i为0。
	// i < A.length：当i小于数组A的长度时，继续循环。
	// i++：每次循环后，i自增1。
	for (i = 0; i < A.length; i++) {
		A[i].style.display = "block";
	}
	for (i = 0; i < W.length; i++) {
		W[i].style.display = "block";
	}
	for (i = 0; i < H.length; i++) {
		H[i].style.display = "block";
	}
	for (i = 0; i < T.length; i++) {
		T[i].style.display = "block";
	}
	for (i = 0; i < Z.length; i++) {
		Z[i].style.display = "block";
	}
});
Zayin.addEventListener("click", function() {
	for (i = 0; i < A.length; i++) {
		A[i].style.display = "none";
	}
	for (i = 0; i < W.length; i++) {
		W[i].style.display = "none";
	}
	for (i = 0; i < H.length; i++) {
		H[i].style.display = "none";
	}
	for (i = 0; i < T.length; i++) {
		T[i].style.display = "none";
	}
	for (i = 0; i < Z.length; i++) {
		Z[i].style.display = "block";
	}
});
Teth.addEventListener("click", function() {
	for (i = 0; i < A.length; i++) {
		A[i].style.display = "none";
	}
	for (i = 0; i < W.length; i++) {
		W[i].style.display = "none";
	}
	for (i = 0; i < H.length; i++) {
		H[i].style.display = "none";
	}
	for (i = 0; i < T.length; i++) {
		T[i].style.display = "block";
	}
	for (i = 0; i < Z.length; i++) {
		Z[i].style.display = "none";
	}
});
He.addEventListener("click", function() {
	for (i = 0; i < A.length; i++) {
		A[i].style.display = "none";
	}
	for (i = 0; i < W.length; i++) {
		W[i].style.display = "none";
	}
	for (i = 0; i < H.length; i++) {
		H[i].style.display = "block";
	}
	for (i = 0; i < T.length; i++) {
		T[i].style.display = "none";
	}
	for (i = 0; i < Z.length; i++) {
		Z[i].style.display = "none";
	}
});
Waw.addEventListener("click", function() {
	for (i = 0; i < A.length; i++) {
		A[i].style.display = "none";
	}
	for (i = 0; i < W.length; i++) {
		W[i].style.display = "block";
	}
	for (i = 0; i < H.length; i++) {
		H[i].style.display = "none";
	}
	for (i = 0; i < T.length; i++) {
		T[i].style.display = "none";
	}
	for (i = 0; i < Z.length; i++) {
		Z[i].style.display = "none";
	}
});
Aleph.addEventListener("click", function() {
	for (i = 0; i < A.length; i++) {
		A[i].style.display = "block";
	}
	for (i = 0; i < W.length; i++) {
		W[i].style.display = "none";
	}
	for (i = 0; i < H.length; i++) {
		H[i].style.display = "none";
	}
	for (i = 0; i < T.length; i++) {
		T[i].style.display = "none";
	}
	for (i = 0; i < Z.length; i++) {
		Z[i].style.display = "none";
	}
});