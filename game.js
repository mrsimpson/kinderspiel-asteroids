class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.keys = {};
        this.spaceship = new Spaceship(400, 300);
        this.lasers = [];
        this.asteroids = [];
        this.score = 0;
        this.running = true;
        
        this.setupControls();
        this.createAsteroids();
    }

    createAsteroids() {
        // Erstelle 4 große Asteroiden
        for (let i = 0; i < 4; i++) {
            let x, y;
            // Asteroiden nicht zu nah am Raumschiff spawnen
            do {
                x = Math.random() * 800;
                y = Math.random() * 600;
            } while (Math.abs(x - 400) < 100 && Math.abs(y - 300) < 100);
            
            this.asteroids.push(new Asteroid(x, y, 3));
        }
    }

    setupControls() {
        // Tastatur-Events
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Schießen mit Leertaste
            if (e.code === 'Space') {
                e.preventDefault(); // Verhindert Scrollen
                const newLaser = this.spaceship.shoot();
                if (newLaser) {
                    this.lasers.push(newLaser);
                }
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }

    update() {
        if (!this.running) return;
        
        // Raumschiff aktualisieren
        this.spaceship.update(this.keys);
        
        // Laser aktualisieren
        for (let i = this.lasers.length - 1; i >= 0; i--) {
            this.lasers[i].update();
            
            // Entferne Laser die den Bildschirm verlassen haben
            if (this.lasers[i].isOffScreen()) {
                this.lasers.splice(i, 1);
            }
        }

        // Asteroiden aktualisieren
        this.asteroids.forEach(asteroid => asteroid.update());

        // Kollisionen prüfen: Laser vs Asteroiden
        for (let i = this.lasers.length - 1; i >= 0; i--) {
            for (let j = this.asteroids.length - 1; j >= 0; j--) {
                if (this.asteroids[j].checkCollision(this.lasers[i].x, this.lasers[i].y)) {
                    // Treffer!
                    const hitAsteroid = this.asteroids[j];
                    
                    // Punkte geben
                    this.score += (4 - hitAsteroid.size) * 20; // Kleine = mehr Punkte
                    
                    // Asteroid teilen
                    const newAsteroids = hitAsteroid.split();
                    this.asteroids.splice(j, 1); // Alten entfernen
                    this.asteroids.push(...newAsteroids); // Neue hinzufügen
                    
                    // Laser entfernen
                    this.lasers.splice(i, 1);
                    break;
                }
            }
        }

        // Kollision: Raumschiff vs Asteroiden
        for (let asteroid of this.asteroids) {
            if (asteroid.checkCollision(this.spaceship.x, this.spaceship.y)) {
                this.running = false; // Game Over
            }
        }

        // Neues Level wenn alle Asteroiden zerstört sind
        if (this.asteroids.length === 0) {
            this.createAsteroids(); // Neue Asteroiden spawnen!
        }
    }

    draw() {
        // Bildschirm löschen
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Punkte anzeigen
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`Punkte: ${this.score}`, 10, 30);
        
        // Raumschiff zeichnen
        this.spaceship.draw(this.ctx);
        
        // Laser zeichnen
        this.lasers.forEach(laser => laser.draw(this.ctx));
        
        // Asteroiden zeichnen
        this.asteroids.forEach(asteroid => asteroid.draw(this.ctx));

        // Game Over anzeigen
        if (!this.running) {
            this.ctx.fillStyle = '#ff0000';
            this.ctx.font = '48px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('GAME OVER', 400, 300);
            this.ctx.fillStyle = '#fff';
            this.ctx.font = '24px Arial';
            this.ctx.fillText(`Endpunktzahl: ${this.score}`, 400, 350);
            this.ctx.fillText('F5 drücken zum Neustarten', 400, 380);
            this.ctx.textAlign = 'left';
        }
    }

    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    start() {
        this.gameLoop();
    }
}
