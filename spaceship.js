class Spaceship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.velocity = { x: 0, y: 0 };
        this.size = 10;
        this.canShoot = true;
        this.shootCooldown = 0;
        this.thrusting = false; // Für die Schub-Animation
    }

    update(keys) {
        // Drehen
        if (keys['ArrowLeft']) {
            this.angle -= 0.05;
        }
        if (keys['ArrowRight']) {
            this.angle += 0.05;
        }

        // Vorwärts fliegen
        this.thrusting = false; // Reset
        if (keys['ArrowUp']) {
            this.thrusting = true; // Schub ist aktiv!
            this.velocity.x += Math.cos(this.angle) * 0.2;
            this.velocity.y += Math.sin(this.angle) * 0.2;
        }

        // Position aktualisieren
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Reibung
        this.velocity.x *= 0.99;
        this.velocity.y *= 0.99;

        // Bildschirm-Grenzen
        if (this.x < 0) this.x = 800;
        if (this.x > 800) this.x = 0;
        if (this.y < 0) this.y = 600;
        if (this.y > 600) this.y = 0;

        // Schieß-Cooldown
        if (this.shootCooldown > 0) {
            this.shootCooldown--;
        }
    }

    // Schießt einen Laser ab
    shoot() {
        if (this.shootCooldown <= 0) {
            this.shootCooldown = 10; // 10 Frames warten
            return new Laser(this.x, this.y, this.angle);
        }
        return null;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        // Raumschiff als Dreieck zeichnen
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.size, 0);
        ctx.lineTo(-this.size, -this.size/2);
        ctx.lineTo(-this.size, this.size/2);
        ctx.closePath();
        ctx.stroke();
        
        // Schub-Animation (nur wenn Pfeil-hoch gedrückt)
        if (this.thrusting) {
            ctx.strokeStyle = '#ff6600'; // Orange Flamme
            ctx.lineWidth = 2;
            ctx.beginPath();
            // Flamme hinten am Raumschiff
            ctx.moveTo(-this.size, -this.size/4);
            ctx.lineTo(-this.size * 1.8, 0); // Flammen-Spitze
            ctx.lineTo(-this.size, this.size/4);
            ctx.stroke();
            
            // Zusätzliche Flammen-Effekte
            ctx.strokeStyle = '#ffff00'; // Gelber Kern
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-this.size, -this.size/6);
            ctx.lineTo(-this.size * 1.5, 0);
            ctx.lineTo(-this.size, this.size/6);
            ctx.stroke();
        }
        
        ctx.restore();
    }
}
