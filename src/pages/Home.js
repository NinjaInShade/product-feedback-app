import React from 'react';
import HomeMainNav from '../components/HomeMainNav';
import '../styles/home.css';

export default function Home({ feedbackData }) {
  const suggestionsCount = feedbackData.reduce((acc, feedback) => {
    return feedback.status === 'suggestion' ? acc + 1 : acc;
  }, 0);

  return (
    <div className='home'>
      <section className='home-left'>
        <div className='home-left-intro'>
          <h2 className='home-left-intro-title'>Frontend Mentor</h2>
          <p className='body-s home-left-intro-subtitle'>Feedback board</p>
        </div>
      </section>
      <section className='home-right'>
        <HomeMainNav suggestionsCount={suggestionsCount} />
        <main></main>
      </section>
    </div>
  );
}
