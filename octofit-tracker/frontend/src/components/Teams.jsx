import { useEffect, useState } from 'react';
import { apiBaseUrl, fetchCollection } from '../api.js';

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : `${apiBaseUrl}/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => { fetchCollection(teamsEndpoint).then(setTeams).catch((loadError) => setError(loadError.message)); }, []);

  return <section className="card border-0 shadow-sm"><div className="card-body"><p className="eyebrow mb-1">Find your people</p><h2 className="h4 mb-3">Teams</h2>{error && <p className="alert alert-warning">{error}</p>}<div className="row g-3">{teams.map((team, index) => <div className="col-md-6" key={team._id || team.name || index}><div className="team-tile"><strong>{team.name || 'Unnamed team'}</strong><span>{team.members?.length || team.memberCount || 0} members</span></div></div>)}{!error && teams.length === 0 && <p className="text-secondary mb-0">No teams available yet.</p>}</div></div></section>;
}

export default Teams;
