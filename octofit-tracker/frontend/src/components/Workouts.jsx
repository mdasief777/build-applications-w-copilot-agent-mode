import { useEffect, useState } from 'react';
import { apiBaseUrl, fetchCollection } from '../api.js';

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : `${apiBaseUrl}/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { fetchCollection(workoutsEndpoint).then(setWorkouts).catch((loadError) => setError(loadError.message)); }, []);

  return <section className="card border-0 shadow-sm"><div className="card-body"><p className="eyebrow mb-1">Build your next session</p><h2 className="h4 mb-3">Workouts</h2>{error && <p className="alert alert-warning">{error}</p>}<div className="row g-3">{workouts.map((workout, index) => <div className="col-md-6" key={workout._id || workout.title || index}><div className="workout-tile"><div><strong>{workout.title || workout.name || 'Workout'}</strong><div className="small text-secondary">{workout.focus || workout.category || 'Full body'}</div></div><span className="badge text-bg-dark">{workout.duration || workout.minutes || 0} min</span></div></div>)}{!error && workouts.length === 0 && <p className="text-secondary mb-0">No workouts available yet.</p>}</div></div></section>;
}

export default Workouts;
