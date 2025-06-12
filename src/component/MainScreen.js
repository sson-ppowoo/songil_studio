import React from 'react';

const MainScreen = ({ bride, groom, photoUrl,message1, message2, }) => {
  return (
    <section style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{bride} & {groom}</h2>
      <img src={photoUrl} alt="신랑신부 사진" style={{ width: '80%', borderRadius: '15px' }} />
      <h3 style={{ marginTop: '30px', fontStyle: '', fontWeight:'900' }}>{message1}</h3>
      <p style={{ marginTop: '40aaaadpx', fontStyle: '', fontWeight:'400'}}>{message2}</p>      
    </section>
  );
};

export default MainScreen;
