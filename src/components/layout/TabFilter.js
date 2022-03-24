import React from 'react';
import Tab from '../Tab.js';
import '../../styles/tab-filter.css';

export default function TabFilter({ filterTabs, setFilterTabs }) {
  const updateActiveTab = () => {
    console.log('Update active tab');
  };

  return filterTabs ? (
    <ul className='tab-filter'>
      {filterTabs.map((filterTab) => {
        return (
          <li key={filterTab.name}>
            <Tab title={filterTab.name} active={filterTab.active} onClick={updateActiveTab} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Loading tabs...</p>
  );
}
