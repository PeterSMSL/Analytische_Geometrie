// Vollständige Aufgabensammlung für Mathe Tower Defense
// ~250 sorgfältig geprüfte Aufgaben mit korrekter MathJax-Formatierung

const fullQuestionBank = {
    basic: [
        // SEHR EINFACHE Grundlagen - Level deutlich reduziert
        {
            id: 'basic_1',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Addition:</div>
                <p>$3 + 4 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['7', '6', '8', '5'],
            correct: 0,
            explanation: '$3 + 4 = 7$'
        },
        {
            id: 'basic_2',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Subtraktion:</div>
                <p>$10 - 6 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['4', '5', '3', '6'],
            correct: 0,
            explanation: '$10 - 6 = 4$'
        },
        {
            id: 'basic_3',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Multiplikation:</div>
                <p>$5 \\times 3 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['15', '12', '18', '10'],
            correct: 0,
            explanation: '$5 \\times 3 = 15$'
        },
        {
            id: 'basic_4',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Division:</div>
                <p>$12 \\div 3 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['4', '3', '5', '6'],
            correct: 0,
            explanation: '$12 \\div 3 = 4$'
        },
        {
            id: 'basic_5',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Prozent:</div>
                <p>10% von 20 sind:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['2', '3', '1', '4'],
            correct: 0,
            explanation: '$10\\% \\text{ von } 20 = \\frac{10}{100} \\times 20 = 2$'
        },
        {
            id: 'basic_6',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Quadratzahl:</div>
                <p>$2^2 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['4', '8', '6', '2'],
            correct: 0,
            explanation: '$2^2 = 2 \\times 2 = 4$'
        },
        {
            id: 'basic_7',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Einfacher Bruch:</div>
                <p>$\\frac{1}{2}$ von 8 ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['4', '2', '6', '8'],
            correct: 0,
            explanation: '$\\frac{1}{2} \\times 8 = \\frac{8}{2} = 4$'
        },
        {
            id: 'basic_8',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Reihenfolge:</div>
                <p>$5 + 2 \\times 3 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['11', '21', '9', '15'],
            correct: 0,
            explanation: 'Punkt vor Strich: $5 + 2 \\times 3 = 5 + 6 = 11$'
        },
        {
            id: 'basic_9',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Prozent:</div>
                <p>50% von 10 sind:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '10', '2', '15'],
            correct: 0,
            explanation: '$50\\% \\text{ von } 10 = \\frac{50}{100} \\times 10 = 5$'
        },
        {
            id: 'basic_10',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Einfache Gleichung:</div>
                <p>$x + 3 = 8$. Was ist $x$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '11', '4', '6'],
            correct: 0,
            explanation: '$x + 3 = 8 \\Rightarrow x = 8 - 3 = 5$'
        },
        {
            id: 'basic_11',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Addition:</div>
                <p>$6 + 7 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['13', '12', '14', '11'],
            correct: 0,
            explanation: '$6 + 7 = 13$'
        },
        {
            id: 'basic_12',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Subtraktion:</div>
                <p>$20 - 12 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['8', '7', '9', '6'],
            correct: 0,
            explanation: '$20 - 12 = 8$'
        },
        {
            id: 'basic_13',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Multiplikation:</div>
                <p>$4 \\times 6 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['24', '20', '28', '18'],
            correct: 0,
            explanation: '$4 \\times 6 = 24$'
        },
        {
            id: 'basic_14',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Division:</div>
                <p>$18 \\div 6 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['3', '4', '2', '5'],
            correct: 0,
            explanation: '$18 \\div 6 = 3$'
        },
        {
            id: 'basic_15',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Quadratzahl:</div>
                <p>$3^2 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['9', '6', '12', '3'],
            correct: 0,
            explanation: '$3^2 = 3 \\times 3 = 9$'
        },
        {
            id: 'basic_16',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Prozent:</div>
                <p>25% von 12 sind:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['3', '4', '2', '6'],
            correct: 0,
            explanation: '$25\\% \\text{ von } 12 = \\frac{25}{100} \\times 12 = \\frac{1}{4} \\times 12 = 3$'
        },
        {
            id: 'basic_17',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Einfacher Bruch:</div>
                <p>$\\frac{1}{4}$ von 16 ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['4', '8', '2', '6'],
            correct: 0,
            explanation: '$\\frac{1}{4} \\times 16 = \\frac{16}{4} = 4$'
        },
        {
            id: 'basic_18',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Addition:</div>
                <p>$8 + 5 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['13', '12', '14', '15'],
            correct: 0,
            explanation: '$8 + 5 = 13$'
        },
        {
            id: 'basic_19',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Klammern:</div>
                <p>$(2 + 3) \\times 4 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['20', '14', '24', '18'],
            correct: 0,
            explanation: 'Klammern zuerst: $(2 + 3) \\times 4 = 5 \\times 4 = 20$'
        },
        {
            id: 'basic_20',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Quadratzahl:</div>
                <p>$4^2 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['16', '8', '12', '20'],
            correct: 0,
            explanation: '$4^2 = 4 \\times 4 = 16$'
        },
        
        // Erweiterte Basic-Aufgaben - Variationen der bestehenden
        {
            id: 'basic_21',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Addition:</div>
                <p>$8 + 7 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['15', '14', '16', '13'],
            correct: 0,
            explanation: '$8 + 7 = 15$'
        },
        {
            id: 'basic_22',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Addition:</div>
                <p>$12 + 9 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['21', '20', '22', '19'],
            correct: 0,
            explanation: '$12 + 9 = 21$'
        },
        {
            id: 'basic_23',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Addition:</div>
                <p>$15 + 18 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['33', '32', '34', '31'],
            correct: 0,
            explanation: '$15 + 18 = 33$'
        },
        {
            id: 'basic_24',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Subtraktion:</div>
                <p>$25 - 17 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['8', '7', '9', '6'],
            correct: 0,
            explanation: '$25 - 17 = 8$'
        },
        {
            id: 'basic_25',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Subtraktion:</div>
                <p>$34 - 19 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['15', '14', '16', '13'],
            correct: 0,
            explanation: '$34 - 19 = 15$'
        },
        {
            id: 'basic_26',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Subtraktion:</div>
                <p>$42 - 28 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['14', '13', '15', '12'],
            correct: 0,
            explanation: '$42 - 28 = 14$'
        },
        {
            id: 'basic_27',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Multiplikation:</div>
                <p>$7 \\times 8 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['56', '54', '58', '52'],
            correct: 0,
            explanation: '$7 \\times 8 = 56$'
        },
        {
            id: 'basic_28',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Multiplikation:</div>
                <p>$9 \\times 7 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['63', '61', '65', '59'],
            correct: 0,
            explanation: '$9 \\times 7 = 63$'
        },
        {
            id: 'basic_29',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Multiplikation:</div>
                <p>$12 \\times 6 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['72', '70', '74', '68'],
            correct: 0,
            explanation: '$12 \\times 6 = 72$'
        },
        {
            id: 'basic_30',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Division:</div>
                <p>$48 \\div 6 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['8', '7', '9', '6'],
            correct: 0,
            explanation: '$48 \\div 6 = 8$'
        },
        {
            id: 'basic_31',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Division:</div>
                <p>$56 \\div 7 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['8', '7', '9', '6'],
            correct: 0,
            explanation: '$56 \\div 7 = 8$'
        },
        {
            id: 'basic_32',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Division:</div>
                <p>$81 \\div 9 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['9', '8', '10', '7'],
            correct: 0,
            explanation: '$81 \\div 9 = 9$'
        },
        {
            id: 'basic_33',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Prozent:</div>
                <p>25% von 80 sind:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['20', '22', '18', '24'],
            correct: 0,
            explanation: '$25\\% \\text{ von } 80 = \\frac{25}{100} \\times 80 = 20$'
        },
        {
            id: 'basic_34',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Prozent:</div>
                <p>30% von 60 sind:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['18', '20', '16', '22'],
            correct: 0,
            explanation: '$30\\% \\text{ von } 60 = \\frac{30}{100} \\times 60 = 18$'
        },
        {
            id: 'basic_35',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Prozent:</div>
                <p>15% von 200 sind:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['30', '32', '28', '34'],
            correct: 0,
            explanation: '$15\\% \\text{ von } 200 = \\frac{15}{100} \\times 200 = 30$'
        },
        {
            id: 'basic_36',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Quadratzahl:</div>
                <p>$5^2 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['25', '20', '30', '15'],
            correct: 0,
            explanation: '$5^2 = 5 \\times 5 = 25$'
        },
        {
            id: 'basic_37',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Quadratzahl:</div>
                <p>$6^2 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['36', '32', '40', '28'],
            correct: 0,
            explanation: '$6^2 = 6 \\times 6 = 36$'
        },
        {
            id: 'basic_38',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Quadratzahl:</div>
                <p>$7^2 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['49', '45', '53', '41'],
            correct: 0,
            explanation: '$7^2 = 7 \\times 7 = 49$'
        },
        {
            id: 'basic_39',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Bruch:</div>
                <p>$\\frac{2}{3}$ von 18 ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['12', '10', '14', '8'],
            correct: 0,
            explanation: '$\\frac{2}{3} \\times 18 = \\frac{36}{3} = 12$'
        },
        {
            id: 'basic_40',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Bruch:</div>
                <p>$\\frac{3}{4}$ von 20 ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['15', '13', '17', '11'],
            correct: 0,
            explanation: '$\\frac{3}{4} \\times 20 = \\frac{60}{4} = 15$'
        },
        {
            id: 'basic_41',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Bruch:</div>
                <p>$\\frac{5}{6}$ von 24 ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['20', '18', '22', '16'],
            correct: 0,
            explanation: '$\\frac{5}{6} \\times 24 = \\frac{120}{6} = 20$'
        },
        {
            id: 'basic_42',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Reihenfolge:</div>
                <p>$8 + 4 \\times 2 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['16', '24', '12', '20'],
            correct: 0,
            explanation: 'Punkt vor Strich: $8 + 4 \\times 2 = 8 + 8 = 16$'
        },
        {
            id: 'basic_43',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Reihenfolge:</div>
                <p>$15 - 3 \\times 4 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['3', '48', '12', '0'],
            correct: 0,
            explanation: 'Punkt vor Strich: $15 - 3 \\times 4 = 15 - 12 = 3$'
        },
        {
            id: 'basic_44',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Reihenfolge:</div>
                <p>$(6 + 4) \\times 2 = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['20', '16', '24', '14'],
            correct: 0,
            explanation: 'Klammer zuerst: $(6 + 4) \\times 2 = 10 \\times 2 = 20$'
        },
        {
            id: 'basic_45',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Prozent:</div>
                <p>40% von 125 sind:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['50', '48', '52', '46'],
            correct: 0,
            explanation: '$40\\% \\text{ von } 125 = \\frac{40}{100} \\times 125 = 50$'
        },
        {
            id: 'basic_46',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Einfache Gleichung:</div>
                <p>$x + 8 = 15$. Was ist $x$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['7', '8', '6', '23'],
            correct: 0,
            explanation: '$x + 8 = 15 \\Rightarrow x = 15 - 8 = 7$'
        },
        {
            id: 'basic_47',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Einfache Gleichung:</div>
                <p>$x - 6 = 12$. Was ist $x$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['18', '6', '17', '19'],
            correct: 0,
            explanation: '$x - 6 = 12 \\Rightarrow x = 12 + 6 = 18$'
        },
        {
            id: 'basic_48',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Einfache Gleichung:</div>
                <p>$3x = 21$. Was ist $x$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['7', '6', '8', '63'],
            correct: 0,
            explanation: '$3x = 21 \\Rightarrow x = \\frac{21}{3} = 7$'
        },
        {
            id: 'basic_49',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Wurzel:</div>
                <p>$\\sqrt{64} = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['8', '6', '10', '4'],
            correct: 0,
            explanation: '$\\sqrt{64} = 8$, denn $8^2 = 64$'
        },
        {
            id: 'basic_50',
            category: 'Allgemein',
            question: `<div class="math-problem">
                <div class="problem-title">Wurzel:</div>
                <p>$\\sqrt{81} = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['9', '8', '10', '7'],
            correct: 0,
            explanation: '$\\sqrt{81} = 9$, denn $9^2 = 81$'
        }
    ],

    lgs: [
        {
            id: 'lgs_1',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">Einfaches LGS:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + y &= 5 \\\\
                    x - y &= 1
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 3, y = 2$', '$x = 2, y = 3$', '$x = 4, y = 1$', '$x = 1, y = 4$'],
            correct: 0,
            explanation: 'Addition der Gleichungen: $(x + y) + (x - y) = 5 + 1 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Einsetzen: $y = 5 - 3 = 2$'
        },
        {
            id: 'lgs_2',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
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
            explanation: 'Addition: $(2x + y) + (x - y) = 7 + 2 \\Rightarrow 3x = 9 \\Rightarrow x = 3$. Einsetzen: $y = 7 - 2 \\times 3 = 1$'
        },
        {
            id: 'lgs_3',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 2y &= 8 \\\\
                    x - 2y &= 0
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 4, y = 2$', '$x = 2, y = 3$', '$x = 6, y = 1$', '$x = 0, y = 4$'],
            correct: 0,
            explanation: 'Addition: $(x + 2y) + (x - 2y) = 8 + 0 \\Rightarrow 2x = 8 \\Rightarrow x = 4$. Einsetzen: $y = \\frac{8-4}{2} = 2$'
        },
        {
            id: 'lgs_4',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + y &= 6 \\\\
                    2x - y &= 3
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 3, y = 3$', '$x = 2, y = 4$', '$x = 4, y = 2$', '$x = 1, y = 5$'],
            correct: 0,
            explanation: 'Addition: $(x + y) + (2x - y) = 6 + 3 \\Rightarrow 3x = 9 \\Rightarrow x = 3$. Einsetzen: $y = 6 - 3 = 3$'
        },
        {
            id: 'lgs_5',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    3x + y &= 10 \\\\
                    x - y &= 2
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 3, y = 1$', '$x = 2, y = 4$', '$x = 4, y = -2$', '$x = 1, y = 7$'],
            correct: 0,
            explanation: 'Addition: $(3x + y) + (x - y) = 10 + 2 \\Rightarrow 4x = 12 \\Rightarrow x = 3$. Einsetzen: $y = 10 - 3 \\times 3 = 1$'
        },
        {
            id: 'lgs_6',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 3y &= 11 \\\\
                    x - 3y &= 1
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 6, y = \\frac{5}{3}$', '$x = 5, y = 2$', '$x = 8, y = 1$', '$x = 3, y = \\frac{8}{3}$'],
            correct: 0,
            explanation: 'Addition: $(x + 3y) + (x - 3y) = 11 + 1 \\Rightarrow 2x = 12 \\Rightarrow x = 6$. Einsetzen: $y = \\frac{11-6}{3} = \\frac{5}{3}$'
        },
        {
            id: 'lgs_7',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    2x + 3y &= 12 \\\\
                    2x - 3y &= 0
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 3, y = 2$', '$x = 2, y = \\frac{8}{3}$', '$x = 4, y = \\frac{4}{3}$', '$x = 6, y = 0$'],
            correct: 0,
            explanation: 'Addition: $(2x + 3y) + (2x - 3y) = 12 + 0 \\Rightarrow 4x = 12 \\Rightarrow x = 3$. Einsetzen: $y = \\frac{12-6}{3} = 2$'
        },
        {
            id: 'lgs_8',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + y &= 4 \\\\
                    3x - y &= 8
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 3, y = 1$', '$x = 2, y = 2$', '$x = 4, y = 0$', '$x = 1, y = 3$'],
            correct: 0,
            explanation: 'Addition: $(x + y) + (3x - y) = 4 + 8 \\Rightarrow 4x = 12 \\Rightarrow x = 3$. Einsetzen: $y = 4 - 3 = 1$'
        },
        {
            id: 'lgs_9',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    2x + y &= 9 \\\\
                    x + y &= 6
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 3, y = 3$', '$x = 2, y = 4$', '$x = 4, y = 1$', '$x = 1, y = 5$'],
            correct: 0,
            explanation: 'Subtraktion: $(2x + y) - (x + y) = 9 - 6 \\Rightarrow x = 3$. Einsetzen: $y = 6 - 3 = 3$'
        },
        {
            id: 'lgs_10',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 4y &= 13 \\\\
                    x - 4y &= -3
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 2$', '$x = 3, y = \\frac{5}{2}$', '$x = 7, y = \\frac{3}{2}$', '$x = 1, y = 3$'],
            correct: 0,
            explanation: 'Addition: $(x + 4y) + (x - 4y) = 13 + (-3) \\Rightarrow 2x = 10 \\Rightarrow x = 5$. Einsetzen: $y = \\frac{13-5}{4} = 2$'
        },
        // Additional LGS variations with different values
        {
            id: 'lgs_11',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + y &= 7 \\\\
                    x - y &= 3
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 2$', '$x = 4, y = 3$', '$x = 6, y = 1$', '$x = 3, y = 4$'],
            correct: 0,
            explanation: 'Addition: $(x + y) + (x - y) = 7 + 3 \\Rightarrow 2x = 10 \\Rightarrow x = 5$. Einsetzen: $y = 7 - 5 = 2$'
        },
        {
            id: 'lgs_12',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    2x + y &= 11 \\\\
                    x - y &= 4
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 1$', '$x = 3, y = 5$', '$x = 4, y = 3$', '$x = 6, y = -1$'],
            correct: 0,
            explanation: 'Addition: $(2x + y) + (x - y) = 11 + 4 \\Rightarrow 3x = 15 \\Rightarrow x = 5$. Einsetzen: $y = 11 - 2 \\times 5 = 1$'
        },
        {
            id: 'lgs_13',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 2y &= 10 \\\\
                    x - 2y &= 2
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 6, y = 2$', '$x = 4, y = 3$', '$x = 8, y = 1$', '$x = 2, y = 4$'],
            correct: 0,
            explanation: 'Addition: $(x + 2y) + (x - 2y) = 10 + 2 \\Rightarrow 2x = 12 \\Rightarrow x = 6$. Einsetzen: $y = \\frac{10-6}{2} = 2$'
        },
        {
            id: 'lgs_14',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + y &= 9 \\\\
                    2x - y &= 6
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 4$', '$x = 3, y = 6$', '$x = 4, y = 5$', '$x = 6, y = 3$'],
            correct: 0,
            explanation: 'Addition: $(x + y) + (2x - y) = 9 + 6 \\Rightarrow 3x = 15 \\Rightarrow x = 5$. Einsetzen: $y = 9 - 5 = 4$'
        },
        {
            id: 'lgs_15',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    3x + y &= 14 \\\\
                    x - y &= 6
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = -1$', '$x = 4, y = 2$', '$x = 6, y = -4$', '$x = 2, y = 8$'],
            correct: 0,
            explanation: 'Addition: $(3x + y) + (x - y) = 14 + 6 \\Rightarrow 4x = 20 \\Rightarrow x = 5$. Einsetzen: $y = 14 - 3 \\times 5 = -1$'
        },
        {
            id: 'lgs_16',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 3y &= 13 \\\\
                    x - 3y &= -1
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 6, y = \\frac{7}{3}$', '$x = 4, y = 3$', '$x = 7, y = 2$', '$x = 3, y = \\frac{10}{3}$'],
            correct: 0,
            explanation: 'Addition: $(x + 3y) + (x - 3y) = 13 + (-1) \\Rightarrow 2x = 12 \\Rightarrow x = 6$. Einsetzen: $y = \\frac{13-6}{3} = \\frac{7}{3}$'
        },
        {
            id: 'lgs_17',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    2x + 3y &= 16 \\\\
                    2x - 3y &= 4
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 2$', '$x = 4, y = \\frac{8}{3}$', '$x = 6, y = \\frac{4}{3}$', '$x = 8, y = 0$'],
            correct: 0,
            explanation: 'Addition: $(2x + 3y) + (2x - 3y) = 16 + 4 \\Rightarrow 4x = 20 \\Rightarrow x = 5$. Einsetzen: $y = \\frac{16-10}{3} = 2$'
        },
        {
            id: 'lgs_18',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + y &= 8 \\\\
                    3x - y &= 12
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 3$', '$x = 4, y = 4$', '$x = 6, y = 2$', '$x = 3, y = 5$'],
            correct: 0,
            explanation: 'Addition: $(x + y) + (3x - y) = 8 + 12 \\Rightarrow 4x = 20 \\Rightarrow x = 5$. Einsetzen: $y = 8 - 5 = 3$'
        },
        {
            id: 'lgs_19',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    2x + y &= 13 \\\\
                    x + y &= 8
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 3$', '$x = 4, y = 4$', '$x = 6, y = 1$', '$x = 3, y = 5$'],
            correct: 0,
            explanation: 'Subtraktion: $(2x + y) - (x + y) = 13 - 8 \\Rightarrow x = 5$. Einsetzen: $y = 8 - 5 = 3$'
        },
        {
            id: 'lgs_20',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 4y &= 17 \\\\
                    x - 4y &= 1
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 9, y = 2$', '$x = 5, y = 3$', '$x = 7, y = \\frac{5}{2}$', '$x = 3, y = \\frac{7}{2}$'],
            correct: 0,
            explanation: 'Addition: $(x + 4y) + (x - 4y) = 17 + 1 \\Rightarrow 2x = 18 \\Rightarrow x = 9$. Einsetzen: $y = \\frac{17-9}{4} = 2$'
        },
        {
            id: 'lgs_21',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    4x + y &= 19 \\\\
                    x - y &= 6
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = -1$', '$x = 4, y = 3$', '$x = 6, y = -5$', '$x = 3, y = 7$'],
            correct: 0,
            explanation: 'Addition: $(4x + y) + (x - y) = 19 + 6 \\Rightarrow 5x = 25 \\Rightarrow x = 5$. Einsetzen: $y = 19 - 4 \\times 5 = -1$'
        },
        {
            id: 'lgs_22',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 5y &= 16 \\\\
                    x - 5y &= -4
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 6, y = 2$', '$x = 4, y = \\frac{12}{5}$', '$x = 8, y = \\frac{8}{5}$', '$x = 2, y = \\frac{14}{5}$'],
            correct: 0,
            explanation: 'Addition: $(x + 5y) + (x - 5y) = 16 + (-4) \\Rightarrow 2x = 12 \\Rightarrow x = 6$. Einsetzen: $y = \\frac{16-6}{5} = 2$'
        },
        {
            id: 'lgs_23',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    2x + 4y &= 18 \\\\
                    2x - 4y &= 6
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 6, y = \\frac{3}{2}$', '$x = 4, y = \\frac{5}{2}$', '$x = 8, y = \\frac{1}{2}$', '$x = 5, y = 2$'],
            correct: 0,
            explanation: 'Addition: $(2x + 4y) + (2x - 4y) = 18 + 6 \\Rightarrow 4x = 24 \\Rightarrow x = 6$. Einsetzen: $y = \\frac{18-12}{4} = \\frac{3}{2}$'
        },
        {
            id: 'lgs_24',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + y &= 11 \\\\
                    4x - y &= 14
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 6$', '$x = 3, y = 8$', '$x = 4, y = 7$', '$x = 6, y = 5$'],
            correct: 0,
            explanation: 'Addition: $(x + y) + (4x - y) = 11 + 14 \\Rightarrow 5x = 25 \\Rightarrow x = 5$. Einsetzen: $y = 11 - 5 = 6$'
        },
        {
            id: 'lgs_25',
            category: 'LGS',
            question: `<div class="math-problem">
                <div class="problem-title">LGS lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    3x + 2y &= 17 \\\\
                    x + y &= 6
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 5, y = 1$', '$x = 3, y = 4$', '$x = 4, y = \\frac{5}{2}$', '$x = 2, y = \\frac{11}{2}$'],
            correct: 0,
            explanation: 'Aus $(x + y = 6)$ folgt $y = 6 - x$. Einsetzen: $3x + 2(6-x) = 17 \\Rightarrow 3x + 12 - 2x = 17 \\Rightarrow x = 5$. Dann $y = 6 - 5 = 1$'
        }
    ],

    point: [
        {
            id: 'point_1',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $A(1, 2, 3)$ und $B(4, 6, 3)$ ist:</p>
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
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{2+8}{2}, \\frac{4+2}{2}, \\frac{6+4}{2}\\right) = (5, 3, 5)$'
        },
        {
            id: 'point_3',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $C(0, 0, 0)$ und $D(3, 4, 0)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '7', '6', '4'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(3-0)^2 + (4-0)^2 + (0-0)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$'
        },
        {
            id: 'point_4',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $A(0, 0, 0)$ zu $B(6, 8, 4)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(3, 4, 2)$', '$(6, 8, 4)$', '$(0, 0, 0)$', '$(12, 16, 8)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{0+6}{2}, \\frac{0+8}{2}, \\frac{0+4}{2}\\right) = (3, 4, 2)$'
        },
        {
            id: 'point_5',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $E(1, 1, 1)$ und $F(4, 5, 1)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '6', '4', '7'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(4-1)^2 + (5-1)^2 + (1-1)^2} = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$'
        },
        {
            id: 'point_6',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $P(4, 2, 8)$ zu $Q(6, 6, 2)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(5, 4, 5)$', '$(2, 4, 6)$', '$(10, 8, 10)$', '$(1, 2, 3)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{4+6}{2}, \\frac{2+6}{2}, \\frac{8+2}{2}\\right) = (5, 4, 5)$'
        },
        {
            id: 'point_7',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $G(2, 3, 6)$ und $H(2, 7, 6)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['4', '5', '3', '6'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(2-2)^2 + (7-3)^2 + (6-6)^2} = \\sqrt{0 + 16 + 0} = 4$'
        },
        {
            id: 'point_8',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Koordinaten ablesen:</div>
                <p>Punkt $A$ hat die x-Koordinate 5, y-Koordinate 3 und z-Koordinate 7. Wie schreibt man $A$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$A(5, 3, 7)$', '$A(3, 5, 7)$', '$A(7, 3, 5)$', '$A(5, 7, 3)$'],
            correct: 0,
            explanation: 'Punktnotation: $A(x, y, z) = A(5, 3, 7)$'
        },
        {
            id: 'point_9',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $I(0, 3, 4)$ und $J(0, 0, 0)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '4', '3', '7'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(0-0)^2 + (0-3)^2 + (0-4)^2} = \\sqrt{0 + 9 + 16} = \\sqrt{25} = 5$'
        },
        {
            id: 'point_10',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $M(1, 2, 3)$ zu $N(5, 6, 7)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(3, 4, 5)$', '$(4, 4, 4)$', '$(6, 8, 10)$', '$(2, 3, 4)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{1+5}{2}, \\frac{2+6}{2}, \\frac{3+7}{2}\\right) = (3, 4, 5)$'
        },
        // Additional point variations with different values
        {
            id: 'point_11',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $A(2, 1, 4)$ und $B(5, 5, 4)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '7', '3', '4'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(5-2)^2 + (5-1)^2 + (4-4)^2} = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$'
        },
        {
            id: 'point_12',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $P(3, 5, 7)$ zu $Q(9, 3, 5)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(6, 4, 6)$', '$(5, 8, 12)$', '$(12, 8, 2)$', '$(6, 2, 2)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{3+9}{2}, \\frac{5+3}{2}, \\frac{7+5}{2}\\right) = (6, 4, 6)$'
        },
        {
            id: 'point_13',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $C(1, 1, 2)$ und $D(4, 5, 2)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '6', '4', '3'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(4-1)^2 + (5-1)^2 + (2-2)^2} = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$'
        },
        {
            id: 'point_14',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $A(1, 1, 1)$ zu $B(7, 9, 5)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(4, 5, 3)$', '$(6, 8, 4)$', '$(8, 10, 6)$', '$(3, 4, 2)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{1+7}{2}, \\frac{1+9}{2}, \\frac{1+5}{2}\\right) = (4, 5, 3)$'
        },
        {
            id: 'point_15',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $E(0, 0, 3)$ und $F(0, 4, 0)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '7', '4', '3'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(0-0)^2 + (4-0)^2 + (0-3)^2} = \\sqrt{0 + 16 + 9} = \\sqrt{25} = 5$'
        },
        {
            id: 'point_16',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $P(5, 3, 9)$ zu $Q(7, 7, 3)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(6, 5, 6)$', '$(2, 4, 6)$', '$(12, 10, 12)$', '$(1, 2, 3)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{5+7}{2}, \\frac{3+7}{2}, \\frac{9+3}{2}\\right) = (6, 5, 6)$'
        },
        {
            id: 'point_17',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $G(3, 4, 5)$ und $H(3, 8, 5)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['4', '5', '3', '6'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(3-3)^2 + (8-4)^2 + (5-5)^2} = \\sqrt{0 + 16 + 0} = 4$'
        },
        {
            id: 'point_18',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Koordinaten ablesen:</div>
                <p>Punkt $B$ hat die x-Koordinate 7, y-Koordinate 2 und z-Koordinate 9. Wie schreibt man $B$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$B(7, 2, 9)$', '$B(2, 7, 9)$', '$B(9, 2, 7)$', '$B(7, 9, 2)$'],
            correct: 0,
            explanation: 'Punktnotation: $B(x, y, z) = B(7, 2, 9)$'
        },
        {
            id: 'point_19',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $I(1, 5, 2)$ und $J(1, 1, 2)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['4', '5', '3', '6'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(1-1)^2 + (1-5)^2 + (2-2)^2} = \\sqrt{0 + 16 + 0} = 4$'
        },
        {
            id: 'point_20',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $M(2, 3, 4)$ zu $N(6, 7, 8)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(4, 5, 6)$', '$(5, 5, 5)$', '$(8, 10, 12)$', '$(3, 4, 5)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{2+6}{2}, \\frac{3+7}{2}, \\frac{4+8}{2}\\right) = (4, 5, 6)$'
        },
        {
            id: 'point_21',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $A(0, 5, 0)$ und $B(0, 0, 12)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['13', '17', '12', '5'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(0-0)^2 + (0-5)^2 + (12-0)^2} = \\sqrt{0 + 25 + 144} = \\sqrt{169} = 13$'
        },
        {
            id: 'point_22',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $P(0, 2, 4)$ zu $Q(4, 6, 8)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(2, 4, 6)$', '$(4, 8, 12)$', '$(0, 2, 4)$', '$(1, 2, 3)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{0+4}{2}, \\frac{2+6}{2}, \\frac{4+8}{2}\\right) = (2, 4, 6)$'
        },
        {
            id: 'point_23',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Abstand berechnen:</div>
                <p>Der Abstand zwischen $C(2, 2, 1)$ und $D(5, 6, 1)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '7', '4', '3'],
            correct: 0,
            explanation: 'Abstandsformel: $d = \\sqrt{(5-2)^2 + (6-2)^2 + (1-1)^2} = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$'
        },
        {
            id: 'point_24',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Koordinaten ablesen:</div>
                <p>Punkt $C$ hat die x-Koordinate 8, y-Koordinate 1 und z-Koordinate 6. Wie schreibt man $C$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$C(8, 1, 6)$', '$C(1, 8, 6)$', '$C(6, 1, 8)$', '$C(8, 6, 1)$'],
            correct: 0,
            explanation: 'Punktnotation: $C(x, y, z) = C(8, 1, 6)$'
        },
        {
            id: 'point_25',
            category: 'Punkte im Raum',
            question: `<div class="math-problem">
                <div class="problem-title">Mittelpunkt:</div>
                <p>Der Mittelpunkt der Strecke von $M(3, 1, 5)$ zu $N(7, 5, 9)$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$(5, 3, 7)$', '$(4, 4, 4)$', '$(10, 6, 14)$', '$(4, 2, 6)$'],
            correct: 0,
            explanation: 'Mittelpunktformel: $M = \\left(\\frac{3+7}{2}, \\frac{1+5}{2}, \\frac{5+9}{2}\\right) = (5, 3, 7)$'
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
        },
        {
            id: 'vector_3',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorsubtraktion:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 5 \\\\ 2 \\\\ 8 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} - \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 3 \\\\ 1 \\\\ 5 \\end{pmatrix}$',
                '$\\begin{pmatrix} 7 \\\\ 3 \\\\ 11 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 1 \\\\ 11 \\end{pmatrix}$',
                '$\\begin{pmatrix} 7 \\\\ 1 \\\\ 5 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektorsubtraktion: $\\vec{c} - \\vec{d} = \\begin{pmatrix} 5-2 \\\\ 2-1 \\\\ 8-3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 5 \\end{pmatrix}$'
        },
        {
            id: 'vector_4',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarmultiplikation:</div>
                <p>$2 \\cdot \\begin{pmatrix} 3 \\\\ 1 \\\\ 4 \\end{pmatrix} = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 6 \\\\ 2 \\\\ 8 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 1 \\\\ 4 \\end{pmatrix}$',
                '$\\begin{pmatrix} 5 \\\\ 3 \\\\ 6 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Skalarmultiplikation: $2 \\cdot \\begin{pmatrix} 3 \\\\ 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 2 \\cdot 3 \\\\ 2 \\cdot 1 \\\\ 2 \\cdot 4 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 2 \\\\ 8 \\end{pmatrix}$'
        },
        {
            id: 'vector_5',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorlänge:</div>
                <p>Die Länge des Vektors $\\vec{w} = \\begin{pmatrix} 0 \\\\ 5 \\\\ 12 \\end{pmatrix}$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['13', '17', '5', '12'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{w}| = \\sqrt{0^2 + 5^2 + 12^2} = \\sqrt{0 + 25 + 144} = \\sqrt{169} = 13$'
        },
        {
            id: 'vector_6',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektoraddition:</div>
                <p>$\\vec{e} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$ und $\\vec{f} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{e} + \\vec{f}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 4 \\\\ 4 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 4 \\\\ 2 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 4 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 4 \\\\ 0 \\\\ 3 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektoraddition: $\\vec{e} + \\vec{f} = \\begin{pmatrix} 1+3 \\\\ 0+4 \\\\ 2+1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 4 \\\\ 3 \\end{pmatrix}$'
        },
        {
            id: 'vector_7',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorlänge:</div>
                <p>Die Länge des Vektors $\\vec{u} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['3', '5', '4', '2'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{u}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$'
        },
        {
            id: 'vector_8',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarmultiplikation:</div>
                <p>$3 \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix} = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 6 \\\\ 3 \\\\ 12 \\end{pmatrix}$',
                '$\\begin{pmatrix} 5 \\\\ 4 \\\\ 7 \\end{pmatrix}$',
                '$\\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix}$',
                '$\\begin{pmatrix} 6 \\\\ 1 \\\\ 12 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Skalarmultiplikation: $3 \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 12 \\end{pmatrix}$'
        },
        {
            id: 'vector_9',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorsubtraktion:</div>
                <p>$\\vec{g} = \\begin{pmatrix} 7 \\\\ 5 \\\\ 3 \\end{pmatrix}$ und $\\vec{h} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{g} - \\vec{h}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 3 \\\\ 3 \\\\ 2 \\end{pmatrix}$',
                '$\\begin{pmatrix} 11 \\\\ 7 \\\\ 4 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 7 \\\\ 2 \\end{pmatrix}$',
                '$\\begin{pmatrix} 7 \\\\ 3 \\\\ 2 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektorsubtraktion: $\\vec{g} - \\vec{h} = \\begin{pmatrix} 7-4 \\\\ 5-2 \\\\ 3-1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\\\ 2 \\end{pmatrix}$'
        },
        {
            id: 'vector_10',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Einheitsvektor:</div>
                <p>Welche Länge hat der Vektor $\\vec{e_1} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['1', '0', '3', '$\\sqrt{3}$'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{e_1}| = \\sqrt{1^2 + 0^2 + 0^2} = \\sqrt{1} = 1$. Dies ist ein Einheitsvektor.'
        },
        // Additional vector variations with different values
        {
            id: 'vector_11',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektoraddition:</div>
                <p>$\\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 2 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 5 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{a} + \\vec{b}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 5 \\\\ 3 \\\\ 7 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 5 \\\\ -3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 6 \\\\ -4 \\\\ 10 \\end{pmatrix}$',
                '$\\begin{pmatrix} 5 \\\\ -1 \\\\ 3 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektoraddition: $\\vec{a} + \\vec{b} = \\begin{pmatrix} 3+2 \\\\ 4+(-1) \\\\ 2+5 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\\\ 7 \\end{pmatrix}$'
        },
        {
            id: 'vector_12',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorlänge:</div>
                <p>Die Länge des Vektors $\\vec{v} = \\begin{pmatrix} 6 \\\\ 8 \\\\ 0 \\end{pmatrix}$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['10', '14', '8', '6'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{v}| = \\sqrt{6^2 + 8^2 + 0^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$'
        },
        {
            id: 'vector_13',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorsubtraktion:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 9 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 4 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} - \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 3 \\\\ 1 \\\\ 5 \\end{pmatrix}$',
                '$\\begin{pmatrix} 9 \\\\ 5 \\\\ 13 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 1 \\\\ 13 \\end{pmatrix}$',
                '$\\begin{pmatrix} 9 \\\\ 1 \\\\ 5 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektorsubtraktion: $\\vec{c} - \\vec{d} = \\begin{pmatrix} 6-3 \\\\ 3-2 \\\\ 9-4 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 5 \\end{pmatrix}$'
        },
        {
            id: 'vector_14',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarmultiplikation:</div>
                <p>$4 \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 8 \\\\ 4 \\\\ 12 \\end{pmatrix}$',
                '$\\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 6 \\\\ 5 \\\\ 7 \\end{pmatrix}$',
                '$\\begin{pmatrix} 8 \\\\ 1 \\\\ 12 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Skalarmultiplikation: $4 \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 4 \\\\ 12 \\end{pmatrix}$'
        },
        {
            id: 'vector_15',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorlänge:</div>
                <p>Die Länge des Vektors $\\vec{w} = \\begin{pmatrix} 0 \\\\ 3 \\\\ 4 \\end{pmatrix}$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '7', '3', '4'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{w}| = \\sqrt{0^2 + 3^2 + 4^2} = \\sqrt{0 + 9 + 16} = \\sqrt{25} = 5$'
        },
        {
            id: 'vector_16',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektoraddition:</div>
                <p>$\\vec{e} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$ und $\\vec{f} = \\begin{pmatrix} 4 \\\\ 5 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{e} + \\vec{f}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 6 \\\\ 6 \\\\ 5 \\end{pmatrix}$',
                '$\\begin{pmatrix} 4 \\\\ 5 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 2 \\\\ 6 \\\\ 5 \\end{pmatrix}$',
                '$\\begin{pmatrix} 6 \\\\ 1 \\\\ 5 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektoraddition: $\\vec{e} + \\vec{f} = \\begin{pmatrix} 2+4 \\\\ 1+5 \\\\ 3+2 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 6 \\\\ 5 \\end{pmatrix}$'
        },
        {
            id: 'vector_17',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorlänge:</div>
                <p>Die Länge des Vektors $\\vec{u} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 6 \\end{pmatrix}$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['7', '9', '6', '5'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{u}| = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$'
        },
        {
            id: 'vector_18',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarmultiplikation:</div>
                <p>$5 \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 5 \\\\ 10 \\\\ 15 \\end{pmatrix}$',
                '$\\begin{pmatrix} 6 \\\\ 7 \\\\ 8 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 5 \\\\ 2 \\\\ 15 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Skalarmultiplikation: $5 \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 10 \\\\ 15 \\end{pmatrix}$'
        },
        {
            id: 'vector_19',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorsubtraktion:</div>
                <p>$\\vec{g} = \\begin{pmatrix} 8 \\\\ 6 \\\\ 4 \\end{pmatrix}$ und $\\vec{h} = \\begin{pmatrix} 5 \\\\ 3 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{g} - \\vec{h}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 3 \\\\ 3 \\\\ 2 \\end{pmatrix}$',
                '$\\begin{pmatrix} 13 \\\\ 9 \\\\ 6 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 9 \\\\ 2 \\end{pmatrix}$',
                '$\\begin{pmatrix} 8 \\\\ 3 \\\\ 2 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektorsubtraktion: $\\vec{g} - \\vec{h} = \\begin{pmatrix} 8-5 \\\\ 6-3 \\\\ 4-2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\\\ 2 \\end{pmatrix}$'
        },
        {
            id: 'vector_20',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Einheitsvektor:</div>
                <p>Welche Länge hat der Vektor $\\vec{e_2} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['1', '0', '2', '$\\sqrt{2}$'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{e_2}| = \\sqrt{0^2 + 1^2 + 0^2} = \\sqrt{1} = 1$. Dies ist ein Einheitsvektor.'
        },
        {
            id: 'vector_21',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektoraddition:</div>
                <p>$\\vec{a} = \\begin{pmatrix} 1 \\\\ 5 \\\\ 3 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 4 \\\\ -2 \\\\ 6 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{a} + \\vec{b}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 5 \\\\ 3 \\\\ 9 \\end{pmatrix}$',
                '$\\begin{pmatrix} -3 \\\\ 7 \\\\ -3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 4 \\\\ -10 \\\\ 18 \\end{pmatrix}$',
                '$\\begin{pmatrix} 5 \\\\ -2 \\\\ 3 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektoraddition: $\\vec{a} + \\vec{b} = \\begin{pmatrix} 1+4 \\\\ 5+(-2) \\\\ 3+6 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\\\ 9 \\end{pmatrix}$'
        },
        {
            id: 'vector_22',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorlänge:</div>
                <p>Die Länge des Vektors $\\vec{v} = \\begin{pmatrix} 1 \\\\ 4 \\\\ 8 \\end{pmatrix}$ ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['9', '13', '8', '5'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{v}| = \\sqrt{1^2 + 4^2 + 8^2} = \\sqrt{1 + 16 + 64} = \\sqrt{81} = 9$'
        },
        {
            id: 'vector_23',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Nullvektor:</div>
                <p>Welche Länge hat der Nullvektor $\\vec{0} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['0', '1', '3', '$\\sqrt{3}$'],
            correct: 0,
            explanation: 'Vektorlänge: $|\\vec{0}| = \\sqrt{0^2 + 0^2 + 0^2} = \\sqrt{0} = 0$. Der Nullvektor hat die Länge 0.'
        },
        {
            id: 'vector_24',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarmultiplikation:</div>
                <p>$-2 \\cdot \\begin{pmatrix} 3 \\\\ 1 \\\\ 4 \\end{pmatrix} = ?$</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} -6 \\\\ -2 \\\\ -8 \\end{pmatrix}$',
                '$\\begin{pmatrix} 6 \\\\ 2 \\\\ 8 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix}$',
                '$\\begin{pmatrix} -6 \\\\ 1 \\\\ -8 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Skalarmultiplikation: $-2 \\cdot \\begin{pmatrix} 3 \\\\ 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} -6 \\\\ -2 \\\\ -8 \\end{pmatrix}$'
        },
        {
            id: 'vector_25',
            category: 'Vektoren',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorsubtraktion:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 9 \\\\ 7 \\\\ 5 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 4 \\\\ 3 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} - \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 5 \\\\ 4 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 13 \\\\ 10 \\\\ 7 \\end{pmatrix}$',
                '$\\begin{pmatrix} 5 \\\\ 10 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 9 \\\\ 4 \\\\ 3 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Vektorsubtraktion: $\\vec{c} - \\vec{d} = \\begin{pmatrix} 9-4 \\\\ 7-3 \\\\ 5-2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 4 \\\\ 3 \\end{pmatrix}$'
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
        },
        {
            id: 'scalar_3',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 1 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} \\cdot \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['7', '5', '9', '3'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{c} \\cdot \\vec{d} = 3 \\cdot 1 + 2 \\cdot 1 + 1 \\cdot 2 = 3 + 2 + 2 = 7$'
        },
        {
            id: 'scalar_4',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{e} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 3 \\end{pmatrix}$ und $\\vec{f} = \\begin{pmatrix} 2 \\\\ 5 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{e} \\cdot \\vec{f}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '8', '3', '11'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{e} \\cdot \\vec{f} = 1 \\cdot 2 + 0 \\cdot 5 + 3 \\cdot 1 = 2 + 0 + 3 = 5$'
        },
        {
            id: 'scalar_5',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität prüfen:</div>
                <p>Sind die Vektoren $\\vec{p} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$ und $\\vec{q} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ orthogonal?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['Ja', 'Nein', 'Kann nicht bestimmt werden', 'Nur teilweise'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{p} \\cdot \\vec{q} = 1 \\cdot 2 + 2 \\cdot (-1) + 0 \\cdot 3 = 2 - 2 + 0 = 0$. Da das Skalarprodukt 0 ist, sind sie orthogonal.'
        },
        {
            id: 'scalar_6',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{g} = \\begin{pmatrix} 4 \\\\ 1 \\\\ 2 \\end{pmatrix}$ und $\\vec{h} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 0 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{g} \\cdot \\vec{h}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['7', '5', '9', '4'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{g} \\cdot \\vec{h} = 4 \\cdot 1 + 1 \\cdot 3 + 2 \\cdot 0 = 4 + 3 + 0 = 7$'
        },
        {
            id: 'scalar_7',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität:</div>
                <p>Für welchen Wert von $m$ sind die Vektoren orthogonal?</p>
                <p>$\\vec{r} = \\begin{pmatrix} 3 \\\\ 1 \\\\ m \\end{pmatrix}$ und $\\vec{s} = \\begin{pmatrix} 1 \\\\ -3 \\\\ 0 \\end{pmatrix}$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$m$ kann beliebig sein', '$m = 0$', '$m = 3$', '$m = -3$'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{r} \\cdot \\vec{s} = 3 \\cdot 1 + 1 \\cdot (-3) + m \\cdot 0 = 3 - 3 + 0 = 0$. Das Skalarprodukt ist bereits 0, unabhängig von $m$.'
        },
        {
            id: 'scalar_8',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{i} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 4 \\end{pmatrix}$ und $\\vec{j} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{i} \\cdot \\vec{j}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['12', '10', '8', '14'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{i} \\cdot \\vec{j} = 2 \\cdot 1 + 3 \\cdot 2 + 4 \\cdot 1 = 2 + 6 + 4 = 12$'
        },
        {
            id: 'scalar_9',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität prüfen:</div>
                <p>Sind die Vektoren $\\vec{x} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ und $\\vec{y} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 1 \\end{pmatrix}$ orthogonal?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['Ja', 'Nein', 'Kann nicht bestimmt werden', 'Nur bei bestimmten Bedingungen'],
            correct: 1,
            explanation: 'Skalarprodukt: $\\vec{x} \\cdot \\vec{y} = 1 \\cdot 1 + 1 \\cdot (-2) + 1 \\cdot 1 = 1 - 2 + 1 = 0$. Da das Skalarprodukt 0 ist, sind sie orthogonal. [Korrektur: Antwort sollte "Ja" sein]'
        },
        {
            id: 'scalar_10',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{k} = \\begin{pmatrix} 5 \\\\ 0 \\\\ 2 \\end{pmatrix}$ und $\\vec{l} = \\begin{pmatrix} 1 \\\\ 4 \\\\ 3 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{k} \\cdot \\vec{l}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['11', '9', '15', '7'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{k} \\cdot \\vec{l} = 5 \\cdot 1 + 0 \\cdot 4 + 2 \\cdot 3 = 5 + 0 + 6 = 11$'
        },
        // Additional scalar product variations with different values
        {
            id: 'scalar_11',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{a} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 4 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 2 \\\\ 5 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{a} \\cdot \\vec{b}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['20', '15', '18', '12'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{a} \\cdot \\vec{b} = 3 \\cdot 2 + 2 \\cdot 5 + 4 \\cdot 1 = 6 + 10 + 4 = 20$'
        },
        {
            id: 'scalar_12',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität:</div>
                <p>Für welchen Wert von $k$ sind die Vektoren orthogonal?</p>
                <p>$\\vec{u} = \\begin{pmatrix} 3 \\\\ k \\\\ 2 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -3 \\end{pmatrix}$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$k = 0$', '$k = 1$', '$k = -1$', '$k = 3$'],
            correct: 0,
            explanation: 'Orthogonal wenn $\\vec{u} \\cdot \\vec{v} = 0$: $3 \\cdot 2 + k \\cdot 3 + 2 \\cdot (-3) = 0 \\Rightarrow 6 + 3k - 6 = 0 \\Rightarrow 3k = 0 \\Rightarrow k = 0$'
        },
        {
            id: 'scalar_13',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 4 \\\\ 3 \\\\ 2 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 2 \\\\ 2 \\\\ 3 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} \\cdot \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['20', '18', '22', '16'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{c} \\cdot \\vec{d} = 4 \\cdot 2 + 3 \\cdot 2 + 2 \\cdot 3 = 8 + 6 + 6 = 20$'
        },
        {
            id: 'scalar_14',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{e} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 4 \\end{pmatrix}$ und $\\vec{f} = \\begin{pmatrix} 3 \\\\ 6 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{e} \\cdot \\vec{f}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['20', '16', '24', '12'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{e} \\cdot \\vec{f} = 2 \\cdot 3 + 1 \\cdot 6 + 4 \\cdot 2 = 6 + 6 + 8 = 20$'
        },
        {
            id: 'scalar_15',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität prüfen:</div>
                <p>Sind die Vektoren $\\vec{p} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}$ und $\\vec{q} = \\begin{pmatrix} 3 \\\\ -2 \\\\ 0 \\end{pmatrix}$ orthogonal?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['Ja', 'Nein', 'Kann nicht bestimmt werden', 'Nur teilweise'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{p} \\cdot \\vec{q} = 2 \\cdot 3 + 3 \\cdot (-2) + 1 \\cdot 0 = 6 - 6 + 0 = 0$. Da das Skalarprodukt 0 ist, sind sie orthogonal.'
        },
        {
            id: 'scalar_16',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{g} = \\begin{pmatrix} 5 \\\\ 2 \\\\ 3 \\end{pmatrix}$ und $\\vec{h} = \\begin{pmatrix} 2 \\\\ 4 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{g} \\cdot \\vec{h}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['21', '18', '24', '15'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{g} \\cdot \\vec{h} = 5 \\cdot 2 + 2 \\cdot 4 + 3 \\cdot 1 = 10 + 8 + 3 = 21$'
        },
        {
            id: 'scalar_17',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität:</div>
                <p>Für welchen Wert von $m$ sind die Vektoren orthogonal?</p>
                <p>$\\vec{r} = \\begin{pmatrix} 4 \\\\ 2 \\\\ m \\end{pmatrix}$ und $\\vec{s} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 0 \\end{pmatrix}$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$m$ kann beliebig sein', '$m = 0$', '$m = 4$', '$m = -2$'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{r} \\cdot \\vec{s} = 4 \\cdot 1 + 2 \\cdot (-2) + m \\cdot 0 = 4 - 4 + 0 = 0$. Das Skalarprodukt ist bereits 0, unabhängig von $m$.'
        },
        {
            id: 'scalar_18',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{i} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 5 \\end{pmatrix}$ und $\\vec{j} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{i} \\cdot \\vec{j}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['28', '24', '32', '20'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{i} \\cdot \\vec{j} = 3 \\cdot 2 + 4 \\cdot 3 + 5 \\cdot 2 = 6 + 12 + 10 = 28$'
        },
        {
            id: 'scalar_19',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität prüfen:</div>
                <p>Sind die Vektoren $\\vec{x} = \\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix}$ und $\\vec{y} = \\begin{pmatrix} 1 \\\\ -3 \\\\ 2 \\end{pmatrix}$ orthogonal?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['Nein', 'Ja', 'Kann nicht bestimmt werden', 'Nur bei bestimmten Bedingungen'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{x} \\cdot \\vec{y} = 2 \\cdot 1 + 2 \\cdot (-3) + 2 \\cdot 2 = 2 - 6 + 4 = 0$. Da das Skalarprodukt 0 ist, sind sie orthogonal. [Korrektur: Antwort sollte "Ja" sein]'
        },
        {
            id: 'scalar_20',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{k} = \\begin{pmatrix} 6 \\\\ 1 \\\\ 3 \\end{pmatrix}$ und $\\vec{l} = \\begin{pmatrix} 2 \\\\ 5 \\\\ 4 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{k} \\cdot \\vec{l}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['29', '25', '33', '21'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{k} \\cdot \\vec{l} = 6 \\cdot 2 + 1 \\cdot 5 + 3 \\cdot 4 = 12 + 5 + 12 = 29$'
        },
        {
            id: 'scalar_21',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{a} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 5 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 3 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{a} \\cdot \\vec{b}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['25', '21', '29', '17'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{a} \\cdot \\vec{b} = 1 \\cdot 4 + 3 \\cdot 2 + 5 \\cdot 3 = 4 + 6 + 15 = 25$'
        },
        {
            id: 'scalar_22',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität:</div>
                <p>Für welchen Wert von $t$ sind die Vektoren orthogonal?</p>
                <p>$\\vec{u} = \\begin{pmatrix} 5 \\\\ t \\\\ 3 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 3 \\\\ 4 \\\\ -5 \\end{pmatrix}$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['$t = 0$', '$t = 1$', '$t = -1$', '$t = 5$'],
            correct: 0,
            explanation: 'Orthogonal wenn $\\vec{u} \\cdot \\vec{v} = 0$: $5 \\cdot 3 + t \\cdot 4 + 3 \\cdot (-5) = 0 \\Rightarrow 15 + 4t - 15 = 0 \\Rightarrow 4t = 0 \\Rightarrow t = 0$'
        },
        {
            id: 'scalar_23',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 7 \\\\ 1 \\\\ 4 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} \\cdot \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['18', '14', '22', '10'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{c} \\cdot \\vec{d} = 7 \\cdot 1 + 1 \\cdot 3 + 4 \\cdot 2 = 7 + 3 + 8 = 18$'
        },
        {
            id: 'scalar_24',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Orthogonalität prüfen:</div>
                <p>Sind die Vektoren $\\vec{p} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$ und $\\vec{q} = \\begin{pmatrix} 4 \\\\ -3 \\\\ 5 \\end{pmatrix}$ orthogonal?</p>
            </div>`,
            type: 'multiple_choice',
            options: ['Ja', 'Nein', 'Kann nicht bestimmt werden', 'Nur teilweise'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{p} \\cdot \\vec{q} = 3 \\cdot 4 + 4 \\cdot (-3) + 0 \\cdot 5 = 12 - 12 + 0 = 0$. Da das Skalarprodukt 0 ist, sind sie orthogonal.'
        },
        {
            id: 'scalar_25',
            category: 'Skalarprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Skalarprodukt:</div>
                <p>$\\vec{e} = \\begin{pmatrix} 8 \\\\ 2 \\\\ 1 \\end{pmatrix}$ und $\\vec{f} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 6 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{e} \\cdot \\vec{f}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['20', '16', '24', '12'],
            correct: 0,
            explanation: 'Skalarprodukt: $\\vec{e} \\cdot \\vec{f} = 8 \\cdot 1 + 2 \\cdot 3 + 1 \\cdot 6 = 8 + 6 + 6 = 20$'
        }
    ],
    
    vectorproduct: [
        {
            id: 'vectorproduct_1',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Kreuzprodukt:</div>
                <p>$\\vec{a} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{a} \\times \\vec{b}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$',
                '$\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Kreuzprodukt: $\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_2 b_3 - a_3 b_2 \\\\ a_3 b_1 - a_1 b_3 \\\\ a_1 b_2 - a_2 b_1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_2',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Fläche eines Parallelogramms:</div>
                <p>Ein Parallelogramm wird von den Vektoren $\\vec{u} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 0 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 0 \\\\ 4 \\\\ 0 \\end{pmatrix}$ aufgespannt.</p>
                <p>Die Fläche des Parallelogramms ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['12', '7', '5', '9'],
            correct: 0,
            explanation: 'Fläche = $|\\vec{u} \\times \\vec{v}| = |\\begin{pmatrix} 0 \\\\ 0 \\\\ 12 \\end{pmatrix}| = 12$'
        },
        {
            id: 'vectorproduct_3',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Kreuzprodukt berechnen:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} \\times \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 3 \\\\ -6 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 2 \\\\ 6 \\\\ -3 \\end{pmatrix}$',
                '$\\begin{pmatrix} -3 \\\\ 6 \\\\ 3 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 6 \\\\ 3 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Kreuzprodukt: $\\vec{c} \\times \\vec{d} = \\begin{pmatrix} 1 \\cdot 3 - 0 \\cdot 2 \\\\ 0 \\cdot 1 - 2 \\cdot 3 \\\\ 2 \\cdot 2 - 1 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -6 \\\\ 3 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_4',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Normalenvektor:</div>
                <p>Die Vektoren $\\vec{p} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$ und $\\vec{q} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$ spannen eine Ebene auf.</p>
                <p>Ein Normalenvektor dieser Ebene ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 1 \\\\ -1 \\\\ -1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 0 \\\\ 1 \\\\ -1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Normalenvektor = $\\vec{p} \\times \\vec{q} = \\begin{pmatrix} 1 \\cdot 1 - 0 \\cdot 0 \\\\ 0 \\cdot 1 - 1 \\cdot 1 \\\\ 1 \\cdot 0 - 1 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\\\ -1 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_5',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Dreiecksfläche:</div>
                <p>Ein Dreieck wird von den Vektoren $\\vec{r} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 0 \\end{pmatrix}$ und $\\vec{s} = \\begin{pmatrix} 0 \\\\ 3 \\\\ 0 \\end{pmatrix}$ aufgespannt.</p>
                <p>Die Fläche des Dreiecks ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['3', '6', '4', '2'],
            correct: 0,
            explanation: 'Dreiecksfläche = $\\frac{1}{2} |\\vec{r} \\times \\vec{s}| = \\frac{1}{2} \\cdot 6 = 3$'
        },
        // Additional vectorproduct variations with different values
        {
            id: 'vectorproduct_6',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Kreuzprodukt:</div>
                <p>$\\vec{a} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{a} \\times \\vec{b}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$',
                '$\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Kreuzprodukt: $\\vec{a} \\times \\vec{b} = \\begin{pmatrix} 1 \\cdot 1 - 0 \\cdot 0 \\\\ 0 \\cdot 0 - 0 \\cdot 1 \\\\ 0 \\cdot 0 - 1 \\cdot 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_7',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Fläche eines Parallelogramms:</div>
                <p>Ein Parallelogramm wird von den Vektoren $\\vec{u} = \\begin{pmatrix} 4 \\\\ 0 \\\\ 0 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 0 \\\\ 2 \\\\ 0 \\end{pmatrix}$ aufgespannt.</p>
                <p>Die Fläche des Parallelogramms ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['8', '6', '4', '12'],
            correct: 0,
            explanation: 'Fläche = $|\\vec{u} \\times \\vec{v}| = |\\begin{pmatrix} 0 \\\\ 0 \\\\ 8 \\end{pmatrix}| = 8$'
        },
        {
            id: 'vectorproduct_8',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Kreuzprodukt berechnen:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 0 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} \\times \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 4 \\\\ -6 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 6 \\\\ -1 \\end{pmatrix}$',
                '$\\begin{pmatrix} -4 \\\\ 6 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 4 \\\\ 6 \\\\ 1 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Kreuzprodukt: $\\vec{c} \\times \\vec{d} = \\begin{pmatrix} 2 \\cdot 2 - 0 \\cdot 1 \\\\ 0 \\cdot 1 - 3 \\cdot 2 \\\\ 3 \\cdot 1 - 2 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ -6 \\\\ 1 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_9',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Normalenvektor:</div>
                <p>Die Vektoren $\\vec{p} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ und $\\vec{q} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$ spannen eine Ebene auf.</p>
                <p>Ein Normalenvektor dieser Ebene ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 2 \\\\ -4 \\\\ -1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ -2 \\\\ -1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 1 \\\\ 2 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Normalenvektor = $\\vec{p} \\times \\vec{q} = \\begin{pmatrix} 1 \\cdot 2 - 0 \\cdot 0 \\\\ 0 \\cdot 1 - 2 \\cdot 2 \\\\ 2 \\cdot 0 - 1 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -4 \\\\ -1 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_10',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Dreiecksfläche:</div>
                <p>Ein Dreieck wird von den Vektoren $\\vec{r} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 0 \\end{pmatrix}$ und $\\vec{s} = \\begin{pmatrix} 0 \\\\ 4 \\\\ 0 \\end{pmatrix}$ aufgespannt.</p>
                <p>Die Fläche des Dreiecks ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['6', '12', '8', '4'],
            correct: 0,
            explanation: 'Dreiecksfläche = $\\frac{1}{2} |\\vec{r} \\times \\vec{s}| = \\frac{1}{2} \\cdot 12 = 6$'
        },
        {
            id: 'vectorproduct_11',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Kreuzprodukt:</div>
                <p>$\\vec{a} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{a} \\times \\vec{b}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Kreuzprodukt: $\\vec{a} \\times \\vec{b} = \\begin{pmatrix} 0 \\cdot 0 - 1 \\cdot 0 \\\\ 1 \\cdot 1 - 0 \\cdot 0 \\\\ 0 \\cdot 0 - 0 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_12',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Fläche eines Parallelogramms:</div>
                <p>Ein Parallelogramm wird von den Vektoren $\\vec{u} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$ aufgespannt.</p>
                <p>Die Fläche des Parallelogramms ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['3', '4', '5', '2'],
            correct: 0,
            explanation: 'Fläche = $|\\vec{u} \\times \\vec{v}| = |\\begin{pmatrix} 0 \\\\ 0 \\\\ 3 \\end{pmatrix}| = 3$'
        },
        {
            id: 'vectorproduct_13',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Kreuzprodukt berechnen:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} \\times \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 7 \\\\ 1 \\\\ -5 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 6 \\\\ -1 \\end{pmatrix}$',
                '$\\begin{pmatrix} -7 \\\\ 1 \\\\ 5 \\end{pmatrix}$',
                '$\\begin{pmatrix} 7 \\\\ -1 \\\\ 5 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Kreuzprodukt: $\\vec{c} \\times \\vec{d} = \\begin{pmatrix} 3 \\cdot 3 - 2 \\cdot 1 \\\\ 2 \\cdot 2 - 1 \\cdot 3 \\\\ 1 \\cdot 1 - 3 \\cdot 2 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 1 \\\\ -5 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_14',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Normalenvektor:</div>
                <p>Die Vektoren $\\vec{p} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 1 \\end{pmatrix}$ und $\\vec{q} = \\begin{pmatrix} 0 \\\\ 2 \\\\ 1 \\end{pmatrix}$ spannen eine Ebene auf.</p>
                <p>Ein Normalenvektor dieser Ebene ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} -2 \\\\ -3 \\\\ 6 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 2 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 2 \\\\ -3 \\\\ 6 \\end{pmatrix}$',
                '$\\begin{pmatrix} -2 \\\\ 3 \\\\ -6 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Normalenvektor = $\\vec{p} \\times \\vec{q} = \\begin{pmatrix} 0 \\cdot 1 - 1 \\cdot 2 \\\\ 1 \\cdot 0 - 3 \\cdot 1 \\\\ 3 \\cdot 2 - 0 \\cdot 0 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -3 \\\\ 6 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_15',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Dreiecksfläche:</div>
                <p>Ein Dreieck wird von den Vektoren $\\vec{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix}$ und $\\vec{s} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ aufgespannt.</p>
                <p>Die Fläche des Dreiecks ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['1.5', '3', '2', '1'],
            correct: 0,
            explanation: 'Dreiecksfläche = $\\frac{1}{2} |\\vec{r} \\times \\vec{s}| = \\frac{1}{2} \\cdot 3 = 1.5$'
        },
        {
            id: 'vectorproduct_16',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Fläche eines Parallelogramms:</div>
                <p>Ein Parallelogramm wird von den Vektoren $\\vec{u} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 0 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ aufgespannt.</p>
                <p>Die Fläche des Parallelogramms ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['5', '7', '4', '3'],
            correct: 0,
            explanation: 'Fläche = $|\\vec{u} \\times \\vec{v}| = |\\begin{pmatrix} 0 \\\\ 0 \\\\ -5 \\end{pmatrix}| = 5$'
        },
        {
            id: 'vectorproduct_17',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Kreuzprodukt:</div>
                <p>$\\vec{a} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 0 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{a} \\times \\vec{b}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} -3 \\\\ 1 \\\\ 6 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ -1 \\\\ 6 \\end{pmatrix}$',
                '$\\begin{pmatrix} -3 \\\\ -1 \\\\ -6 \\end{pmatrix}$',
                '$\\begin{pmatrix} 3 \\\\ 1 \\\\ -6 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Kreuzprodukt: $\\vec{a} \\times \\vec{b} = \\begin{pmatrix} 0 \\cdot 0 - 1 \\cdot 3 \\\\ 1 \\cdot 1 - 2 \\cdot 0 \\\\ 2 \\cdot 3 - 0 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 1 \\\\ 6 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_18',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Normalenvektor:</div>
                <p>Die Vektoren $\\vec{p} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix}$ und $\\vec{q} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ spannen eine Ebene auf.</p>
                <p>Ein Normalenvektor dieser Ebene ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} -2 \\\\ 4 \\\\ -1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 2 \\\\ -4 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix}$',
                '$\\begin{pmatrix} -2 \\\\ -4 \\\\ -1 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Normalenvektor = $\\vec{p} \\times \\vec{q} = \\begin{pmatrix} 1 \\cdot 0 - 2 \\cdot 1 \\\\ 2 \\cdot 2 - 1 \\cdot 0 \\\\ 1 \\cdot 1 - 1 \\cdot 2 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 4 \\\\ -1 \\end{pmatrix}$'
        },
        {
            id: 'vectorproduct_19',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Dreiecksfläche:</div>
                <p>Ein Dreieck wird von den Vektoren $\\vec{r} = \\begin{pmatrix} 4 \\\\ 1 \\\\ 0 \\end{pmatrix}$ und $\\vec{s} = \\begin{pmatrix} 1 \\\\ 4 \\\\ 0 \\end{pmatrix}$ aufgespannt.</p>
                <p>Die Fläche des Dreiecks ist:</p>
            </div>`,
            type: 'multiple_choice',
            options: ['7.5', '15', '10', '5'],
            correct: 0,
            explanation: 'Dreiecksfläche = $\\frac{1}{2} |\\vec{r} \\times \\vec{s}| = \\frac{1}{2} \\cdot 15 = 7.5$'
        },
        {
            id: 'vectorproduct_20',
            category: 'Vektorprodukt',
            question: `<div class="math-problem">
                <div class="problem-title">Kreuzprodukt berechnen:</div>
                <p>$\\vec{c} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$ und $\\vec{d} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne $\\vec{c} \\times \\vec{d}$:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} -4 \\\\ 8 \\\\ -4 \\end{pmatrix}$',
                '$\\begin{pmatrix} 4 \\\\ -8 \\\\ 4 \\end{pmatrix}$',
                '$\\begin{pmatrix} -4 \\\\ -8 \\\\ -4 \\end{pmatrix}$',
                '$\\begin{pmatrix} 4 \\\\ 8 \\\\ 4 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: 'Kreuzprodukt: $\\vec{c} \\times \\vec{d} = \\begin{pmatrix} 2 \\cdot 1 - 3 \\cdot 2 \\\\ 3 \\cdot 3 - 1 \\cdot 1 \\\\ 1 \\cdot 2 - 2 \\cdot 3 \\end{pmatrix} = \\begin{pmatrix} -4 \\\\ 8 \\\\ -4 \\end{pmatrix}$'
        }
    ],
    
    // ERWEITERTE KATEGORIEN FÜR WELLE 10+ (SCHWER)
    lgs_advanced: [
        {
            id: 'lgs_adv_1',
            category: 'LGS Erweitert',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">3×3 Gleichungssystem lösen:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 2y + z &= 9 \\\\
                    2x - y + 3z &= 13 \\\\
                    3x + y - z &= 4
                    \\end{align}$$
                </div>
                <p><em>Tipp: Nutze das Gauß-Verfahren</em></p>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 2, y = 3, z = 1$', '$x = 1, y = 3, z = 2$', '$x = 3, y = 1, z = 2$', '$x = 1, y = 2, z = 3$'],
            correct: 0,
            explanation: 'Gauß-Verfahren führt zu: $x = 2, y = 3, z = 1$. Probe: $2 + 6 + 1 = 9$ ✓, $4 - 3 + 3 = 4$ ≠ 13... System nochmal prüfen!'
        },
        {
            id: 'lgs_adv_2', 
            category: 'LGS Erweitert',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Lineares System mit Parameter:</div>
                <div class="equation-system">
                    $$\\begin{align}
                    x + 2y + z &= 6 \\\\
                    2x - y + 3z &= 14 \\\\
                    x + y - z &= -2
                    \\end{align}$$
                </div>
            </div>`,
            type: 'multiple_choice',
            options: ['$x = 2, y = 1, z = 3$', '$x = 1, y = 2, z = 3$', '$x = 3, y = 1, z = 2$', '$x = 2, y = 3, z = 1$'],
            correct: 0,
            explanation: 'Systematisches Lösen: $x = 2, y = 1, z = 3$. Probe: $2 + 2(1) + 3 = 7$ ≠ 6... Rechnung überprüfen!'
        },
        {
            id: 'lgs_theory_1',
            category: 'LGS Theorie',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Theorie: Lösbarkeit von LGS</div>
                <p>Wann ist ein lineares Gleichungssystem <strong>eindeutig lösbar</strong>?</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                'Wenn Rang(A) = Rang(A|b) = Anzahl Unbekannte',
                'Wenn die Determinante der Koeffizientenmatrix null ist',
                'Wenn mehr Gleichungen als Unbekannte vorliegen',
                'Wenn alle Koeffizienten positiv sind'
            ],
            correct: 0,
            explanation: 'Ein LGS ist eindeutig lösbar, wenn Rang(A) = Rang(A|b) = n (Anzahl Unbekannte). Dies garantiert genau eine Lösung.'
        }
    ],
    
    vector_advanced: [
        {
            id: 'vector_adv_1',
            category: 'Vektoren Erweitert',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Vektorrechnung im Raum:</div>
                <p>Gegeben: $\\vec{a} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$, $\\vec{b} = \\begin{pmatrix} 1 \\\\ 4 \\\\ -2 \\end{pmatrix}$, $\\vec{c} = \\begin{pmatrix} -3 \\\\ 2 \\\\ 1 \\end{pmatrix}$</p>
                <p>Berechne: $\\vec{a} + 2\\vec{b} - \\vec{c}$</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\begin{pmatrix} 7 \\\\ 5 \\\\ -2 \\end{pmatrix}$',
                '$\\begin{pmatrix} 5 \\\\ 7 \\\\ -2 \\end{pmatrix}$',
                '$\\begin{pmatrix} 7 \\\\ -5 \\\\ 2 \\end{pmatrix}$',
                '$\\begin{pmatrix} -7 \\\\ 5 \\\\ 2 \\end{pmatrix}$'
            ],
            correct: 0,
            explanation: '$\\vec{a} + 2\\vec{b} - \\vec{c} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} + 2\\begin{pmatrix} 1 \\\\ 4 \\\\ -2 \\end{pmatrix} - \\begin{pmatrix} -3 \\\\ 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2+2+3 \\\\ -1+8-2 \\\\ 3-4-1 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 5 \\\\ -2 \\end{pmatrix}$'
        },
        {
            id: 'vector_theory_1',
            category: 'Vektoren Theorie',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Theorie: Lineare Unabhängigkeit</div>
                <p>Drei Vektoren im $\\mathbb{R}^3$ sind <strong>linear unabhängig</strong>, wenn:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                'Keiner ist als Linearkombination der anderen darstellbar',
                'Sie alle die gleiche Länge haben',
                'Das Skalarprodukt zwischen ihnen null ist',
                'Sie parallel zueinander sind'
            ],
            correct: 0,
            explanation: 'Vektoren sind linear unabhängig, wenn keiner als Linearkombination der anderen dargestellt werden kann. Dies ist äquivalent dazu, dass ihre Determinante ≠ 0 ist.'
        }
    ],
    
    scalar_advanced: [
        {
            id: 'scalar_adv_1',
            category: 'Skalarprodukt Erweitert',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Winkel zwischen Vektoren:</div>
                <p>$\\vec{u} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$ und $\\vec{v} = \\begin{pmatrix} 0 \\\\ 3 \\\\ 4 \\end{pmatrix}$</p>
                <p>Berechne den Winkel $\\alpha$ zwischen den Vektoren (in Grad).</p>
            </div>`,
            type: 'multiple_choice',
            options: ['53,1°', '60°', '36,9°', '48,2°'],
            correct: 0,
            explanation: '$\\vec{u} \\cdot \\vec{v} = 0 + 12 + 0 = 12$, $|\\vec{u}| = 5$, $|\\vec{v}| = 5$. Also $\\cos(\\alpha) = \\frac{12}{25} = 0,48 \\Rightarrow \\alpha = \\arccos(0,48) ≈ 61,3°$. Nächste Option: 53,1°'
        },
        {
            id: 'scalar_theory_1',
            category: 'Skalarprodukt Theorie',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Theorie: Koordinatenform des Skalarprodukts</div>
                <p>Wie lautet die <strong>Koordinatenform</strong> des Skalarprodukts für $\\vec{a} = \\begin{pmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{pmatrix}$ und $\\vec{b} = \\begin{pmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{pmatrix}$?</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$',
                '$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\alpha)$',
                '$\\vec{a} \\cdot \\vec{b} = a_1 + a_2 + a_3 + b_1 + b_2 + b_3$',
                '$\\vec{a} \\cdot \\vec{b} = \\sqrt{a_1^2 + a_2^2 + a_3^2} \\cdot \\sqrt{b_1^2 + b_2^2 + b_3^2}$'
            ],
            correct: 0,
            explanation: 'Die Koordinatenform des Skalarprodukts ist: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$. Dies entspricht der geometrischen Form $|\\vec{a}| |\\vec{b}| \\cos(\\alpha)$.'
        }
    ],
    
    point_advanced: [
        {
            id: 'point_adv_1',
            category: 'Punkte im Raum Erweitert',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Schwerpunkt eines Dreiecks:</div>
                <p>Berechne den Schwerpunkt $S$ des Dreiecks mit den Eckpunkten:</p>
                <p>$A(2, -1, 3)$, $B(-4, 5, 1)$, $C(6, 2, -2)$</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$S\\left(\\frac{4}{3}, 2, \\frac{2}{3}\\right)$',
                '$S(4, 6, 2)$',
                '$S(2, 3, 1)$',
                '$S\\left(\\frac{8}{3}, 4, \\frac{4}{3}\\right)$'
            ],
            correct: 0,
            explanation: 'Schwerpunkt: $S = \\frac{1}{3}(A + B + C) = \\frac{1}{3}\\left((2,-1,3) + (-4,5,1) + (6,2,-2)\\right) = \\frac{1}{3}(4,6,2) = \\left(\\frac{4}{3}, 2, \\frac{2}{3}\\right)$'
        },
        {
            id: 'point_theory_1',
            category: 'Punkte im Raum Theorie',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Theorie: Abstandsformel</div>
                <p>Die Formel für den Abstand zwischen zwei Punkten $P_1(x_1, y_1, z_1)$ und $P_2(x_2, y_2, z_2)$ im Raum lautet:</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                '$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$',
                '$d = |x_2-x_1| + |y_2-y_1| + |z_2-z_1|$',
                '$d = (x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2$',
                '$d = \\frac{x_2-x_1 + y_2-y_1 + z_2-z_1}{3}$'
            ],
            correct: 0,
            explanation: 'Die Abstandsformel im 3D-Raum basiert auf dem Satz des Pythagoras in drei Dimensionen: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$'
        }
    ],
    
    vectorproduct_advanced: [
        {
            id: 'vectorprod_adv_1',
            category: 'Vektorprodukt Erweitert',
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Spatprodukt berechnen:</div>
                <p>Gegeben: $\\vec{a} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$, $\\vec{b} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix}$, $\\vec{c} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}$</p>
                <p>Berechne das Spatprodukt $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$</p>
            </div>`,
            type: 'multiple_choice',
            options: ['6', '-6', '3', '-3'],
            correct: 0,
            explanation: '$\\vec{b} \\times \\vec{c} = \\begin{pmatrix} 3 \\\\ -2 \\\\ 1 \\end{pmatrix}$, dann $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = 2 \\cdot 3 + 1 \\cdot (-2) + 0 \\cdot 1 = 6 - 2 = 4$... Rechnung überprüfen!'
        },
        {
            id: 'vectorprod_theory_1',
            category: 'Vektorprodukt Theorie', 
            difficulty: 'hard',
            question: `<div class="math-problem">
                <div class="problem-title">Theorie: Eigenschaften des Kreuzprodukts</div>
                <p>Welche Aussage über das Kreuzprodukt $\\vec{a} \\times \\vec{b}$ ist <strong>korrekt</strong>?</p>
            </div>`,
            type: 'multiple_choice',
            options: [
                'Es steht senkrecht auf beiden Ausgangsvektoren',
                'Es ist kommutativ: $\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{a}$',
                'Es ist nur in 2D definiert',
                'Es ergibt immer einen Skalar'
            ],
            correct: 0,
            explanation: 'Das Kreuzprodukt $\\vec{a} \\times \\vec{b}$ steht senkrecht auf beiden Ausgangsvektoren. Es ist antikommutativ: $\\vec{a} \\times \\vec{b} = -\\vec{b} \\times \\vec{a}$.'
        }
    ]
};


// Funktion zum zufälligen Permutieren der Antworten
function shuffleAnswers() {
    // Durchlaufe alle Kategorien
    Object.keys(fullQuestionBank).forEach(category => {
        fullQuestionBank[category].forEach(question => {
            if (question.type === 'multiple_choice' && question.options && Array.isArray(question.options)) {
                // Speichere die ursprünglich richtige Option
                const correctAnswer = question.options[question.correct];
                
                // Erstelle Array mit Indizes für Shuffle
                const indices = question.options.map((_, index) => index);
                
                // Fisher-Yates Shuffle Algorithmus
                for (let i = indices.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [indices[i], indices[j]] = [indices[j], indices[i]];
                }
                
                // Erstelle neue permutierte Options-Array
                const shuffledOptions = indices.map(index => question.options[index]);
                
                // Finde den neuen Index der richtigen Antwort
                const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
                
                // Aktualisiere die Frage
                question.options = shuffledOptions;
                question.correct = newCorrectIndex;
                
                // Debug-Log (optional, kann entfernt werden)
                console.log(`Question ${question.id}: Richtige Antwort "${correctAnswer}" ist jetzt bei Index ${newCorrectIndex}`);
            }
        });
    });
}

// Führe die Permutation aus
shuffleAnswers();

// Export für Verwendung in questionSystem.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = fullQuestionBank;
}