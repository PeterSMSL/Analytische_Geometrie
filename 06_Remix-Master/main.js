// Main.js - Application entry point and initialization
// Clean, robust initialization for Mathe Tower Defense Remix Master

let gameEngine;

// Initialize the game when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Mathe Tower Defense - Remix Master wird geladen...');
    
    try {
        // Check prerequisites
        if (!checkPrerequisites()) {
            return;
        }
        
        // Initialize game engine
        gameEngine = new GameEngine();
        window.gameEngine = gameEngine; // Make globally available
        
        // Show welcome message
        showWelcomeMessage();
        
        // Setup additional event listeners
        setupAdditionalEventListeners();
        
        // Initial UI update
        gameEngine.updateUI();
        
        console.log('✅ Spiel erfolgreich initialisiert!');
        gameLogger.logGame('Application successfully initialized', {
            gameEngineReady: !!gameEngine,
            questionSystemReady: !!window.questionSystem,
            mathJaxReady: !!window.MathJax
        });
        
    } catch (error) {
        console.error('❌ Fehler beim Initialisieren:', error);
        gameLogger.logError('Application initialization failed', {
            error: error.message,
            stack: error.stack
        });
        
        showErrorMessage(error);
    }
});

function checkPrerequisites() {
    // Check canvas support
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) {
        showErrorMessage(new Error('Canvas element nicht gefunden!'));
        return false;
    }
    
    if (!canvas.getContext) {
        showErrorMessage(new Error('Canvas wird von diesem Browser nicht unterstützt!'));
        return false;
    }
    
    // Check if required classes are available
    if (typeof GameEngine === 'undefined') {
        showErrorMessage(new Error('GameEngine nicht geladen!'));
        return false;
    }
    
    if (typeof QuestionSystem === 'undefined') {
        showErrorMessage(new Error('QuestionSystem nicht geladen!'));
        return false;
    }
    
    return true;
}

function showWelcomeMessage() {
    // Wait a bit for everything to settle
    setTimeout(() => {
        const welcomeText = `
🏰 Willkommen zum Mathe Tower Defense - Remix Master! 🏰

📖 Spielregeln:
• Klicke auf einen Turmtyp und dann auf die Karte
• Löse die Mathe-Aufgabe um den Turm zu bauen
• Verteidige dein Haus gegen die Monster-Wellen
• Schalte neue Türme durch Wellen-Fortschritt frei

🎮 Steuerung:
• 🌊 "Nächste Welle" - Startet eine neue Monster-Welle
• ⏩ "Fast Forward" - 3x Geschwindigkeit (sperrt Eingaben)
• ⏸️ "Pause" - Pausiert das Spiel
• 🚨 "PANIC!" - Notfall-Hilfe wenn es kritisch wird

💡 Tipps:
• Verschiedene Türme haben verschiedene Stärken
• Platziere Türme strategisch entlang des Pfades
• Nutze Fast Forward für langweilige Phasen
• Upgrade deine Türme durch das Lösen von Aufgaben

⚠️ Wichtige Hinweise:
• Baue mindestens einen Turm bevor du die erste Welle startest!
• 🔥 AB WELLE 10: Schwierigkeitssprung! 📝 Papier & Stift empfohlen
• 3×3 LGS, Theoriefragen und komplexe Berechnungen

Viel Erfolg beim Verteidigen! 🎯
        `;
        
        // Create and show welcome modal
        showInfoModal('🎮 Spielanleitung', welcomeText);
        
        gameLogger.logGame('Welcome message shown');
    }, 1000);
}

function setupAdditionalEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (!gameEngine || gameEngine.fastForward) return;
        
        switch(e.key.toLowerCase()) {
            case 'w':
                if (gameEngine.gameState === 'waiting') {
                    gameEngine.startNextWave();
                }
                break;
            case 'p':
                if (gameEngine.gameState === 'playing' || gameEngine.gameState === 'paused') {
                    gameEngine.togglePause();
                }
                break;
            case 'f':
                gameEngine.toggleFastForward();
                break;
            case 'q':
                if (window.questionSystem) {
                    window.questionSystem.showBonusQuestion();
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                const towerTypes = ['basic', 'lgs', 'point', 'vector', 'scalar', 'vectorproduct'];
                const towerType = towerTypes[parseInt(e.key) - 1];
                if (towerType && gameEngine.unlockedTowers.includes(towerType)) {
                    gameEngine.selectTowerType(towerType);
                }
                break;
        }
    });
    
    // Window resize handling
    window.addEventListener('resize', () => {
        // Update canvas scaling if needed
        updateCanvasSize();
    });
    
    // Visibility change handling (pause when tab not visible)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && gameEngine && gameEngine.gameState === 'playing') {
            gameEngine.togglePause();
            gameLogger.logGame('Game auto-paused due to tab visibility change');
        }
    });
    
    // Setup help button if it exists
    const helpBtn = document.getElementById('helpButton');
    if (helpBtn) {
        helpBtn.addEventListener('click', showHelp);
    }
}

function updateCanvasSize() {
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return;
    
    // Get the display size
    const rect = canvas.getBoundingClientRect();
    
    // Set the internal size to match the display size
    const displayWidth = rect.width;
    const displayHeight = rect.height;
    
    // Check if the canvas is not the same size
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        // Make the canvas the same size
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        
        gameLogger.logGame('Canvas resized', {
            newSize: `${displayWidth}x${displayHeight}`
        });
    }
}

function showInfoModal(title, content) {
    // Create temporary modal for info
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${title}</h2>
            <div style="white-space: pre-line; line-height: 1.6; text-align: left;">
                ${content}
            </div>
            <div class="modal-actions">
                <button onclick="this.closest('.modal').remove()" style="background: linear-gradient(45deg, #4CAF50, #45a049); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                    ✅ Verstanden
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Close on Escape key
    const keyHandler = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', keyHandler);
        }
    };
    document.addEventListener('keydown', keyHandler);
}

function showHelp() {
    const helpText = `
🎮 STEUERUNG:

🖱️ Maus:
• Klick auf Turmtyp → Auswahl
• Klick auf Karte → Turm platzieren (nach Aufgabe)

⌨️ Tastatur:
• W → Nächste Welle starten
• P → Pause/Fortsetzen
• F → Fast Forward an/aus
• Q → Bonus-Aufgabe
• 1-6 → Turmtyp direkt wählen

🏗️ TÜRME:
• 🏰 Allgemein (Welle 1+)
• 🔢 LGS Solver (Welle 1+)
• 📍 Punkt Laser (Welle 3+)
• ➡️ Vektor Kanone (Welle 5+)
• ⚡ Skalar Verstärker (Welle 7+)
• ✖️ Vektor Kreuz (Welle 9+)

⏩ FAST FORWARD:
• 3x Geschwindigkeit
• Alle Eingaben gesperrt
• Automatisch aus nach Welle
    `;
    
    showInfoModal('🆘 Hilfe', helpText);
    gameLogger.logGame('Help shown');
}

function showErrorMessage(error) {
    const errorModal = document.createElement('div');
    errorModal.className = 'modal';
    errorModal.innerHTML = `
        <div class="modal-content" style="background: #ffebee; border: 2px solid #f44336;">
            <h2 style="color: #d32f2f;">❌ Fehler beim Laden</h2>
            <div style="color: #333; margin: 20px 0;">
                <p><strong>Fehlermeldung:</strong></p>
                <p style="background: #fff; padding: 10px; border-radius: 5px; font-family: monospace;">
                    ${error.message}
                </p>
                <p><strong>Was tun?</strong></p>
                <ul style="text-align: left;">
                    <li>Seite neu laden (F5)</li>
                    <li>Browser-Cache leeren</li>
                    <li>Anderen Browser versuchen</li>
                    <li>JavaScript aktiviert lassen</li>
                </ul>
            </div>
            <div class="modal-actions">
                <button onclick="location.reload()" style="background: #f44336; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                    🔄 Seite neu laden
                </button>
                <button onclick="this.closest('.modal').remove()" style="background: #757575; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                    ❌ Schließen
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(errorModal);
}

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
    gameLogger.logError('Global JavaScript error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
    });
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    gameLogger.logError('Unhandled promise rejection', {
        reason: event.reason,
        stack: event.reason?.stack
    });
});

// Clean shutdown
window.addEventListener('beforeunload', () => {
    if (gameEngine) {
        gameLogger.logGame('Application shutdown');
    }
});

console.log('📋 Main.js loaded - waiting for DOM ready...');