canvas.addEventListener('click', function() {
    player.flap();
    animation.player.animate();
}, false);

canvas.addEventListener('touchmove', function() {
    player.flap();
    animation.player.animate();
}, false);
