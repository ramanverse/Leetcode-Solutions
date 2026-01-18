# 🍄 Super Mario Portfolio - User Guide

This project is a React application built with Vite. It uses a component-based structure, meaning each part of the website (like the Cards, the Stats, etc.) is its own separate file.

## 📁 Folder Structure

```
fifa-portfolio/
├── index.html              # The main entry file
├── src/
│   ├── App.jsx             # MAIN FILE: Controls the layout, navigation, and Hero text
│   ├── index.css           # GLOBAL STYLES: Colors, backgrounds, fonts, and ground strip
│   └── components/         # INDIVIDUAL BLOCKS
│       ├── FutCard.jsx     # The "Player Card" (Yellow Question Block style)
│       ├── StatsPanel.jsx  # The "Skills" section (Green Pipes)
│       ├── MatchList.jsx   # The "Projects" section (Level Select)
│       ├── TransferMarket.jsx # The "Contact" section (Game Over screen)
│       └── RunningMario.jsx   # The animated Mario at the bottom
```

## 🛠️ How to Edit Content

### 1. Change Player Name & Image
Edit **`src/App.jsx`**. Look for the `<FutCard />` component near line 92.
- Change `name="RAMAN"` to your name.
- Change `imageUrl="..."` to your photo URL.
- Change `rating={99}` to whatever number you want.

### 2. Change Text ("It's a me", etc.)
Edit **`src/App.jsx`**. The text is directly inside the `<h1>`, `<h2>`, and `<p>` tags in the `Overview` section.

### 3. Change Skills / Stats
Edit **`src/components/StatsPanel.jsx`**.
- Look for the `skills` object at the top of the file.
- Change names like 'JavaScript' or values like `99`.

### 4. Change Projects ("Matches")
Edit **`src/components/MatchList.jsx`**.
- Look for the `matches` array at the top.
- Add new items or change the existing levels.

### 5. Change Colors
Edit **`src/index.css`**. At the very top, you will see `:root { ... }`.
- `--bg-dark`: The sky blue background color.
- `--primary-gold`: The Mario Red color.
- `--accent-neon`: The Pipe Green color.

## 🚀 Running the Project
1. Open terminal in this folder.
2. Run `npm run dev` to see changes live.
3. Run `npm run build` to create a final version for deployment.
