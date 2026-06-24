function Teams() {
  return (
    <div>
      <h1>Teams</h1>
      <p className="text-muted">Join a team and compete together in monthly challenges.</p>

      <div className="card p-4">
        <h5 className="mb-3">Current Team</h5>
        <p className="mb-1">Mergington Marauders</p>
        <small className="text-secondary">Ranked #2 this month</small>
      </div>

      <div className="card p-4 mt-4">
        <h5 className="mb-3">Leaderboard</h5>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">Mergington Marauders — 1,280 pts</li>
          <li className="list-group-item">Riverside Rockets — 1,180 pts</li>
          <li className="list-group-item">Broadway Bears — 1,050 pts</li>
        </ol>
      </div>
    </div>
  );
}

export default Teams;
