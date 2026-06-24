function Activities() {
  return (
    <div>
      <h1>Activity Log</h1>
      <p className="text-muted">Log your workouts and review recent activity.</p>

      <div className="card p-4">
        <h5 className="mb-3">Recent Workouts</h5>
        <div className="list-group">
          <div className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <strong>Morning Run</strong>
                <div className="text-secondary">5 km · 28 min</div>
              </div>
              <span className="badge bg-primary align-self-center">18 pts</span>
            </div>
          </div>
          <div className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <strong>Strength Session</strong>
                <div className="text-secondary">Bodyweight circuit · 22 min</div>
              </div>
              <span className="badge bg-success align-self-center">16 pts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
