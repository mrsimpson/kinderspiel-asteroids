class Laser {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 8;
        this.size = 3;
    }

    update() {
        // Laser fliegt geradeaus
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
    }

    // Prüft ob Laser den Bildschirm verlassen hat
    isOffScreen() {
        return this.x < 0 || this.x > 800 || this.y < 0 || this.y > 600;
    }
}
