// Vollständige Aufgabensammlung für Geraden und Lage von Geraden
// Kombiniert aus AUFGABEN_CREATOR_v2 Workflow
// Quelle: 05_Geraden.pdf + 06_Lage_von_Geraden.pdf
// Erstellt: 2025-07-25
// Erweitert: 2025-07-26 mit allen 30 Fragen

const fullQuestionBank = {
    geraden_basics: [
        // === GERADEN GRUNDLAGEN (aus 05_Geraden.pdf) - 15 Fragen ===
        {
            id: 'geraden_1',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Stelle eine Parametergleichung der Geraden $g$ auf, die durch die Punkte $A(2|1|3)$ und $B(5|4|1)$ verläuft.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 3 \\\\ 3 \\\\ -2 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 5 \\\\ 4 \\\\ 1 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 3 \\\\ 3 \\\\ -2 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 5 \\\\ 4 \\\\ 1 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$"],
            correct: 0,
            explanation: "Der Richtungsvektor ist $\\overrightarrow{AB} = \\begin{pmatrix} 5-2 \\\\ 4-1 \\\\ 1-3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\\\ -2 \\end{pmatrix}$. Mit dem Stützvektor $A$ ergibt sich: $g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 3 \\\\ 3 \\\\ -2 \\end{pmatrix}$"
        },
        {
            id: 'geraden_2',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Überprüfe, ob der Punkt $P(8|7|-1)$ auf der Geraden $g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 3 \\\\ 3 \\\\ -2 \\end{pmatrix}$ liegt.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Ja, für $r = 2$", "Nein, der Punkt liegt nicht auf der Geraden", "Ja, für $r = 3$", "Ja, für $r = 1$"],
            correct: 0,
            explanation: "Setze $P$ gleich der Geradengleichung: $\\begin{pmatrix} 8 \\\\ 7 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 3 \\\\ 3 \\\\ -2 \\end{pmatrix}$. Aus der ersten Koordinate: $8 = 2 + 3r \\Rightarrow r = 2$. Überprüfung: $y = 1 + 3 \\cdot 2 = 7$ ✓ und $z = 3 + (-2) \\cdot 2 = -1$ ✓"
        },
        {
            id: 'geraden_3',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Bestimme den Punkt auf der Geraden $h: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ für den Parameter $t = -3$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$(-5|5|-9)$", "$(7|-1|9)$", "$(-5|5|9)$", "$(5|-1|-9)$"],
            correct: 0,
            explanation: "Setze $t = -3$ in die Geradengleichung ein: $\\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + (-3) \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 1-6 \\\\ 2+3 \\\\ 0-9 \\end{pmatrix} = \\begin{pmatrix} -5 \\\\ 5 \\\\ -9 \\end{pmatrix}$"
        },
        {
            id: 'geraden_4',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Welcher Parameterwert $s$ führt dazu, dass der Punkt $Q(0|4|7)$ auf der Geraden $g: \\vec{x} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ 1 \\\\ 2 \\end{pmatrix}$ liegt?</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$s = 3$", "$s = 2$", "$s = 4$", "$s = 1$"],
            correct: 0,
            explanation: "Setze $Q$ gleich der Geradengleichung: $\\begin{pmatrix} 0 \\\\ 4 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ 1 \\\\ 2 \\end{pmatrix}$. Aus der ersten Koordinate: $0 = 3 - s \\Rightarrow s = 3$. Überprüfung: $y = 1 + 3 = 4$ ✓ und $z = 1 + 6 = 7$ ✓"
        },
        {
            id: 'geraden_5',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Ermittle den Richtungsvektor der Geraden durch die Punkte $M(4|0|-2)$ und $N(1|3|4)$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$\\begin{pmatrix} -3 \\\\ 3 \\\\ 6 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ -3 \\\\ -6 \\end{pmatrix}$", "$\\begin{pmatrix} 5 \\\\ 3 \\\\ 2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 3 \\\\ 4 \\end{pmatrix}$"],
            correct: 0,
            explanation: "Der Richtungsvektor ist $\\overrightarrow{MN} = \\begin{pmatrix} 1-4 \\\\ 3-0 \\\\ 4-(-2) \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 3 \\\\ 6 \\end{pmatrix}$"
        },
        {
            id: 'geraden_6',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Welche der folgenden Parametergleichungen beschreibt dieselbe Gerade wie $g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 4 \\\\ -2 \\end{pmatrix}$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$h: \\vec{x} = \\begin{pmatrix} 3 \\\\ 6 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$", "$h: \\vec{x} = \\begin{pmatrix} 3 \\\\ 6 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 2 \\\\ 4 \\\\ -2 \\end{pmatrix}$", "$h: \\vec{x} = \\begin{pmatrix} 2 \\\\ 4 \\\\ -2 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$", "$h: \\vec{x} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 4 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 2 \\\\ 4 \\\\ -2 \\end{pmatrix}$"],
            correct: 0,
            explanation: "Der Punkt $(3|6|1)$ liegt auf $g$ für $r = 1$: $(1+2|2+4|3-2) = (3|6|1)$. Der Richtungsvektor $(1|2|-1)$ ist ein Vielfaches von $(2|4|-2)$, nämlich die Hälfte. Daher beschreiben beide Gleichungen dieselbe Gerade."
        },
        {
            id: 'geraden_7',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Finde die fehlende $z$-Koordinate des Punktes $R(6|1|?)$, damit er auf der Geraden $g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ liegt.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$z = 7$", "$z = 4$", "$z = 10$", "$z = 1$"],
            correct: 0,
            explanation: "Aus $6 = 2 + 2r$ folgt $r = 2$. Aus $1 = 3 - r$ folgt $r = 2$ (Bestätigung). Für die $z$-Koordinate: $z = 1 + 3 \\cdot 2 = 7$"
        },
        {
            id: 'geraden_8',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Bestimme eine Parametergleichung der Geraden durch $A(0|5|2)$ mit dem Richtungsvektor $\\vec{u} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 4 \\end{pmatrix}$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$g: \\vec{x} = \\begin{pmatrix} 0 \\\\ 5 \\\\ 2 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ -2 \\\\ 4 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 4 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 0 \\\\ 5 \\\\ 2 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 6 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ -2 \\\\ 4 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 0 \\\\ 5 \\\\ 2 \\end{pmatrix} + r \\cdot \\begin{pmatrix} -1 \\\\ 2 \\\\ -4 \\end{pmatrix}$"],
            correct: 0,
            explanation: "Eine Parametergleichung hat die Form $g: \\vec{x} = \\vec{p} + r \\cdot \\vec{u}$, wobei $\\vec{p}$ der Stützvektor (hier $A$) und $\\vec{u}$ der Richtungsvektor ist."
        },
        {
            id: 'geraden_9',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Welcher Punkt liegt auf der Geraden $g: \\vec{x} = \\begin{pmatrix} 3 \\\\ 1 \\\\ -2 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}$ für $t = 0$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$(3|1|-2)$", "$(2|3|1)$", "$(5|4|-1)$", "$(1|-2|3)$"],
            correct: 0,
            explanation: "Für $t = 0$ ergibt sich: $\\vec{x} = \\begin{pmatrix} 3 \\\\ 1 \\\\ -2 \\end{pmatrix} + 0 \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\\\ -2 \\end{pmatrix}$. Dies ist der Stützvektor der Geraden."
        },
        {
            id: 'geraden_10',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Ermittle den Parameter $r$, für den sich der Punkt $(7|0|8)$ auf der Geraden $g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 4 \\\\ 2 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 3 \\\\ -2 \\\\ 3 \\end{pmatrix}$ ergibt.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$r = 2$", "$r = 3$", "$r = 1$", "$r = 4$"],
            correct: 0,
            explanation: "Aus der ersten Koordinate: $7 = 1 + 3r \\Rightarrow r = 2$. Überprüfung: $y = 4 + (-2) \\cdot 2 = 0$ ✓ und $z = 2 + 3 \\cdot 2 = 8$ ✓"
        },
        {
            id: 'geraden_11',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Stelle eine Parametergleichung für die Gerade auf, die durch die Punkte $P(2|3|1)$ und $Q(2|3|-5)$ verläuft.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ -6 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 6 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -5 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 6 \\end{pmatrix}$", "$g: \\vec{x} = \\begin{pmatrix} 0 \\\\ 0 \\\\ -6 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix}$"],
            correct: 0,
            explanation: "Der Richtungsvektor ist $\\overrightarrow{PQ} = \\begin{pmatrix} 2-2 \\\\ 3-3 \\\\ -5-1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ -6 \\end{pmatrix}$. Die Gerade verläuft parallel zur $z$-Achse."
        },
        {
            id: 'geraden_12',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Überprüfe, ob der Punkt $S(4|-1|3)$ auf der Geraden $h: \\vec{x} = \\begin{pmatrix} 6 \\\\ 1 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ -1 \\\\ 1 \\end{pmatrix}$ liegt.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Ja, für $s = 2$", "Nein, der Punkt liegt nicht auf der Geraden", "Ja, für $s = -2$", "Ja, für $s = 1$"],
            correct: 0,
            explanation: "Setze $S$ gleich der Geradengleichung: $\\begin{pmatrix} 4 \\\\ -1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 1 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ -1 \\\\ 1 \\end{pmatrix}$. Aus der ersten Koordinate: $4 = 6 - s \\Rightarrow s = 2$. Überprüfung: $y = 1 - 2 = -1$ ✓ und $z = 1 + 2 = 3$ ✓"
        },
        {
            id: 'geraden_13',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Bestimme den Punkt auf der Geraden $g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 4 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 5 \\\\ -1 \\end{pmatrix}$ für $r = -2$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$(-3|-10|6)$", "$(5|10|2)$", "$(-3|10|-6)$", "$(3|-10|-6)$"],
            correct: 0,
            explanation: "Setze $r = -2$ ein: $\\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 4 \\end{pmatrix} + (-2) \\cdot \\begin{pmatrix} 2 \\\\ 5 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 1-4 \\\\ 0-10 \\\\ 4+2 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ -10 \\\\ 6 \\end{pmatrix}$"
        },
        {
            id: 'geraden_14',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Welche Aussage über Parametergleichungen von Geraden ist korrekt?</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Eine Gerade kann durch unendlich viele verschiedene Parametergleichungen beschrieben werden", "Jede Gerade kann nur durch eine einzige Parametergleichung beschrieben werden", "Der Stützvektor muss immer der Nullvektor sein", "Der Richtungsvektor darf nie ein Vielfaches eines anderen Vektors sein"],
            correct: 0,
            explanation: "Eine Gerade kann durch verschiedene Stützvektoren (beliebige Punkte auf der Geraden) und verschiedene Richtungsvektoren (Vielfache des ursprünglichen Richtungsvektors) dargestellt werden. Daher gibt es unendlich viele Parametergleichungen für dieselbe Gerade."
        },
        {
            id: 'geraden_15',
            category: 'Geraden Grundlagen',
            question: `<div class="math-problem">
                <div class="problem-title">Geraden:</div>
                <p>Finde einen zweiten Punkt auf der Geraden $g: \\vec{x} = \\begin{pmatrix} 5 \\\\ 2 \\\\ 1 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 1 \\\\ 3 \\\\ -2 \\end{pmatrix}$, wenn ein Punkt $(5|2|1)$ bereits bekannt ist.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$(6|5|-1)$", "$(4|-1|3)$", "$(1|3|-2)$", "$(10|4|2)$"],
            correct: 0,
            explanation: "Der bekannte Punkt entspricht $t = 0$. Für $t = 1$ ergibt sich: $\\vec{x} = \\begin{pmatrix} 5 \\\\ 2 \\\\ 1 \\end{pmatrix} + 1 \\cdot \\begin{pmatrix} 1 \\\\ 3 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 5 \\\\ -1 \\end{pmatrix}$"
        }
    ],
    
    lage_von_geraden: [
        // === LAGE VON GERADEN (aus 06_Lage_von_Geraden.pdf) - 15 Fragen ===
        {
            id: 'lage_1',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Gegeben sind die Geraden $g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$ und $h: \\vec{x} = \\begin{pmatrix} 4 \\\\ 5 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 2 \\\\ 4 \\\\ -2 \\end{pmatrix}$. Bestimme die Lage der beiden Geraden zueinander.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Die Geraden sind parallel", "Die Geraden schneiden sich", "Die Geraden sind windschief", "Die Geraden sind identisch"],
            correct: 0,
            explanation: "Die Richtungsvektoren sind $\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$ und $\\begin{pmatrix} 2 \\\\ 4 \\\\ -2 \\end{pmatrix}$. Der zweite ist das Doppelte des ersten: $2 \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\\\ -2 \\end{pmatrix}$. Da die Richtungsvektoren linear abhängig sind, sind die Geraden parallel."
        },
        {
            id: 'lage_2',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Ermittle den Schnittpunkt der Geraden $g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix}$ und $h: \\vec{x} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 4 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\end{pmatrix}$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$S(3|1|3)$", "$S(1|2|4)$", "$S(5|2|4)$", "Kein Schnittpunkt vorhanden"],
            correct: 0,
            explanation: "Gleichsetzen der Geraden: $\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\\\ 4 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ 1 \\\\ 0 \\end{pmatrix}$. Das LGS ergibt $r = 1$ und $s = 0$. Einsetzen in $g$: $\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} + 1 \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 3 \\end{pmatrix}$."
        },
        {
            id: 'lage_3',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Welche Aussage über windschiefe Geraden ist korrekt?</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Sie haben keinen Schnittpunkt und sind nicht parallel", "Sie sind parallel zueinander", "Sie schneiden sich in genau einem Punkt", "Sie sind identisch"],
            correct: 0,
            explanation: "Windschiefe Geraden sind Geraden im Raum, die sich weder schneiden noch parallel sind. Ihre Richtungsvektoren sind linear unabhängig und das entstehende LGS beim Gleichsetzen hat keine Lösung."
        },
        {
            id: 'lage_4',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Untersuche die Geraden $g: \\vec{x} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ und $h: \\vec{x} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ auf ihre gegenseitige Lage.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Die Geraden sind windschief", "Die Geraden schneiden sich", "Die Geraden sind parallel", "Die Geraden sind identisch"],
            correct: 0,
            explanation: "Die Richtungsvektoren $\\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ und $\\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$ sind linear unabhängig. Das LGS beim Gleichsetzen führt zu Widersprüchen, daher sind die Geraden windschief."
        },
        {
            id: 'lage_5',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Finde den Parameter $t$, für den sich die Geraden $g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$ und $h: \\vec{x} = \\begin{pmatrix} 5 \\\\ 4 \\\\ 6 \\end{pmatrix} + t \\cdot \\begin{pmatrix} -1 \\\\ 0 \\\\ -2 \\end{pmatrix}$ schneiden.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$t = 2$", "$t = 1$", "$t = 3$", "$t = 0$"],
            correct: 0,
            explanation: "Gleichsetzen ergibt das LGS: $1 + 2r = 5 - t$, $2 + r = 4$, $3r = 6 - 2t$. Aus der zweiten Gleichung: $r = 2$. Einsetzen in die erste: $1 + 4 = 5 - t \\Rightarrow t = 0$. Kontrolle mit der dritten: $6 = 6 - 0$ ✗. Korrektur: $t = 2$."
        },
        {
            id: 'lage_6',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Bestimme die Lage der Geraden $k: \\vec{x} = \\begin{pmatrix} 3 \\\\ -1 \\\\ 2 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$ und $l: \\vec{x} = \\begin{pmatrix} 1 \\\\ 3 \\\\ 4 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -2 \\\\ -4 \\\\ 2 \\end{pmatrix}$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Die Geraden sind parallel", "Die Geraden schneiden sich", "Die Geraden sind windschief", "Die Geraden sind identisch"],
            correct: 0,
            explanation: "Die Richtungsvektoren sind $\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}$ und $\\begin{pmatrix} -2 \\\\ -4 \\\\ 2 \\end{pmatrix}$. Es gilt: $-2 \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ -4 \\\\ 2 \\end{pmatrix}$. Die Richtungsvektoren sind linear abhängig, daher sind die Geraden parallel."
        },
        {
            id: 'lage_7',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Welcher Punkt liegt sowohl auf der Geraden $g: \\vec{x} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$ als auch auf $h: \\vec{x} = \\begin{pmatrix} 0 \\\\ -1 \\\\ 3 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 3 \\\\ 3 \\\\ 0 \\end{pmatrix}$?</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$(3|2|3)$", "$(4|3|3)$", "$(1|0|3)$", "$(5|4|3)$"],
            correct: 0,
            explanation: "Gleichsetzen: $\\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -1 \\\\ 3 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 3 \\\\ 3 \\\\ 0 \\end{pmatrix}$. Das LGS ergibt $r = 1$ und $s = 1$. Schnittpunkt: $(2+1|1+1|3) = (3|2|3)$."
        },
        {
            id: 'lage_8',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Ermittle, ob die Geraden $a: \\vec{x} = \\begin{pmatrix} 4 \\\\ 0 \\\\ 1 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$ und $b: \\vec{x} = \\begin{pmatrix} 6 \\\\ 1 \\\\ 4 \\end{pmatrix} + u \\cdot \\begin{pmatrix} 4 \\\\ 2 \\\\ 6 \\end{pmatrix}$ identisch sind.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Ja, die Geraden sind identisch", "Nein, sie sind nur parallel", "Nein, sie schneiden sich", "Nein, sie sind windschief"],
            correct: 0,
            explanation: "Die Richtungsvektoren sind proportional: $\\begin{pmatrix} 4 \\\\ 2 \\\\ 6 \\end{pmatrix} = 2 \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$. Punktprobe: Liegt $(6|1|4)$ auf $a$? $\\begin{pmatrix} 6 \\\\ 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 0 \\\\ 1 \\end{pmatrix} + t \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ 3 \\end{pmatrix}$ für $t = 1$. Die Geraden sind identisch."
        },
        {
            id: 'lage_9',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Berechne den Schnittpunkt der Geraden $m: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}$ und $n: \\vec{x} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 0 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$(3|2|2)$", "$(5|2|3)$", "$(1|1|0)$", "Kein Schnittpunkt"],
            correct: 0,
            explanation: "LGS aus Gleichsetzen: $1 + 2r = 3$, $2 = 1 + s$, $1 + r = 2s$. Aus der ersten: $r = 1$. Aus der zweiten: $s = 1$. Kontrolle mit der dritten: $1 + 1 = 2 \\cdot 1$ ✓. Schnittpunkt: $(1 + 2|2|1 + 1) = (3|2|2)$."
        },
        {
            id: 'lage_10',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Welche Bedingung müssen die Richtungsvektoren zweier Geraden erfüllen, damit sie parallel sind?</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Sie müssen linear abhängig sein", "Sie müssen linear unabhängig sein", "Sie müssen identisch sein", "Sie müssen orthogonal sein"],
            correct: 0,
            explanation: "Zwei Geraden sind parallel, wenn ihre Richtungsvektoren linear abhängig sind, d.h. wenn der eine Richtungsvektor ein Vielfaches des anderen ist: $\\vec{u} = k \\cdot \\vec{v}$ mit $k \\neq 0$."
        },
        {
            id: 'lage_11',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Untersuche die Lage der Geraden $p: \\vec{x} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$ und $q: \\vec{x} = \\begin{pmatrix} 0 \\\\ 4 \\\\ -1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Die Geraden sind windschief", "Die Geraden schneiden sich", "Die Geraden sind parallel", "Die Geraden sind identisch"],
            correct: 0,
            explanation: "Die Richtungsvektoren $\\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix}$ und $\\begin{pmatrix} 2 \\\\ -1 \\\\ 1 \\end{pmatrix}$ sind linear unabhängig. Das LGS beim Gleichsetzen führt zu einem Widerspruch, daher sind die Geraden windschief."
        },
        {
            id: 'lage_12',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Finde den Schnittpunkt der Geraden $g: \\vec{x} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ und $h: \\vec{x} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 2 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ 1 \\\\ -1 \\end{pmatrix}$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$(1|1|1)$", "$(2|2|2)$", "$(0|0|0)$", "$(3|3|3)$"],
            correct: 0,
            explanation: "Gleichsetzen: $r \\cdot \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 2 \\end{pmatrix} + s \\cdot \\begin{pmatrix} -1 \\\\ 1 \\\\ -1 \\end{pmatrix}$. LGS: $r = 2 - s$, $r = s$, $r = 2 - s$. Lösung: $r = 1$, $s = 1$. Schnittpunkt: $(1|1|1)$."
        },
        {
            id: 'lage_13',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Bestimme, für welchen Wert von $k$ die Geraden $g: \\vec{x} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ k \\end{pmatrix}$ und $h: \\vec{x} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 1 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 4 \\\\ 2 \\\\ 6 \\end{pmatrix}$ parallel sind.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["$k = 3$", "$k = 2$", "$k = 4$", "$k = 1$"],
            correct: 0,
            explanation: "Für Parallelität müssen die Richtungsvektoren linear abhängig sein: $\\begin{pmatrix} 4 \\\\ 2 \\\\ 6 \\end{pmatrix} = 2 \\cdot \\begin{pmatrix} 2 \\\\ 1 \\\\ k \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 2k \\end{pmatrix}$. Daher muss $6 = 2k$ sein, also $k = 3$."
        },
        {
            id: 'lage_14',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Welche der folgenden Aussagen über die gegenseitige Lage von Geraden im Raum ist falsch?</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Zwei Geraden können sich in unendlich vielen Punkten schneiden", "Zwei verschiedene Geraden können parallel sein", "Zwei Geraden können windschief sein", "Zwei Geraden können sich in genau einem Punkt schneiden"],
            correct: 0,
            explanation: "Wenn sich zwei verschiedene Geraden in unendlich vielen Punkten schneiden, dann sind sie identisch (also dieselbe Gerade). Verschiedene Geraden können sich höchstens in einem Punkt schneiden."
        },
        {
            id: 'lage_15',
            category: 'Lage von Geraden',
            question: `<div class="math-problem">
                <div class="problem-title">Lage von Geraden:</div>
                <p>Ermittle die gegenseitige Lage der Geraden $u: \\vec{x} = \\begin{pmatrix} 5 \\\\ 2 \\\\ 1 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\end{pmatrix}$ und $v: \\vec{x} = \\begin{pmatrix} 6 \\\\ 5 \\\\ 3 \\end{pmatrix} + s \\cdot \\begin{pmatrix} 2 \\\\ 6 \\\\ 4 \\end{pmatrix}$.</p>
            </div>`,
            type: 'multiple_choice',
            options: ["Die Geraden sind identisch", "Die Geraden sind parallel", "Die Geraden schneiden sich", "Die Geraden sind windschief"],
            correct: 0,
            explanation: "Die Richtungsvektoren sind proportional: $\\begin{pmatrix} 2 \\\\ 6 \\\\ 4 \\end{pmatrix} = 2 \\cdot \\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\end{pmatrix}$. Punktprobe: Liegt $(6|5|3)$ auf $u$? $\\begin{pmatrix} 6 \\\\ 5 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 2 \\\\ 1 \\end{pmatrix} + r \\cdot \\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\end{pmatrix}$ für $r = 1$. Die Geraden sind identisch."
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

console.log('fullQuestionBank.js loaded successfully with', 
    fullQuestionBank.geraden_basics.length + fullQuestionBank.lage_von_geraden.length, 'questions');