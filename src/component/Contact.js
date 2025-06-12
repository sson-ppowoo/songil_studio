import React, { useState } from 'react';

const Contact = ({ phone, bankAccount }) => {
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankAccount).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`메시지 전송: ${message}`);
    setMessage('');
  };

  return (
    <section style={{ padding: '20px' }}>
      <h3>연락하기</h3>
      <p><strong>전화번호 :</strong> {phone}</p>
      <p>
        <strong>계좌번호 :</strong> {bankAccount}{' '}
        <button onClick={copyToClipboard}>{copied ? '복사 완료!' : '복사하기'}</button>
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="축하 메세지를을 적어주세요"
          rows={4}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button type="submit">전송</button>
      </form>
    </section>
  );
};

export default Contact;
