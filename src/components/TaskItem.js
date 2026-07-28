import { useState } from "react";

function TaskItem({
  task,
  deleteTask,
  toggleTask,
  editTask,
  startTimer,
  pauseTimer,
  stopTimer,
  toggleFavorite,
}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const [active, setActive] = useState(false);

  const save = () => {
    if (!text.trim()) return;

    editTask(task.id, text);
    setEditing(false);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progress =
    task.duration === 0
      ? 0
      : ((task.duration - task.remainingTime) / task.duration) * 100;

  const isOverdue =
    task.dueDate &&
    !task.completed &&
    new Date(task.dueDate) < new Date();

  return (
    <tr
  className={`fade ${active ? "active-row" : ""}`}
  onClick={() => setActive(true)}
>
      {/* Checkbox */}
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
      </td>

      {/* Task */}
      <td>
        {editing ? (
          <input
            className="edit-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <span className={task.completed ? "done" : ""}>
            {task.text}
          </span>
        )}
      </td>

      {/* Notes */}
      <td className="notes-cell">
        {task.notes ? (
          task.notes.length > 40
            ? `${task.notes.substring(0, 40)}...`
            : task.notes
        ) : (
          <span className="no-notes">No Notes</span>
        )}
      </td>

      {/* Category */}
      <td>
        <span className="category-badge">
          {task.category}
        </span>
      </td>

      {/* Priority */}
      <td>
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </td>

      {/* Due Date */}
      <td>
        {task.dueDate ? (
          <>
            <div>{task.dueDate}</div>

            {isOverdue && (
              <span className="overdue-badge">
                ⚠ Overdue
              </span>
            )}
          </>
        ) : (
          <span className="no-date">
            No Due Date
          </span>
        )}
      </td>

      {/* Duration */}
      <td>{formatTime(task.duration)}</td>

      {/* Remaining */}
      <td>
        <span
          style={{
            color: task.running ? "#00d4ff" : "white",
            fontWeight: "bold",
          }}
        >
          {formatTime(task.remainingTime)}
        </span>
      </td>

      {/* Progress */}
      <td style={{ minWidth: "180px" }}>
        <div className="progress">
          <div
            className="fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <small>{Math.round(progress)}%</small>
      </td>

      {/* Created */}
      <td>
        {new Date(task.createdAt).toLocaleDateString()}
      </td>

      {/* Favorite */}
      <td className="action-cell">
        <button
          className="favorite-btn"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(task.id);
          }}
        >
          {task.favorite ? "⭐" : "☆"}
        </button>
      </td>

      {/* Edit */}
      <td className="action-cell">
        {editing ? (
          <button
            className="save-btn"
            onClick={(e) => {
              e.stopPropagation();
              save();
            }}
          >
            💾 Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={(e) => {
              e.stopPropagation();
              setEditing(true);
            }}
          >
            ✏ Edit
          </button>
        )}
      </td>

      {/* Timer */}
      <td className="action-cell timer-cell">
        {!task.running ? (
          <button
            className="start-btn"
            onClick={(e) => {
              e.stopPropagation();
              startTimer(task.id);
            }}
          >
            ▶ Start
          </button>
        ) : (
          <button
            className="pause-btn"
            onClick={(e) => {
              e.stopPropagation();
              pauseTimer(task.id);
            }}
          >
            ⏸ Pause
          </button>
        )}

        <button
          className="stop-btn"
          onClick={(e) => {
            e.stopPropagation();
            stopTimer(task.id);
          }}
        >
          ⏹ Stop
        </button>
      </td>

      {/* Delete */}
      <td className="action-cell">
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}
        >
          🗑 Delete
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;