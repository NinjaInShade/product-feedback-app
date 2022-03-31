import React from 'react';
import '../styles/status-nav.css';

export default function StatusNav({ statusShown, setStatusShown, navItems }) {
  return (
    <nav className='status-nav'>
      <ul>
        {navItems.map((navItem) => {
          return (
            <li key={navItem}>
              <button
                className={`body-s status-nav-btn ${
                  statusShown === navItem.split(' ')[0].toLowerCase() ? 'active' : ''
                } ${navItem.split(' ')[0].toLowerCase()}`}
                onClick={() => setStatusShown(navItem.split(' ')[0].toLowerCase())}
              >
                {navItem}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
