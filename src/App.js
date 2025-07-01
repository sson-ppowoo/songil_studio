import React from 'react';
import MainScreen from './component/MainScreen';
import KakaoMap from './component/KakaoMap';
import Schedule from './component/Schedule';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import './App.css';

const App = () => {
  return (
    <div style={{ maxWidth: '480px', margin: '30px auto', fontFamily: 'Pretendard, sans-serif' }}>
      <MainScreen
        bride="금명"
        groom="충섭"
        message1="당신 덕에 인생이 만날 봄입니다."
        message2={`봄바람 살랑이는 계절,\n저희 두 사람이 새로운 출발을 합니다.\n사랑과 축복 속에 함께해 주세요.`}
        photoUrl="../img/main.png"
      />
      
      <Schedule date="2026-10-14" time="AM 11:00" place="마리드메이 (구.오월의 신부)" />
      
      <KakaoMap
        latitude={35.233821}
        longitude={129.093285}
      />


      <Gallery images={[
        '../img/main.png',
        '../img/main.png',
        '../img/main.png'
      ]} />

      <Contact phone="010-9327-9348" bankAccount="IBK기업은행 693-009040-01-012" />
    </div>
  );
};

export default App;
