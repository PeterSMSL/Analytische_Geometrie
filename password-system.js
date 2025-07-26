// Zentrales Passwort-System für alle Kapitel
// Passwörter sind hier direkt gespeichert (wegen CORS-Policy bei file://)

// Passwort-Mapping
const passwords = {
    '01_LGS': '342951',
    '02_Punkte-im-Raum': '784629',
    '03_Vektoren': '156834',
    '04_Skalarprodukt': '927403',
    '05_Vektorprodukt': '501762',
    '07_Geraden_und_Lage-von-Geraden': '619837'
};

// Globales Passwort für aktuelles Kapitel
window.correctPassword = 'test'; // Fallback

// Kapitel aus der aktuellen URL ermitteln
function getCurrentChapter() {
    const path = window.location.pathname;
    if (path.includes('01_LGS')) return '01_LGS';
    if (path.includes('02_Punkte-im-Raum')) return '02_Punkte-im-Raum';
    if (path.includes('03_Vektoren')) return '03_Vektoren';
    if (path.includes('04_Skalarprodukt')) return '04_Skalarprodukt';
    if (path.includes('05_Vektorprodukt')) return '05_Vektorprodukt';
    if (path.includes('07_Geraden_und_Lage-von-Geraden')) return '07_Geraden_und_Lage-von-Geraden';
    return null;
}

// Passwort für aktuelles Kapitel setzen
function loadPassword() {
    const chapter = getCurrentChapter();
    
    if (chapter && passwords[chapter]) {
        window.correctPassword = passwords[chapter];
        console.log('Password loaded for chapter:', chapter);
    } else {
        console.log('Chapter not detected or no password found, using fallback password');
    }
}

// Passwort beim Laden der Seite initialisieren
document.addEventListener('DOMContentLoaded', function() {
    loadPassword();
});

// Passwort sofort laden (falls DOMContentLoaded bereits ausgeführt)
loadPassword();