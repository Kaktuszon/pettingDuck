class Duck {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.w = 134;
        this.h = 90;

        this.headW = 72;
        this.headH = 32;
        this.headX = this.x + this.headW;
        this.headY = this.y + this.headH;

        this.image;
        this.sound;
    }
}