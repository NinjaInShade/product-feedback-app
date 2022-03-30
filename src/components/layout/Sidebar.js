import React from 'react';
import TabFilter from './TabFilter.js';
import RoadmapPanel from './RoadmapPanel.js';
import '../../styles/sidebar.css';

export default function Sidebar({
  open,
  filterTabs,
  setFilterTabs,
  updateSuggestionsHandler,
  prodReqs,
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
        <RoadmapPanel prodReqs={prodReqs} />
      </div>
    </div>
  );
}
