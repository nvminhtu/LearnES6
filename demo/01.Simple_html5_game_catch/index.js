// Image(): https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// set background Image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
}
bgImage.src ="background.png";

// Hero
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
    monsterReady = true;
}
monsterImage.src= "monster.png";

// set Game Objects
var hero = {
    speed: 256,
    x: 0,
    y: 0 
};

var monster = {
    x: 0,
    y: 0
}

var monsterCaught = 0; // the number of Monster - caught

// set Player Input
var keysDown = {};

addEventListener("keydown",function(e){
    keysDown[e.keyCode] = true;
}, false);


addEventListener("keyup",function(e){
    delete keysDown[e.keyCode];
},false);
