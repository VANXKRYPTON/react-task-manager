import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import NotificationModal from "./components/NotificationModal";
import ThemeToggle from "./components/ThemeToggle";
import ExportButtons from "./components/ExportButtons";
import "./App.css";

const alarmAudio = new Audio("/alarm.mp3");
alarmAudio.preload = "auto";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [time, setTime] = useState(new Date());
  const [showNotification, setShowNotification] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // Load Tasks
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save Tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Live Clock
useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(interval);
}, []);

// Notification Permission
useEffect(() => {
  if ("Notification" in window) {
    Notification.requestPermission();
  }
}, []);

  // Countdown Engine
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (!task.running) return task;

          if (task.remainingTime <= 1) {

  alarmAudio.currentTime = 0;

  alarmAudio.play().catch(() => {});

  setNotificationTitle("🎉 Task Completed");

  setNotificationMessage(
    `"${task.text}" has been completed successfully!`
  );

  setShowNotification(true);

  if (
  "Notification" in window &&
  Notification.permission === "granted"
) {
  new Notification("Task Completed ✅", {
    body: `${task.text} has finished.`,
    icon: "/logo192.png",
  });
}

  return {
    ...task,
    running: false,
    remainingTime: 0,
    completed: true,
  };
}
          return {
            ...task,
            remainingTime: task.remainingTime - 1,
          };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //Theme Toggle
  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme !== null) {
    setDarkMode(savedTheme === "dark");
  }
}, []);

useEffect(() => {
  document.body.classList.toggle("light-theme", !darkMode);

  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);

  // Add Task
  const addTask = (text, category, duration, priority, dueDate, notes) => {
    const newTask = {
      id: Date.now(),
      text,
      category,
      priority,
      dueDate,
      notes,
      duration,
      remainingTime: duration,
      running: false,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  //Toggle Function

  const toggleTheme = () => {
  setDarkMode((prev) => !prev);
};

  // Edit Task
  const editTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText,
            }
          : task
      )
    );
  };

 

  // Start Timer
  const startTimer = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              running: true,
            }
          : task
      )
    );
  };

   // Favorite Task
 const toggleFavorite = (id) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? {
            ...task,
            favourite: !task.favourite,
          }
        : task
    )
  );
};

  // Pause Timer
  const pauseTimer = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              running: false,
            }
          : task
      )
    );
  };

  // Stop Timer
  const stopTimer = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              running: false,
              remainingTime: task.duration,
            }
          : task
      )
    );
  };

  // Filtering
  let filteredTasks = [...tasks];

  // Status Filter
  if (filter === "completed") {
    filteredTasks = filteredTasks.filter((task) => task.completed);
  }

  if (filter === "pending") {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
  }

  // Category Filter
  if (categoryFilter !== "All") {
    filteredTasks = filteredTasks.filter(
      (task) => task.category === categoryFilter
    );
  }

  // Search Filter
  filteredTasks = filteredTasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
 filteredTasks.sort(
  (a, b) => Number(b.favorite) - Number(a.favorite)
);

filteredTasks.sort((a, b) => {
  if (a.favorite !== b.favorite) {
    return Number(b.favorite) - Number(a.favorite);
  }

  return sort === "newest"
    ? new Date(b.createdAt) - new Date(a.createdAt)
    : new Date(a.createdAt) - new Date(b.createdAt);
});

  return (
    <div className="container">
  <h1>🚀 Task Manager Pro</h1>

  <ThemeToggle
    darkMode={darkMode}
    toggleTheme={toggleTheme}
  />

  <div className="clock">
    🕒 {time.toLocaleTimeString()}
  </div>

      <TaskInput addTask={addTask} />

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ExportButtons tasks={filteredTasks} />

      <div className="toolbar">
        <div>
          <label>Filter </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div>
          <label>Sort </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <div>
          <label>Category </label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All</option>
            <option>Study</option>
            <option>Work</option>
            <option>Personal</option>
            <option>Fitness</option>
          </select>
        </div>
      </div>

      <TaskList
    tasks={filteredTasks}
    deleteTask={deleteTask}
    toggleTask={toggleTask}
    editTask={editTask}
    startTimer={startTimer}
    pauseTimer={pauseTimer}
    stopTimer={stopTimer}
    toggleFavorite={toggleFavorite}
/>

<NotificationModal
    open={showNotification}
    title={notificationTitle}
    message={notificationMessage}
    onClose={() => setShowNotification(false)}
/>
    </div>
  );
}

<footer className="footer">
  <p>
    🚀 Task Manager Pro • Built with React ❤️
  </p>
</footer>

export default App;