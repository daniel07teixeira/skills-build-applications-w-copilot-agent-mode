function Dashboard() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1>Dashboard</h1>
          <p className="text-muted">Track progress, challenges, and recent workouts.</p>
        </div>
        <div className="text-end">
          <p className="mb-1">Welcome back, Student</p>
          <small className="text-secondary">Learning progress: 78%</small>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-3 h-100">
            <h5>Weekly Activity</h5>
            <p className="display-6 mb-1">92 pts</p>
            <p className="text-muted">Running, walking, strength training.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 h-100">
            <h5>Team Rank</h5>
            <p className="display-6 mb-1">#2</p>
            <p className="text-muted">Mergington Marauders</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 h-100">
            <h5>Next Challenge</h5>
            <p className="mb-1">Cardio Sprint</p>
            <p className="text-muted">Complete 3 sessions this week.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
