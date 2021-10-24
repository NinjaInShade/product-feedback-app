import React, { useState, useEffect } from 'react';
import localData from '../data.json';
import '../styles/home.css';

export default function Home() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Simulates fetching data from API
    setFeedbackData(localData.productRequests);
  }, []);

  return (
    <main className='home'>
      <h1>Default home page</h1>
    </main>
  );
}
