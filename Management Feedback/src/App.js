import React, {useState} from 'react';
import './style.css';
import Review from './Review'

export default function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2> Management Feedback</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
   );
}
