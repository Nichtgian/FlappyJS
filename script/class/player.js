class Player {
    constructor() {
        this.x = 100;
        this.y = 50;
        this.size = 40;
        this.gravity = 0;
        this.life = 1;
    }

    calc() {
        this.fall();
        this.ground();
    }

    render() {
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    flap() {
        this.gravity = -20;
    }

    fall() {
        this.gravity += map.gravity;
        this.y += this.gravity;
    }

    ground() {
        if (this.y + this.size >= canvas.height - (canvas.height / 100 * 5)) {
            this.y = canvas.height - canvas.height / 100 * 5 - this.size;
            this.gravity = 0;
        }
    }
}
