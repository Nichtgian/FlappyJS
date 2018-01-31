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
        for (let i = 0; i < object.length; i++) {
            object[i].x -= object[i].speed;
            if (object[i].x < 0 - object[i].width) {
                object.shift();
                object.push(new Object(canvas.width, 20, 5, 70));
            }
        }
    }

    render() {
        for (let i = 0; i < object.length; i++) {
            ctx.drawImage(texture.upper, object[i].x, 0, object[i].width, object[i].height);
            ctx.drawImage(texture.lower, object[i].x, object[i].height + object[i].space, object[i].width, canvas.height - (object[i].height + object[i].space));
        }
    }
}
