import React from 'react';
import Tab from '../Tab.js';
import '../../styles/tab-filter.css';

export default function TabFilter({ filterTabs, setFilterTabs }) {
  return filterTabs ? (
    <ul className='tab-filter'>
      {filterTabs.map((filterTab) => {
        return (
          <li key={filterTab.name}>
            <Tab title={filterTab.name} active={filterTab.active} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Loading tabs...</p>
  );
}
