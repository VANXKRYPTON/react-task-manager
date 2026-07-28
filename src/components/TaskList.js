import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
  startTimer,
  pauseTimer,
  stopTimer,
  toggleFavorite,
}) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const runningTasks = tasks.filter((task) => task.running).length;
  const pendingTasks = totalTasks - completedTasks;
  const today = new Date().toISOString().split("T")[0];

const todayTasks = tasks.filter(
  (task) => task.dueDate === today
).length;

  return (
    <>
      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <div className="card total-card">
          <h3>Total Tasks</h3>
          <h2>{totalTasks}</h2>
        </div>

        <div className="card completed-card">
          <h3>Completed</h3>
          <h2>{completedTasks}</h2>
        </div>

        <div className="card pending-card">
          <h3>Pending</h3>
          <h2>{pendingTasks}</h2>
        </div>

        <div className="card running-card">
          <h3>Running</h3>
          <h2>{runningTasks}</h2>
        </div>
      </div>

      <div className="card running-card">
  <h3>Running</h3>
  <h2>{runningTasks}</h2>
</div>

<div className="card today-card">
  <h3>Today's Tasks</h3>
  <h2>{todayTasks}</h2>
</div>

      {/* Task Table */}
      <div className="table-container">
        <table className="task-table">
          <thead>
            <tr>
              <th>✔</th>
              <th>Task</th>
              <th>Notes</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Duration</th>
              <th>Remaining</th>
              <th>Progress</th>
              <th>Created</th>
              <th>⭐</th>
              <th>Edit</th>
              <th>Timer</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td
                  colSpan="10"
                  className="empty-row"
                >
                  <div className="empty-state">
                    <h2>🚀 No Tasks Yet</h2>
                    <p>
                      Add your first task and start
                      being productive!
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                  editTask={editTask}
                  startTimer={startTimer}
                  pauseTimer={pauseTimer}
                  stopTimer={stopTimer}
                  toggleFavorite={toggleFavorite}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TaskList;