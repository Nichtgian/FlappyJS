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

    colide() {
        for (let i = 0; i < object.length; i++) {
            let obj = object[i];
            if (!obj.hit) {
                if (player.x + player.size >= obj.x && player.x + player.size <= obj.x + obj.width) {
                    if (player.y <= obj.height || player.y + player.size >= obj.height + obj.space) {
                        obj.hit = true;
                    }
                }
            }
        }
    }

    move() {
        for (let i = 0; i < object.length; i++) {
            let obj = object[i];
            obj.x -= obj.speed;
            if (obj.x < 0 - obj.width) {
                if (!obj.hit) {
                    player.score++;
                }
                object.shift();
                object.push(new Object(canvas.width, 20, 5, 70));
            }
        }
        this.colide();
    }

    render() {
        for (let i = 0; i < object.length; i++) {
            let obj = object[i];
            ctx.drawImage(texture.upper, obj.x, 0, obj.width, obj.height);
            ctx.drawImage(texture.lower, obj.x, obj.height + obj.space, obj.width, canvas.height - (obj.height + obj.space));
        }
    }
}
