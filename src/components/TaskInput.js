import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Study");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    const duration = hours * 3600 + minutes * 60;

    addTask(
      text,
      category,
      duration,
      priority,
      dueDate,
      notes
    );

    setText("");
    setHours(0);
    setMinutes(30);
    setPriority("Medium");
    setDueDate("");
  };

  return (
<div className="task-input-card">
  <div className="input-grid">

    <div className="input-group">
      <label>Task</label>
      <input
        type="text"
        placeholder="Enter Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>

    <div className="input-group">
      <label>Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Study</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Exercise</option>
      </select>
    </div>

    <div className="input-group">
      <label>Priority</label>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </div>

    <div className="input-group">
      <label>Hours</label>
      <input
        type="number"
        min="0"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
      />
    </div>

    <div className="input-group">
      <label>Minutes</label>
      <input
        type="number"
        min="0"
        max="59"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
      />
    </div>

    <div className="input-group">
      <label>Due Date</label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
    </div>

    <div className="input-group">
  <label>Notes</label>
  <textarea
    placeholder="Add task notes..."
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    rows={3}
  />
</div>

    <button
      className="add-task-btn"
      onClick={handleSubmit}
    >
      Add Task
    </button>

  </div>
</div>
  );
}

export default TaskInput;