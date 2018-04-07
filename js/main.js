var canvas;
var context;

var keyboard;

var playerService;
var player;

$(function() {
    canvas = document.getElementById("GameCanvas");
    context = canvas.getContext("2d");
    playerService = new PlayerService();

    keyboard = new Keyboard();
    player = new Player(30, 30);

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