import React from "react";

function Contact() {
  const copyAccount = (account) => {
    navigator.clipboard.writeText(account);
    alert("계좌번호가 복사되었습니다.");
  };

  return (
    <section className="contact">
      <h2>연락처 & 계좌번호</h2>
      <div>
        <p>신랑: 010-1234-5678</p>
        <button onClick={() => copyAccount("국민은행 123-456-789012")}>
          신랑 계좌 복사
        </button>
      </div>
      <div>
        <p>신부: 010-9876-5432</p>
        <button onClick={() => copyAccount("신한은행 987-654-321098")}>
          신부 계좌 복사
        </button>
      </div>
    </section>
  );
}

export default Contact;
