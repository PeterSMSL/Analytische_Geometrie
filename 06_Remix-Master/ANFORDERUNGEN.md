# Mathe Tower Defense - Remix Master

## Globale Anforderungen

### Kernsystem
**Tower Defense Game mit Mathe-Integration:**
- HTML5 Canvas basiertes Spiel
- Funktioniert lokal und auf GitHub Pages
- Türme können nur durch Lösen von Mathe-Aufgaben gebaut werden
- Verschiedene Turm-Typen entsprechen verschiedenen Mathe-Themen

### Visuelle Grundlagen
**Sofort sichtbar beim Start:**
- ✅ Spielfeld mit sichtbarem Pfad für Monster
- ✅ Haus am Ende des Pfades (Verteidigungsziel)
- ✅ UI mit Leben, Score, Welle
- ✅ Turm-Auswahlmenü
- ✅ Spielbare Map von Anfang an

### Gameplay-Mechanik
**Tower Placement:**
- Klick auf Turmtyp → Klick auf Map → Mathe-Aufgabe erscheint
- Richtige Antwort → Turm wird gebaut
- Falsche Antwort → Turm wird nicht gebaut
- Türme schießen automatisch auf Monster

**Progression:**
- Wellen werden automatisch oder manuell gestartet
- Verschiedene Turm-Typen werden nach Wellen freigeschaltet
- Score-System für gelöste Aufgaben

**Fast Forward System:**
- ⏩ Fast Forward Button für schnellere Wellen
- Während Fast Forward: 3x Geschwindigkeit, alle Eingaben gesperrt
- Fast Forward läuft bis alle Monster tot oder beim Haus angekommen sind
- Erst dann werden Eingaben wieder aktiviert

### Mathe-Integration
**5 Kategorien mit je 2 Test-Aufgaben:**
1. **LGS (Lineare Gleichungssysteme)**
   - Einfache 2x2 Systeme
   - Multiple Choice Format

2. **Punkte im Raum**
   - Koordinaten ablesen
   - Abstände berechnen

3. **Vektoren**
   - Grundrechenarten
   - Längen berechnen

4. **Skalarprodukt**
   - Einfache Berechnungen
   - Orthogonalität

5. **Vektorprodukt**
   - Kreuzprodukt
   - Flächen berechnen

**Aufgaben-System:**
- Modal-Dialog für Aufgaben
- Timer (optional)
- Sofortige Feedback
- Explanation bei falschen Antworten
- **Mathe-Umgebungen:** Korrekte mathematische Darstellung wie in der gesamten Lernkarte
  - LaTeX/MathJax für Formeln
  - Einheitliche Formatierung
  - Professionelle mathematische Notation

### Technische Anforderungen
**Architektur:**
- Modularer Aufbau (separate JS-Dateien)
- Klare Trennung: Game Engine, Question System, UI
- Einfache, verständliche Code-Struktur
- **Logging-System:** JSON-Logs mit Session-Tracking (bewährtes System beibehalten)
  - Alle Spielaktionen protokollieren
  - Downloadbare Log-Dateien
  - Performance-Monitoring
  - Fehler-Tracking

**Deployment:**
- Funktioniert als statische Dateien
- Keine Server-Abhängigkeiten
- GitHub Pages kompatibel
- Lokale file:// Protokoll Unterstützung

### Performance
- Flüssige 60 FPS Animation
- Effiziente Canvas-Rendering
- Responsive Design für verschiedene Bildschirmgrößen

### User Experience
**Intuitive Bedienung:**
- Klare visuelle Feedback
- Verständliche Fehlermeldungen
- Hilfetexte und Tutorials
- Speichern von Fortschritt (localStorage)
- ⏩ Fast Forward Button für effiziente Wellen

**Accessibility:**
- Tastatur-Navigation möglich
- Kontrastreiche Farben
- Lesbare Schriftgrößen

## Prioritäten für MVP
1. **Phase 1:** Sichtbare Map, Pfad, Haus, grundlegendes UI
2. **Phase 2:** Turm-Placement mit einfachen Test-Aufgaben (MathJax Integration)
3. **Phase 3:** Monster-Spawning und Kampf-System
4. **Phase 4:** Fast Forward System implementieren
5. **Phase 5:** Alle 5 Mathe-Kategorien implementiert
6. **Phase 6:** Polish, Logging, Deployment-Test

## Nicht-Anforderungen
- Komplexe 3D-Grafiken
- Multiplayer-Funktionalität
- Server-Backend
- Komplizierte Physik-Engine
- Mobile-App (nur Web-Browser)

---
*Erstellt basierend auf Conversation History - Stand: 2025-07-20*