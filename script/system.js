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
texture.sky.src = "./texture/sky.png";
texture.upper.src = "./texture/upper.png";
texture.lower.src = "./texture/lower.png";
texture.player.src = "./texture/player.png";
texture.life.src = "./texture/life.png";

texture.life.onload = function () {
    Game.interval = setInterval(Game.run, 1000 / Game.fps);
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

