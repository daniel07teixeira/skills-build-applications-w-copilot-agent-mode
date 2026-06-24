function Profile() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1>Profile</h1>
          <p className="text-muted">Manage your account and view fitness goals.</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-4">
            <h5>Student Profile</h5>
            <p className="mb-1">Name: Taylor Cat</p>
            <p className="mb-1">Grade: 10</p>
            <p className="mb-1">Team: Mergington Marauders</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4">
            <h5>Weekly Goals</h5>
            <ul className="mb-0">
              <li>Complete 3 cardio sessions</li>
              <li>Log at least 4 workouts</li>
              <li>Earn 100 points</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
