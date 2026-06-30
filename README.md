# 🚀 Typing Speed Race

### ⚡ Real-Time Multiplayer Typing Game with Live Progress Tracking

A modern **full-stack typing speed application** built using **Node.js**, **Express.js**, **Socket.IO**, **HTML5**, **CSS3**, and **JavaScript**.

Typing Speed Race helps users improve their typing skills through **Single Player**, **Multiplayer**, and **Private Typing Duel** modes while tracking **Words Per Minute (WPM)**, **Accuracy**, **Mistakes**, and **Live Progress Charts**.

The application also supports **custom typing practice**, **multiple difficulty levels**, **multiple content categories**, **configurable timers**, **theme switching**, and **real-time multiplayer races** using Socket.IO.

---

<p align="center">

<img src="https://img.shields.io/badge/Node.js-20+-green"/>

<img src="https://img.shields.io/badge/Express.js-4.x-brightgreen"/>

<img src="https://img.shields.io/badge/Socket.IO-4.8.1-black"/>

<img src="https://img.shields.io/badge/Chart.js-Latest-orange"/>

<img src="https://img.shields.io/badge/JavaScript-ES6-yellow"/>

<img src="https://img.shields.io/badge/HTML5-CSS3-blue"/>

<img src="https://img.shields.io/badge/License-MIT-success"/>

</p>

---

<p align="center">

<<<<<<< HEAD
📝 App opens with a **Welcome Page**, then redirects to the game after mode selection.
=======
<img src="public/Screenshots/Welcome.png" width="850">

</p>
>>>>>>> 5bb2803 (Update README.md)

---

# 🌐 Live Demo

### 🔗 Live Application

https://typing-speed-test-9s3o.onrender.com

---

# 📑 Table of Contents

- Overview
- Highlights
- Features
- Screenshots
- Application Flow
- Routes
- How to Play
- Installation
- Project Structure
- System Architecture
- Tech Stack
- Feature Comparison
- Project Statistics
- Future Enhancements
- Troubleshooting
- Contributing
- License
- Author

---

# 📖 Overview

Typing Speed Race is an interactive typing practice platform designed to improve typing speed and accuracy through engaging game modes.

The application provides three different gameplay modes:

- 🧍 Single Player
- 👥 Multiplayer (Same Device / Room-Based)
- ⚔️ Private Typing Duel (1 vs 1)

Users can monitor their typing performance using:

- Words Per Minute (WPM)
- Accuracy Percentage
- Mistake Counter
- Live Countdown Timer
- Progress Chart
- Leaderboard

The application uses **Socket.IO** to synchronize multiplayer races in real time and **Chart.js** to visualize typing performance.

---

# ⭐ Highlights

- 🚀 Real-Time Multiplayer Racing
- ⚔️ Private Typing Duel (1 vs 1)
- ⚡ Live WPM Calculation
- 🎯 Accuracy Tracking
- ❌ Mistake Detection
- 📊 Live Progress Chart
- 🌙 Dark / Light Theme
- 🏆 Leaderboard
- 📝 Custom Typing Paragraph
- 🔗 Share Score
- ⏱ Multiple Timer Options
- 🎚 Difficulty Levels
- 📚 Multiple Text Categories
- 📱 Responsive Design
- 🎉 Winner Celebration using Confetti

---
# ✨ Features

---

# 🎯 Core Features

### ⚡ Real-Time Typing Test

- Displays typing passages instantly.
- Starts with a countdown before each race.
- Calculates typing speed continuously.
- Updates performance statistics in real time.

---

### 📊 Live Performance Tracking

The application continuously tracks:

- Words Per Minute (WPM)
- Accuracy (%)
- Mistakes
- Remaining Time
- Typing Progress

---

### 🎚 Difficulty Levels

Users can select different typing difficulties.

- 🟢 Easy
- 🟡 Medium
- 🔴 Hard

Each difficulty presents different typing content to suit various skill levels.

---

### 📚 Content Categories

Practice with multiple text categories.

- Quotes
- Paragraphs
- News
- Vocabulary
- Custom Text

---

### 📝 Custom Paragraph Practice

Users can type their own custom paragraph for practice.

Features include:

- Custom text input
- Load custom paragraph
- Practice with personalized content

---

### ⏱ Flexible Timer Options

Choose the duration of the typing race.

Available options:

- 15 Seconds
- 30 Seconds
- 60 Seconds
- 120 Seconds

---

### ⏸ Game Controls

Players can control the race using:

- Pause
- Resume
- Restart

---

### 🎯 Accuracy Tracking

The application automatically calculates:

- Correct words
- Incorrect words
- Typing Accuracy

Accuracy updates live while typing.

---

### ❌ Mistake Counter

Every incorrect word increases the mistake counter.

Mistakes are displayed in real time throughout the race.

---

### ⚡ WPM Calculation

Words Per Minute (WPM) is calculated continuously based on typing performance.

The value updates live during gameplay.

---

### 📊 Progress Visualization

A live performance chart is displayed using **Chart.js**.

The graph visualizes:

- Typing speed over time
- Performance trend
- WPM progression

---

### 🏆 Leaderboard

After each game:

- Player scores are stored.
- Results are displayed in the leaderboard.
- Users can compare their performance.

---

### 🌙 Dark / Light Theme

Supports theme switching.

Available themes:

- Light Mode
- Dark Mode

Users can switch themes at any time.

---

### 🔗 Share Score

Players can generate and share their typing results after completing a race.

---

# 👥 Multiplayer Features

---

### 🏁 Room-Based Multiplayer

Supports real-time multiplayer races using **Socket.IO**.

Players can:

- Join the same room
- Race simultaneously
- View live progress
- Compete for the highest WPM

---

### ⚔️ Private Typing Duel (1 vs 1)

Players can:

- Enter their name
- Create a private duel room
- Generate a unique duel link
- Share the link
- Join the same race with a friend

---

### 📡 Real-Time Progress Updates

During multiplayer races the application synchronizes:

- Live WPM
- Player Progress
- Race Status
- Winner Announcement

using **Socket.IO**.

---

### 🎉 Winner Celebration

After the race ends:

- The player with the highest WPM is declared the winner.
- Confetti animation celebrates the victory.

---

# 🎮 Available Game Modes

| Mode | Description |
|------|-------------|
| 🧍 Single Player | Practice typing individually |
| 👥 Multiplayer | Two players race in the same room |
| ⚔️ Typing Duel | Create and share a private duel link |

---

# 📱 Responsive Design

The application is fully responsive and works across:

- Desktop
- Laptop
- Tablet
- Mobile Devices

The interface automatically adjusts to different screen sizes.

---

# 🔥 Key Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js
- Express.js
- Socket.IO
- Chart.js
- Canvas Confetti

---
# 📸 Screenshots

---

## 🏠 Welcome Page

The welcome page allows players to:

- Select a game mode
- Enter player name(s)
- Create or join a private typing duel
- Start the typing race

<p align="center">

<img src="public/Screenshots/Welcome.png" width="850">

</p>

---

## ⌨️ Game Screen

The main game interface includes:

- Countdown before race
- Typing passage
- Input box
- Live WPM
- Accuracy
- Mistakes
- Remaining Time
- Difficulty Selection
- Category Selection
- Timer Selection
- Pause / Resume
- Restart
- Custom Paragraph Support

<p align="center">

<img src="public/Screenshots/index1.png" width="850">

</p>

---

## 📊 Progress Chart

After or during gameplay, the application displays a live performance chart showing typing speed over time.

The chart helps users analyze their typing consistency and improvement.

<p align="center">

<img src="public/Screenshots/index4.png" width="850">

</p>

---

# 🧭 Application Flow

```text
                 ┌──────────────────────┐
                 │     Welcome Page     │
                 └──────────┬───────────┘
                            │
                            ▼
                Select Game Mode
                            │
                            ▼
                 Enter Player Name(s)
                            │
                            ▼
                    Click Start Game
                            │
                            ▼
                  3-Second Countdown
                            │
                            ▼
                 Typing Race Begins
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
   Calculate WPM      Track Accuracy     Count Mistakes
        │                   │                   │
        └───────────────────┼───────────────────┘
                            ▼
                  Update Progress Chart
                            │
                            ▼
                  Update Leaderboard
                            │
                            ▼
              Multiplayer Winner Detection
                            │
                            ▼
                    Display Final Results
```

---

# 🌐 Application Routes

| Route | Description |
|-------|-------------|
| `/` | Welcome Page |
| `/game` | Main Typing Game |
| `*` | Redirects to Welcome Page |

---

# 🔄 Multiplayer Workflow

```text
Player A
     │
     ▼
Create Duel Room
     │
     ▼
Generate Duel Link
     │
     ▼
Share Link
     │
     ▼
Player B Opens Link
     │
     ▼
Both Players Join Same Room
     │
     ▼
Countdown Starts
     │
     ▼
Typing Race Begins
     │
     ▼
Socket.IO Syncs Progress
     │
     ▼
Highest WPM Wins
     │
     ▼
Winner Announcement
```

---

# 📊 Performance Metrics

The application continuously measures:

| Metric | Description |
|---------|-------------|
| WPM | Words typed per minute |
| Accuracy | Percentage of correctly typed words |
| Mistakes | Number of incorrect words |
| Time Left | Remaining race time |
| Progress | Live WPM trend shown using Chart.js |

---

# 🎯 User Journey

```text
Open Application
        │
        ▼
Choose Mode
        │
        ▼
Enter Name
        │
        ▼
Configure Settings
        │
        ├── Difficulty
        ├── Category
        └── Timer
        │
        ▼
Start Race
        │
        ▼
Type the Passage
        │
        ▼
View Results
        │
        ├── WPM
        ├── Accuracy
        ├── Mistakes
        ├── Leaderboard
        └── Progress Chart
```

---
# 🎮 How to Play

Typing Speed Race offers three gameplay modes designed for both practice and competition. Follow the instructions below to start playing.

---

# 🧍 Single Player Mode

Single Player mode is designed for individual typing practice.

### Steps

1. Open the application.
2. Select **Single Player**.
3. Enter your name.
4. Choose a difficulty level.
5. Select a content category.
6. Select the race timer.
7. Click **Start Game**.
8. Wait for the countdown to finish.
9. Begin typing the displayed text.
10. Complete the race before the timer expires.
11. View your final results and performance chart.

---

### Single Player Features

- Live WPM Calculation
- Accuracy Tracking
- Mistake Counter
- Countdown Timer
- Progress Chart
- Leaderboard
- Theme Toggle
- Custom Paragraph Support

---

# 👥 Multiplayer Mode

Multiplayer mode allows two players to compete in a real-time typing race.

### Steps

1. Open the Welcome Page.
2. Select **Multiplayer**.
3. Enter both player names.
4. Click **Start Game**.
5. Wait for the countdown.
6. Both players type the displayed passage simultaneously.
7. Live progress updates are synchronized using Socket.IO.
8. After the race, the player with the highest WPM is declared the winner.

---

### Multiplayer Features

- Real-Time Progress Updates
- Live WPM Comparison
- Winner Announcement
- Multiplayer History
- Confetti Celebration

---

# ⚔️ Private Typing Duel

Typing Duel allows two players to compete using a private room link.

### Create a Duel

1. Enter your name.
2. Click **Create Duel**.
3. A unique duel link is generated.
4. Copy the generated link.
5. Share the link with your friend.

---

### Join a Duel

1. Open the shared duel link.
2. Enter your player name (if prompted).
3. Join the private room.
4. Wait for the race to begin.
5. Compete against your opponent in real time.

---

### Duel Features

- Private Room
- Shareable Duel Link
- Live Progress Synchronization
- Winner Detection
- Confetti Animation

---

# ⚙️ Game Settings

Before starting a race, players can customize the game.

## 🎚 Difficulty Levels

Choose one of the following:

- 🟢 Easy
- 🟡 Medium
- 🔴 Hard

Difficulty affects the typing content presented during the race.

---

## 📚 Content Categories

Practice using different text types.

Available categories:

- Quotes
- Paragraphs
- News
- Vocabulary
- Custom Text

---

## ⏱ Timer Options

Choose the duration of the typing race.

Available timers:

- 15 Seconds
- 30 Seconds
- 60 Seconds
- 120 Seconds

---

# ⌨️ During the Race

While typing, the application continuously displays:

- Current WPM
- Accuracy Percentage
- Mistakes
- Remaining Time
- Typing Progress

The progress chart updates in real time throughout the race.

---

# 📊 After the Race

When the timer ends or the race is completed, the application displays:

- Final WPM
- Final Accuracy
- Total Mistakes
- Progress Chart
- Leaderboard Position
- Multiplayer Winner (if applicable)

Players can also share their typing results.

---

# 🌙 Theme Switching

The application supports both Light Mode and Dark Mode.

Click the **Toggle Theme** button at any time to switch between themes.

---

# 💡 Tips for Better Performance

- Focus on typing accurately before increasing speed.
- Avoid looking at the keyboard.
- Practice with different categories.
- Use longer timers for endurance practice.
- Review your progress chart after every race.
- Reduce mistakes to improve overall WPM.
- Practice regularly using Custom Paragraph mode.

---

# 🏆 Winning Strategy

To achieve the best results:

- Maintain high typing accuracy.
- Minimize mistakes.
- Keep a consistent typing speed.
- Finish the passage quickly.
- Practice regularly to improve muscle memory.

---
# 🛠 Installation

Follow the steps below to set up and run the Typing Speed Race project on your local machine.

---

## 📋 Prerequisites

Make sure the following software is installed:

- Node.js (v18 or later recommended)
- npm (comes with Node.js)
- Git

Verify the installation:

```bash
node -v
npm -v
git --version
```

---

# 📥 Clone the Repository

```bash
git clone https://github.com/SaiPriya0606/typing-speed-test.git
```

---

# 📂 Navigate to the Project Folder

```bash
cd typing-speed-test
```

---

# 📦 Install Dependencies

Install all required Node.js packages.

```bash
npm install
```

This command installs:

- Express.js
- Socket.IO

along with all required dependencies listed in `package-lock.json`.

---

# ▶️ Start the Server

Run the application using:

```bash
npm start
```

The Express server will start successfully.

Example:

```text
Server running on http://localhost:3000
```

---

# 🌐 Open the Application

Open your browser and visit:

```
http://localhost:3000
```

The Welcome Page will appear.

---

# 🚀 Running Multiplayer

To test multiplayer functionality:

1. Start the server.
2. Open two browser tabs or two different browsers.
3. Join the same room (or use the generated duel link).
4. Start typing simultaneously.
5. Watch live progress updates.

---

# 📁 Project Structure

```text
typing-speed-test/
│
├── package.json
├── package-lock.json
├── server.js
│
├── public/
│   │
│   ├── welcome.html          # Welcome page
│   ├── index.html            # Main game interface
│   ├── style.css             # Application styles
│   ├── main.js               # Game logic
│   │
│   └── Screenshots/
│       ├── Welcome.png
│       ├── index1.png
│       └── index4.png
│
└── README.md
```

---

# 📄 File Description

## 📌 server.js

Backend server built with:

- Express.js
- Socket.IO

Responsibilities:

- Serve application pages
- Handle routing
- Manage multiplayer rooms
- Synchronize player progress
- Detect race winners

---

## 📌 welcome.html

Landing page of the application.

Features:

- Select game mode
- Enter player name(s)
- Create private duel
- Join duel
- Start game

---

## 📌 index.html

Main typing interface.

Contains:

- Typing area
- Statistics panel
- Timer selector
- Difficulty selector
- Category selector
- Progress chart
- Leaderboard
- Theme toggle
- Custom paragraph section

---

## 📌 main.js

Core application logic.

Handles:

- Typing engine
- Timer
- Countdown
- WPM calculation
- Accuracy calculation
- Mistake detection
- Progress chart
- Theme switching
- Multiplayer updates
- Leaderboard
- Share score

---

## 📌 style.css

Provides styling for:

- Welcome page
- Game interface
- Buttons
- Forms
- Progress chart
- Responsive layout
- Dark theme

---

## 📌 package.json

Project configuration file.

Contains:

- Project metadata
- Dependencies
- Start script

---

## 📌 package-lock.json

Automatically generated dependency lock file.

Ensures:

- Consistent package versions
- Reliable installations
- Dependency integrity

---

# ⚙️ Available NPM Commands

| Command | Description |
|----------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Start the Express server |

---

# 🌍 Default Application Routes

| Route | Purpose |
|---------|---------------------------|
| `/` | Welcome Page |
| `/game` | Typing Game |
| `*` | Redirect to Welcome Page |

---

# ✅ Installation Complete

Once the server is running, you can:

- Practice in Single Player mode
- Play Multiplayer races
- Create Private Typing Duels
- Track your WPM and Accuracy
- View Progress Charts
- Share your typing results

---
# 🏗️ System Architecture

The application follows a client-server architecture where the frontend communicates with an Express.js backend. Real-time multiplayer communication is handled using Socket.IO.

```text
                           ┌───────────────────────┐
                           │        User           │
                           └───────────┬───────────┘
                                       │
                                       ▼
                         Welcome Page (welcome.html)
                                       │
                                       ▼
                          Select Mode & Enter Name
                                       │
                                       ▼
                             Main Game (index.html)
                                       │
             ┌─────────────────────────┼─────────────────────────┐
             ▼                         ▼                         ▼
      Typing Engine             UI Components            Progress Chart
         (main.js)              (HTML & CSS)              (Chart.js)
             │                         │
             └──────────────┬──────────┘
                            ▼
                    Socket.IO Client
                            │
────────────────────────────┼────────────────────────────
                            │
                            ▼
                  Express.js + Socket.IO Server
                        (server.js)
                            │
            ┌───────────────┼────────────────┐
            ▼               ▼                ▼
       Room Management   Live Updates   Winner Detection
                            │
                            ▼
                    Response to Clients
```

---

# ⚙️ Working Architecture

### Step 1 – Welcome Page

The application starts with the Welcome Page where users can:

- Select the game mode
- Enter player name(s)
- Create a private duel
- Join an existing duel

---

### Step 2 – Game Initialization

When the **Start Game** button is clicked:

- Selected mode is detected
- Player information is collected
- The game page (`/game`) is opened
- A countdown begins

---

### Step 3 – Typing Engine

The Typing Engine is responsible for:

- Displaying typing text
- Receiving user input
- Validating typed words
- Counting mistakes
- Updating WPM
- Calculating accuracy

---

### Step 4 – Live Statistics

During gameplay the application continuously updates:

- Words Per Minute (WPM)
- Accuracy
- Mistakes
- Remaining Time
- Progress Chart

---

### Step 5 – Multiplayer Communication

For Multiplayer and Typing Duel modes:

Socket.IO handles:

- Room creation
- Player synchronization
- Live WPM updates
- Progress synchronization
- Winner announcement

---

### Step 6 – Race Completion

When the race finishes:

- Final WPM is calculated
- Accuracy is calculated
- Leaderboard is updated
- Progress chart is displayed
- Winner is announced (Multiplayer/Duel)

---

# 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Application Structure |
| CSS3 | Styling & Responsive Design |
| JavaScript (ES6) | Client-side Game Logic |
| Node.js | JavaScript Runtime |
| Express.js | Backend Web Server |
| Socket.IO | Real-Time Multiplayer Communication |
| Chart.js | Progress Visualization |
| Canvas Confetti | Winner Celebration Animation |
| Local Storage | Client-side leaderboard/history storage |

---

# 📦 Project Components

## Frontend

Responsible for:

- User Interface
- Typing Experience
- Theme Switching
- Statistics Display
- Progress Chart
- Leaderboard Display

Files:

```
welcome.html
index.html
style.css
main.js
```

---

## Backend

Responsible for:

- Serving Web Pages
- Socket.IO Communication
- Multiplayer Rooms
- Winner Detection
- Player Synchronization

Files:

```
server.js
```

---

## Package Management

Responsible for:

- Dependency Installation
- Project Scripts
- Version Management

Files:

```
package.json
package-lock.json
```

---

# 📡 Socket.IO Communication Flow

```text
Player A
     │
     ▼
Join Room
     │
     ▼
Server Receives Request
     │
     ▼
Player Added to Room
     │
     ▼
Broadcast Player List
     │
     ▼
Live Progress Updates
     │
     ▼
Race Ends
     │
     ▼
Winner Calculated
     │
     ▼
Broadcast Winner
```

---

# 📊 Performance Metrics

The application evaluates typing performance using the following metrics.

| Metric | Description |
|---------|-------------|
| WPM | Words typed per minute |
| Accuracy | Percentage of correctly typed words |
| Mistakes | Number of incorrect words |
| Time Left | Remaining race duration |
| Progress Chart | Live visualization of WPM over time |

---

# 📋 Feature Comparison

| Feature | Single Player | Multiplayer | Typing Duel |
|---------|:-------------:|:-----------:|:-----------:|
| Typing Practice | ✅ | ✅ | ✅ |
| WPM Tracking | ✅ | ✅ | ✅ |
| Accuracy Tracking | ✅ | ✅ | ✅ |
| Mistake Counter | ✅ | ✅ | ✅ |
| Countdown Timer | ✅ | ✅ | ✅ |
| Progress Chart | ✅ | ✅ | ✅ |
| Leaderboard | ✅ | ✅ | ✅ |
| Theme Toggle | ✅ | ✅ | ✅ |
| Custom Paragraph | ✅ | ✅ | ✅ |
| Pause / Resume | ✅ | ✅ | ✅ |
| Restart Game | ✅ | ✅ | ✅ |
| Live Progress Updates | ❌ | ✅ | ✅ |
| Room-Based Play | ❌ | ✅ | ✅ |
| Winner Detection | ❌ | ✅ | ✅ |
| Confetti Celebration | ❌ | ✅ | ✅ |

---

# 🔒 Current Limitations

The current implementation is intentionally lightweight and does not include:

- User authentication
- Database integration
- Cloud-based leaderboard
- User profiles
- Match history storage
- Admin dashboard

These features can be added in future versions.

---
# 📊 Project Statistics

The project is built as a lightweight full-stack web application with real-time multiplayer capabilities.

| Category | Details |
|----------|---------|
| Frontend Files | 4 |
| Backend Files | 1 |
| Styling Files | 1 |
| JavaScript Files | 2 |
| Typing Modes | 3 |
| Difficulty Levels | 3 |
| Content Categories | 5 |
| Timer Options | 4 |
| Real-Time Communication | Socket.IO |
| Charts | Chart.js |
| Backend Framework | Express.js |
| Runtime | Node.js |
| Deployment | Render |

---

# 📈 Key Features Summary

## 🎯 Typing Features

- ✅ Live WPM Calculation
- ✅ Accuracy Tracking
- ✅ Mistake Counter
- ✅ Countdown Before Race
- ✅ Pause / Resume
- ✅ Restart Game
- ✅ Custom Typing Practice

---

## 👥 Multiplayer Features

- ✅ Room-Based Multiplayer
- ✅ Private Typing Duel
- ✅ Live Player Synchronization
- ✅ Real-Time WPM Updates
- ✅ Winner Detection
- ✅ Confetti Celebration

---

## 📊 Analytics

- ✅ Progress Chart
- ✅ Live Statistics
- ✅ Leaderboard
- ✅ Performance Tracking

---

## 🎨 User Interface

- ✅ Responsive Layout
- ✅ Dark / Light Theme
- ✅ Simple User Interface
- ✅ Mobile Friendly

---

# 🚀 Future Enhancements

The following features can be added in future releases to improve the application.

## 🔐 User Authentication

- User Registration
- Secure Login
- Password Encryption
- Forgot Password
- Email Verification

---

## 🌍 Global Leaderboard

- Worldwide Rankings
- Country Rankings
- Daily Rankings
- Weekly Rankings
- Monthly Rankings

---

## 👤 User Profiles

Each user can have:

- Personal Dashboard
- Typing History
- Best WPM
- Highest Accuracy
- Achievement Statistics

---

## 🗄 Database Integration

Replace browser-based storage with a database.

Possible options:

- MongoDB
- MySQL
- PostgreSQL

Benefits:

- Permanent score storage
- User accounts
- Match history
- Online leaderboards

---

## 🤖 AI Enhancements

Possible AI-powered improvements:

- AI-generated typing passages
- Personalized practice sessions
- Difficulty recommendations
- Performance analysis
- Typing improvement suggestions

---

## 🌐 Additional Content Categories

Future categories may include:

- Programming Code
- Technical Articles
- Stories
- Poems
- Interview Questions
- General Knowledge

---

## 📱 Mobile Application

Develop native mobile apps for:

- Android
- iOS

Possible technologies:

- Flutter
- React Native

---

## 🎮 More Game Modes

Potential additions:

- Survival Mode
- Time Attack
- Endless Mode
- Tournament Mode
- Team Battle
- Daily Challenges

---

## 🏅 Achievement System

Players can unlock achievements such as:

- First Victory
- 50 WPM Club
- 100 WPM Club
- Accuracy Master
- Speed Champion
- Daily Streak
- Weekly Champion

---

## 🔊 Enhanced User Experience

Possible improvements:

- Sound Effects
- Background Music
- Keyboard Click Sounds
- Animated UI
- Additional Themes

---

# 🧪 Testing Recommendations

Before deployment, verify the following:

### General Functionality

- Welcome page loads correctly
- Navigation works
- Countdown starts
- Timer functions correctly
- Game restarts successfully

---

### Typing Engine

- WPM updates correctly
- Accuracy calculation is correct
- Mistake counter increments properly
- Custom paragraph loads successfully

---

### Multiplayer

- Two players can join the same room
- Progress updates in real time
- Winner is announced correctly
- Confetti animation is displayed

---

### User Interface

- Responsive design works
- Theme switching works
- Progress chart loads correctly
- Buttons function properly

---

# 🛠 Troubleshooting

## Application Not Starting

### Problem

The server does not start.

### Solution

```bash
npm install
npm start
```

Ensure Node.js is installed correctly.

---

## Port Already in Use

### Problem

Port **3000** is occupied.

### Solution

Close the existing application using port 3000 or change the server port.

---

## Socket.IO Not Connecting

### Problem

Multiplayer features are not working.

### Solution

- Verify the server is running.
- Refresh the browser.
- Check the browser console for errors.
- Ensure both players use the same application instance.

---

## Progress Chart Not Visible

### Problem

Chart is not displayed.

### Solution

- Refresh the page.
- Restart the game.
- Ensure Chart.js loads successfully.
- Check the browser console for JavaScript errors.

---

## Theme Not Changing

### Problem

Dark Mode or Light Mode does not switch.

### Solution

- Refresh the application.
- Verify JavaScript is enabled.
- Restart the browser if necessary.

---

## Duel Link Issues

### Problem

The generated duel link does not open the expected game session.

### Solution

- Regenerate the duel link.
- Ensure the server is running.
- Share the complete generated link without modifications.

---

# 💡 Best Practices

- Use the latest version of Node.js.
- Run `npm install` after cloning the repository.
- Keep dependencies updated.
- Test multiplayer using two browser windows or devices.
- Review the progress chart after each session to monitor improvement.

---
# 🤝 Contributing

Contributions are always welcome!

If you would like to improve this project, follow the steps below.

---

## 🍴 Fork the Repository

Click the **Fork** button at the top-right of this repository.

---

## 📥 Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/typing-speed-test.git
```

---

## 📂 Navigate to the Project

```bash
cd typing-speed-test
```

---

## 🌿 Create a New Branch

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b feature/improve-ui
```

---

## 💻 Make Your Changes

You can contribute by improving:

- User Interface
- Game Logic
- Multiplayer Features
- Performance
- Documentation
- Bug Fixes
- Code Quality

---

## ✅ Commit Your Changes

```bash
git add .

git commit -m "Add: Improve multiplayer synchronization"
```

---

## 🚀 Push Your Changes

```bash
git push origin feature/your-feature-name
```

---

## 🔀 Create a Pull Request

Finally,

1. Open GitHub.
2. Open your fork.
3. Click **Compare & Pull Request**.
4. Submit your Pull Request.

---

# 📝 Coding Standards

Please follow these guidelines:

- Use meaningful variable names.
- Keep functions modular.
- Write clean and readable code.
- Add comments where necessary.
- Maintain consistent formatting.
- Test changes before submitting.

---

# 🐞 Reporting Issues

If you encounter a bug:

1. Open the **Issues** tab.
2. Create a new issue.
3. Provide:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)

---

# 💡 Suggestions

Feature requests are always welcome.

Possible contributions include:

- New typing modes
- Improved UI/UX
- More typing categories
- Better animations
- Performance optimizations
- Accessibility improvements
- Mobile enhancements

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to:

- Use
- Modify
- Distribute
- Learn from
- Improve

this project under the terms of the MIT License.

---

# 👩‍💻 Author

## Sai Priya

**B.Tech – Computer Science and Engineering**

Passionate about:

- 💻 Full Stack Development
- 🔐 Cybersecurity
- 🤖 Artificial Intelligence
- 🌐 Web Development

---

## 📬 Connect with Me

### GitHub

https://github.com/SaiPriya0606

---

### LinkedIn

> Add your LinkedIn profile URL here.

Example:

https://www.linkedin.com/in/your-linkedin-profile/

---

# 🙏 Acknowledgements

Special thanks to:

- Node.js
- Express.js
- Socket.IO
- Chart.js
- Open Source Community

for providing the tools and libraries that made this project possible.

---

# ⭐ Support the Project

If you found this project useful,

please consider:

⭐ Starring the repository

🍴 Forking the project

📢 Sharing it with others

Your support helps motivate future improvements.

---

<p align="center">

## 🚀 Happy Typing!

**Practice Faster • Type Smarter • Improve Every Day**

Made with ❤️ by **Sai Priya**

</p>