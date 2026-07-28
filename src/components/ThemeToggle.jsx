function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;