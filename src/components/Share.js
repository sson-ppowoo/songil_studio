import React from "react";

function Share() {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다.");
  };

  return (
    <section className="share">
      <h2>공유하기</h2>
      <button onClick={copyLink}>링크 복사</button>
      {/* 카카오 SDK 연동하면 카톡 공유 버튼도 가능 */}
    </section>
  );
}

export default Share;
