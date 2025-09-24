import React, { useState } from "react";

function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const addMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <section className="guestbook">
      <h2>축하 메시지</h2>
      <input
        type="text"
        value={input}
        placeholder="축하 메시지를 남겨주세요"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addMessage}>등록</button>

      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </section>
  );
}

export default Guestbook;
