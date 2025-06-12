import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ latitude, longitude }) => {
  const mapRef = useRef(null);
  const hasMounted = useRef(false);

  const placeName = '포항 웨딩홀';
  const address = '경상북도 포항시 북구 삼호로 123';

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const loadKakaoMap = () => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(latitude, longitude),
        map: map,
      });
    };

    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=80d2acf957e190eb93c93e1942a0d92d&autoload=false';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(loadKakaoMap);
      };
    } else {
      window.kakao.maps.load(loadKakaoMap);
    }
  }, [latitude, longitude]);

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      alert('주소가 복사되었습니다!');
    });
  };

  const mapLink = `https://map.kakao.com/link/to/${placeName},${latitude},${longitude}`;

  return (
    <div style={{ marginTop: '2rem', padding: '0 16px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '300px', borderRadius: '12px' }} />
      <div style={{ marginTop: '10px' }}>
        <p style={{ fontWeight: 600 }}>{placeName}</p>
        <p style={{ fontSize: '14px', color: '#555' }}>{address}</p>
        <div style={{ marginTop: '8px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button onClick={handleCopy} style={{ padding: '4px 6px' }}>주소 복사</button>
          <a href={mapLink} target="_blank" rel="noopener noreferrer" style={{color: '#000', textDecoration: 'none'}}>
            길찾기
          </a>
        </div>
      </div>
    </div>
  );
};

export default KakaoMap;
