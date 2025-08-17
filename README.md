# Tic‑Tac‑Toe (React)

Author: Balagangadhar Reddy Sir

## Assignment Summary

This project is a customized implementation of the official React Tic‑Tac‑Toe tutorial with added styling, UI/UX improvements, and features required by the assignment:

- Redesigned board and move list with modern styling and responsive layout
- Prominent animated winner banner and highlighted winning squares
- "Reset Game" button to clear the board and history
- Deployed to GitHub Pages for public access

Follow the submission guidelines: include a link to the public GitHub repository and the live GitHub Pages URL.

## Live Demo

Deployment URL (GitHub Pages): https://GovardhaneNitin.github.io/tic-tac-toe

Repository: https://github.com/GovardhaneNitin/tic-tac-toe

## Features

- Modern responsive UI with custom fonts and color palette
- Animated winner banner and pulsing highlight for winning squares
- Reset Game button to restart play
- Move list with the ability to jump to any previous move
- Draw detection

## How to run locally

Prerequisites: Node.js (14+), npm, and Git.

Open PowerShell in the project root (`tic-tac-toe`) and run:

```powershell
npm install
npm start
```

The app will open at http://localhost:3000 by default.

## Build and deploy to GitHub Pages

1. In `package.json` set the `homepage` field to:

```
https://<GITHUB_USERNAME>.github.io/tic-tac-toe
```

2. Commit and push your code to a public GitHub repository named `tic-tac-toe`.

3. From the project root run:

```powershell
npm install
npm run deploy
```

This will build the app and publish the `build/` folder to the `gh-pages` branch. The site will be available at the URL above (GitHub Pages may take a minute to activate).

## Project structure (important files)

- `src/App.js` — main game component and logic
- `src/styles.css` — styling (theme, board, animations)
- `public/index.html` — HTML template
- `package.json` — project metadata, scripts, and deploy configuration

## Tech stack

- React (create-react-app)
- CSS (modern, responsive grid)
- GitHub Pages for deployment

## Notes and future improvements

- Add score tracking and localStorage persistence
- Add optional confetti/sound on win
- Add unit tests for game logic

---

Made by Nitin Govardhane with ❤️

Open for contributions!
