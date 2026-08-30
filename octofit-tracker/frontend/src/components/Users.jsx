import { useEffect, useState } from 'react';
import { apiBaseUrl, fetchCollection } from '../api.js';

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : `${apiBaseUrl}/users/`;

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { fetchCollection(usersEndpoint).then(setUsers).catch((loadError) => setError(loadError.message)); }, []);

  return <section className="card border-0 shadow-sm"><div className="card-body"><p className="eyebrow mb-1">Your community</p><h2 className="h4 mb-3">Athletes</h2>{error && <p className="alert alert-warning">{error}</p>}<div className="list-group list-group-flush">{users.map((user, index) => <div className="list-group-item px-0 d-flex justify-content-between" key={user._id || user.email || index}><span><strong>{user.name || 'Athlete'}</strong><div className="small text-secondary">{user.team || 'Independent'}</div></span><span className="text-end"><strong>{user.totalPoints || 0} pts</strong><div className="small text-secondary">Level {user.level || 1}</div></span></div>)}{!error && users.length === 0 && <p className="text-secondary mb-0">No athletes found.</p>}</div></div></section>;
}

export default Users;
