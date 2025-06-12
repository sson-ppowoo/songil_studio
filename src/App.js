import React from 'react';
import MainScreen from './component/MainScreen';
import Schedule from './component/Schedule';
import KakaoMap from './component/KakaoMap';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import './App.css'; 


const App = () => {
  return (
    <div style={{ maxWidth: '480px', margin: '30px auto', fontFamily: 'sans-serif', fontfamily: 'Pretendard',}}>

      <MainScreen
        bride="금명"
        groom="충섭"
        message1="당신 덕에 인생이 만날 봄입니다."
        message2="봄바람 살랑이는 계절,\n
        저희 두 사람이 새로운 출발을 합니다. 
        사랑과 축복 속에 함께해 주세요."
        photoUrl="../img/main.png"
      />
      <KakaoMap latitude={35.233821} longitude={129.093285} />

      <Schedule date="2026-10-14" time="오전 11시" place="포항 웨딩홀" />
           
      <Gallery images={[
        '../img/main.png',
        '../img/main.png',
        '../img/main.png',
      ]} />

      <Contact phone="010-1234-5678" bankAccount="국민은행 123-456-7890-00" />
    </div>
  );
};

export default App;
