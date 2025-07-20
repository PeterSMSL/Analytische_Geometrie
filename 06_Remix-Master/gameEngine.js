// Game Engine - Core game logic and rendering
// Clean, modular architecture for Tower Defense game

class GameEngine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Game state
        this.gameState = 'waiting'; // waiting, playing, paused, gameOver
        this.health = 100;
        this.maxHealth = 100;
        this.score = 0;
        this.currentWave = 1;
        
        // Fast Forward system
        this.fastForward = false;
        this.normalSpeed = 1;
        this.fastSpeed = 3;
        this.currentSpeed = this.normalSpeed;
        
        // Game objects
        this.towers = [];
        this.monsters = [];
        this.projectiles = [];
        this.selectedTowerType = null;
        
        // Tower unlocking progression
        this.unlockedTowers = ['basic', 'lgs']; // Start with these unlocked
        
        // Certificate system
        this.certificateAwarded = false;
        
        // Panic button system
        this.panicImages = {};
        this.loadPanicImages();
        this.panicActive = false;
        this.panicType = null; // 'chuck' or 'homer'
        this.homerBoss = null;
        this.panicCooldown = 0; // Cooldown timer in milliseconds
        this.panicCooldownDuration = 120000; // 2 minutes = 120,000 ms
        
        // Map and path setup
        this.setupMap();
        this.setupEventListeners();
        
        // Game loop
        this.lastTime = 0;
        this.isRunning = false;
        
        gameLogger.logGame('GameEngine initialized', {
            canvasSize: `${this.canvas.width}x${this.canvas.height}`,
            initialState: this.gameState,
            startingTowers: this.unlockedTowers
        });
        
        // Start the game loop
        this.start();
    }
    
    setupMap() {
        // Define the path that monsters will follow
        this.path = [
            { x: 0, y: 300 },      // Start (left edge)
            { x: 150, y: 300 },    // First turn
            { x: 150, y: 150 },    // Up
            { x: 350, y: 150 },    // Right
            { x: 350, y: 450 },    // Down
            { x: 550, y: 450 },    // Right
            { x: 550, y: 250 },    // Up
            { x: 700, y: 250 },    // Right
            { x: 800, y: 250 }     // End (right edge)
        ];
        
        // House position (end of path) - moved more into view
        this.house = {
            x: 700,
            y: 200,
            width: 80,
            height: 80
        };
        
        // Spawn point for monsters
        this.spawnPoint = { x: -50, y: 300 };
        
        // Initialisiere mathematische Symbole nach Map-Setup
        this.mathSymbols = this.generateMathSymbols();
        
        gameLogger.logGame('Map initialized', {
            pathLength: this.path.length,
            housePosition: this.house,
            spawnPoint: this.spawnPoint,
            mathSymbolsCount: this.mathSymbols.length
        });
    }
    
    setupEventListeners() {
        // Canvas click for tower placement
        this.canvas.addEventListener('click', (e) => {
            if (this.fastForward) return; // No interaction during fast forward
            this.handleCanvasClick(e);
        });
        
        // Tower selection buttons
        document.querySelectorAll('.tower-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (this.fastForward) return; // No interaction during fast forward
                this.selectTowerType(btn.dataset.tower);
            });
        });
        
        // Game control buttons
        document.getElementById('startWave')?.addEventListener('click', () => {
            if (this.fastForward) return;
            this.startNextWave();
        });
        
        document.getElementById('pauseGame')?.addEventListener('click', () => {
            if (this.fastForward) return;
            this.togglePause();
        });
        
        document.getElementById('fastForward')?.addEventListener('click', () => {
            this.toggleFastForward();
        });
        
        
        // PANIC BUTTON! 🚨
        document.getElementById('panicButton')?.addEventListener('click', () => {
            if (this.fastForward) return;
            this.activatePanicButton();
        });
        
        // Certificate button commented out - only available in game over screen
        // document.getElementById('requestCertificate')?.addEventListener('click', () => {
        //     if (this.currentWave >= 5 || this.score >= 1000) {
        //         this.checkForCertificate(this.currentWave);
        //     } else {
        //         this.showMessage('🏆 Zertifikat ab Welle 5 oder 1.000 Punkte verfügbar!', 'info');
        //     }
        // });
    }
    
    selectTowerType(towerType) {
        // Check if tower is unlocked
        if (!this.unlockedTowers.includes(towerType)) {
            gameLogger.logTower('Tower not unlocked', { towerType, unlockedTowers: this.unlockedTowers });
            return;
        }
        
        // Update selection
        this.selectedTowerType = towerType;
        
        // Update UI
        document.querySelectorAll('.tower-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`[data-tower="${towerType}"]`)?.classList.add('selected');
        
        gameLogger.logTower('Tower type selected', { towerType });
    }
    
    handleCanvasClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // Scale coordinates if canvas is resized
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const x = clickX * scaleX;
        const y = clickY * scaleY;
        
        // Check if clicking on existing tower for upgrade
        const clickedTower = this.findTowerAt(x, y);
        if (clickedTower) {
            this.showTowerUpgradeMenu(clickedTower);
            return;
        }
        
        if (this.selectedTowerType) {
            this.attemptTowerPlacement(x, y);
        }
        
        gameLogger.logGame('Canvas click', { x, y, selectedTower: this.selectedTowerType, clickedTower: !!clickedTower });
    }
    
    findTowerAt(x, y) {
        const clickRadius = 25; // Click detection radius
        for (const tower of this.towers) {
            const distance = Math.sqrt((x - tower.x) ** 2 + (y - tower.y) ** 2);
            if (distance <= clickRadius) {
                return tower;
            }
        }
        return null;
    }
    
    showTowerUpgradeMenu(tower) {
        const currentLevel = tower.level || 1;
        
        // Check if upgrade is possible
        const canUpgrade = this.canUpgradeTower(tower);
        
        // Create upgrade modal
        const upgradeModal = document.createElement('div');
        upgradeModal.className = 'modal';
        
        const upgradeSection = canUpgrade ? `
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 15px 0; color: #333;">
                <p><strong>Nach Upgrade:</strong></p>
                <p>💥 Schaden: ${Math.round(tower.damage * 1.5)}</p>
                <p>🎯 Reichweite: ${Math.round(tower.range * 1.2)}</p>
                <p>⚡ Feuerrate: ${(1000/(tower.fireRate * 0.8)).toFixed(1)}/s</p>
                <p style="color: #d32f2f; font-weight: bold;">🧮 Kosten: Mathe-Aufgabe lösen</p>
                <p style="font-size: 0.9em; color: #666;">Level ${currentLevel} → Level ${currentLevel + 1}</p>
            </div>` : `
            <div style="background: #ffeb3b; padding: 15px; border-radius: 8px; margin: 15px 0; color: #333;">
                <p><strong>⚠️ Maximales Level erreicht!</strong></p>
                <p>${this.getMaxLevelMessage(tower)}</p>
            </div>`;
        
        const upgradeButton = canUpgrade ? `
            <button id="upgradeTower" style="background: linear-gradient(45deg, #4CAF50, #45a049); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                ⬆️ Upgrade (Aufgabe lösen)
            </button>` : '';
        
        upgradeModal.innerHTML = `
            <div class="modal-content">
                <h2>🔧 Turm Management</h2>
                <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 48px;">${this.getTowerIcon(tower.type)}</div>
                    <h3>${this.getTowerName(tower.type)}</h3>
                    <p>Level: ${currentLevel}${canUpgrade ? '' : ' (MAX)'}</p>
                </div>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0; color: #333;">
                    <p><strong>Aktuelle Stats:</strong></p>
                    <p>💥 Schaden: ${tower.damage}</p>
                    <p>🎯 Reichweite: ${tower.range}</p>
                    <p>⚡ Feuerrate: ${(1000/tower.fireRate).toFixed(1)}/s</p>
                </div>
                ${upgradeSection}
                <div class="modal-actions">
                    ${upgradeButton}
                    <button id="sellTower" style="background: linear-gradient(45deg, #f44336, #d32f2f); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                        💸 Verkaufen (${Math.round(tower.value * 0.7)} Punkte)
                    </button>
                    <button onclick="this.closest('.modal').remove()" style="background: #757575; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                        ❌ Abbrechen
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(upgradeModal);
        
        // Event listeners for upgrade modal
        document.getElementById('upgradeTower').addEventListener('click', () => {
            this.upgradeTower(tower);
            upgradeModal.remove();
        });
        
        document.getElementById('sellTower').addEventListener('click', () => {
            this.sellTower(tower);
            upgradeModal.remove();
        });
        
        // Close on background click
        upgradeModal.addEventListener('click', (e) => {
            if (e.target === upgradeModal) {
                upgradeModal.remove();
            }
        });
        
        gameLogger.logTower('Upgrade menu shown', { 
            tower: tower.id, 
            type: tower.type, 
            level: tower.level || 1 
        });
    }
    
    getTowerIcon(type) {
        const icons = {
            basic: '🏰',
            lgs: '🔢',
            point: '📍',
            vector: '➡️',
            scalar: '⚡',
            vectorproduct: '⊗'
        };
        return icons[type] || '🏰';
    }
    
    getTowerName(type) {
        const names = {
            basic: 'Allgemein Turm',
            lgs: 'LGS Solver',
            point: 'Punkt Laser',
            vector: 'Vektor Kanone',
            scalar: 'Skalar Verstärker',
            vectorproduct: 'Vektor Kreuz Turm'
        };
        return names[type] || 'Unbekannter Turm';
    }
    
    canUpgradeTower(tower) {
        const currentLevel = tower.level || 1;
        
        // Check max level limits
        if (tower.type === 'basic' && currentLevel >= 6) {
            return false;
        }
        
        // General max level 6 before wave 10
        if (this.currentWave < 10 && currentLevel >= 6) {
            return false;
        }
        
        return true;
    }
    
    getMaxLevelMessage(tower) {
        const currentLevel = tower.level || 1;
        
        if (tower.type === 'basic' && currentLevel >= 6) {
            return 'Der Allgemein Turm kann maximal Level 6 erreichen.';
        }
        
        if (this.currentWave < 10 && currentLevel >= 6) {
            return `Alle Türme sind vor Welle 10 auf Level 6 begrenzt. Aktuell: Welle ${this.currentWave}`;
        }
        
        return 'Maximales Level erreicht.';
    }
    
    upgradeTower(tower) {
        // Check if upgrade is possible (redundant check for safety)
        if (!this.canUpgradeTower(tower)) {
            this.showMessage(this.getMaxLevelMessage(tower), 'warning');
            return;
        }
        
        // Show upgrade question instead of direct cost
        const difficulty = this.getUpgradeDifficulty(tower);
        
        if (window.questionSystem) {
            window.questionSystem.showUpgradeQuestion(tower, difficulty, (success) => {
                if (success) {
                    this.applyTowerUpgrade(tower);
                }
            });
        } else {
            this.showMessage('Question System nicht verfügbar!', 'error');
        }
    }
    
    getUpgradeDifficulty(tower) {
        const currentLevel = tower.level || 1;
        const towerStrength = this.getTowerBaseStats(tower.type).strength;
        
        // Base difficulty increases with level
        let difficulty = 'easy';
        
        if (currentLevel >= 3) {
            difficulty = 'medium';
        }
        if (currentLevel >= 5) {
            difficulty = 'hard';
        }
        
        // Stronger towers need harder questions
        if (towerStrength === 'very_strong') {
            if (difficulty === 'easy') difficulty = 'medium';
            else if (difficulty === 'medium') difficulty = 'hard';
        } else if (towerStrength === 'strong') {
            if (difficulty === 'easy' && currentLevel >= 2) difficulty = 'medium';
        }
        
        return {
            level: difficulty,
            tower: tower.type,
            currentLevel: currentLevel,
            targetLevel: currentLevel + 1
        };
    }
    
    applyTowerUpgrade(tower) {
        const oldLevel = tower.level || 1;
        
        // Apply upgrade
        tower.level = oldLevel + 1;
        tower.damage = Math.round(tower.damage * 1.5);
        tower.range = Math.round(tower.range * 1.2);
        tower.fireRate = Math.round(tower.fireRate * 0.8); // Faster firing
        tower.value = Math.round(tower.value * 1.3); // Increase value for selling
        
        this.updateUI();
        this.showMessage(`${this.getTowerName(tower.type)} auf Level ${tower.level} upgegraded!`, 'success');
        
        gameLogger.logTower('Tower upgraded', {
            tower: tower.id,
            type: tower.type,
            oldLevel: oldLevel,
            newLevel: tower.level,
            newDamage: tower.damage,
            newRange: tower.range,
            newFireRate: tower.fireRate,
            upgradeMethod: 'question'
        });
    }
    
    sellTower(tower) {
        const sellValue = Math.round((tower.value || 50) * 0.7);
        
        // Remove tower and give money back
        const towerIndex = this.towers.indexOf(tower);
        if (towerIndex > -1) {
            this.towers.splice(towerIndex, 1);
            this.score += sellValue;
            this.updateUI();
            this.showMessage(`Turm für ${sellValue} Punkte verkauft!`, 'info');
            
            gameLogger.logTower('Tower sold', {
                tower: tower.id,
                type: tower.type,
                level: tower.level || 1,
                sellValue: sellValue
            });
        }
    }
    
    showMessage(text, type = 'info') {
        // Create temporary message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 1001;
            animation: slideIn 0.3s ease-out;
            max-width: 320px;
            line-height: 1.4;
            white-space: pre-line;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        
        const colors = {
            success: '#4CAF50',
            error: '#f44336',
            info: '#2196F3',
            warning: '#FF9800'
        };
        
        message.style.background = colors[type] || colors.info;
        message.textContent = text;
        
        document.body.appendChild(message);
        
        // Remove after 4 seconds for longer messages
        const duration = text.length > 50 ? 5000 : 3000;
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, duration);
        
        // Add slide-in animation CSS if not exists
        if (!document.getElementById('messageAnimations')) {
            const style = document.createElement('style');
            style.id = 'messageAnimations';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    attemptTowerPlacement(x, y) {
        // Check if position is valid (not on path, not too close to other towers)
        if (!this.isValidTowerPosition(x, y)) {
            gameLogger.logTower('Invalid tower position', { x, y, reason: 'path_or_collision' });
            return;
        }
        
        // Trigger question system
        if (window.questionSystem) {
            window.questionSystem.showTowerQuestion(this.selectedTowerType, x, y, (success) => {
                if (success) {
                    this.buildTower(this.selectedTowerType, x, y);
                }
            });
        } else {
            // Fallback: build tower directly (for testing)
            this.buildTower(this.selectedTowerType, x, y);
        }
        
        gameLogger.logTower('Tower placement attempted', {
            type: this.selectedTowerType,
            position: { x, y },
            gameState: this.gameState
        });
    }
    
    isValidTowerPosition(x, y) {
        const minDistanceFromPath = 40;
        const minDistanceFromTowers = 50;
        
        // Check distance from path
        for (let i = 0; i < this.path.length - 1; i++) {
            const pathSeg = this.getPathSegment(i);
            const dist = this.distanceToLineSegment(x, y, pathSeg.start, pathSeg.end);
            if (dist < minDistanceFromPath) {
                return false;
            }
        }
        
        // Check distance from existing towers
        for (const tower of this.towers) {
            const dist = Math.sqrt((x - tower.x) ** 2 + (y - tower.y) ** 2);
            if (dist < minDistanceFromTowers) {
                return false;
            }
        }
        
        // Check if within canvas bounds
        return x >= 25 && x <= this.canvas.width - 25 && y >= 25 && y <= this.canvas.height - 25;
    }
    
    buildTower(type, x, y) {
        const baseStats = this.getTowerBaseStats(type);
        
        const tower = {
            id: `tower_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            type,
            x,
            y,
            range: baseStats.range,
            damage: baseStats.damage,
            fireRate: baseStats.fireRate,
            lastShot: 0,
            target: null,
            level: 1,
            value: baseStats.value
        };
        
        this.towers.push(tower);
        this.score += 50; // Reward for building tower
        this.updateUI();
        
        gameLogger.logTower('Tower built', {
            tower: { type, x, y, id: tower.id, level: tower.level, stats: baseStats },
            totalTowers: this.towers.length,
            scoreGained: 50
        });
    }
    
    getTowerBaseStats(type) {
        const towerStats = {
            basic: {
                damage: 15,
                range: 70,
                fireRate: 1200,
                value: 30,
                strength: 'weak'
            },
            lgs: {
                damage: 40,
                range: 90,
                fireRate: 800,
                value: 60,
                strength: 'very_strong'
            },
            point: {
                damage: 30,
                range: 100,
                fireRate: 1000,
                value: 50,
                strength: 'strong'
            },
            vector: {
                damage: 35,
                range: 85,
                fireRate: 900,
                value: 55,
                strength: 'strong'
            },
            scalar: {
                damage: 32,
                range: 95,
                fireRate: 950,
                value: 52,
                strength: 'strong'
            },
            vectorproduct: {
                damage: 45,
                range: 80,
                fireRate: 700,
                value: 70,
                strength: 'very_strong'
            }
        };
        
        return towerStats[type] || towerStats.basic;
    }
    
    getPathSegment(index) {
        return {
            start: this.path[index],
            end: this.path[index + 1]
        };
    }
    
    distanceToLineSegment(px, py, start, end) {
        const A = px - start.x;
        const B = py - start.y;
        const C = end.x - start.x;
        const D = end.y - start.y;
        
        const dot = A * C + B * D;
        const lenSq = C * C + D * D;
        
        if (lenSq === 0) return Math.sqrt(A * A + B * B);
        
        let param = dot / lenSq;
        
        let xx, yy;
        if (param < 0) {
            xx = start.x;
            yy = start.y;
        } else if (param > 1) {
            xx = end.x;
            yy = end.y;
        } else {
            xx = start.x + param * C;
            yy = start.y + param * D;
        }
        
        const dx = px - xx;
        const dy = py - yy;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    startNextWave() {
        if (this.gameState === 'playing') return;
        
        // Check if player has towers (helpful warning for beginners)
        if (this.towers.length === 0 && this.currentWave === 1) {
            this.showMessage('💡 Tipp: Baue erst Türme bevor du die Welle startest!\nKlicke auf einen Turmtyp, dann auf die Karte!', 'info');
            gameLogger.logGame('Wave start attempted without towers', { 
                wave: this.currentWave,
                towerCount: this.towers.length 
            });
            // Allow starting anyway, but show warning
        }
        
        this.gameState = 'playing';
        this.spawnWave();
        this.updateUI();
        
        gameLogger.logGame('Wave started', { 
            wave: this.currentWave,
            towerCount: this.towers.length 
        });
    }
    
    spawnWave() {
        const monstersInWave = 5 + this.currentWave * 2; // Increase monsters per wave
        
        for (let i = 0; i < monstersInWave; i++) {
            setTimeout(() => {
                this.spawnMonster();
            }, i * 1000 / this.currentSpeed); // Spawn every second (adjusted for speed)
        }
    }
    
    spawnMonster() {
        // Different monster types based on wave
        const monsterTypes = this.getAvailableMonsterTypes();
        const selectedType = monsterTypes[Math.floor(Math.random() * monsterTypes.length)];
        
        const monster = {
            id: `monster_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            x: this.spawnPoint.x,
            y: this.spawnPoint.y,
            type: selectedType.type,
            ...selectedType.stats,
            pathIndex: 0,
            pathProgress: 0
        };
        
        // Scale stats with wave
        monster.health = Math.round(monster.health * (1 + this.currentWave * 0.2));
        monster.maxHealth = monster.health;
        monster.speed = monster.speed * (1 + this.currentWave * 0.1);
        
        this.monsters.push(monster);
        gameLogger.logGame('Monster spawned', { 
            monster: monster.id, 
            type: monster.type,
            wave: this.currentWave,
            health: monster.health,
            speed: monster.speed
        });
    }
    
    getAvailableMonsterTypes() {
        const allTypes = [
            {
                type: 'basic',
                stats: {
                    health: 40,
                    speed: 1.0,
                    size: 18,
                    color: '#FF6B6B',
                    secondaryColor: '#FF8E8E',
                    icon: '∞',
                    mathSymbol: '∅',
                    name: 'Basis Monster',
                    reward: 25
                }
            },
            {
                type: 'lgs',
                stats: {
                    health: 50,
                    speed: 0.8,
                    size: 20,
                    color: '#4ECDC4',
                    secondaryColor: '#7ED8D1',
                    icon: '⎡⎤',
                    mathSymbol: 'Ax=b',
                    name: 'LGS Gegner',
                    reward: 40
                }
            },
            {
                type: 'vector',
                stats: {
                    health: 60,
                    speed: 1.2,
                    size: 22,
                    color: '#45B7D1',
                    secondaryColor: '#6FC5E0',
                    icon: '⃗',
                    mathSymbol: '→',
                    name: 'Vektor Monster',
                    reward: 50
                }
            },
            {
                type: 'scalar',
                stats: {
                    health: 80,
                    speed: 0.6,
                    size: 25,
                    color: '#FFEAA7',
                    secondaryColor: '#FFF0C4',
                    icon: 'λ',
                    mathSymbol: 'k·v',
                    name: 'Skalar Verstärker',
                    reward: 60
                }
            }
        ];
        
        // Unlock monster types based on wave
        let availableTypes = [allTypes[0]]; // Always have basic
        
        if (this.currentWave >= 2) availableTypes.push(allTypes[1]); // LGS from wave 2
        if (this.currentWave >= 4) availableTypes.push(allTypes[2]); // Vector from wave 4
        if (this.currentWave >= 6) availableTypes.push(allTypes[3]); // Scalar from wave 6
        
        return availableTypes;
    }
    
    togglePause() {
        if (this.gameState === 'playing') {
            this.gameState = 'paused';
        } else if (this.gameState === 'paused') {
            this.gameState = 'playing';
        }
        this.updateUI();
        gameLogger.logGame('Game paused/unpaused', { newState: this.gameState });
    }
    
    toggleFastForward() {
        this.fastForward = !this.fastForward;
        this.currentSpeed = this.fastForward ? this.fastSpeed : this.normalSpeed;
        
        // Update UI
        const btn = document.getElementById('fastForward');
        if (btn) {
            btn.classList.toggle('active', this.fastForward);
            btn.textContent = this.fastForward ? '⏸️ Normal Speed' : '⏩ Fast Forward';
        }
        
        // Disable/enable other controls
        const controls = ['startWave', 'pauseGame'];
        controls.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.disabled = this.fastForward;
            }
        });
        
        // Disable tower buttons
        document.querySelectorAll('.tower-btn').forEach(btn => {
            btn.disabled = this.fastForward || !this.unlockedTowers.includes(btn.dataset.tower);
        });
        
        gameLogger.logGame('Fast forward toggled', { 
            fastForward: this.fastForward, 
            speed: this.currentSpeed 
        });
    }
    
    start() {
        this.isRunning = true;
        this.gameLoop();
        gameLogger.logGame('Game loop started');
    }
    
    gameLoop(currentTime = 0) {
        if (!this.isRunning) return;
        
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        // Update game logic (only if not paused)
        if (this.gameState === 'playing') {
            this.update(deltaTime);
        }
        
        // Always update panic cooldown (even when paused)
        this.updatePanicCooldown(deltaTime);
        
        // Always render
        this.render();
        
        // Continue loop
        requestAnimationFrame((time) => this.gameLoop(time));
    }
    
    update(deltaTime) {
        const adjustedDelta = deltaTime * this.currentSpeed;
        
        // Update monsters
        this.updateMonsters(adjustedDelta);
        
        // Update towers (targeting and shooting)
        this.updateTowers(adjustedDelta);
        
        // Update projectiles
        this.updateProjectiles(adjustedDelta);
        
        // Check win/lose conditions
        this.checkGameConditions();
    }
    
    updateMonsters(deltaTime) {
        for (let i = this.monsters.length - 1; i >= 0; i--) {
            const monster = this.monsters[i];
            
            // Move monster along path
            this.moveMonsterAlongPath(monster, deltaTime);
            
            // Check if monster reached the end
            if (monster.pathIndex >= this.path.length - 1) {
                // Homer Boss only costs 1 health point!
                const damage = monster.type === 'homer_boss' ? monster.damage || 1 : 5;
                this.health -= damage;
                this.monsters.splice(i, 1);
                
                gameLogger.logGame('Monster reached house', { 
                    monster: monster.id, 
                    type: monster.type,
                    healthLost: damage, 
                    remainingHealth: this.health,
                    isHomerBoss: monster.type === 'homer_boss'
                });
                continue;
            }
            
            // Remove dead monsters
            if (monster.health <= 0) {
                const scoreGained = monster.reward || 25;
                this.score += scoreGained;
                this.monsters.splice(i, 1);
                
                // Special Homer Boss defeat logging!
                if (monster.type === 'homer_boss') {
                    gameLogger.logGame('🍺 HOMER BOSS DEFEATED! 🍺', { 
                        monster: monster.id, 
                        type: monster.type,
                        scoreGained: scoreGained,
                        specialReward: true,
                        message: 'D\'oh! Homer has been defeated!'
                    });
                } else {
                    gameLogger.logGame('Monster killed', { 
                        monster: monster.id, 
                        type: monster.type,
                        scoreGained: scoreGained 
                    });
                }
            }
        }
    }
    
    moveMonsterAlongPath(monster, deltaTime) {
        if (monster.pathIndex >= this.path.length - 1) return;
        
        const start = this.path[monster.pathIndex];
        const end = this.path[monster.pathIndex + 1];
        
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const segmentLength = Math.sqrt(dx * dx + dy * dy);
        
        const moveDistance = monster.speed * deltaTime * 0.1;
        monster.pathProgress += moveDistance / segmentLength;
        
        if (monster.pathProgress >= 1) {
            monster.pathProgress = 0;
            monster.pathIndex++;
            
            if (monster.pathIndex < this.path.length - 1) {
                const newStart = this.path[monster.pathIndex];
                monster.x = newStart.x;
                monster.y = newStart.y;
            }
        } else {
            monster.x = start.x + dx * monster.pathProgress;
            monster.y = start.y + dy * monster.pathProgress;
        }
    }
    
    updateTowers(deltaTime) {
        for (const tower of this.towers) {
            // Find target
            tower.target = this.findNearestMonster(tower);
            
            // Shoot if target in range and cooldown ready
            if (tower.target && Date.now() - tower.lastShot > tower.fireRate / this.currentSpeed) {
                this.towerShoot(tower);
                tower.lastShot = Date.now();
            }
        }
    }
    
    findNearestMonster(tower) {
        let nearest = null;
        let nearestDistance = tower.range;
        
        for (const monster of this.monsters) {
            const distance = Math.sqrt((tower.x - monster.x) ** 2 + (tower.y - monster.y) ** 2);
            if (distance < nearestDistance) {
                nearest = monster;
                nearestDistance = distance;
            }
        }
        
        return nearest;
    }
    
    towerShoot(tower) {
        if (!tower.target) return;
        
        // Predictive targeting - calculate where the monster will be
        const predictedPosition = this.calculatePredictedPosition(tower, tower.target);
        
        const projectile = {
            id: `proj_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            x: tower.x,
            y: tower.y,
            targetX: predictedPosition.x,
            targetY: predictedPosition.y,
            speed: 400, // Faster projectiles for better tracking
            damage: tower.damage,
            target: tower.target,
            tracking: true, // Enable tracking mode
            maxTrackingTime: 2000 // Track for max 2 seconds
        };
        
        this.projectiles.push(projectile);
        gameLogger.logGame('Tower shot fired', { 
            tower: tower.id, 
            target: tower.target.id,
            projectile: projectile.id,
            predictedTarget: predictedPosition,
            actualTarget: { x: tower.target.x, y: tower.target.y }
        });
    }
    
    calculatePredictedPosition(tower, monster) {
        // Calculate time for projectile to reach monster
        const distance = Math.sqrt((tower.x - monster.x) ** 2 + (tower.y - monster.y) ** 2);
        const timeToReach = distance / 400; // Projectile speed = 400
        
        // Predict where monster will be
        const futurePosition = this.predictMonsterPosition(monster, timeToReach * 1000);
        
        return futurePosition;
    }
    
    predictMonsterPosition(monster, timeMs) {
        if (monster.pathIndex >= this.path.length - 1) {
            return { x: monster.x, y: monster.y };
        }
        
        // Simulate monster movement for the given time
        let futurePathIndex = monster.pathIndex;
        let futurePathProgress = monster.pathProgress;
        let remainingTime = timeMs;
        
        while (remainingTime > 0 && futurePathIndex < this.path.length - 1) {
            const start = this.path[futurePathIndex];
            const end = this.path[futurePathIndex + 1];
            
            const dx = end.x - start.x;
            const dy = end.y - start.y;
            const segmentLength = Math.sqrt(dx * dx + dy * dy);
            
            const moveDistance = monster.speed * remainingTime * 0.1 * this.currentSpeed;
            const progressNeeded = moveDistance / segmentLength;
            
            if (futurePathProgress + progressNeeded >= 1) {
                // Monster will reach next waypoint
                const timeToWaypoint = (1 - futurePathProgress) * segmentLength / (monster.speed * 0.1 * this.currentSpeed);
                remainingTime -= timeToWaypoint;
                futurePathIndex++;
                futurePathProgress = 0;
            } else {
                // Monster stays on current segment
                futurePathProgress += progressNeeded;
                remainingTime = 0;
            }
        }
        
        // Calculate final position
        if (futurePathIndex >= this.path.length - 1) {
            return this.path[this.path.length - 1];
        }
        
        const start = this.path[futurePathIndex];
        const end = this.path[futurePathIndex + 1];
        
        return {
            x: start.x + (end.x - start.x) * futurePathProgress,
            y: start.y + (end.y - start.y) * futurePathProgress
        };
    }
    
    updateProjectiles(deltaTime) {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const proj = this.projectiles[i];
            
            // Initialize tracking time if not set
            if (!proj.trackingStartTime) {
                proj.trackingStartTime = Date.now();
            }
            
            // Check if tracking should continue
            const trackingTime = Date.now() - proj.trackingStartTime;
            const shouldTrack = proj.tracking && 
                               trackingTime < proj.maxTrackingTime && 
                               proj.target && 
                               this.monsters.includes(proj.target);
            
            // Update target position for tracking projectiles
            if (shouldTrack) {
                // Update target to current monster position for better tracking
                const targetDistance = Math.sqrt((proj.x - proj.target.x) ** 2 + (proj.y - proj.target.y) ** 2);
                if (targetDistance < 150) { // Close enough to switch to direct tracking
                    proj.targetX = proj.target.x;
                    proj.targetY = proj.target.y;
                }
            }
            
            // Move projectile towards target
            const dx = proj.targetX - proj.x;
            const dy = proj.targetY - proj.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Check for hit (larger hit radius for better detection)
            const hitRadius = 8;
            if (distance < hitRadius) {
                // Hit target
                if (proj.target && this.monsters.includes(proj.target)) {
                    proj.target.health -= proj.damage;
                    gameLogger.logGame('Projectile hit', { 
                        projectile: proj.id, 
                        damage: proj.damage,
                        target: proj.target.id,
                        trackingTime: trackingTime,
                        finalDistance: distance
                    });
                } else {
                    gameLogger.logGame('Projectile missed', { 
                        projectile: proj.id,
                        reason: 'target_lost',
                        trackingTime: trackingTime
                    });
                }
                this.projectiles.splice(i, 1);
            } else if (distance > 1000 || trackingTime > proj.maxTrackingTime) {
                // Projectile went too far or tracked too long - remove it
                gameLogger.logGame('Projectile expired', { 
                    projectile: proj.id,
                    reason: distance > 1000 ? 'out_of_bounds' : 'max_tracking_time',
                    distance: distance,
                    trackingTime: trackingTime
                });
                this.projectiles.splice(i, 1);
            } else {
                // Move projectile
                const moveSpeed = proj.speed * deltaTime * 0.001 * this.currentSpeed;
                proj.x += (dx / distance) * moveSpeed;
                proj.y += (dy / distance) * moveSpeed;
            }
        }
    }
    
    checkGameConditions() {
        // Check if wave is complete
        if (this.gameState === 'playing' && this.monsters.length === 0) {
            const completedWave = this.currentWave;
            this.currentWave++;
            this.gameState = 'waiting';
            
            // Wave completion rewards
            const waveBonus = completedWave * 25;
            this.score += waveBonus;
            
            // Unlock new towers based on wave
            this.unlockNewTowers();
            
            // Auto fast forward off after wave
            if (this.fastForward) {
                this.toggleFastForward();
            }
            
            // Show wave completion message
            this.showMessage(`🌊 Welle ${completedWave} abgeschlossen!\n+${waveBonus} Bonus-Punkte`, 'success');
            
            // Certificate check removed from wave completion - now only in game over
            
            gameLogger.logGame('Wave completed', { 
                wave: completedWave, 
                nextWave: this.currentWave,
                waveBonus: waveBonus,
                unlockedTowers: this.unlockedTowers 
            });
        }
        
        // Check game over
        if (this.health <= 0) {
            this.gameState = 'gameOver';
            const stars = this.calculateStars(this.score);
            
            // Show game over modal with certificate option
            setTimeout(() => {
                this.showGameOverModal(stars);
            }, 1000);
            
            gameLogger.logGame('Game Over', { 
                finalScore: this.score, 
                wavesCompleted: this.currentWave - 1,
                starsEarned: stars,
                starDisplay: this.getStarDisplay(stars)
            });
        }
        
        this.updateUI();
    }
    
    calculateStars(score) {
        if (score >= 35000) {
            return 3;
        } else if (score >= 20000) {
            return 2;
        } else if (score >= 10000) {
            return 1;
        } else {
            return 0;
        }
    }
    
    getStarDisplay(stars) {
        switch(stars) {
            case 3:
                return '⭐⭐⭐ PERFEKT!';
            case 2:
                return '⭐⭐ SEHR GUT!';
            case 1:
                return '⭐ GUT!';
            default:
                return '💪 VERSUCH ES NOCHMAL!';
        }
    }
    
    unlockNewTowers() {
        const unlockSchedule = {
            3: 'point',
            5: 'vector',
            7: 'scalar',
            9: 'vectorproduct'
        };
        
        const newTower = unlockSchedule[this.currentWave];
        if (newTower && !this.unlockedTowers.includes(newTower)) {
            this.unlockedTowers.push(newTower);
            
            // Update UI
            const btn = document.querySelector(`[data-tower="${newTower}"]`);
            if (btn) {
                btn.disabled = false;
            }
            
            gameLogger.logGame('New tower unlocked', { 
                tower: newTower, 
                wave: this.currentWave,
                allUnlocked: this.unlockedTowers 
            });
        }
        
        // Special notification for difficulty increase at wave 10
        if (this.currentWave === 10) {
            this.showMessage('🔥 SCHWIERIGKEITSSPRUNG! 🔥\n\nAb Welle 10: Komplexe 3×3 LGS, Theoriefragen und anspruchsvolle Berechnungen!\nPapier und Stift sind jetzt empfohlen! 📝', 'warning', 6000);
            
            gameLogger.logGame('Difficulty increased to advanced', { 
                wave: this.currentWave,
                message: 'Advanced questions (3x3 LGS, theory) now active'
            });
        }
    }
    
    updateUI() {
        // Update stats
        document.getElementById('health').textContent = this.health;
        document.getElementById('score').textContent = this.score;
        document.getElementById('wave').textContent = this.currentWave;
        
        // Update live star indicator
        this.updateStarIndicator();
        
        // Update button states
        const startBtn = document.getElementById('startWave');
        if (startBtn) {
            startBtn.disabled = this.gameState === 'playing' || this.fastForward;
            startBtn.textContent = this.gameState === 'waiting' ? '🌊 Nächste Welle' : '🌊 Welle läuft...';
        }
        
        const pauseBtn = document.getElementById('pauseGame');
        if (pauseBtn) {
            pauseBtn.disabled = this.gameState === 'waiting' || this.fastForward;
            pauseBtn.textContent = this.gameState === 'paused' ? '▶️ Fortsetzen' : '⏸️ Pause';
        }
        
        // Update tower buttons
        document.querySelectorAll('.tower-btn').forEach(btn => {
            const towerType = btn.dataset.tower;
            btn.disabled = this.fastForward || !this.unlockedTowers.includes(towerType);
        });
    }
    
    updateStarIndicator() {
        // Create or update star indicator in the score area
        let starIndicator = document.getElementById('starIndicator');
        if (!starIndicator) {
            starIndicator = document.createElement('div');
            starIndicator.id = 'starIndicator';
            starIndicator.style.cssText = `
                font-size: 14px;
                color: #FFD700;
                text-align: center;
                margin-top: 5px;
                font-weight: bold;
            `;
            
            // Insert after score element
            const scoreElement = document.getElementById('score');
            if (scoreElement && scoreElement.parentNode) {
                scoreElement.parentNode.appendChild(starIndicator);
            }
        }
        
        const currentStars = this.calculateStars(this.score);
        const nextStarTarget = this.getNextStarTarget(currentStars);
        
        let starText = '';
        if (currentStars > 0) {
            starText = '⭐'.repeat(currentStars);
        }
        
        if (nextStarTarget > 0) {
            const remaining = nextStarTarget - this.score;
            starText += ` (${remaining.toLocaleString()} bis ⭐)`;
        } else if (currentStars === 3) {
            starText += ' MAX!';
        }
        
        starIndicator.textContent = starText;
    }
    
    getNextStarTarget(currentStars) {
        switch(currentStars) {
            case 0:
                return 10000;
            case 1:
                return 20000;
            case 2:
                return 35000;
            default:
                return 0; // Already at max stars
        }
    }
    
    render() {
        // Clear canvas with gradient background
        const bgGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        bgGradient.addColorStop(0, '#98FB98'); // Light green
        bgGradient.addColorStop(1, '#90EE90'); // Lime green
        this.ctx.fillStyle = bgGradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw mathematical symbols on grass
        this.drawMathSymbols();
        
        // Draw path
        this.drawPath();
        
        // Draw house
        this.drawHouse();
        
        // Draw towers
        this.drawTowers();
        
        // Draw monsters
        this.drawMonsters();
        
        // Draw projectiles
        this.drawProjectiles();
        
        // Draw UI overlays
        this.drawGameStateOverlay();
    }
    
    drawMathSymbols() {
        // Statische mathematische Symbole als Hintergrund-Dekoration
        if (!this.mathSymbols) {
            this.mathSymbols = this.generateMathSymbols();
        }
        
        this.ctx.save();
        
        this.mathSymbols.forEach(symbol => {
            this.ctx.globalAlpha = symbol.alpha || 0.25;
            this.ctx.font = `${symbol.size}px "Times New Roman"`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = symbol.color;
            
            // Einfacher, subtiler Schatten
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
            this.ctx.shadowBlur = 1;
            this.ctx.shadowOffsetX = 1;
            this.ctx.shadowOffsetY = 1;
            
            this.ctx.fillText(symbol.symbol, symbol.x, symbol.y);
            
            // Schatten zurücksetzen
            this.ctx.shadowColor = 'transparent';
            this.ctx.shadowBlur = 0;
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;
        });
        
        this.ctx.restore();
    }
    
    generateMathSymbols() {
        const symbols = [
            // Schöne, klassische mathematische Symbole
            '∑', '∫', '∞', '∆', 'π', '√', 'φ', 'θ', 'λ', 'μ', 'σ', '∂', '∇', 
            'α', 'β', 'γ', 'δ', 'ε', 'ω', 'Π', 'Σ', 'Φ', 'Ψ', 'Ω',
            '≤', '≥', '≠', '±', '≈', '≡', '⊕', '⊗', '∪', '∩', '∈', '∅',
            '⇒', '⇔', '∀', '∃', 'ℝ', 'ℂ', 'ℕ', 'ℤ'
        ];
        const mathDecorations = [];
        
        // Sichere Bereiche definieren (falls path/house noch nicht existiert)
        let pathArea = null;
        let houseArea = null;
        
        if (this.path && this.path.length > 0) {
            pathArea = this.getPathBounds();
        }
        
        if (this.house) {
            houseArea = {x: this.house.x - 50, y: this.house.y - 50, width: 100, height: 100};
        }
        
        for (let i = 0; i < 25; i++) { // Weniger, schönere Symbole
            let x, y;
            let attempts = 0;
            let validPosition = false;
            
            do {
                x = Math.random() * this.canvas.width;
                y = Math.random() * this.canvas.height;
                attempts++;
                
                // Prüfe ob Position gültig ist
                validPosition = true;
                
                if (pathArea && this.isInPath(x, y, pathArea)) {
                    validPosition = false;
                }
                
                if (houseArea && this.isInHouse(x, y, houseArea)) {
                    validPosition = false;
                }
                
            } while (!validPosition && attempts < 100);
            
            mathDecorations.push({
                symbol: symbols[Math.floor(Math.random() * symbols.length)],
                x: x,
                y: y,
                size: 16 + Math.random() * 8, // Gleichmäßigere Größe
                color: `hsl(${120 + Math.random() * 40}, 30%, 35%)`, // Grüne Töne passend zur Wiese
                alpha: 0.2 + Math.random() * 0.2 // Subtiler
            });
        }
        
        console.log(`Generated ${mathDecorations.length} math symbols for background`);
        return mathDecorations;
    }
    
    getPathBounds() {
        const minX = Math.min(...this.path.map(p => p.x)) - 40;
        const maxX = Math.max(...this.path.map(p => p.x)) + 40;
        const minY = Math.min(...this.path.map(p => p.y)) - 40;
        const maxY = Math.max(...this.path.map(p => p.y)) + 40;
        return {minX, maxX, minY, maxY};
    }
    
    isInPath(x, y, pathArea) {
        return x >= pathArea.minX && x <= pathArea.maxX && y >= pathArea.minY && y <= pathArea.maxY;
    }
    
    isInHouse(x, y, houseArea) {
        return x >= houseArea.x && x <= houseArea.x + houseArea.width && 
               y >= houseArea.y && y <= houseArea.y + houseArea.height;
    }
    
    drawPath() {
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 30;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        this.ctx.beginPath();
        this.ctx.moveTo(this.path[0].x, this.path[0].y);
        
        for (let i = 1; i < this.path.length; i++) {
            this.ctx.lineTo(this.path[i].x, this.path[i].y);
        }
        
        this.ctx.stroke();
        
        // Draw path borders
        this.ctx.strokeStyle = '#654321';
        this.ctx.lineWidth = 35;
        this.ctx.globalAlpha = 0.5;
        
        this.ctx.beginPath();
        this.ctx.moveTo(this.path[0].x, this.path[0].y);
        
        for (let i = 1; i < this.path.length; i++) {
            this.ctx.lineTo(this.path[i].x, this.path[i].y);
        }
        
        this.ctx.stroke();
        this.ctx.globalAlpha = 1;
    }
    
    drawHouse() {
        const house = this.house;
        
        // House body
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(house.x, house.y, house.width, house.height);
        
        // Roof
        this.ctx.fillStyle = '#DC143C';
        this.ctx.beginPath();
        this.ctx.moveTo(house.x - 10, house.y);
        this.ctx.lineTo(house.x + house.width / 2, house.y - 20);
        this.ctx.lineTo(house.x + house.width + 10, house.y);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Door
        this.ctx.fillStyle = '#654321';
        this.ctx.fillRect(house.x + 20, house.y + 30, 20, 30);
        
        // Window
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(house.x + 45, house.y + 20, 10, 10);
        
        // House label
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('🏠 HAUS', house.x + house.width / 2, house.y - 25);
    }
    
    drawTowers() {
        for (const tower of this.towers) {
            // Tower base
            this.ctx.fillStyle = '#696969';
            this.ctx.beginPath();
            this.ctx.arc(tower.x, tower.y, 20, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Tower top (color by type)
            const colors = {
                basic: '#4CAF50',
                lgs: '#2196F3',
                point: '#FF9800',
                vector: '#9C27B0',
                scalar: '#F44336'
            };
            
            this.ctx.fillStyle = colors[tower.type] || '#888';
            this.ctx.beginPath();
            this.ctx.arc(tower.x, tower.y, 15, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Range indicator (when selected)
            if (this.selectedTowerType === tower.type) {
                this.ctx.strokeStyle = colors[tower.type] || '#888';
                this.ctx.globalAlpha = 0.3;
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(tower.x, tower.y, tower.range, 0, Math.PI * 2);
                this.ctx.stroke();
                this.ctx.globalAlpha = 1;
            }
            
            // Tower icon
            const icons = {
                basic: '🏰',
                lgs: '🔢',
                point: '📍',
                vector: '➡️',
                scalar: '⚡'
            };
            
            this.ctx.fillStyle = 'white';
            this.ctx.font = '16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(icons[tower.type] || '🏰', tower.x, tower.y + 5);
            
            // Level indicator
            if (tower.level && tower.level > 1) {
                this.ctx.fillStyle = '#FFD700';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillText(`L${tower.level}`, tower.x, tower.y - 25);
            }
        }
    }
    
    drawMonsters() {
        for (const monster of this.monsters) {
            // Special rendering for Homer Boss
            if (monster.type === 'homer_boss') {
                this.drawHomerBoss(monster);
                continue;
            }
            
            this.ctx.save();
            
            // Schatten
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            this.ctx.beginPath();
            this.ctx.arc(monster.x + 2, monster.y + 2, monster.size || 18, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Monster-Körper mit Gradient
            const gradient = this.ctx.createRadialGradient(
                monster.x - (monster.size || 18) * 0.3, monster.y - (monster.size || 18) * 0.3, 0,
                monster.x, monster.y, monster.size || 18
            );
            gradient.addColorStop(0, monster.secondaryColor || monster.color || '#FF8E8E');
            gradient.addColorStop(1, monster.color || '#FF4444');
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(monster.x, monster.y, monster.size || 18, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Äußerer Ring
            this.ctx.strokeStyle = monster.color || '#FF4444';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
            
            // Innerer Glanz-Effekt
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            this.ctx.beginPath();
            this.ctx.arc(monster.x - (monster.size || 18) * 0.4, monster.y - (monster.size || 18) * 0.4, (monster.size || 18) * 0.3, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Monster-Symbol (mathematisch)
            this.ctx.font = `bold ${Math.max(16, (monster.size || 18) * 1.2)}px "Times New Roman"`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            
            // Schatten für Symbol
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            this.ctx.fillText(monster.icon || '∞', monster.x + 1, monster.y + 1);
            
            // Symbol mit Outline
            this.ctx.strokeStyle = '#000';
            this.ctx.lineWidth = 3;
            this.ctx.strokeText(monster.icon || '∞', monster.x, monster.y);
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(monster.icon || '∞', monster.x, monster.y);
            
            // Kleines mathematisches Symbol unten rechts
            if (monster.mathSymbol) {
                this.ctx.font = `${Math.max(8, (monster.size || 18) * 0.4)}px "Times New Roman"`;
                this.ctx.fillStyle = monster.color || '#FF4444';
                this.ctx.strokeStyle = 'white';
                this.ctx.lineWidth = 1;
                this.ctx.strokeText(monster.mathSymbol, monster.x + (monster.size || 18) * 0.6, monster.y + (monster.size || 18) * 0.6);
                this.ctx.fillText(monster.mathSymbol, monster.x + (monster.size || 18) * 0.6, monster.y + (monster.size || 18) * 0.6);
            }
            
            // Spezielle Effekte für Monster-Typen
            this.drawMonsterSpecialEffects(monster);
            
            // Health bar
            const barWidth = (monster.size || 18) * 2.5;
            const barHeight = 6;
            const healthPercent = monster.health / monster.maxHealth;
            
            // Health bar background
            this.ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
            this.ctx.fillRect(monster.x - barWidth / 2, monster.y - (monster.size || 18) - 15, barWidth, barHeight);
            
            // Health bar
            if (healthPercent > 0.6) {
                this.ctx.fillStyle = 'rgba(0, 255, 0, 0.9)';
            } else if (healthPercent > 0.3) {
                this.ctx.fillStyle = 'rgba(255, 255, 0, 0.9)';
            } else {
                this.ctx.fillStyle = 'rgba(255, 100, 100, 0.9)';
            }
            this.ctx.fillRect(monster.x - barWidth / 2, monster.y - (monster.size || 18) - 15, barWidth * healthPercent, barHeight);
            
            // Health bar border
            this.ctx.strokeStyle = 'white';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(monster.x - barWidth / 2, monster.y - (monster.size || 18) - 15, barWidth, barHeight);
            
            // Monster-Name (falls verfügbar)
            if (monster.name && monster.showName) {
                this.ctx.fillStyle = 'white';
                this.ctx.font = '12px Arial';
                this.ctx.strokeStyle = 'black';
                this.ctx.lineWidth = 2;
                this.ctx.strokeText(monster.name, monster.x, monster.y - (monster.size || 18) - 25);
                this.ctx.fillText(monster.name, monster.x, monster.y - (monster.size || 18) - 25);
            }
            
            this.ctx.restore();
        }
    }
    
    drawMonsterSpecialEffects(monster) {
        // Füge animationsFrame hinzu falls nicht vorhanden
        if (!monster.animationFrame) {
            monster.animationFrame = Date.now() * 0.01;
        } else {
            monster.animationFrame += 0.1;
        }
        
        switch(monster.type) {
            case 'vector':
                // Vektor-Pfeil-Effekt
                this.ctx.strokeStyle = 'rgba(69, 183, 209, 0.6)';
                this.ctx.lineWidth = 2;
                const vectorLength = 15;
                this.ctx.beginPath();
                this.ctx.moveTo(monster.x - vectorLength, monster.y);
                this.ctx.lineTo(monster.x + vectorLength, monster.y);
                // Pfeilspitze
                this.ctx.lineTo(monster.x + vectorLength - 5, monster.y - 3);
                this.ctx.moveTo(monster.x + vectorLength, monster.y);
                this.ctx.lineTo(monster.x + vectorLength - 5, monster.y + 3);
                this.ctx.stroke();
                break;
                
            case 'scalar':
                // Pulsierender Effekt
                const pulse = Math.sin(monster.animationFrame * 0.3) * 0.2 + 1;
                this.ctx.strokeStyle = 'rgba(255, 234, 167, 0.8)';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(monster.x, monster.y, (monster.size || 18) * pulse, 0, Math.PI * 2);
                this.ctx.stroke();
                break;
                
            case 'lgs':
                // Matrix-Gitter-Effekt
                this.ctx.strokeStyle = 'rgba(78, 205, 196, 0.5)';
                this.ctx.lineWidth = 1;
                const gridSize = 8;
                for (let i = -1; i <= 1; i++) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(monster.x - gridSize, monster.y + i * gridSize);
                    this.ctx.lineTo(monster.x + gridSize, monster.y + i * gridSize);
                    this.ctx.moveTo(monster.x + i * gridSize, monster.y - gridSize);
                    this.ctx.lineTo(monster.x + i * gridSize, monster.y + gridSize);
                    this.ctx.stroke();
                }
                break;
        }
    }
    
    drawHomerBoss(homer) {
        // Epic Homer Boss rendering! 🍺
        const size = homer.size || 40;
        
        // Homer's massive body with yellow skin
        this.ctx.fillStyle = '#FFD700'; // Homer's yellow skin
        this.ctx.beginPath();
        this.ctx.arc(homer.x, homer.y, size, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Add epic boss border with glow effect
        this.ctx.strokeStyle = '#FF69B4'; // Pink boss glow
        this.ctx.lineWidth = 4;
        this.ctx.shadowColor = '#FF69B4';
        this.ctx.shadowBlur = 10;
        this.ctx.stroke();
        this.ctx.shadowBlur = 0; // Reset shadow
        
        // Extra boss indicator ring
        this.ctx.strokeStyle = '#FF0000';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.beginPath();
        this.ctx.arc(homer.x, homer.y, size + 8, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]); // Reset dash
        
        // Epic health bar for boss
        const barWidth = size * 3;
        const barHeight = 8;
        const healthPercent = homer.health / homer.maxHealth;
        
        // Health bar background
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(homer.x - barWidth / 2, homer.y - size - 25, barWidth, barHeight);
        
        // Health bar (red for boss)
        this.ctx.fillStyle = healthPercent > 0.7 ? '#FF0000' : healthPercent > 0.3 ? '#FF6600' : '#FF0000';
        this.ctx.fillRect(homer.x - barWidth / 2, homer.y - size - 25, barWidth * healthPercent, barHeight);
        
        // Health bar border
        this.ctx.strokeStyle = '#FFF';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(homer.x - barWidth / 2, homer.y - size - 25, barWidth, barHeight);
        
        // Try to draw Homer image if loaded, otherwise fallback to text
        if (this.panicImages.homer && this.panicImages.homer.complete) {
            this.ctx.drawImage(
                this.panicImages.homer, 
                homer.x - size/2, 
                homer.y - size/2, 
                size, 
                size
            );
        } else {
            // Fallback: Homer face emoji
            this.ctx.fillStyle = 'white';
            this.ctx.font = `bold ${size/2}px Arial`;
            this.ctx.textAlign = 'center';
            this.ctx.fillText('🍺', homer.x, homer.y + 8);
        }
        
        // BOSS indicator
        this.ctx.fillStyle = '#FFD700';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeText('💀 HOMER BOSS 💀', homer.x, homer.y + size + 25);
        this.ctx.fillText('💀 HOMER BOSS 💀', homer.x, homer.y + size + 25);
        
        // Health display
        this.ctx.fillStyle = '#FFF';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText(`${homer.health.toLocaleString()}/${homer.maxHealth.toLocaleString()} HP`, 
                          homer.x, homer.y - size - 35);
    }
    
    drawProjectiles() {
        for (const proj of this.projectiles) {
            // Draw projectile trail for tracking projectiles
            if (proj.tracking && proj.target && this.monsters.includes(proj.target)) {
                // Draw line to target
                this.ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
                this.ctx.lineWidth = 1;
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath();
                this.ctx.moveTo(proj.x, proj.y);
                this.ctx.lineTo(proj.targetX, proj.targetY);
                this.ctx.stroke();
                this.ctx.setLineDash([]); // Reset dash
            }
            
            // Draw projectile body
            this.ctx.fillStyle = '#FFD700';
            this.ctx.strokeStyle = '#FFA500';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.arc(proj.x, proj.y, 4, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            // Add glow effect for tracking projectiles
            if (proj.tracking) {
                this.ctx.shadowColor = '#FFD700';
                this.ctx.shadowBlur = 8;
                this.ctx.beginPath();
                this.ctx.arc(proj.x, proj.y, 2, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.shadowBlur = 0; // Reset shadow
            }
        }
    }
    
    drawGameStateOverlay() {
        if (this.gameState === 'paused') {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.ctx.fillStyle = 'white';
            this.ctx.font = 'bold 48px Arial';
            this.ctx.textAlign = 'center';
            
            // Check if paused for question
            const isQuestionActive = window.questionSystem && window.questionSystem.currentQuestion;
            if (isQuestionActive) {
                this.ctx.fillText('🧮 AUFGABE', this.canvas.width / 2, this.canvas.height / 2 - 20);
                this.ctx.font = 'bold 24px Arial';
                this.ctx.fillText('Spiel pausiert während Frage', this.canvas.width / 2, this.canvas.height / 2 + 20);
            } else {
                this.ctx.fillText('⏸️ PAUSE', this.canvas.width / 2, this.canvas.height / 2);
            }
        }
        
        if (this.gameState === 'gameOver') {
            this.ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.ctx.fillStyle = 'white';
            this.ctx.font = 'bold 48px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('💀 GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 80);
            
            // Calculate and display stars
            const stars = this.calculateStars(this.score);
            const starDisplay = this.getStarDisplay(stars);
            
            this.ctx.font = 'bold 36px Arial';
            this.ctx.fillStyle = '#FFD700';
            this.ctx.fillText(starDisplay, this.canvas.width / 2, this.canvas.height / 2 - 30);
            
            this.ctx.fillStyle = 'white';
            this.ctx.font = 'bold 24px Arial';
            this.ctx.fillText(`Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 20);
            this.ctx.fillText(`Wellen: ${this.currentWave - 1}`, this.canvas.width / 2, this.canvas.height / 2 + 50);
            
            // Star requirements hint
            this.ctx.font = '16px Arial';
            this.ctx.fillStyle = '#CCCCCC';
            this.ctx.fillText('⭐ 10.000 | ⭐⭐ 20.000 | ⭐⭐⭐ 35.000', this.canvas.width / 2, this.canvas.height / 2 + 85);
        }
        
        if (this.fastForward) {
            this.ctx.fillStyle = 'rgba(156, 39, 176, 0.2)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.ctx.fillStyle = '#9C27B0';
            this.ctx.font = 'bold 32px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('⏩ FAST FORWARD', this.canvas.width / 2, 50);
        }
    }
    
    // Certificate System (Legacy - now only Game Over uses direct certificate generation)
    checkForCertificate(wave) {
        // This is now only used for testing - Game Over has its own system
        // Check if certificate already awarded this session
        if (this.certificateAwarded) return;
        
        // Calculate achievement level
        let level = 'Bronze';
        let requirement = '';
        
        if (this.score >= 35000) {
            level = 'Platin';
            requirement = '35.000+ Punkte erreicht';
        } else if (this.score >= 20000) {
            level = 'Gold'; 
            requirement = '20.000+ Punkte erreicht';
        } else if (this.score >= 10000) {
            level = 'Silber';
            requirement = '10.000+ Punkte erreicht';
        } else if (wave >= 15) {
            level = 'Bronze';
            requirement = 'Welle 15+ erreicht';
        }
        
        this.showCertificateModal(level, requirement, wave);
        this.certificateAwarded = true;
        
        gameLogger.logGame('Certificate awarded', {
            level: level,
            wave: wave,
            score: this.score,
            requirement: requirement
        });
    }
    
    showCertificateModal(level, requirement, wave) {
        // Don't interfere with game state if already over
        const wasPlaying = this.gameState === 'playing';
        if (this.gameState !== 'gameOver') {
            this.gameState = 'paused';
        }
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        
        const levelColors = {
            'Bronze': '#CD7F32',
            'Silber': '#C0C0C0', 
            'Gold': '#FFD700',
            'Platin': '#E5E4E2'
        };
        
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 600px; background: linear-gradient(135deg, #1e3c72, #2a5298); border: 3px solid ${levelColors[level]}; border-radius: 15px;">
                <div style="text-align: center; padding: 30px;">
                    <div style="font-size: 48px; margin-bottom: 20px;">🏆</div>
                    <h2 style="color: ${levelColors[level]}; font-size: 28px; margin-bottom: 10px;">HERZLICHEN GLÜCKWUNSCH!</h2>
                    <h3 style="color: white; font-size: 20px; margin-bottom: 20px;">Mathe Tower Defense - ${level} Zertifikat</h3>
                    
                    <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <p style="color: white; font-size: 16px; margin: 5px 0;"><strong>Erreicht:</strong> ${requirement}</p>
                        <p style="color: white; font-size: 16px; margin: 5px 0;"><strong>Welle:</strong> ${wave}</p>
                        <p style="color: white; font-size: 16px; margin: 5px 0;"><strong>Score:</strong> ${this.score.toLocaleString()}</p>
                        <p style="color: white; font-size: 16px; margin: 5px 0;"><strong>Türme gebaut:</strong> ${this.towers.length}</p>
                    </div>
                    
                    <p style="color: white; margin: 20px 0;">Möchtest du ein persönliches Zertifikat herunterladen?</p>
                    
                    <div style="margin: 20px 0;">
                        <input type="text" id="playerName" placeholder="Dein Name für das Zertifikat" 
                               style="padding: 12px; font-size: 16px; border: none; border-radius: 8px; width: 300px; text-align: center;">
                    </div>
                    
                    <div style="margin-top: 30px;">
                        <button id="downloadCertificate" style="background: ${levelColors[level]}; color: black; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; margin: 0 10px;">
                            📜 Zertifikat herunterladen
                        </button>
                        <button id="continueGame" style="background: #4CAF50; color: white; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; margin: 0 10px;">
                            🎮 Weiterspielen
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Focus on name input
        setTimeout(() => {
            document.getElementById('playerName').focus();
        }, 100);
        
        // Event listeners
        document.getElementById('downloadCertificate').addEventListener('click', () => {
            const playerName = document.getElementById('playerName').value.trim() || 'Unbekannter Spieler';
            this.generateCertificatePDF(playerName, level, requirement, wave);
        });
        
        document.getElementById('continueGame').addEventListener('click', () => {
            modal.remove();
            if (wasPlaying && this.gameState !== 'gameOver') {
                this.gameState = 'playing';
            }
        });
        
        // Enter key for download
        document.getElementById('playerName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('downloadCertificate').click();
            }
        });
    }
    
    async generateCertificatePDF(playerName, level, requirement, wave) {
        try {
            // Use jsPDF for PDF generation (we'll need to include this library)
            if (typeof window.jsPDF === 'undefined') {
                alert('PDF-Bibliothek nicht geladen. Verwende Text-Zertifikat als Fallback.');
                this.generateTextCertificate(playerName, level, requirement, wave);
                return;
            }
            
            const { jsPDF } = window;
            const doc = new jsPDF('landscape', 'mm', 'a4');
            
            // Certificate design
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            
            // Background gradient effect (simplified)
            doc.setFillColor(30, 60, 114);
            doc.rect(0, 0, pageWidth, pageHeight, 'F');
            
            // Border
            doc.setLineWidth(2);
            doc.setDrawColor(255, 215, 0);
            doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
            
            // Title
            doc.setFontSize(32);
            doc.setTextColor(255, 215, 0);
            doc.text('ZERTIFIKAT', pageWidth / 2, 40, { align: 'center' });
            
            doc.setFontSize(24);
            doc.setTextColor(255, 255, 255);
            doc.text('Mathe Tower Defense - Grundlagen', pageWidth / 2, 55, { align: 'center' });
            
            // Level badge
            const levelColors = {
                'Bronze': [205, 127, 50],
                'Silber': [192, 192, 192],
                'Gold': [255, 215, 0],
                'Platin': [229, 228, 226]
            };
            
            doc.setFillColor(...levelColors[level]);
            doc.roundedRect(pageWidth / 2 - 40, 65, 80, 20, 3, 3, 'F');
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(18);
            doc.text(`${level} Level`, pageWidth / 2, 78, { align: 'center' });
            
            // Main text
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(18);
            doc.text('Hiermit wird bescheinigt, dass', pageWidth / 2, 105, { align: 'center' });
            
            doc.setFontSize(28);
            doc.setTextColor(255, 215, 0);
            doc.text(playerName, pageWidth / 2, 125, { align: 'center' });
            
            doc.setFontSize(16);
            doc.setTextColor(255, 255, 255);
            doc.text('erfolgreich die Grundlagen der analytischen Geometrie', pageWidth / 2, 145, { align: 'center' });
            doc.text('im Mathe Tower Defense gemeistert hat.', pageWidth / 2, 160, { align: 'center' });
            
            // Achievement details
            const currentDate = new Date().toLocaleDateString('de-DE');
            doc.setFontSize(14);
            doc.text(`Erreicht: ${requirement}`, 30, 185);
            doc.text(`Welle: ${wave}`, 30, 195);
            doc.text(`Score: ${this.score.toLocaleString()}`, 30, 205);
            doc.text(`Türme gebaut: ${this.towers.length}`, 170, 185);
            doc.text(`Datum: ${currentDate}`, 170, 195);
            doc.text(`Session: ${gameLogger.sessionId.slice(-8)}`, 170, 205);
            
            // Save PDF
            const filename = `${playerName.replace(/[^a-zA-Z0-9]/g, '_')}_Grundlagenzertifikat.pdf`;
            doc.save(filename);
            
            // Close modal and resume game if not game over
            document.querySelector('.modal').remove();
            if (this.gameState !== 'gameOver') {
                this.gameState = 'playing';
            }
            
            this.showMessage(`🎉 Zertifikat "${filename}" heruntergeladen!`, 'success', 4000);
            
            gameLogger.logGame('Certificate PDF generated', {
                playerName: playerName,
                filename: filename,
                level: level
            });
            
        } catch (error) {
            console.error('PDF generation failed:', error);
            this.generateTextCertificate(playerName, level, requirement, wave);
        }
    }
    
    generateTextCertificate(playerName, level, requirement, wave) {
        const currentDate = new Date().toLocaleDateString('de-DE');
        const certificateText = `
🏆 MATHE TOWER DEFENSE - GRUNDLAGEN ZERTIFIKAT 🏆

${level.toUpperCase()} LEVEL

Hiermit wird bescheinigt, dass

${playerName.toUpperCase()}

erfolgreich die Grundlagen der analytischen Geometrie
im Mathe Tower Defense gemeistert hat.

ERREICHTE LEISTUNG:
- ${requirement}
- Welle: ${wave}
- Score: ${this.score.toLocaleString()}
- Türme gebaut: ${this.towers.length}
- Datum: ${currentDate}
- Session: ${gameLogger.sessionId.slice(-8)}

Themengebiete:
✓ Lineare Gleichungssysteme (LGS)
✓ Punkte im Raum
✓ Vektoren und Vektoroperationen
✓ Skalarprodukt
✓ Vektorprodukt (Kreuzprodukt)

Mathematische Grundlagen erfolgreich demonstriert!

---
Generiert von: Mathe Tower Defense - Remix Master
`;
        
        // Download as text file
        const blob = new Blob([certificateText], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        const filename = `${playerName.replace(/[^a-zA-Z0-9]/g, '_')}_Grundlagenzertifikat.txt`;
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        
        // Close modal and resume game if not game over
        document.querySelector('.modal').remove();
        if (this.gameState !== 'gameOver') {
            this.gameState = 'playing';
        }
        
        this.showMessage(`📄 Text-Zertifikat "${filename}" heruntergeladen!`, 'success', 4000);
    }
    
    showGameOverModal(stars) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        
        const starDisplay = this.getStarDisplay(stars);
        
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 500px; background: linear-gradient(135deg, #d32f2f, #f44336); border: 3px solid #ff1744; border-radius: 15px;">
                <div style="text-align: center; padding: 30px;">
                    <div style="font-size: 48px; margin-bottom: 20px;">💀</div>
                    <h2 style="color: white; font-size: 32px; margin-bottom: 20px;">GAME OVER</h2>
                    
                    <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <div style="font-size: 28px; color: #FFD700; margin-bottom: 15px;">${starDisplay}</div>
                        <p style="color: white; font-size: 18px; margin: 8px 0;"><strong>Score:</strong> ${this.score.toLocaleString()}</p>
                        <p style="color: white; font-size: 18px; margin: 8px 0;"><strong>Wellen:</strong> ${this.currentWave - 1}</p>
                        <p style="color: white; font-size: 18px; margin: 8px 0;"><strong>Türme gebaut:</strong> ${this.towers.length}</p>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <p style="color: white; font-size: 16px;">Lade dein persönliches Grundlagen-Zertifikat herunter:</p>
                        <input type="text" id="gameOverPlayerName" placeholder="Dein Name für das Zertifikat" 
                               style="padding: 12px; font-size: 16px; border: none; border-radius: 8px; width: 300px; text-align: center; margin: 10px 0;">
                    </div>
                    
                    <div style="margin-top: 30px;">
                        <button id="downloadGameOverCertificate" style="background: #FFD700; color: black; border: none; padding: 15px 25px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; margin: 0 10px;">
                            🏆 Zertifikat herunterladen
                        </button>
                        <button id="playAgain" style="background: #4CAF50; color: white; border: none; padding: 15px 25px; border-radius: 8px; cursor: pointer; font-size: 16px; margin: 0 10px;">
                            🔄 Nochmal spielen
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Focus on name input
        setTimeout(() => {
            document.getElementById('gameOverPlayerName').focus();
        }, 100);
        
        // Event listeners
        document.getElementById('downloadGameOverCertificate').addEventListener('click', () => {
            const playerName = document.getElementById('gameOverPlayerName').value.trim() || 'Unbekannter Spieler';
            this.generateGameOverCertificate(playerName, stars);
        });
        
        document.getElementById('playAgain').addEventListener('click', () => {
            modal.remove();
            location.reload(); // Simple restart
        });
        
        // Enter key for download
        document.getElementById('gameOverPlayerName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('downloadGameOverCertificate').click();
            }
        });
    }
    
    generateGameOverCertificate(playerName, stars) {
        // Always generate text certificate (PDF is problematic)
        const currentDate = new Date().toLocaleDateString('de-DE');
        const starText = this.getStarDisplay(stars);
        
        const certificateText = `
🏆 MATHE TOWER DEFENSE - GRUNDLAGEN ZERTIFIKAT 🏆

Hiermit wird bescheinigt, dass

${playerName.toUpperCase()}

am Mathe Tower Defense teilgenommen und dabei
die Grundlagen der analytischen Geometrie angewendet hat.

SPIELERGEBNIS:
${starText}
Score: ${this.score.toLocaleString()} Punkte
Wellen erreicht: ${this.currentWave - 1}
Türme gebaut: ${this.towers.length}
Datum: ${currentDate}
Session: ${gameLogger.sessionId.slice(-8)}

BEHANDELTE THEMENGEBIETE:
✓ Lineare Gleichungssysteme (LGS)
✓ Punkte im Raum - Koordinaten und Abstände
✓ Vektoren und Vektoroperationen
✓ Skalarprodukt und Orthogonalität
✓ Vektorprodukt (Kreuzprodukt)

Die mathematischen Grundlagen wurden erfolgreich
im spielerischen Kontext demonstriert!

Dank für die Teilnahme am Mathe Tower Defense!

---
Generiert von: Mathe Tower Defense - Remix Master
Entwickelt für interaktives Mathematiklernen
`;
        
        // Download as text file
        const blob = new Blob([certificateText], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        const filename = `${playerName.replace(/[^a-zA-Z0-9]/g, '_')}_Grundlagenzertifikat.txt`;
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        
        // Show success message
        const button = document.getElementById('downloadGameOverCertificate');
        button.textContent = '✅ Heruntergeladen!';
        button.style.background = '#4CAF50';
        button.style.color = 'white';
        button.disabled = true;
        
        gameLogger.logGame('Game Over certificate downloaded', {
            playerName: playerName,
            filename: filename,
            stars: stars,
            score: this.score
        });
    }
    
    // ======================
    // PANIC BUTTON SYSTEM 🚨
    // ======================
    
    loadPanicImages() {
        // Load Chuck Norris image
        this.panicImages.chuck = new Image();
        this.panicImages.chuck.src = 'chuck_norris.jpg';
        
        // Load Homer Simpson image  
        this.panicImages.homer = new Image();
        this.panicImages.homer.src = 'homer.jpg';
        
        gameLogger.logGame('Panic images loading', {
            chuck: 'chuck_norris.jpg',
            homer: 'homer.jpg'
        });
    }
    
    activatePanicButton() {
        if (this.panicActive || this.gameState !== 'playing' || this.panicCooldown > 0) {
            // Show cooldown message if still cooling down
            if (this.panicCooldown > 0) {
                this.showCooldownMessage();
            }
            return; // Can only panic during active gameplay and when not on cooldown
        }
        
        // Random chance: 15% Chuck Norris, 85% Homer Simpson
        const random = Math.random();
        const isChuckNorris = random < 0.15;
        
        this.panicActive = true;
        this.panicType = isChuckNorris ? 'chuck' : 'homer';
        this.panicCooldown = this.panicCooldownDuration; // Start 2-minute cooldown
        
        gameLogger.logGame('PANIC BUTTON ACTIVATED!', {
            random: random,
            type: this.panicType,
            monstersKilled: this.monsters.length,
            currentWave: this.currentWave,
            cooldownStarted: true,
            cooldownDuration: this.panicCooldownDuration
        });
        
        if (isChuckNorris) {
            this.chuckNorrisIntervention();
        } else {
            this.homerSimpsonChaos();
        }
    }
    
    chuckNorrisIntervention() {
        // Chuck Norris kills ALL monsters instantly and clears the wave!
        const monstersKilled = this.monsters.length;
        this.monsters = []; // Chuck Norris doesn't leave survivors
        
        // Visual effect - show Chuck Norris for 2 seconds
        this.showPanicEffect('chuck', 2000);
        
        // Complete the wave instantly
        setTimeout(() => {
            this.panicActive = false;
            this.panicType = null;
            this.checkWaveComplete();
        }, 2000);
        
        gameLogger.logGame('Chuck Norris eliminated all threats', {
            monstersDestroyed: monstersKilled,
            message: 'Wave cleared by Chuck Norris roundhouse kick!'
        });
    }
    
    homerSimpsonChaos() {
        // Homer kills all current monsters but spawns himself as boss
        const monstersKilled = this.monsters.length;
        this.monsters = []; // Homer accidentally destroys everything
        
        // Create Homer boss monster
        this.homerBoss = {
            x: this.spawnPoint.x,
            y: this.spawnPoint.y,
            health: 1000007,
            maxHealth: 1000007,
            speed: 0.8, // Slower than normal monsters
            pathIndex: 0,
            pathProgress: 0,
            size: 40, // Bigger than normal monsters
            type: 'homer_boss',
            damage: 1, // Only costs 1 health point when reaching house
            reward: 10000 // Epic bonus score when defeated
        };
        
        this.monsters.push(this.homerBoss);
        
        // Visual effect - show Homer for 3 seconds
        this.showPanicEffect('homer', 3000);
        
        setTimeout(() => {
            this.panicActive = false;
            this.panicType = null;
        }, 3000);
        
        gameLogger.logGame('Homer Simpson chaos unleashed', {
            monstersKilled: monstersKilled,
            homerHP: 1000007,
            homerDamage: 1,
            homerReward: 500,
            message: 'D\'oh! Homer spawned as boss!'
        });
    }
    
    showPanicEffect(type, duration) {
        const effectElement = document.createElement('div');
        effectElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10000;
            background: rgba(0,0,0,0.9);
            padding: 30px;
            border-radius: 20px;
            border: 5px solid ${type === 'chuck' ? '#FFD700' : '#FF69B4'};
            text-align: center;
            font-family: Arial, bold;
            color: white;
            font-size: 24px;
            box-shadow: 0 0 30px rgba(255,255,255,0.5);
            animation: panicZoom 0.5s ease-out;
        `;
        
        const message = type === 'chuck' 
            ? '💪 CHUCK NORRIS TO THE RESCUE! 💪<br>All monsters eliminated!'
            : '🍺 HOMER SIMPSON CHAOS! 🍺<br>Boss Homer incoming!';
            
        effectElement.innerHTML = `
            <div style="font-size: 32px; margin-bottom: 15px;">${message}</div>
            <img src="${type === 'chuck' ? 'chuck_norris.jpg' : 'homer.jpg'}" 
                 style="max-width: 200px; max-height: 200px; border-radius: 10px;" 
                 alt="${type}">
        `;
        
        // Add animation keyframes if not exists
        if (!document.querySelector('#panicAnimations')) {
            const style = document.createElement('style');
            style.id = 'panicAnimations';
            style.textContent = `
                @keyframes panicZoom {
                    0% { transform: translate(-50%, -50%) scale(0); }
                    50% { transform: translate(-50%, -50%) scale(1.1); }
                    100% { transform: translate(-50%, -50%) scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(effectElement);
        
        // Remove effect after duration
        setTimeout(() => {
            if (effectElement.parentNode) {
                effectElement.remove();
            }
        }, duration);
    }
    
    updatePanicCooldown(deltaTime) {
        if (this.panicCooldown > 0) {
            this.panicCooldown = Math.max(0, this.panicCooldown - deltaTime);
            this.updatePanicButtonVisual();
        }
    }
    
    updatePanicButtonVisual() {
        const button = document.getElementById('panicButton');
        if (!button) return;
        
        if (this.panicCooldown > 0) {
            // Button is on cooldown
            const remainingSeconds = Math.ceil(this.panicCooldown / 1000);
            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            button.textContent = `🕐 Cooldown: ${timeString}`;
            button.style.opacity = '0.5';
            button.style.cursor = 'not-allowed';
            button.style.animation = 'none'; // Stop pulsing
            button.disabled = true;
        } else {
            // Button is ready
            button.textContent = '🚨 PANIC! 🚨';
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
            button.style.animation = 'panicPulse 1.5s infinite'; // Resume pulsing
            button.disabled = false;
        }
    }
    
    showCooldownMessage() {
        const remainingSeconds = Math.ceil(this.panicCooldown / 1000);
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        const messageElement = document.createElement('div');
        messageElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            background: rgba(255,0,0,0.9);
            color: white;
            padding: 20px 30px;
            border-radius: 15px;
            border: 3px solid #FF6666;
            text-align: center;
            font-family: Arial, bold;
            font-size: 18px;
            font-weight: bold;
            box-shadow: 0 0 20px rgba(255,0,0,0.8);
            animation: panicZoom 0.3s ease-out;
        `;
        
        messageElement.innerHTML = `
            <div style="font-size: 24px; margin-bottom: 10px;">🕐 PANIC COOLDOWN</div>
            <div>Noch ${timeString} warten!</div>
        `;
        
        document.body.appendChild(messageElement);
        
        // Remove message after 2 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 2000);
        
        gameLogger.logGame('Panic button cooldown message shown', {
            remainingTime: timeString,
            remainingMs: this.panicCooldown
        });
    }
}

// Make GameEngine globally available
window.GameEngine = GameEngine;