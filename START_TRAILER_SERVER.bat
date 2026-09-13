@echo off
title MY MEDIA ARCHIVE Trailer Server
echo Starting local server...
echo Open: http://localhost:8000
python -m http.server 8000
pause
