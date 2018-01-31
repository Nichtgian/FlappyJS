let canvas = document.getElementById('world');
let ctx = canvas.getContext('2d');

let texture = {
    ground: new Image(),
    sky: new Image(),
    upper: new  Image(),
    lower: new Image(),
    player: new Image(),
    life: new Image()
};

texture.ground.src = "./texture/ground.png";
texture.sky.src = "./texture/sky-day.png";
texture.upper.src = "./texture/green-upper.png";
texture.lower.src = "./texture/green-lower.png";
texture.player.src = "./texture/player.png";
texture.life.src = "./texture/life.png";

texture.life.onload = function () {
    Game.interval = setInterval(Game.run, 1000 / Game.fps);
}

window.addEventListener("resize", resize, false);

let oldSize = {x: null, y: null};

resize();

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (oldSize.x == null) {
        oldSize.x = canvas.width;
        oldSize.y = canvas.height;
    }
    if ((oldSize.x > canvas.width && oldSize.y > canvas.height) || (oldSize.x < canvas.width && oldSize.y < canvas.height)) {
        location.reload();
    }
}

let Game = {
    fps: 50,
    interval: null,
    run: null
};

Game.run = function() {
    update();
    draw();
}
