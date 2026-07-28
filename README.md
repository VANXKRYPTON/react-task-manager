# 🚀 Task Manager Pro

<div align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![CSS](https://img.shields.io/badge/CSS3-Glassmorphism-blue?logo=css3)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-green)
![Status](https://img.shields.io/badge/Status-Completed-success)

### A Modern Productivity & Task Management Application Built with React

Manage tasks efficiently with timers, priorities, notes, due dates, notifications, exports, dark mode, and an elegant glassmorphism UI.

</div>

---

# 📖 Overview

Task Manager Pro is a feature-rich React application designed to help users organize daily work, study schedules, personal goals, and productivity.

Unlike a traditional To-Do List, this project includes a built-in countdown timer, browser notifications, PDF/CSV export, task prioritization, notes, overdue tracking, favorite tasks, and a responsive dashboard.

The project demonstrates modern React development using Hooks, reusable components, Local Storage, state management, and responsive UI principles.

---

# ✨ Features

## ✅ Task Management

- Create Tasks
- Edit Tasks
- Delete Tasks
- Mark Complete
- Task Categories
- Priority Levels
- Due Dates
- Task Notes
- Favorite (Pinned) Tasks

---

## ⏳ Productivity Features

- Countdown Timer
- Start Timer
- Pause Timer
- Stop Timer
- Live Progress Bar
- Remaining Time
- Browser Notifications
- Alarm Sound on Completion

---

## 📅 Organization

- Search Tasks
- Status Filter
- Category Filter
- Sort by Newest
- Sort by Oldest
- Today's Tasks Counter
- Overdue Task Detection
- Dashboard Statistics

---

## 📊 Dashboard

Displays:

- Total Tasks
- Completed Tasks
- Pending Tasks
- Running Timers
- Today's Tasks

---

## 📁 Export

Export all tasks to

- PDF
- CSV

---

## 🎨 UI Features

- Dark Mode
- Light Mode
- Glassmorphism Design
- Neon Glow Effects
- Responsive Layout
- Hover Animations
- Active Row Highlight
- Smooth Button Animations
- Modern Dashboard Cards

---

## 💾 Storage

- Local Storage Support
- Automatic Save
- Automatic Restore
- Theme Persistence

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React | Frontend Framework |
| JavaScript ES6 | Programming |
| CSS3 | Styling |
| HTML5 | Structure |
| Local Storage | Persistent Data |
| jsPDF | PDF Export |
| jspdf-autotable | PDF Tables |
| FileSaver.js | CSV Download |
| React Hooks | State Management |

---

# 📂 Project Structure

```
task-manager-pro
│
├── public
│   ├── alarm.mp3
│   ├── favicon.ico
│   └── index.html
│
├── src
│   ├── components
│   │   ├── Dashboard.jsx
│   │   ├── ExportButtons.jsx
│   │   ├── NotificationModal.jsx
│   │   ├── SearchBar.jsx
│   │   ├── StatsCards.jsx
│   │   ├── TaskInput.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Toolbar.jsx
│   │
│   ├── utils.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/task-manager-pro.git
```

Move into the project

```bash
cd task-manager-pro
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm start
```

Application will run at

```
http://localhost:3000
```

---

# 📦 Required Packages

```bash
npm install jspdf
npm install jspdf-autotable
npm install file-saver
```

---

# 🚀 Application Workflow

```
User

      │

      ▼

Create Task

      │

      ▼

Store in Local Storage

      │

      ▼

Dashboard Updates

      │

      ▼

Start Timer

      │

      ▼

Countdown

      │

      ▼

Timer Ends

      │

      ▼

Play Alarm

      │

      ▼

Browser Notification

      │

      ▼

Task Completed
```

---

# 🧩 Major Components

## TaskInput

Responsible for

- Creating tasks
- Priority
- Category
- Due Date
- Notes
- Timer

---

## TaskList

Responsible for

- Dashboard
- Statistics
- Task Table

---

## TaskItem

Responsible for

- Edit
- Delete
- Favorite
- Timer Controls
- Progress Bar
- Notes
- Due Date
- Overdue Detection

---

## ThemeToggle

Responsible for

- Dark Mode
- Light Mode

---

## ExportButtons

Responsible for

- PDF Export
- CSV Export

---

## NotificationModal

Responsible for

- Completion Popup

---

# 📊 Dashboard Cards

✔ Total Tasks

✔ Completed Tasks

✔ Pending Tasks

✔ Running Tasks

✔ Today's Tasks

---

# 🎯 Task Properties

Each task stores

```javascript
{
 id,
 text,
 category,
 priority,
 dueDate,
 notes,
 duration,
 remainingTime,
 running,
 completed,
 favorite,
 createdAt
}
```

---

# 🔔 Notification System

When a timer finishes

- Plays Alarm
- Browser Notification
- Completion Popup
- Marks Task Completed

---

# 🌙 Theme System

Supports

- Dark Theme
- Light Theme

Theme preference is automatically saved in Local Storage.

---

# 📈 Progress Tracking

Each task displays

- Duration
- Remaining Time
- Live Progress Bar
- Completion Percentage

---

# 📁 Export System

Users can export all tasks as

### PDF

Includes

- Task
- Category
- Priority
- Due Date
- Status

### CSV

Exports the complete task list for Excel or Google Sheets.

---

# 📱 Responsive Design

Optimized for

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

# 🎨 UI Highlights

- Glassmorphism
- Neon Glow
- Responsive Cards
- Animated Buttons
- Interactive Table
- Smooth Hover Effects
- Active Row Highlight

---

# 📌 Future Improvements

- Drag & Drop Tasks
- Firebase Authentication
- Cloud Database
- Calendar View
- Weekly Analytics
- Charts
- Team Collaboration
- Voice Commands
- AI Task Suggestions
- Email Reminders
- Pomodoro Sessions
- Recurring Tasks
- Mobile App Version

---

# 🧠 React Concepts Used

- Functional Components
- Props
- useState
- useEffect
- Conditional Rendering
- Event Handling
- Component Communication
- Local Storage
- Dynamic Styling
- Reusable Components

---

# 🎓 Learning Outcomes

This project demonstrates practical knowledge of

- React.js
- State Management
- Hooks
- JavaScript ES6
- CSS3
- Responsive Design
- Component Architecture
- Local Storage
- Browser APIs
- Notifications
- File Export
- UI/UX Design

---

# 📸 Screenshots

## Dashboard

_Add screenshot here_

---

## Dark Mode

_Add screenshot here_

---

## Task Table

_Add screenshot here_

---

## Timer Running

_Add screenshot here_

---

## PDF Export

_Add screenshot here_

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📝 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Aditya Kumar**

**B.Tech Computer Science & Engineering**

**SRM Institute of Science and Technology**

GitHub: https://github.com/VANXKRYPTON

LinkedIn: https://www.linkedin.com/in/aditya-kumar-ak2653/

---

<div align="center">

## ⭐ If you like this project, don't forget to Star the repository!

**Made with ❤️ using React**

</div>