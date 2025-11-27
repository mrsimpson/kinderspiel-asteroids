# Spiel-Architektur 🏗️

**Spiel**: Asteroiden-Ballerspiel  
**Plattform**: Browser (HTML5/JavaScript)  
**Erstellt**: 26. November 2025

---

## Wofür dieses Dokument da ist

Dieses Dokument erklärt das **GROSSE BILD** deines Spiels:

- Auf welcher Plattform wir bauen (Browser!)
- Was die Haupt-Bausteine sind
- Wofür jeder Baustein zuständig ist
- Wie sie zusammenarbeiten

Stell dir vor wie LEGO planen:

- **Plattform** = Welche Art LEGO wir benutzen
- **Bausteine** = Die Hauptteile die wir brauchen
- **Zuständigkeiten** = Was jedes Teil macht

**Kein Code, keine Dateien - nur die großen Ideen!**

---

## Plattform-Entscheidung

**Wir haben Browser (HTML5/JavaScript) gewählt weil:**

- Funktioniert überall (Computer, Tablet, Handy)
- Du kannst es einfach mit Freunden teilen
- Läuft direkt im Browser - keine Installation nötig
- Du lernst "echten" Code zu schreiben

**Platform Options We Considered:**

| Platform                       | Best For                   | Pros                                                  | Cons                       |
| ------------------------------ | -------------------------- | ----------------------------------------------------- | -------------------------- |
| **Scratch**                    | Total beginners, ages 8-10 | Visual blocks, can't make syntax errors, easy sharing | Less control over graphics |
| **Browser (HTML5/JavaScript)** | Kids ready for "real" code | Works anywhere, full control, easy to share links     | Need to type carefully     |
| **Python + Pygame**            | Kids who know Python       | Desktop games, powerful                               | Need to install Python     |

---

## Das große Bild

```
┌─────────────────────────────────┐
│    SPIEL-MANAGER 🎮             │
│   (Der Chef - Steuert alles)    │
└─────────────────────────────────┘
              |
              |
    ┌─────────┴─────────┐
    |                   |
    v                   v
┌─────────┐       ┌─────────┐
│RAUMSCHIFF│       │ASTEROIDEN│
│    🚀   │       │   🪨    │
└─────────┘       └─────────┘
    |                   |
    └─────────┬─────────┘
              v
       ┌──────────────┐
       │   BILDSCHIRM │
       │   (Anzeige)  │
       └──────────────┘
```

**Wie es funktioniert:**

1. **Spiel-Manager** ist der Chef - er kontrolliert alles
2. **Raumschiff** und **Asteroiden** machen ihre eigenen Sachen
3. **Bildschirm** zeigt was auf dem Bildschirm passiert
4. Spiel-Manager sorgt dafür, dass alle zusammenarbeiten!

---

## Bausteine

### 🎮 Spiel-Manager

Der Hauptcontroller der das ganze Spiel steuert.

**Zuständigkeiten:**
- Hält das Spiel am Laufen
- Sagt allen anderen Teilen, wann sie ihre Arbeit machen sollen
- Prüft ob der Spieler gewonnen oder verloren hat
- Behält die Punkte im Auge

**Warum wir das brauchen:**
Jedes Spiel braucht jemanden der das Kommando hat, wie ein Schiedsrichter beim Sport!

---

### 🚀 Raumschiff

Das Fahrzeug das der Spieler steuert.

**Zuständigkeiten:**
- Weiß wo es im Spiel ist
- Merkt sich seine Gesundheit und Punkte
- Bewegt sich wenn der Spieler Tasten drückt
- Prüft ob es etwas Wichtiges berührt hat
- Schießt Laser ab

**Warum wir das brauchen:**
Das bist DU im Spiel! Ohne das kannst du nicht spielen.

---

### 🪨 Asteroiden

Die Hindernisse die du abschießen musst.

**Zuständigkeiten:**
- Wissen wo sie sind
- Bewegen sich im Weltraum herum
- Prüfen ob sie das Raumschiff berührt haben
- Zerbrechen in kleinere Stücke wenn sie getroffen werden
- Machen das Spiel herausfordernd

**Warum wir das brauchen:**
Spiele brauchen Herausforderungen! Ohne Asteroiden gäbe es nichts abzuschießen.

---

### 🔫 Laser

Die Geschosse die das Raumschiff abfeuert.

**Zuständigkeiten:**
- Fliegen geradeaus vom Raumschiff weg
- Prüfen ob sie einen Asteroiden getroffen haben
- Verschwinden wenn sie den Bildschirm verlassen
- Zerstören Asteroiden bei Treffer

**Warum wir das brauchen:**
Ohne Laser kein Ballerspiel! Das ist deine Waffe gegen die Asteroiden.

---

### 🖥️ Bildschirm

Zeigt alles auf dem Bildschirm an.

**Zuständigkeiten:**
- Zeichnet das Raumschiff
- Zeichnet Asteroiden und Laser
- Zeigt die Punkte an
- Zeigt Nachrichten wie "Game Over"

**Warum wir das brauchen:**
Wir müssen SEHEN was passiert! Der Bildschirm macht das unsichtbare Spiel sichtbar.

---

## How They Work Together

<!-- LLM: Explain the overall flow in simple terms. Focus on relationships, not implementation. -->

Think of it like a team working together:

**The Game Loop** (what happens over and over, very fast):

1. **Game Manager** wakes everyone up: "Time to do your jobs!"
2. **Player** checks if keys were pressed and moves
3. **Enemies** move according to their patterns
4. **Game Manager** asks: "Did anything touch anything?"
   - Player hit enemy? → Player takes damage
   - Player got coin? → Score goes up
5. **Game Manager** asks **Display**: "Show what changed!"
6. **Display** redraws everything on screen
7. **Repeat!** This happens 60 times per second!

**This is like a movie** - it happens so fast your eyes see smooth movement!

---

## Why Separate Into Building Blocks?

Imagine your room:

- **Messy**: Everything in one big pile - hard to find anything
- **Organized**: Toys in toy box, books on shelf, clothes in closet - easy to find!

**Same with games!**

**All in one piece (BAD):**

- Hard to understand
- Hard to fix bugs
- Hard to add new features
- Confusing for everyone

**Separated into building blocks (GOOD):**

- Each block has ONE clear job
- Easy to find where something happens
- Easy to fix: "Enemy not moving? Check the Enemy block!"
- Easy to add: "Want new enemy types? Make a new Enemy block!"

**Professional game developers ALWAYS organize their games this way!**

---

## Key Decisions

<!-- LLM: Document important architectural decisions in simple terms -->

**Decision 1: [DECISION_TITLE]**

- **What we decided**: [Simple explanation]
- **Why**: [Reason in terms child understands]
- **Impact**: [How this helps the game]

**Decision 2: [DECISION_TITLE]**

- **What we decided**: [Simple explanation]
- **Why**: [Reason in terms child understands]
- **Impact**: [How this helps the game]

---

## Remember

**This is your game's blueprint!**

- It shows WHO does WHAT
- Each building block has its own job
- They work together like a team
- This is the BIG PICTURE - details come later!

**Next**: Look at the Design document to see HOW to build each block with actual code! 🛠️

Let's build something amazing! 🚀
