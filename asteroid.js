class Asteroid {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size; // 1=klein, 2=mittel, 3=groß
        this.radius = size * 15;
        this.velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
        };
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    }

    update() {
        // Bewegung
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.rotation += this.rotationSpeed;

        // Bildschirm-Grenzen (kommt auf der anderen Seite wieder rein)
        if (this.x < -this.radius) this.x = 800 + this.radius;
        if (this.x > 800 + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = 600 + this.radius;
        if (this.y > 600 + this.radius) this.y = -this.radius;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Asteroid als Kreis zeichnen
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
    }

    // Prüft Kollision mit einem Punkt
    checkCollision(x, y) {
        const dx = this.x - x;
        const dy = this.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius;
    }

    // Teilt den Asteroiden in kleinere Stücke
    split() {
        if (this.size <= 1) return []; // Kleinste Asteroiden verschwinden
        
        const newAsteroids = [];
        for (let i = 0; i < 2; i++) {
            const newAsteroid = new Asteroid(this.x, this.y, this.size - 1);
            // Gib ihnen verschiedene Richtungen
            newAsteroid.velocity.x = (Math.random() - 0.5) * 3;
            newAsteroid.velocity.y = (Math.random() - 0.5) * 3;
            newAsteroids.push(newAsteroid);
        }
        return newAsteroids;
    }
}
