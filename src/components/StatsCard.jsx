function StatsCards({ tasks }) {
  const total = tasks.length;

  const completed =
    tasks.filter(
      (t) => t.completed
    ).length;

  const running =
    tasks.filter(
      (t) => t.running
    ).length;

  const pending =
    total - completed;

  return (
    <div className="dashboard-cards">

      <div className="card total-card">
        <h3>Total Tasks</h3>
        <h2>{total}</h2>
      </div>

      <div className="card completed-card">
        <h3>Completed</h3>
        <h2>{completed}</h2>
      </div>

      <div className="card pending-card">
        <h3>Pending</h3>
        <h2>{pending}</h2>
      </div>

      <div className="card running-card">
        <h3>Running</h3>
        <h2>{running}</h2>
      </div>

    </div>
  );
}

export default StatsCards;