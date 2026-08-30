import './App.css';

const leaderboard = [
  { name: 'Ava', points: 1280, streak: 12 },
  { name: 'Leo', points: 1210, streak: 9 },
  { name: 'Maya', points: 1165, streak: 10 },
];

const upcomingWorkouts = [
  { title: 'Cardio Circuit', focus: 'Endurance', duration: '25 min' },
  { title: 'Strength Builder', focus: 'Power', duration: '30 min' },
  { title: 'Mobility Flow', focus: 'Recovery', duration: '20 min' },
];

function App() {
  return (
    <div className="app-shell">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-3">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">OctoFit Tracker</span>
          <div className="ms-auto d-flex gap-3">
            <span className="nav-link text-white-50">Dashboard</span>
            <span className="nav-link text-white-50">Teams</span>
            <span className="nav-link text-white-50">Challenges</span>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <section className="row g-4 mb-4 align-items-stretch">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 bg-success-subtle">
              <div className="card-body">
                <p className="text-uppercase small text-success-emphasis mb-1">Daily Goal</p>
                <h2 className="display-5 fw-bold mb-0">42 min</h2>
                <p className="mt-2 mb-0 text-success-emphasis">You are 6 minutes ahead today.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 bg-warning-subtle">
              <div className="card-body">
                <p className="text-uppercase small text-warning-emphasis mb-1">Team Score</p>
                <h2 className="display-5 fw-bold mb-0">1,840</h2>
                <p className="mt-2 mb-0 text-warning-emphasis">Wave Riders are in first place.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 bg-info-subtle">
              <div className="card-body">
                <p className="text-uppercase small text-info-emphasis mb-1">Streak</p>
                <h2 className="display-5 fw-bold mb-0">12 days</h2>
                <p className="mt-2 mb-0 text-info-emphasis">Keep the momentum going.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="row g-4">
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="mb-0">Leaderboard</h3>
                  <button className="btn btn-outline-primary btn-sm">View all</button>
                </div>
                <div className="list-group list-group-flush">
                  {leaderboard.map((student, index) => (
                    <div key={student.name} className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="d-flex align-items-center gap-3">
                        <span className="badge rounded-circle bg-primary-subtle text-primary fs-6">#{index + 1}</span>
                        <div>
                          <div className="fw-semibold">{student.name}</div>
                          <small className="text-muted">{student.streak} day streak</small>
                        </div>
                      </div>
                      <strong>{student.points} pts</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h3 className="mb-3">Upcoming workouts</h3>
                <div className="d-grid gap-3">
                  {upcomingWorkouts.map((item) => (
                    <div key={item.title} className="border rounded-3 p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-1">{item.title}</h5>
                        <span className="badge bg-light text-dark">{item.focus}</span>
                      </div>
                      <small className="text-muted">{item.duration}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
