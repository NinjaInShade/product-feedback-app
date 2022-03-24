import React from 'react';
import Tab from '../Tab.js';
import '../../styles/tab-filter.css';

export default function TabFilter({ filterTabs, setFilterTabs, updateSuggestions }) {
  const updateActiveTab = (name) => {
    setFilterTabs(
      filterTabs.map((filterTab) => {
        if (filterTab.name === name) {
          return { name, active: true };
        }

        return { ...filterTab, active: false };
      })
    );

    updateSuggestions(name);
  };

  return filterTabs ? (
    <ul className='tab-filter'>
      {filterTabs.map((filterTab) => {
        return (
          <li key={filterTab.name}>
            <Tab
              title={filterTab.name}
              active={filterTab.active}
              onClick={() => updateActiveTab(filterTab.name)}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Loading tabs...</p>
  );
}
