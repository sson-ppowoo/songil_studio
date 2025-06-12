// src/component/KakaoMap.js
import React, { useEffect } from 'react';

const KakaoMap = ({ latitude, longitude }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=당신의_앱키&autoload=false";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커 표시
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(latitude, longitude),
          map: map,
        });
      });
    };
  }, [latitude, longitude]);

  return (
    <div id="map" style={{ width: '100%', height: '300px', marginTop: '1rem' }} />
  );
};

export default KakaoMap;
