import React, { useEffect, useRef, useState } from 'react';

const KakaoMap = () => {
  const mapRef = useRef(null);
  const hasMounted = useRef(false);

  const placeName = '마리드메이(구.오월의 신부)';
  const address = '대구광역시 수성구 황금동 동대구로 157';

  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=80d2acf957e190eb93c93e1942a0d92d&autoload=false&libraries=services';
      script.async = true;
      script.onload = () => window.kakao.maps.load(initializeMap);
      document.head.appendChild(script);
    };

    const initializeMap = () => {
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
            map: map,
          });
        } else {
          alert('주소를 찾을 수 없습니다.');
        }
      });
    };

    if (!window.kakao || !window.kakao.maps) {
      loadMapScript();
    } else {
      window.kakao.maps.load(initializeMap);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      alert('주소가 복사되었습니다!');
    });
  };

  // 👉 앱, 웹 길찾기 링크 생성
  const getMapLinks = () => {
    const { latitude, longitude } = coordinates;
    if (!latitude || !longitude) return { app: '#', web: '#' };

    return {
      app: `kakaomap://route?ep=${latitude},${longitude}&by=FOOT`,
      web: `https://map.kakao.com/link/to/${placeName},${latitude},${longitude}`,
    };
  };

  const { app: appLink, web: webLink } = getMapLinks();

  return (
    <div style={{ marginTop: '2rem', padding: '0 16px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '300px', borderRadius: '12px' }} />
      <div style={{ marginTop: '10px' }}>
        <p style={{ fontWeight: 600 }}>{placeName}</p>
        <p style={{ fontSize: '14px', color: '#555' }}>{address}</p>
        <div style={{ marginTop: '8px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button onClick={handleCopy} style={{ padding: '4px 6px' }}>주소 복사</button>

          {/* 앱 우선 길찾기 → 앱 없으면 웹 fallback */}
          <a
            href={appLink}
            onClick={(e) => {
              setTimeout(() => {
                window.location.href = webLink;
              }, 500); // 앱 없을 경우 fallback (0.5초 후)
            }}
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
