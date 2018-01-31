let canvas = document.getElementById('world');
let ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

let texture = {
    ground: new Image(),
    sky: new Image(),
    upper: new  Image(),
    lower: new Image(),
    life: new Image()
};

texture.ground.src = "./texture/map/ground.png";
texture.sky.src = "./texture/map/sky-day.png";
texture.upper.src = "./texture/map/green-upper.png";
texture.lower.src = "./texture/map/green-lower.png";
texture.life.src = "./texture/map/life.png";

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
