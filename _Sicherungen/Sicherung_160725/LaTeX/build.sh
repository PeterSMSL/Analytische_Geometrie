#!/bin/bash

# LaTeX Build Script
# Verwendung: ./build.sh dateiname (ohne .tex)

if [ $# -eq 0 ]; then
    echo "Verwendung: $0 dateiname (ohne .tex Endung)"
    echo "Beispiel: $0 test"
    exit 1
fi

FILENAME=$1

if [ ! -f "${FILENAME}.tex" ]; then
    echo "Fehler: ${FILENAME}.tex nicht gefunden!"
    exit 1
fi

echo "Kompiliere ${FILENAME}.tex..."

# Kompiliere das Dokument
pdflatex "${FILENAME}.tex"

if [ $? -eq 0 ]; then
    echo "✓ Erfolgreich kompiliert: ${FILENAME}.pdf"
    
    # Aufräumen der temporären Dateien
    rm -f "${FILENAME}.aux" "${FILENAME}.log"
    
    echo "✓ Temporäre Dateien bereinigt"
else
    echo "✗ Fehler beim Kompilieren!"
    exit 1
fi