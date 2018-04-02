var canvas;
var context;

$(function() {
    canvas = document.getElementById("GameCanvas");

    context = canvas.getContext("2d");

    player = new Player();

    x = 150;
    y = 150;

    gameLoop();
});

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(x, y);
    requestAnimationFrame(gameLoop);
}