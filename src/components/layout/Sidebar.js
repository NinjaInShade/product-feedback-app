import React from 'react';
import TabFilter from './TabFilter.js';
import Roadmap from './Roadmap.js';
import '../../styles/sidebar.css';

export default function Sidebar({
  open,
  filterTabs,
  setFilterTabs,
  updateSuggestionsHandler,
  roadmapCount,
}) {
  return (
    <div className={`sidebar ${open && 'open'}`}>
      <div className='overlay'></div>
      <div className='content'>
        <TabFilter
          filterTabs={filterTabs}
          setFilterTabs={setFilterTabs}
          updateSuggestions={updateSuggestionsHandler}
        />
        <Roadmap roadmapCount={roadmapCount} />
      </div>
    </div>
  );
}
