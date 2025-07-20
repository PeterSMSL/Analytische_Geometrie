// Question System - Mathematical questions with MathJax support
// Handles tower building questions and bonus question rounds

class QuestionSystem {
    constructor() {
        this.currentQuestion = null;
        this.selectedAnswer = null;
        this.pendingTowerCallback = null;
        this.submitting = false;
        
        // Question bank with 2 questions per category for testing
        this.questionBank = this.initializeQuestions();
        this.completedQuestions = new Set();
        
        this.setupEventListeners();
        this.setupModal();
        
        gameLogger.logQuestion('Question System initialized', {
            totalQuestions: this.getTotalQuestionCount(),
            categories: Object.keys(this.questionBank)
        });
    }
    
    initializeQuestions() {
        // Use fullQuestionBank if available, otherwise fallback to embedded questions
        if (typeof fullQuestionBank !== 'undefined') {
            gameLogger.logQuestion('Using full question bank', {
                totalQuestions: Object.values(fullQuestionBank).reduce((sum, cat) => sum + cat.length, 0),
                categories: Object.keys(fullQuestionBank)
            });
            return fullQuestionBank;
        }
        
        // Fallback embedded questions
        return {
            basic: [
                // Einfache Addition
                {
                    id: 'basic_1',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Addition:</div>
                        <p>$7 + 5 = ?$</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['12', '11', '13', '10'],
                    correct: 0,
                    explanation: '$7 + 5 = 12$'
                },
                {
                    id: 'basic_2',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Subtraktion:</div>
                        <p>$15 - 8 = ?$</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['7', '6', '8', '9'],
                    correct: 0,
                    explanation: '$15 - 8 = 7$'
                },
                {
                    id: 'basic_3',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Multiplikation:</div>
                        <p>$6 \\cdot 4 = ?$</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['24', '20', '26', '22'],
                    correct: 0,
                    explanation: '$6 \\cdot 4 = 24$'
                },
                {
                    id: 'basic_4',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Division:</div>
                        <p>$20 \\div 4 = ?$</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['5', '4', '6', '3'],
                    correct: 0,
                    explanation: '$20 \\div 4 = 5$'
                },
                {
                    id: 'basic_5',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Prozent:</div>
                        <p>10% von 50 sind:</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['5', '10', '15', '4'],
                    correct: 0,
                    explanation: '$10\\% \\text{ von } 50 = \\frac{10}{100} \\cdot 50 = 5$'
                },
                {
                    id: 'basic_6',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Potenzen:</div>
                        <p>$3^2 = ?$</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['9', '6', '12', '8'],
                    correct: 0,
                    explanation: '$3^2 = 3 \\cdot 3 = 9$'
                },
                {
                    id: 'basic_7',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Brüche:</div>
                        <p>$\\frac{1}{2} + \\frac{1}{4} = ?$</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['$\\frac{3}{4}$', '$\\frac{1}{3}$', '$\\frac{2}{6}$', '$\\frac{1}{6}$'],
                    correct: 0,
                    explanation: '$\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$'
                },
                {
                    id: 'basic_8',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Reihenfolge:</div>
                        <p>$2 + 3 \\cdot 4 = ?$</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['14', '20', '12', '16'],
                    correct: 0,
                    explanation: 'Punkt vor Strich: $2 + 3 \\cdot 4 = 2 + 12 = 14$'
                },
                {
                    id: 'basic_9',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Prozent:</div>
                        <p>50% von 30 sind:</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['15', '20', '10', '25'],
                    correct: 0,
                    explanation: '$50\\% \\text{ von } 30 = \\frac{50}{100} \\cdot 30 = 15$'
                },
                {
                    id: 'basic_10',
                    category: 'Allgemein',
                    question: `<div class="math-problem">
                        <div class="problem-title">Einfache Gleichung:</div>
                        <p>$x + 5 = 12$. Was ist $x$?</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['7', '8', '6', '17'],
                    correct: 0,
                    explanation: '$x + 5 = 12 \\Rightarrow x = 12 - 5 = 7$'
                }
            ],
            
            lgs: [
                {
                    id: 'lgs_1',
                    category: 'LGS',
                    question: `<div class="math-problem">
                        <div class="problem-title">Löse das Gleichungssystem:</div>
                        <div class="equation-system">
                            $$\\begin{align}
                            2x + y &= 7 \\\\
                            x - y &= 2
                            \\end{align}$$
                        </div>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['$x = 3, y = 1$', '$x = 2, y = 3$', '$x = 1, y = 5$', '$x = 4, y = -1$'],
                    correct: 0,
                    explanation: 'Additionsverfahren: $(2x + y) + (x - y) = 7 + 2 \\Rightarrow 3x = 9 \\Rightarrow x = 3$. Einsetzen: $y = 7 - 2 \\cdot 3 = 1$. Probe: $2 \\cdot 3 + 1 = 7$ ✓ und $3 - 1 = 2$ ✓'
                },
                {
                    id: 'lgs_2',
                    category: 'LGS',
                    question: `<div class="math-problem">
                        <div class="problem-title">Gleichungssystem:</div>
                        <div class="equation-system">
                            $$\\begin{align}
                            x + y &= 5 \\\\
                            2x - y &= 1
                            \\end{align}$$
                        </div>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['$x = 1, y = 4$', '$x = 2, y = 3$', '$x = 3, y = 2$', '$x = 4, y = 1$'],
                    correct: 1,
                    explanation: 'Additionsverfahren: $(x + y) + (2x - y) = 5 + 1 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. Einsetzen: $y = 5 - 2 = 3$. Probe: $2 + 3 = 5$ ✓ und $2 \\cdot 2 - 3 = 1$ ✓'
                }
            ],
            
            point: [
                {
                    id: 'point_1',
                    category: 'Punkte im Raum',
                    question: `<div class="math-problem">
                        <div class="problem-title">Abstand zwischen Punkten:</div>
                        <p>Bestimme den Abstand zwischen $A(1, 2, 3)$ und $B(4, 6, 3)$:</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['5', '3', '7', '4'],
                    correct: 0,
                    explanation: 'Abstandsformel: $d = \\sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$'
                },
                {
                    id: 'point_2',
                    category: 'Punkte im Raum',
                    question: `<div class="math-problem">
                        <div class="problem-title">Mittelpunkt:</div>
                        <p>Der Mittelpunkt der Strecke von $P(2, 4, 6)$ zu $Q(8, 2, 4)$ ist:</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['$(5, 3, 5)$', '$(6, 6, 10)$', '$(10, 6, 2)$', '$(3, 1, 1)$'],
                    correct: 0,
                    explanation: 'Mittelpunktformel: $M = \\left(\\frac{2+8}{2}, \\frac{4+2}{2}, \\frac{6+4}{2}\\right) = \\left(\\frac{10}{2}, \\frac{6}{2}, \\frac{10}{2}\\right) = (5, 3, 5)$'
                }
            ],
            
            vector: [
                {
                    id: 'vector_1',
                    category: 'Vektoren',
                    question: `<div class="math-problem">
                        <div class="problem-title">Vektoraddition:</div>
                        <p>$\\vec{a} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 4 \\end{pmatrix}$</p>
                        <p>Berechne $\\vec{a} + \\vec{b}$:</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: [
                        '$\\begin{pmatrix} 3 \\\\ 1 \\\\ 5 \\end{pmatrix}$',
                        '$\\begin{pmatrix} 1 \\\\ 5 \\\\ -3 \\end{pmatrix}$',
                        '$\\begin{pmatrix} 2 \\\\ -6 \\\\ 4 \\end{pmatrix}$',
                        '$\\begin{pmatrix} 3 \\\\ -1 \\\\ 3 \\end{pmatrix}$'
                    ],
                    correct: 0,
                    explanation: 'Vektoraddition: $\\vec{a} + \\vec{b} = \\begin{pmatrix} 2+1 \\\\ 3+(-2) \\\\ 1+4 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 5 \\end{pmatrix}$'
                },
                {
                    id: 'vector_2',
                    category: 'Vektoren',
                    question: `<div class="math-problem">
                        <div class="problem-title">Vektorlänge:</div>
                        <p>Die Länge des Vektors $\\vec{v} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$ ist:</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['5', '7', '3', '4'],
                    correct: 0,
                    explanation: 'Vektorlänge: $|\\vec{v}| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$'
                }
            ],
            
            scalar: [
                {
                    id: 'scalar_1',
                    category: 'Skalarprodukt',
                    question: `<div class="math-problem">
                        <div class="problem-title">Skalarprodukt:</div>
                        <p>$\\vec{a} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 1 \\\\ 4 \\\\ 2 \\end{pmatrix}$</p>
                        <p>Berechne $\\vec{a} \\cdot \\vec{b}$:</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['12', '8', '10', '6'],
                    correct: 0,
                    explanation: 'Skalarprodukt: $\\vec{a} \\cdot \\vec{b} = 2 \\cdot 1 + 1 \\cdot 4 + 3 \\cdot 2 = 2 + 4 + 6 = 12$'
                },
                {
                    id: 'scalar_2',
                    category: 'Skalarprodukt',
                    question: `<div class="math-problem">
                        <div class="problem-title">Orthogonalität:</div>
                        <p>Für welchen Wert von $k$ sind die Vektoren orthogonal?</p>
                        <p>$\\vec{u} = \\begin{pmatrix} 2 \\\\ k \\\\ 1 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$</p>
                    </div>`,
                    type: 'multiple_choice',
                    options: ['$k = 0$', '$k = 1$', '$k = -1$', '$k = 2$'],
                    correct: 0,
                    explanation: 'Orthogonal wenn $\\vec{u} \\cdot \\vec{v} = 0$: $2 \\cdot 1 + k \\cdot 2 + 1 \\cdot (-2) = 0 \\Rightarrow 2k = 0 \\Rightarrow k = 0$'
                }
            ]
        };
    }
    
    setupEventListeners() {
        document.getElementById('submitAnswer')?.addEventListener('click', () => {
            this.submitAnswer();
        });
        
        document.getElementById('skipQuestion')?.addEventListener('click', () => {
            this.skipQuestion();
        });
    }
    
    setupModal() {
        const modal = document.getElementById('questionModal');
        
        // Close modal when clicking outside
        modal?.addEventListener('click', (e) => {
            if (e.target === modal && !this.pendingTowerCallback) {
                this.hideModal();
            }
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (!this.currentQuestion) return;
            
            if (e.key === 'Enter') {
                this.submitAnswer();
            } else if (e.key === 'Escape' && !this.pendingTowerCallback) {
                this.hideModal();
            } else if (e.key >= '1' && e.key <= '4') {
                const index = parseInt(e.key) - 1;
                this.selectAnswer(index);
            }
        });
    }
    
    getTotalQuestionCount() {
        return Object.values(this.questionBank).reduce((total, category) => total + category.length, 0);
    }
    
    showTowerQuestion(towerType, x, y, callback) {
        // Get current wave for difficulty scaling
        const currentWave = window.gameEngine ? window.gameEngine.currentWave : 1;
        
        // Map tower types to question categories with wave-based difficulty
        const categoryMap = {
            basic: currentWave >= 10 ? 'lgs' : 'basic',
            lgs: currentWave >= 10 ? 'lgs_advanced' : 'lgs',
            point: currentWave >= 10 ? 'point_advanced' : 'point',
            vector: currentWave >= 10 ? 'vector_advanced' : 'vector',
            scalar: currentWave >= 10 ? 'scalar_advanced' : 'scalar',
            vectorproduct: currentWave >= 10 ? 'vectorproduct_advanced' : 'vectorproduct'
        };
        
        const category = categoryMap[towerType] || 'basic';
        const question = this.getRandomQuestionFromCategory(category);
        
        if (!question) {
            gameLogger.logQuestion('No questions available', { category, towerType });
            callback(false);
            return;
        }
        
        this.pendingTowerCallback = callback;
        this.showQuestion(question, 'tower');
        
        gameLogger.logQuestion('Tower question shown', {
            questionId: question.id,
            category: question.category,
            towerType,
            position: { x, y },
            currentWave: currentWave,
            difficultyMode: currentWave >= 10 ? 'advanced' : 'basic'
        });
    }
    
    showUpgradeQuestion(tower, difficulty, callback) {
        // Get appropriate question based on tower type and difficulty
        const question = this.getUpgradeQuestion(tower, difficulty);
        
        if (!question) {
            gameLogger.logQuestion('No upgrade questions available', { 
                tower: tower.type, 
                difficulty: difficulty.level 
            });
            callback(false);
            return;
        }
        
        this.pendingTowerCallback = callback;
        this.currentUpgradeContext = {
            tower: tower,
            difficulty: difficulty
        };
        
        this.showQuestion(question, 'upgrade');
        
        gameLogger.logQuestion('Tower upgrade question shown', {
            questionId: question.id,
            category: question.category,
            tower: tower.type,
            currentLevel: tower.level || 1,
            targetLevel: difficulty.targetLevel,
            difficulty: difficulty.level
        });
    }
    
    getUpgradeQuestion(tower, difficulty) {
        // Get current wave for difficulty scaling
        const currentWave = window.gameEngine ? window.gameEngine.currentWave : 1;
        
        // Map tower types to question categories with wave-based difficulty
        const categoryMap = {
            basic: currentWave >= 10 ? 'lgs' : 'basic',
            lgs: currentWave >= 10 ? 'lgs_advanced' : 'lgs',
            point: currentWave >= 10 ? 'point_advanced' : 'point',
            vector: currentWave >= 10 ? 'vector_advanced' : 'vector',
            scalar: currentWave >= 10 ? 'scalar_advanced' : 'scalar',
            vectorproduct: currentWave >= 10 ? 'vectorproduct_advanced' : 'vectorproduct'
        };
        
        const category = categoryMap[tower.type] || 'basic';
        
        // For higher difficulties, try to get questions from more advanced categories
        let questionCategories = [category];
        
        if (currentWave >= 10) {
            // After wave 10, always use advanced categories
            questionCategories = [category];
        } else if (difficulty.level === 'medium') {
            // Add more challenging categories
            questionCategories = [category, 'lgs', 'vector'];
        } else if (difficulty.level === 'hard') {
            // Use most challenging categories  
            questionCategories = ['lgs', 'vector', 'scalar', 'point'];
        }
        
        // Try to get a question from the appropriate categories
        for (const cat of questionCategories) {
            const question = this.getRandomQuestionFromCategory(cat);
            if (question) {
                return question;
            }
        }
        
        // Fallback to any available question
        return this.getRandomQuestionFromCategory(category);
    }
    
    showBonusQuestion() {
        // Get current wave for difficulty scaling
        const currentWave = window.gameEngine ? window.gameEngine.currentWave : 1;
        
        // Choose categories based on current wave
        let availableCategories = Object.keys(this.questionBank);
        
        if (currentWave >= 10) {
            // After wave 10, prefer advanced categories for bonus questions
            const advancedCategories = availableCategories.filter(cat => cat.includes('_advanced'));
            availableCategories = advancedCategories.length > 0 ? advancedCategories : availableCategories;
        }
        
        const randomCategory = availableCategories[Math.floor(Math.random() * availableCategories.length)];
        const question = this.getRandomQuestionFromCategory(randomCategory);
        
        if (!question) {
            gameLogger.logQuestion('No bonus questions available');
            return;
        }
        
        this.pendingTowerCallback = null; // This is a bonus question
        this.showQuestion(question, 'bonus');
        
        gameLogger.logQuestion('Bonus question shown', {
            questionId: question.id,
            category: question.category
        });
    }
    
    getRandomQuestionFromCategory(category) {
        const questions = this.questionBank[category] || [];
        const availableQuestions = questions.filter(q => !this.completedQuestions.has(q.id));
        
        if (availableQuestions.length === 0) {
            // Reset completed questions for this category if all are done
            questions.forEach(q => this.completedQuestions.delete(q.id));
            return questions[Math.floor(Math.random() * questions.length)];
        }
        
        return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    }
    
    showQuestion(question, context = 'general') {
        this.currentQuestion = question;
        this.selectedAnswer = null;
        this.submitting = false;
        this.questionContext = context;
        
        // Pause game during question
        this.pauseGameForQuestion();
        
        // Show modal
        this.showModal();
        
        // Display question with context
        this.displayQuestion(question, context);
        
        gameLogger.logQuestion('Question displayed', {
            questionId: question.id,
            category: question.category,
            context: context,
            gamePaused: true
        });
    }
    
    pauseGameForQuestion() {
        if (window.gameEngine) {
            // Store the previous game state
            this.previousGameState = window.gameEngine.gameState;
            
            // Only pause if game was playing
            if (window.gameEngine.gameState === 'playing') {
                window.gameEngine.gameState = 'paused';
                window.gameEngine.updateUI();
                
                gameLogger.logGame('Game auto-paused for question', {
                    previousState: this.previousGameState
                });
            }
        }
    }
    
    resumeGameAfterQuestion() {
        if (window.gameEngine && this.previousGameState) {
            // Only resume if game was playing before
            if (this.previousGameState === 'playing') {
                window.gameEngine.gameState = 'playing';
                window.gameEngine.updateUI();
                
                gameLogger.logGame('Game auto-resumed after question', {
                    restoredState: this.previousGameState
                });
            }
            
            // Clear the stored state
            this.previousGameState = null;
        }
    }
    
    displayQuestion(question, context = 'general') {
        const questionText = document.getElementById('questionText');
        const answerOptions = document.getElementById('answerOptions');
        const modalHeader = document.querySelector('.modal-content h2');
        
        // Update header based on context
        if (modalHeader) {
            const contextHeaders = {
                tower: '🏗️ Turm bauen - Mathe-Aufgabe',
                upgrade: '⬆️ Turm Upgrade - Mathe-Aufgabe',
                bonus: '🎁 Bonus-Aufgabe',
                general: '🧮 Mathe-Aufgabe lösen'
            };
            modalHeader.textContent = contextHeaders[context] || contextHeaders.general;
        }
        
        if (questionText) {
            let questionHTML = question.question;
            
            // Add context-specific prefix
            if (context === 'upgrade' && this.currentUpgradeContext) {
                const ctx = this.currentUpgradeContext;
                questionHTML = `
                    <div style="background: #e3f2fd; padding: 10px; border-radius: 8px; margin-bottom: 15px; color: #1976d2;">
                        <strong>🔧 Upgrade: ${this.getTowerName(ctx.tower.type)}</strong><br>
                        Level ${ctx.difficulty.currentLevel} → Level ${ctx.difficulty.targetLevel}
                    </div>
                    ${questionHTML}
                `;
            } else if (context === 'tower') {
                questionHTML = `
                    <div style="background: #e8f5e8; padding: 10px; border-radius: 8px; margin-bottom: 15px; color: #2e7d32;">
                        <strong>🏗️ Löse die Aufgabe um den Turm zu bauen!</strong>
                    </div>
                    ${questionHTML}
                `;
            }
            
            questionText.innerHTML = questionHTML;
        }
        
        if (answerOptions) {
            answerOptions.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'answer-option';
                button.innerHTML = option;
                button.onclick = () => this.selectAnswer(index);
                answerOptions.appendChild(button);
            });
        }
        
        // Render MathJax
        if (window.MathJax && questionText && answerOptions) {
            // Filter out null elements
            const elementsToRender = [questionText, answerOptions].filter(el => el !== null);
            if (elementsToRender.length > 0) {
                MathJax.typesetPromise(elementsToRender).catch((err) => {
                    console.error('MathJax rendering error:', err);
                    gameLogger.logError('MathJax rendering failed', { error: err.message });
                });
            }
        }
    }
    
    getTowerName(type) {
        const names = {
            basic: 'Allgemein Turm',
            lgs: 'LGS Solver',
            point: 'Punkt Laser',
            vector: 'Vektor Kanone',
            scalar: 'Skalar Verstärker',
            vectorproduct: 'Vektor Kreuz'
        };
        return names[type] || 'Unbekannter Turm';
    }
    
    selectAnswer(index) {
        if (this.submitting) return;
        
        this.selectedAnswer = index;
        
        // Update UI
        document.querySelectorAll('.answer-option').forEach((btn, i) => {
            btn.classList.toggle('selected', i === index);
        });
        
        gameLogger.logQuestion('Answer selected', {
            questionId: this.currentQuestion?.id,
            selectedIndex: index
        });
    }
    
    submitAnswer() {
        if (this.submitting || this.selectedAnswer === null) {
            return;
        }
        
        this.submitting = true;
        const isCorrect = this.selectedAnswer === this.currentQuestion.correct;
        
        gameLogger.logQuestion('Answer submitted', {
            questionId: this.currentQuestion.id,
            selectedAnswer: this.selectedAnswer,
            correctAnswer: this.currentQuestion.correct,
            isCorrect: isCorrect,
            category: this.currentQuestion.category
        });
        
        // Mark question as completed
        this.completedQuestions.add(this.currentQuestion.id);
        
        // Show result
        this.showAnswerResult(isCorrect);
        
        // Handle callbacks
        if (this.pendingTowerCallback) {
            this.pendingTowerCallback(isCorrect);
            this.pendingTowerCallback = null;
        } else if (isCorrect) {
            // Bonus question reward
            if (window.gameEngine) {
                window.gameEngine.score += 100;
                window.gameEngine.updateUI();
            }
        }
        
        // Close modal after delay and resume game
        setTimeout(() => {
            this.hideModal();
            this.resumeGameAfterQuestion();
            this.submitting = false;
        }, 2000);
    }
    
    showAnswerResult(isCorrect) {
        const modal = document.querySelector('.modal-content');
        if (!modal) return;
        
        const resultDiv = document.createElement('div');
        resultDiv.className = 'answer-result';
        resultDiv.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${isCorrect ? 'rgba(76, 175, 80, 0.95)' : 'rgba(244, 67, 54, 0.95)'};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
            border-radius: 15px;
            z-index: 1000;
        `;
        
        const icon = isCorrect ? '✅' : '❌';
        const message = isCorrect ? 'Richtig!' : 'Falsch!';
        const explanation = this.currentQuestion.explanation || '';
        
        resultDiv.innerHTML = `
            <div style="font-size: 48px; margin-bottom: 20px;">${icon}</div>
            <div style="margin-bottom: 20px;">${message}</div>
            ${explanation ? `<div style="font-size: 16px; text-align: center; max-width: 80%; line-height: 1.4;">${explanation}</div>` : ''}
        `;
        
        modal.style.position = 'relative';
        modal.appendChild(resultDiv);
        
        // Render MathJax in explanation
        if (window.MathJax && explanation) {
            MathJax.typesetPromise([resultDiv]).catch((err) => {
                console.error('MathJax rendering error in explanation:', err);
            });
        }
    }
    
    skipQuestion() {
        if (this.submitting) return;
        
        gameLogger.logQuestion('Question skipped', {
            questionId: this.currentQuestion?.id,
            category: this.currentQuestion?.category
        });
        
        // Handle callbacks (skip = failure for tower questions)
        if (this.pendingTowerCallback) {
            this.pendingTowerCallback(false);
            this.pendingTowerCallback = null;
        }
        
        // Resume game and hide modal
        this.hideModal();
        this.resumeGameAfterQuestion();
    }
    
    showModal() {
        const modal = document.getElementById('questionModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }
    
    hideModal() {
        const modal = document.getElementById('questionModal');
        if (modal) {
            modal.classList.add('hidden');
            
            // Clean up result overlay
            const result = modal.querySelector('.answer-result');
            if (result) {
                result.remove();
            }
            
            // Reset modal content positioning
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.style.position = '';
            }
        }
        
        // Clean up state
        this.currentQuestion = null;
        this.selectedAnswer = null;
        this.submitting = false;
        this.questionContext = null;
        this.currentUpgradeContext = null;
        
        // Ensure game is resumed (safety net)
        if (this.previousGameState && !this.submitting) {
            this.resumeGameAfterQuestion();
        }
    }
}

// Initialize question system and make it globally available
window.questionSystem = new QuestionSystem();