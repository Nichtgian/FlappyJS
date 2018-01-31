class Map {
    constructor() {
        this.gravity = 1.2;
        this.sky = {speed: 2, blocks: []};
        this.ground = {speed: 5, blocks: []};
        this.skywidth = canvas.width / 1.5;
        this.groundwidth = 168;
        this.initSky();
        this.initGround();
    }

    calc() {
        this.moveSky();
        this.moveGround();
    }

    render() {
        this.renderSky();
        this.renderGround();
    }

    renderSky() {
        let sky = texture.sky;
        for (let i = 0; i < this.ground.blocks.length; i++) {
            ctx.drawImage(sky, this.sky.blocks[i], 0, this.skywidth, canvas.height);
        }
    }

    renderGround() {
        let ground = texture.ground;
        for (let i = 0; i < this.ground.blocks.length; i++) {
            ctx.drawImage(ground, this.ground.blocks[i], canvas.height / 100 * 95, ground.width, canvas.height / 100 * 5);
        }
    }

    initSky() {
        for (let x = 0; x <= canvas.width; x += this.skywidth) {
            this.sky.blocks.push(x);
        }
    }

    moveSky() {
        for (let i = 0; i < this.sky.blocks.length; i++) {
            this.sky.blocks[i] -= 2;
        }
        this.addSky();
        this.removeSky();
    }

    addSky() {
        if (this.sky.blocks[this.sky.blocks.length - 1] + this.skywidth <= canvas.width) {
            this.sky.blocks.push(this.sky.blocks[this.sky.blocks.length - 1] + this.skywidth);
        }
    }

    removeSky() {
        if (this.sky.blocks[0] + this.skywidth <= 0) {
            this.sky.blocks.shift();
        }
    }

    initGround() {
        for (let x = 0; x <= canvas.width; x += this.groundwidth) {
            this.ground.blocks.push(x);
        }
    }

    moveGround() {
        for (let i = 0; i < this.ground.blocks.length; i++) {
            this.ground.blocks[i] -= this.ground.speed;
        }
        this.addGround();
        this.removeGround();
    }

    addGround() {
        if (this.ground.blocks[this.ground.blocks.length - 1] + this.groundwidth <= canvas.width) {
            this.ground.blocks.push(this.ground.blocks[this.ground.blocks.length - 1] + this.groundwidth);
        }
    }

    removeGround() {
        if (this.ground.blocks[0] + this.groundwidth <= 0) {
            this.ground.blocks.shift();
        }
    }
}
