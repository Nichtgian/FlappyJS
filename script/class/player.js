class Player {
    constructor() {
        this.x = 20;
        this.y = 50;
        this.size = 100;
        this.gravity = 0;
        this.life = 1;
    }

    flap() {
        this.gravity = -20;
    }

    render() {
        this.fall();
        this.ground();
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    fall() {
        this.gravity += map.gravity;
        this.y += this.gravity;
        console.log(this.y += this.gravity);
    }

    ground() {
        if (this.y + this.size >= canvas.height) {
            this.y = canvas.height - this.size;
            this.gravity = 0;
        }
    }
}
