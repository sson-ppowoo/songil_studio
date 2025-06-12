import React from 'react';

const Schedule = ({ date, time, place }) => {
  return (
    <section style={{ padding: '20px' }}>
      <h3 style={{ fontWeight: '900', fontSize:'1.3rem' }}>일정</h3>
      <p style={{ marginTop: '10px', fontSize: '16px' }}>
        <strong>{date}</strong><br />
        <span>{time}</span><br />
        <span>{place}</span>
      </p>
    </section>
  );
};

export default Schedule;
