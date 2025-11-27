// Startet das Spiel
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Erstelle das Spiel
const game = new Game(canvas, ctx);

// Starte das Spiel
game.start();
