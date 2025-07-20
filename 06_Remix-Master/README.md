# 🏰 Mathe Tower Defense - Remix Master

Ein Tower Defense Spiel mit mathematischen Aufgaben für die Oberstufe. Türme können nur durch das Lösen von Mathe-Aufgaben gebaut werden.

## 🚀 Quick Start

1. **Lokaler Start:** Öffne `index.html` im Browser
2. **GitHub Pages:** Lade alle Dateien in ein Repository hoch

## 🎮 Spielprinzip

- **Ziel:** Verteidige dein Haus gegen Monster-Wellen
- **Türme bauen:** Klick auf Turmtyp → Klick auf Karte → Mathe-Aufgabe lösen
- **Progression:** Neue Türme werden durch Wellen freigeschaltet
- **Fast Forward:** ⏩ für 3x Geschwindigkeit

## 📚 Mathe-Kategorien

### 🟢 **Einfach (Welle 1-9):**
1. **🏰 Allgemein** - Grundrechenarten, Prozente
2. **🔢 LGS** - 2×2 Lineare Gleichungssysteme
3. **📍 Punkte im Raum** - Koordinaten, Abstände
4. **➡️ Vektoren** - Addition, Längen
5. **⚡ Skalarprodukt** - Berechnung, Orthogonalität
6. **✖️ Vektorprodukt** - Kreuzprodukt, Flächen

### 🔴 **Schwer (Ab Welle 10):**
- **🔢 LGS Erweitert** - 3×3 Gleichungssysteme mit Gauß-Verfahren
- **📍 Punkte Erweitert** - Schwerpunkte, komplexe Berechnungen
- **➡️ Vektoren Erweitert** - Linearkombinationen, Unabhängigkeit
- **⚡ Skalar Erweitert** - Winkelberechnungen, geometrische Formen
- **✖️ Vektorprodukt Erweitert** - Spatprodukt, Flächenberechnungen
- **📖 Theoriefragen** - Definitionen, Formeln, Konzepte

## 🛠️ Technische Details

### Architektur
- **HTML5 Canvas** für Spiel-Rendering
- **MathJax** für mathematische Formeln
- **Modulare JS-Struktur** (Engine, Questions, Logger)
- **Session-basiertes Logging** für Debugging

### Dateien
- `index.html` - Haupt-HTML mit UI
- `style.css` - Responsive Styling
- `gameEngine.js` - Kern-Spiellogik
- `questionSystem.js` - Mathe-Aufgaben mit MathJax
- `gameLogger.js` - Session-Logging System
- `main.js` - Initialisierung und Event-Handling

### Features
- ✅ **Vollständig offline** lauffähig
- ✅ **GitHub Pages** kompatibel
- ✅ **Responsive Design** für verschiedene Bildschirmgrößen
- ✅ **Keyboard Shortcuts** (W, P, F, Q, 1-6)
- ✅ **Session Logging** mit Download-Funktion
- ✅ **Fast Forward System** mit UI-Sperrung
- ✅ **Progressive Tower-Freischaltung**
- ✅ **Wellenbasierte Schwierigkeit** (ab Welle 10)
- 🆕 **Zertifikat-System** mit PDF-Download

## 🎯 Steuerung

### Maus
- **Turmtyp auswählen** → Klick auf Button
- **Turm platzieren** → Klick auf Karte (löst Aufgabe aus)

### Tastatur
- **W** - Nächste Welle starten
- **P** - Pause/Fortsetzen
- **F** - Fast Forward an/aus
- **Q** - Bonus-Aufgabe anzeigen
- **1-6** - Turmtyp direkt auswählen

## 🔧 Konfiguration

### Fragen anpassen
In `questionSystem.js` → `initializeQuestions()`:
```javascript
this.questionBank = {
    basic: [ /* Neue Fragen hier */ ],
    lgs: [ /* LGS Aufgaben */ ],
    // ...
}
```

### Spielbalance
In `gameEngine.js`:
- `tower.range` - Reichweite
- `tower.damage` - Schaden
- `monster.health` - Leben
- `this.fastSpeed` - Fast Forward Geschwindigkeit

## 📊 Logging

Das Spiel erstellt automatisch detaillierte JSON-Logs:
- Alle Spielaktionen
- Performance-Metriken
- Fehler-Tracking
- Session-Informationen

**Download:** Klick auf "📋 Logs Download" Button

## 🏆 Zertifikat-System

Das Spiel bietet ein Belohnungssystem mit downloadbaren Zertifikaten:

### Funktionen:
- **Game Over Zertifikat** - Immer verfügbar nach Spielende
- **Name-Eingabe** für personalisierte Zertifikate  
- **Text-Download**: `<Name>_Grundlagenzertifikat.txt`
- **Spielstatistiken** inklusive (Welle, Score, Türme, Sterne)
- **Nur im Game Over verfügbar** - Keine Störung des normalen Spielablaufs

### Zertifikat enthält:
- Spielername und Datum
- Erreichte Wellen und Score
- Sterne-Bewertung
- Auflistung aller behandelten Mathe-Themen

## 🌐 Deployment

### GitHub Pages
1. Repository erstellen
2. Alle Dateien hochladen
3. Settings → Pages → Deploy from branch
4. Fertig! ✅

### Lokal testen
- Direkt `index.html` öffnen
- Oder HTTP-Server: `python -m http.server 8000`

---

**🎯 Status:** Vollständig funktionsfähig
**📅 Version:** Remix Master 1.0
**🔄 Letztes Update:** 2025-07-20