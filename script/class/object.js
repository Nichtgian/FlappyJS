class Object {
    constructor(x, space, min, max) {
        this.x = x;
        this.speed = 10;
        this.hit = false;
        this.height = this.getHeight(min, max);
        this.space = this.getSpace(space);
        this.width = this.getWidth();
    }

    getHeight(minHeight, maxHeight) {
        return Math.floor(Math.random() * maxHeight) + minHeight;
    }

    getSpace(space)  {
        return Math.floor(Math.random() * 400) + space;
    }

    getWidth() {
        return Math.floor(Math.random() * 200) + 70;
    }
}
