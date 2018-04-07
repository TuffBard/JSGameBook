var canvas;
var context;

var keyboard;

var playerService;
var player;

$(function() {
    canvas = document.getElementById("GameCanvas");
    context = canvas.getContext("2d");
    playerService = new PlayerService();

    initKeyboard();
    initPlayer();

    Start();
});

/**
 * Lance le jeu
 */
function Start() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    playerService.event();
    playerService.draw();
    requestAnimationFrame(Start);
}

/**
 * Initialise le clavier
 */
function initKeyboard() {
    keyboard = new Keyboard();

    window.onkeydown = function(e) {
        keyboard.Keys[e.key || e.keyCode] = true;
    }

    window.onkeyup = function(e) {
        keyboard.Keys[e.key || e.keyCode] = false;
    }
}

/**
 * Initialise le joueur
 */
function initPlayer() {
    player = new Player();
    player.x = 30;
    player.y = 30;
}