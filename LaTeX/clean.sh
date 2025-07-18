#!/bin/bash

# LaTeX Clean Script
# Entfernt temporäre LaTeX-Dateien

echo "Bereinige temporäre LaTeX-Dateien..."

# Entferne alle temporären Dateien
rm -f *.aux *.log *.out *.toc *.bbl *.blg *.idx *.ind *.ilg *.fls *.fdb_latexmk *.synctex.gz

echo "✓ Temporäre Dateien bereinigt"