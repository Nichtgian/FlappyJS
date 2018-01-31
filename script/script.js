let map = new Map();
let player = new Player();
let object = [];

object.push(new Object(canvas.width, 20, 5, 70));
object.push(new Object(canvas.width + canvas.width / 2, 20, 5, 70));

function update() {
    map.calc();
    player.calc();
    object[0].move();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    map.renderSky();
    player.render();
    object[0].render();
    map.render();
}
