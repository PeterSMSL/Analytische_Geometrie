// Game Logger - Session-based logging system
// Tracks all game events for debugging and analytics

class GameLogger {
    constructor() {
        this.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        this.startTime = Date.now();
        this.logs = [];
        this.logInterval = null;
        
        // Auto-save every 10 seconds
        this.startAutoSave();
        
        // Setup error handling
        this.setupErrorHandling();
        
        // Initial log
        this.log('SYSTEM', 'Game Logger initialized', {
            sessionId: this.sessionId,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            screenSize: `${screen.width}x${screen.height}`,
            windowSize: `${window.innerWidth}x${window.innerHeight}`
        });
    }
    
    log(category, message, data = {}) {
        const timestamp = Date.now();
        const logEntry = {
            timestamp,
            timeFromStart: timestamp - this.startTime,
            isoTime: new Date(timestamp).toISOString(),
            category: category.toUpperCase(),
            message,
            data,
            gameState: this.getGameState()
        };
        
        this.logs.push(logEntry);
        
        // Console output with color coding
        const color = this.getCategoryColor(category);
        console.log(
            `%c[${category}] ${message}`,
            `color: ${color}; font-weight: bold;`,
            data
        );
        
        // Performance check
        if (this.logs.length > 1000) {
            this.performanceCheck();
        }
    }
    
    // Specialized logging methods
    logGame(message, data = {}) {
        this.log('GAME', message, data);
    }
    
    logTower(message, data = {}) {
        this.log('TOWER', message, data);
    }
    
    logQuestion(message, data = {}) {
        this.log('QUESTION', message, data);
    }
    
    logError(message, data = {}) {
        this.log('ERROR', message, data);
    }
    
    logPerformance(message, data = {}) {
        this.log('PERFORMANCE', message, data);
    }
    
    getCategoryColor(category) {
        const colors = {
            'SYSTEM': '#00FF00',
            'GAME': '#0066FF',
            'TOWER': '#FF6600',
            'QUESTION': '#9900FF',
            'ERROR': '#FF0000',
            'PERFORMANCE': '#00FFFF',
            'DEBUG': '#808080'
        };
        return colors[category.toUpperCase()] || '#FFFFFF';
    }
    
    getGameState() {
        if (typeof window !== 'undefined' && window.gameEngine) {
            return {
                state: window.gameEngine.gameState,
                wave: window.gameEngine.currentWave,
                health: window.gameEngine.health,
                score: window.gameEngine.score,
                towers: window.gameEngine.towers?.length || 0,
                monsters: window.gameEngine.monsters?.length || 0,
                projectiles: window.gameEngine.projectiles?.length || 0,
                fastForward: window.gameEngine.fastForward || false
            };
        }
        return { status: 'initializing' };
    }
    
    setupErrorHandling() {
        // JavaScript errors
        window.addEventListener('error', (event) => {
            this.logError('JavaScript Error', {
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                stack: event.error?.stack
            });
        });
        
        // Promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.logError('Unhandled Promise Rejection', {
                reason: event.reason,
                stack: event.reason?.stack
            });
        });
        
        // Performance monitoring
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.duration > 50) { // Log slow operations
                        this.logPerformance('Slow operation detected', {
                            duration: entry.duration,
                            name: entry.name,
                            type: entry.entryType
                        });
                    }
                }
            });
            observer.observe({ entryTypes: ['navigation', 'measure', 'mark'] });
        }
    }
    
    performanceCheck() {
        // Prevent infinite loop by checking if we're already trimming
        if (this._trimming) return;
        
        // Keep only last 500 logs to prevent memory issues
        if (this.logs.length > 1000) {
            this._trimming = true;
            
            // Trim logs first
            this.logs = this.logs.slice(-500);
            
            // Add trim notification directly without calling log() to avoid recursion
            const timestamp = Date.now();
            this.logs.push({
                timestamp,
                timeFromStart: timestamp - this.startTime,
                isoTime: new Date(timestamp).toISOString(),
                category: 'SYSTEM',
                message: 'Log buffer trimmed to prevent memory issues',
                data: { 
                    newSize: this.logs.length,
                    trimmedAt: this.logs.length,
                    memoryUsage: this.getMemoryUsage() 
                },
                gameState: this.getGameState()
            });
            
            console.log('%c[SYSTEM] Log buffer trimmed to prevent memory issues', 'color: #00FF00; font-weight: bold;', { newSize: this.logs.length });
            
            this._trimming = false;
        }
    }
    
    getMemoryUsage() {
        if ('memory' in performance) {
            return {
                used: Math.round(performance.memory.usedJSHeapSize / 1048576),
                total: Math.round(performance.memory.totalJSHeapSize / 1048576),
                limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
            };
        }
        return null;
    }
    
    startAutoSave() {
        this.logInterval = setInterval(() => {
            this.saveLogFile();
        }, 10000); // Every 10 seconds
    }
    
    saveLogFile() {
        try {
            const sessionInfo = {
                sessionId: this.sessionId,
                startTime: this.startTime,
                endTime: Date.now(),
                duration: Date.now() - this.startTime,
                totalLogs: this.logs.length
            };
            
            const logData = {
                sessionInfo,
                logs: this.logs
            };
            
            // Store in localStorage as backup
            localStorage.setItem(`gameLog_${this.sessionId}`, JSON.stringify(logData));
            
            // Don't log auto-saves to prevent log spam
            console.log('%c[SYSTEM] Log file auto-saved', 'color: #00FF00; font-weight: bold;', {
                filename: `game_log_${this.sessionId}.json`,
                logCount: this.logs.length
            });
            
        } catch (error) {
            console.error('Failed to save log file:', error);
        }
    }
    
    downloadLogs() {
        try {
            const sessionInfo = {
                sessionId: this.sessionId,
                startTime: this.startTime,
                endTime: Date.now(),
                duration: Date.now() - this.startTime,
                totalLogs: this.logs.length
            };
            
            const logData = {
                sessionInfo,
                logs: this.logs
            };
            
            const dataStr = JSON.stringify(logData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = `game_log_${this.sessionId}.json`;
            link.click();
            
            this.log('SYSTEM', 'Log file downloaded', {
                filename: `game_log_${this.sessionId}.json`,
                size: dataStr.length
            });
            
        } catch (error) {
            this.logError('Failed to download logs', { error: error.message });
        }
    }
    
    // Cleanup when page unloads
    cleanup() {
        if (this.logInterval) {
            clearInterval(this.logInterval);
        }
        this.saveLogFile();
        this.log('SYSTEM', 'Game Logger cleanup completed');
    }
}

// Global logger instance
const gameLogger = new GameLogger();

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    gameLogger.cleanup();
});