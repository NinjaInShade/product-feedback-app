import React from 'react';

import './LoadingSpinner.css';

export default function LoadingSpinner() {
  return (
    <main className='page-center'>
      <div class='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
