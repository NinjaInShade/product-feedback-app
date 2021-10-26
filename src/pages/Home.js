import React from 'react';
import '../styles/home.css';

export default function Home({ feedbackData }) {
  return (
    <main className='home'>
      <section className='home-left'>
        <div className='home-left-intro'>
          <h2 className='home-left-intro-title'>Frontend Mentor</h2>
          <p className='body-s home-left-intro-subtitle'>Feedback board</p>
        </div>
      </section>
      <section className='home-right'>
        <nav className='home-right-nav'>
          <div></div>
          <button className='btn btn-primary'>+ Add Feedback</button>
        </nav>
      </section>
    </main>
  );
}
