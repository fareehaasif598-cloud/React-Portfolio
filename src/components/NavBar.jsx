import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile.js';

export const NAV_LINKS = [
  { to: '/', label: 'About', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/repos', label: 'GitHub' },
  { to: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [firstName, ...lastName] = profile.name.split(' ');

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main">
        <NavLink to="/" end className="nav-brand">
          {firstName}
          <span className="accent">{lastName.join(' ')}</span> ✧
        </NavLink>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}