class Object {
    constructor(x, space, min, max) {
        this.x = x;
        this.speed = 5;
        this.hit = false;
        this.height = this.getHeight(min, max);
        this.space = this.getSpace(space);
        this.width = 100;
    }

    getHeight(min, max) {
        return Math.floor(Math.random() * (canvas.height / 100 * max)) + (canvas.height / 100 * min);
    }

    getSpace(space)  {
        return Math.floor(Math.random() * (canvas.height / 100 * space)) + player.size * 5;
    }

    move() {
        this.x -= this.speed;
        if (this.x < 0 - this.width) {
            object.shift();
            object.push(new Object(canvas.width, 20, 5, 70));
        }
    }

    render() {
        ctx.fillRect(this.x, 0, this.width, this.height);
        ctx.fillRect(this.x, this.height + this.space, this.width, canvas.height - (this.height + this.space));
    }
}
