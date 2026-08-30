import { useEffect, useState } from 'react';
import { apiBaseUrl, fetchCollection } from '../api.js';

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : `${apiBaseUrl}/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCollection(activitiesEndpoint).then(setActivities).catch((loadError) => setError(loadError.message));
  }, []);

  return (
    <section className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div><p className="eyebrow mb-1">Movement log</p><h2 className="h4 mb-0">Recent activities</h2></div>
          <span className="badge text-bg-light">{activities.length} logged</span>
        </div>
        {error && <p className="alert alert-warning">{error}</p>}
        {!error && activities.length === 0 && <p className="text-secondary mb-0">No activities logged yet.</p>}
        <div className="list-group list-group-flush">
          {activities.map((activity) => <div className="list-group-item px-0 d-flex justify-content-between" key={activity._id || `${activity.user}-${activity.date}`}><div><strong>{activity.type || 'Activity'}</strong><div className="small text-secondary">{activity.user || 'Unknown athlete'}</div></div><div className="text-end"><strong>{activity.points || 0} pts</strong><div className="small text-secondary">{activity.minutes || 0} min</div></div></div>)}
        </div>
      </div>
    </section>
  );
}

export default Activities;
