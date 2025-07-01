import React, { useEffect, useRef, useState } from 'react';

const KakaoMap = () => {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  const placeName = '마리드메이(구.오월의 신부)';
  const address = '대구광역시 수성구 황금동 동대구로 157';

  useEffect(() => {
    const loadMapScript = () => {
      if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
        // 이미 SDK와 services 라이브러리가 로드된 상태면 바로 초기화
        window.kakao.maps.load(() => {
          initializeMap();
        });
        return;
      }

      // SDK 로드
      const script = document.createElement('script');
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=80d2acf957e190eb93c93e1942a0d92d&autoload=false&libraries=services';
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          initializeMap();
        });
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      // window.kakao.maps.services가 반드시 존재하는 시점임
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const lat = parseFloat(result[0].y);
          const lng = parseFloat(result[0].x);
          setCoordinates({ latitude: lat, longitude: lng });

          const container = mapRef.current;
          const options = {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(lat, lng),
            map,
          });
        } else {
          alert('주소를 찾을 수 없습니다.');
        }
      });
    };

    loadMapScript();
  }, [address]);

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      alert('주소가 복사되었습니다!');
    });
  };

  const { latitude, longitude } = coordinates;
  const mapLink = latitude && longitude
    ? `https://map.kakao.com/link/to/${placeName},${latitude},${longitude}`
    : '#';

  return (
    <div style={{ marginTop: '2rem', padding: '0 16px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '300px', borderRadius: '12px' }} />
      <div style={{ marginTop: '10px' }}>
        <p style={{ fontWeight: 600 }}>{placeName}</p>
        <p style={{ fontSize: '14px', color: '#555' }}>{address}</p>
        <div style={{ marginTop: '8px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button onClick={handleCopy} style={{ padding: '4px 6px' }}>주소 복사</button>
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#000', textDecoration: 'none' }}
          >
            길찾기
          </a>
        </div>
      </div>
    </div>
  );
};

export default KakaoMap;
