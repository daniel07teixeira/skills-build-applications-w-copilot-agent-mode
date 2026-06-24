import { Route, Routes, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Activities from './pages/Activities';
import Teams from './pages/Teams';
import Profile from './pages/Profile';

const navLinks = [
  { path: '/', label: 'Dashboard' },
  { path: '/activities', label: 'Activities' },
  { path: '/teams', label: 'Teams' },
  { path: '/profile', label: 'Profile' }
];

function App() {
  return (
    <div className="app-shell container py-4">
      <header className="mb-4">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img src="/octofitapp-small.png" alt="OctoFit Logo" width={44} className="me-2" />
            <span className="h4 mb-0">OctoFit Tracker</span>
          </div>
          <nav className="nav gap-2">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : 'text-secondary'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
