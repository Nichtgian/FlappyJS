animation.player.animate = function () {

    animation.player.texture = animation.player.fly1;

    setTimeout(function() {
        animation.player.texture = animation.player.fly2;
    }, 250);

    setTimeout(function() {
        animation.player.texture = animation.player.fly0;
    }, 500);
}
