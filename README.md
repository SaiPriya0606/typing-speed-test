# 🚀 Typing Speed Race 🏎️💨

A real-time typing speed game where players can practice solo or compete with others globally.  
Track **WPM**, **accuracy**, and **progress charts** while improving typing skills through fun challenges.

<p align="center">
  <img src="https://img.shields.io/badge/Express.js-4.18.2-brightgreen" alt="Express.js">
  <img src="https://img.shields.io/badge/Socket.io-4.8.1-blue" alt="Socket.io">
  <img src="https://img.shields.io/badge/Chart.js-latest-orange" alt="Chart.js">
  <img src="https://img.shields.io/badge/Node.js-20+-green" alt="Node.js">
</p>

<p align="center">
  <img src="public/Screenshots/Welcome.png" alt="Typing App Preview" width="650">
</p>

---

## 🚀 Live Demo

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/SaiPriya0606/typing-speed-test)

🔗 **Live URL:**  
👉 https://typing-speed-test-9s3o.onrender.com

---

## ✨ Features

### 🎯 Core Typing Game
- Real-time **WPM & Accuracy** tracking  
- Timer options: **15s, 30s, 60s, 120s**  
- Mistake tracking & highlighting  
- Progress charts using **Chart.js**  
- **LocalStorage leaderboard**  

### 🎮 Game Modes
- **Single Player** – Solo practice  
- **Multiplayer** – Global room competition (Socket.io)  
- **Typing Duel (1v1)** – Private friend battles  

### 📝 Content Modes
- Difficulty: **Easy | Medium | Hard**  
- Content: **Quotes | Paragraphs | News | Vocabulary**  

### 🌟 Extra Features
- Light / Dark theme toggle  
- Pause, Resume & Restart  
- Custom paragraph typing  
- Fully responsive (Mobile + Desktop)  
- Confetti winner animations  
- Shareable result links  

---

## 📱 Screenshots

| Welcome Page | Game Interface | Progress Chart |
|--------------|----------------|----------------|
| ![Welcome](public/Screenshots/Welcome.png) | ![Game](public/Screenshots/index1.png) | ![Chart](public/Screenshots/index4.png) |

---

## 🛠️ Local Setup

### 1️⃣ Clone the repository
git clone https://github.com/SaiPriya0606/typing-speed-test.git
cd typing-speed-test

### 2️⃣ Install dependencies
npm install

🌐 Open in browser:  
http://localhost:3000

---

## 🏗️ Folder Structure

typing-race/
├── server.js # Express + Socket.io server
├── package.json # Project dependencies
├── public/
│ ├── index.html # Main game page
│ ├── welcome.html # Mode selection page
│ ├── main.js # Game logic
│ └── style.css # Responsive styles
└── .gitignore

---

## ⚙️ Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript, Chart.js, Socket.io-client  
**Backend:** Node.js, Express.js, Socket.io  
**Storage:** LocalStorage (Leaderboard)  
**Deployment:** Render.com  

---

## 🎮 How to Play

1. Choose a mode: Single Player / Multiplayer / Typing Duel  
2. Enter player name(s)  
3. Select difficulty level  
4. Start typing and track WPM in real-time  
5. Beat the timer — highest WPM wins 🏆  

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch:  
git checkout -b feature/amazing-feature

3. Commit your changes:  
git commit -m "Add amazing feature"

4. Push to branch:  
git push origin feature/amazing-feature
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for details.

---

## 👨‍💻 Author

**Sai Priya**  
[GitHub](https://github.com/SaiPriya0606)

⭐ If you found this project useful, don’t forget to **star the repo**!
