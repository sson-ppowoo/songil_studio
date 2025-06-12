import React from 'react';

const Schedule = ({ date, time, place }) => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', margin: '20px 0' }}>      
      <p><strong>날짜 :</strong> {date}</p>
      <p><strong>시간 :</strong> {time}</p>
      <p><strong>장소 :</strong> {place}</p>
    </section>
  );
};

export default Schedule;
