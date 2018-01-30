class Object {
    constructor(x, space, min, max) {
        this.x = x;
        this.speed = 5;
        this.hit = false;
        this.height = this.getHeight(min, max);
        this.space = this.getSpace(space);
        this.width = 100;
    }

    getHeight(minHeight, maxHeight) {
        return Math.floor(Math.random() * maxHeight) + minHeight;
    }

    getSpace(space)  {
        return Math.floor(Math.random() * 400) + space;
    }

    move() {
        this.x -= this.speed;
    }

    render() {
        ctx.fillRect(this.x, 0, this.width, this.height);
        ctx.fillRect(this.x, this.height + this.space, this.width, canvas.height - (this.height + this.space));
    }
}
