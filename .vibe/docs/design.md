# Spiel-Design 🛠️

**Mein Spiel**: Asteroiden-Ballerspiel  
**Plattform**: Browser (HTML5/JavaScript)  
**Datum**: 26. November 2025

---

## Wofür dieses Dokument da ist

Dieses Dokument erklärt **WIE wir den Code organisieren und strukturieren** um das Spiel zu bauen.

Stell dir vor wie ein Bauplan:

- **Requirements** = Was wir bauen
- **Architektur** = Die Hauptteile und ihre Aufgaben
- **Design** (dieses Dokument) = Wie wir die Konstruktion organisieren

---

## Kern-Konzepte die wir verwenden

### 🧠 Zustand (Memory)
Jedes Objekt merkt sich wichtige Informationen:
- Raumschiff merkt sich: Position, Geschwindigkeit, Gesundheit
- Asteroiden merken sich: Position, Größe, Geschwindigkeit
- Spiel merkt sich: Punkte, Level, ob es läuft

### 📏 Mechaniken (Rules)
Die Regeln wie Dinge funktionieren:
- Raumschiff bewegt sich wenn Tasten gedrückt werden
- Laser fliegen geradeaus
- Asteroiden zerbrechen bei Treffer

### 🎨 Darstellung (Drawing)
Wie Dinge auf dem Bildschirm gezeichnet werden:
- Raumschiff als Dreieck
- Asteroiden als Kreise
- Laser als kleine Linien

### 🔄 Spiel-Schleife (Game Loop)
Das passiert 60 mal pro Sekunde:
1. Eingaben prüfen
2. Alles bewegen
3. Kollisionen prüfen
4. Bildschirm neu zeichnen

---

## Verwendung von Bibliotheken

**Wir verwenden nur Standard-Browser-Features:**
- **HTML5 Canvas** - zum Zeichnen auf dem Bildschirm
- **JavaScript** - für die Spiel-Logik
- **Keine externen Bibliotheken** - wir lernen die Grundlagen!

---

## 🗺️ Wie der Code organisiert ist

### Datei-Struktur für Browser/JavaScript

```
asteroiden-ballerspiel/
  ├── index.html      ← Die Hauptseite (zeigt das Spiel)
  ├── style.css       ← Macht alles hübsch
  ├── game.js         ← Spiel-Manager (der Chef)
  ├── spaceship.js    ← Raumschiff-Klasse
  ├── asteroid.js     ← Asteroiden-Klasse
  ├── laser.js        ← Laser-Klasse
  └── main.js         ← Startet das Spiel
```

**Warum so viele Dateien?**
- Jede Datei hat EINE klare Aufgabe
- Einfacher zu verstehen und zu reparieren
- Professionelle Spieleentwickler machen das auch so!

---

## 🎯 Detaillierte Feature-Designs

### 1. 🚀 Raumschiff steuern

**Was der Spieler sieht:**
- Ein Dreieck das sich dreht und vorwärts fliegt
- Reagiert auf Pfeiltasten

**Wie es technisch funktioniert:**
- **Zustand**: Position (x,y), Winkel, Geschwindigkeit
- **Mechanik**: Pfeiltasten ändern Winkel und Geschwindigkeit
- **Darstellung**: Dreieck wird an Position gezeichnet

**Datei**: `spaceship.js`

### 2. 🔫 Laser schießen

**Was der Spieler sieht:**
- Kleine weiße Linien fliegen vom Raumschiff weg
- Leertaste = neuer Laser

**Wie es technisch funktioniert:**
- **Zustand**: Position (x,y), Richtung, Geschwindigkeit
- **Mechanik**: Fliegt geradeaus, verschwindet am Rand
- **Darstellung**: Kleine Linie wird gezeichnet

**Datei**: `laser.js`

### 3. 🪨 Asteroiden

**Was der Spieler sieht:**
- Graue Kreise die herumfliegen
- Zerbrechen in kleinere Stücke bei Treffer

**Wie es technisch funktioniert:**
- **Zustand**: Position (x,y), Größe, Geschwindigkeit
- **Mechanik**: Fliegt herum, teilt sich bei Treffer
- **Darstellung**: Kreis wird gezeichnet

**Datei**: `asteroid.js`

### 4. 💥 Kollisionen prüfen

**Was der Spieler sieht:**
- Asteroiden verschwinden bei Laser-Treffer
- Game Over bei Raumschiff-Asteroiden-Berührung

**Wie es technisch funktioniert:**
- **Mechanik**: Prüft Abstände zwischen Objekten
- **Im Spiel-Manager**: Alle Kollisionen werden geprüft

**Datei**: `game.js`

### 5. ⭐ Punkte sammeln

**Was der Spieler sieht:**
- Zahl oben links wird größer
- Mehr Punkte für kleinere Asteroiden

**Wie es technisch funktioniert:**
- **Zustand**: Punkte-Variable im Spiel-Manager
- **Mechanik**: +10 für große, +20 für mittlere, +50 für kleine Asteroiden
- **Darstellung**: Text wird oben links gezeichnet

**Datei**: `game.js`

---

## 🔄 Bau-Reihenfolge

**Schritt 1**: HTML-Grundgerüst und Canvas
**Schritt 2**: Raumschiff das sich bewegt
**Schritt 3**: Laser schießen
**Schritt 4**: Asteroiden hinzufügen
**Schritt 5**: Kollisionen und Punkte
**Schritt 6**: Game Over und Neustart

**Nach jedem Schritt testen wir das Spiel!** 🎮

## 🗺️ How Code Is Organized

<!-- LLM INSTRUCTION:
Show the actual file/sprite structure for this specific game.
Be concrete - list actual file names or sprite names.
Explain WHAT goes in each file and WHY.

IMPORTANT:
- Maintain single responsibility principle!
- Keep it object-oriented (one building block = one file)
-->

### File Structure for [PLATFORM]

```
[ACTUAL_FILE_STRUCTURE]

Example for Browser/JavaScript:
game/
  ├── game.js       ← Game loop, manages everything
  ├── player.js     ← Player class (state, mechanics, drawing)
  ├── enemy.js      ← Enemy class
  └── main.js       ← Starts the game
```
