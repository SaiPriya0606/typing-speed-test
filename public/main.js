// Initialize socket.io client
const socket = io();

// === Global State ===
let mode = "solo"; // solo, multi, duel
let playerNames = {};
let room = null;
let timerDuration = 60; // seconds
let timerId = null;
let timeLeft = timerDuration;
let isPaused = false;
let currentText = "";
let currentIndex = 0;
let mistakes = 0;
let startTime = null;
let wpm = 0;
let accuracy = 100;
let difficulty = "medium";
let category = "none";

const wordDisplay = document.getElementById("wordDisplay");
const inputBox = document.getElementById("inputBox");
const wpmStat = document.getElementById("wpmStat");
const accuracyStat = document.getElementById("accuracyStat");
const mistakesStat = document.getElementById("mistakesStat");
const timerStat = document.getElementById("timerStat");
const difficultySelect = document.getElementById("difficulty");
const categorySelect = document.getElementById("categorySelector");
const timerSelect = document.getElementById("timerSelector");
const pauseResumeBtn = document.getElementById("pauseResumeBtn");
const restartBtn = document.getElementById("restartBtn");
const shareLinkDiv = document.getElementById("shareLink");
const shareBtn = document.getElementById("shareBtn");
const themeToggle = document.getElementById("themeToggle");
const progressChartCtx = document.getElementById("progressChart").getContext("2d");
let progressChart = null;
const submitBtn = document.getElementById("submitBtn");


// === Utility Functions ===
function calculateWPM() {
  const minutes = (Date.now() - startTime) / 60000;
  const wordsTyped = currentIndex / 5;
  return Math.round(wordsTyped / minutes) || 0;
}

function calculateAccuracy() {
  const totalTyped = currentIndex + mistakes;
  if (totalTyped === 0) return 100;
  return Math.max(0, Math.round((currentIndex / totalTyped) * 100));
}

function resetGameState() {
  mistakes = 0;
  currentIndex = 0;
  timeLeft = timerDuration;
  isPaused = false;
  startTime = null;
  wpm = 0;
  accuracy = 100;
  shareLinkDiv.textContent = "";
  inputBox.value = "";
  inputBox.disabled = false;
  timerStat.textContent = `Time Left: ${timeLeft}s`;
  wpmStat.textContent = `WPM: 0`;
  accuracyStat.textContent = `Accuracy: 100%`;
  mistakesStat.textContent = `Mistakes: 0`;
  wordDisplay.style.color = "";
  updateProgressChart(0);
}

function updateProgressChart(wpmValue) {
  if (!progressChart) {
    progressChart = new Chart(progressChartCtx, {
      type: "line",
      data: {
        labels: [],
        datasets: [{
          label: "WPM",
          data: [],
          borderColor: "blue",
          fill: false,
          tension: 0.1,
        }]
      },
      options: {
        scales: {
          x: { title: { display: true, text: "Time (s)" } },
          y: { min: 0, max: 150, title: { display: true, text: "WPM" } }
        }
      }
    });
  }
  const labels = progressChart.data.labels;
  const data = progressChart.data.datasets[0].data;
  const elapsed = timerDuration - timeLeft;
  labels.push(elapsed);
  data.push(wpmValue);
  progressChart.update();
}

// === Text Content ===
const texts = {
  easy: ["The quick brown fox jumps over the lazy dog.", "Hello world!", "Typing is fun."],
  medium: [
    "Typing speed tests improve your keyboard skills.",
    "Practice daily to increase your accuracy and speed.",
    "Consistent effort leads to success."
  ],
  hard: [
    "Multitasking while typing can severely impact performance.",
    "Ergonomics and posture play a crucial role in long-term typing efficiency.",
    "Proficient typists rarely look at the keyboard."
  ],
  quotes: [
    "Life is what happens when you're busy making other plans.",
    "The only limit to our realization of tomorrow is our doubts of today."
  ],
  paragraphs: [
    "Typing tests are a great way to measure your skill and progress over time.",
    "This paragraph serves as an example to test your typing speed and accuracy."
  ],
  news: [
    "The local government has announced new regulations to improve traffic safety.",
    "Scientists have discovered a new species in the Amazon rainforest."
  ],
  vocab: ["Abdicate", "Benevolent", "Cacophony", "Deference", "Ebullient"]
};

// === Load Text ===
function loadText() {
  let pool = category !== "none" && texts[category] ? texts[category] : texts[difficulty];
  currentText = pool[Math.floor(Math.random() * pool.length)];
  wordDisplay.textContent = currentText;
}
function showCountdown(callback) {
  const countdownDiv = document.getElementById("countdown");
  let countdown = 3;

  countdownDiv.textContent = countdown;
  countdownDiv.style.display = "block";

  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      countdownDiv.textContent = countdown;
    } else {
      clearInterval(countdownInterval);
      countdownDiv.textContent = "Go!";
      setTimeout(() => {
        countdownDiv.style.display = "none";
        callback(); // Start actual game
      }, 500);
    }
  }, 1000);
}


// === Timer ===
function startTimer() {
  if (timerId) clearInterval(timerId);
  timeLeft = timerDuration;
  timerStat.textContent = `Time Left: ${timeLeft}s`;
  timerId = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      timerStat.textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerId);
        endGame();
      }
    }
  }, 1000);
}

// === End Game ===
function endGame() {
  inputBox.disabled = true;
  wpm = calculateWPM();
  accuracy = calculateAccuracy();
  wpmStat.textContent = `WPM: ${wpm}`;
  accuracyStat.textContent = `Accuracy: ${accuracy}%`;
  mistakesStat.textContent = `Mistakes: ${mistakes}`;
  shareLinkDiv.textContent = `Share your result: https://yourapp.com/result?wpm=${wpm}&accuracy=${accuracy}`;
  confetti();
  if (mode !== "solo") {
    socket.emit("updateProgress", { wpm });
    socket.emit("raceEnd");
  }
  saveScoreLocal(wpm);
}

// === Save Score Locally ===
function saveScoreLocal(wpmScore) {
  const leaderboard = JSON.parse(localStorage.getItem("typingLeaderboard") || "[]");
  leaderboard.push({ wpm: wpmScore, date: new Date().toISOString() });
  localStorage.setItem("typingLeaderboard", JSON.stringify(leaderboard));
  updateLeaderboardUI();
}

// === Update Leaderboard UI ===
function updateLeaderboardUI() {
  const leaderboard = JSON.parse(localStorage.getItem("typingLeaderboard") || "[]");
  const list = document.getElementById("leaderboard");
  list.innerHTML = "";
  leaderboard
    .sort((a, b) => b.wpm - a.wpm)
    .slice(0, 10)
    .forEach((entry, i) => {
      const li = document.createElement("li");
      const d = new Date(entry.date);
      li.textContent = `${i + 1}. ${entry.wpm} WPM (${d.toLocaleDateString()})`;
      list.appendChild(li);
    });
}

// === Typing Input Handler ===
inputBox.addEventListener("input", () => {
  if (!startTime) startTime = Date.now();
  if (isPaused) return;

  const typed = inputBox.value.trim();
  const fullWords = currentText.split(" ");
  const typedWords = typed.split(" ");
  mistakes = 0;

  for (let i = 0; i < typedWords.length; i++) {
    if (fullWords[i] !== undefined && fullWords[i] !== typedWords[i]) {
      mistakes++;
    }
  }

  currentIndex = typed.replace(/\s+/g, "").length;
  wpm = calculateWPM();
  accuracy = calculateAccuracy();

  wpmStat.textContent = `WPM: ${wpm}`;
  accuracyStat.textContent = `Accuracy: ${accuracy}%`;
  mistakesStat.textContent = `Mistakes: ${mistakes}`;
  updateProgressChart(wpm);

  if (mode !== "solo") {
    socket.emit("updateProgress", { wpm });
  }

  if (typedWords.length >= fullWords.length && inputBox.value.endsWith(" ")) {
    endGame();
  }
});

// === Buttons & Selectors ===
pauseResumeBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseResumeBtn.textContent = isPaused ? "▶️ Resume" : "⏸ Pause";
});

restartBtn.addEventListener("click", () => {
  resetGameState();
  loadText();
  showCountdown(() => {
    startTimer();
    inputBox.focus();
  });
});


difficultySelect.addEventListener("change", e => {
  difficulty = e.target.value;
  loadText();
  resetGameState();
});

categorySelect.addEventListener("change", e => {
  category = e.target.value;
  loadText();
  resetGameState();
});

timerSelect.addEventListener("change", e => {
  timerDuration = parseInt(e.target.value, 10);
  resetGameState();
  loadText();
});

shareBtn.addEventListener("click", () => {
  const text = shareLinkDiv.textContent;
  if (text) {
    navigator.clipboard.writeText(text).then(() => alert("Result copied to clipboard!"));
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

submitBtn.addEventListener("click", () => {
  const typed = inputBox.value.trim();
  const expected = currentText.trim();

  // Count mistakes silently
  const typedWords = typed.split(/\s+/);
  const expectedWords = expected.split(/\s+/);
  mistakes = 0;

  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords[i] !== expectedWords[i]) {
      mistakes++;
    }
  }

  currentIndex = typed.replace(/\s+/g, "").length;
  wpm = calculateWPM();
  accuracy = calculateAccuracy();

  wpmStat.textContent = `WPM: ${wpm}`;
  accuracyStat.textContent = `Accuracy: ${accuracy}%`;
  mistakesStat.textContent = `Mistakes: ${mistakes}`;

  if (mode !== "solo") {
    socket.emit("updateProgress", { wpm });
  }

  updateProgressChart(wpm);

  // Load next text no matter what
  loadText();
  inputBox.value = "";
  inputBox.focus();
});


// === Initialization ===
function init() {
  const params = new URLSearchParams(window.location.search);
  mode = params.get("mode") || "solo";
  playerNames.p1 = params.get("p1") || "Player 1";
  playerNames.p2 = params.get("p2") || "Player 2";
  room = params.get("room") || null;

  document.title = `Typing Race - ${mode.toUpperCase()}`;
  updateLeaderboardUI();
  loadText();
  resetGameState();
  showCountdown(() => {
  startTimer();
  inputBox.focus();
});


  if (mode === "multi" || mode === "duel") {
    document.getElementById("mpLeaderboardHeader").style.display = "block";
    socket.emit("joinRoom", { room: room || "global", name: playerNames.p1 });

    socket.on("progressUpdate", data => {
      const mpList = document.getElementById("mpLeaderboard");
      mpList.innerHTML = "";
      Object.values(data).forEach(({ name, wpm }) => {
        const li = document.createElement("li");
        li.textContent = `${name}: ${wpm} WPM`;
        mpList.appendChild(li);
      });
    });

    socket.on("announceWinner", ({ name, wpm }) => {
      confetti();
      alert(`🎉 Winner: ${name} with ${wpm} WPM!`);
    });
  }

  inputBox.focus();
}

document.getElementById("useCustomParagraph").addEventListener("click", () => {
  const txt = document.getElementById("customParagraph").value.trim();
  if (txt) {
    currentText = txt;
    wordDisplay.textContent = currentText;
    resetGameState();
    startTimer();
    inputBox.focus();
  }
});

// Start everything
window.onload = init;
