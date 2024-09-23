import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigations } from '../lib/data';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container" aria-label="Global">
        <div className="flex items-center">
         
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbar-collapse"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        <div id="navbar-collapse" className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
          <div className="flex flex-col md:flex-row md:items-center md:gap-x-6">
            {navigations.map((nav) => (
              <Link key={nav.hash} to={nav.hash} className="nav-link">
                {nav.name}
              </Link>
            ))}
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
