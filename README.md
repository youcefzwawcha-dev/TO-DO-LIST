# 📝 To-Do List

A clean, lightweight to-do list web app built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step — just open it in your browser and start organizing your day.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🎯 Overview

**To-Do List** is a simple web application that helps you keep track of your daily tasks. It runs entirely in the browser, requires no installation, and saves your tasks automatically so they're still there when you come back.

Whether you're jotting down groceries or managing a small project, this app keeps things fast and out of your way.

---

## ✨ Features

- ➕ Add new tasks
- ✅ Mark tasks as complete or incomplete
- 🗑️ Delete tasks you no longer need
- 💾 Tasks saved automatically in `localStorage`
- 📱 Responsive design for mobile and desktop
- 🎨 Clean, minimal interface
- ⚡ Instant load — no dependencies, no build tools

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Structure | HTML5 | Semantic markup |
| Styling | CSS3 | Layout, colors, responsiveness |
| Logic | JavaScript (ES6+) | Interactivity, DOM, storage |
| Storage | localStorage API | Persisting tasks in the browser |

---

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser — Chrome, Firefox, Edge, or Safari.

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/youcefzwawcha-dev/TO-DO-LIST.git
cd TO-DO-LIST
```

2. Open the app:
Just double-click index.html, or if you use VS Code, right-click the file and choose Open with Live Server for auto-reload while editing.

That's it — no install, no dependencies.
```
```
📁 Project Structure
```
TO-DO-LIST/
│
├── index.html      # Main HTML page
├── style.css       # Stylesheet
├── script.js       # App logic
└──README.md       # Documentation
```

🧠 How It Works
Type a task into the input field.

Press Enter or click Add to create it.

Click a task to toggle it between done and pending.

Click the delete icon to remove it.

All tasks are saved to your browser's localStorage automatically — refresh the page and they'll still be there.

Under the Hood
State — tasks are kept in a JavaScript array of objects: { id, text, completed }

Rendering — the list is re-rendered whenever the state changes

Persistence — after every change, the array is serialized to localStorage

Load — on page load, tasks are read back from localStorage and rendered

🗺 Roadmap
☑ Add, complete, and delete tasks
☑ Save tasks with localStorage
☑ Responsive layout
□ Edit existing tasks
□ Filter by All / Active / Completed
□ Drag-and-drop reordering
□ Dark mode toggle

🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request


👤 Author
Youcef

GitHub: @youcefzwawcha-dev


<div align="center">
⭐ If you found this project helpful, please give it a star! ⭐

Made with ❤️ and ☕

</div> 
