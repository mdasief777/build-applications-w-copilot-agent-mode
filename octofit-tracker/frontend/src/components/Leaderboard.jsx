import { useEffect, useState } from 'react';
import { apiBaseUrl, fetchCollection } from '../api.js';

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : `${apiBaseUrl}/leaderboard/`;

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { fetchCollection(leaderboardEndpoint).then(setEntries).catch((loadError) => setError(loadError.message)); }, []);

  return <section className="card border-0 shadow-sm"><div className="card-body"><p className="eyebrow mb-1">Team challenge</p><h2 className="h4 mb-3">Leaderboard</h2>{error && <p className="alert alert-warning">{error}</p>}<div className="list-group list-group-flush">{entries.map((entry, index) => <div className="list-group-item px-0 d-flex justify-content-between align-items-center" key={entry._id || entry.user || index}><span><span className="rank-mark me-3">{index + 1}</span><strong>{entry.user || entry.name || 'Athlete'}</strong></span><strong>{entry.points || entry.totalPoints || 0} pts</strong></div>)}{!error && entries.length === 0 && <p className="text-secondary mb-0">No leaderboard entries yet.</p>}</div></div></section>;
}

export default Leaderboard;
