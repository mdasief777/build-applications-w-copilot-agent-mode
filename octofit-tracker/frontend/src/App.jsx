import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

const links = [['/', 'Overview'], ['/activities', 'Activities'], ['/leaderboard', 'Leaderboard'], ['/teams', 'Teams'], ['/users', 'Athletes'], ['/workouts', 'Workouts']];

function Overview() {
  return <div className="overview-grid"><Leaderboard /><Activities /></div>;
}

function App() {
  return <div className="app-shell"><nav className="navbar navbar-expand-lg px-4 py-3"><div className="container-fluid"><NavLink className="navbar-brand" to="/">OctoFit <span>Tracker</span></NavLink><div className="nav-pills">{links.map(([path, label]) => <NavLink key={path} to={path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{label}</NavLink>)}</div></div></nav><main className="container py-5"><header className="page-heading"><p className="eyebrow">Move with purpose</p><h1>Small steps. Strong teams.</h1><p className="lead">Keep an eye on the movement that keeps your community moving.</p></header><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main></div>;
}

export default App;
