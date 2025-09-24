import React from "react";
import Header from "./components/Header";
import Invitation from "./components/Invitation";
import Gallery from "./components/Gallery";
import Guestbook from "./components/Guestbook";
import Contact from "./components/Contact";
import Share from "./components/Share";
import "./styles/style.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Invitation />
      <Gallery />
      <Contact />
      <Guestbook />
      <Share />

      <footer className="footer">
        <p>© 2025 Songil & Minjung Wedding Invitation</p>
      </footer>
    </div>
  );
}

export default App;
