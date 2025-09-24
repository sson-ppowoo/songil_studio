import React from "react";
import "./Invitation.css";
import Calendar from "./Calendar";
function Invitation() {
  return (
    <section className="invitation">
      <div className="invitation_day">
        <h2>invitation</h2>
        <h2>11/16</h2>
      </div>

      <div className="invitation_text">
        <h3>두사람, 결혼합니다.</h3>
        <p>
          햇살 가득한 날, 저희 부부가 됩니다.
          <br />
          함께하던 작은 일상이 일생이 되는 날
          <br />
          나란히 같은 곳을 보고 걸으며
          <br />
          지금처럼 예쁘게 살아가겠습니다.
          <br />
          우리의 설레는 첫걸음을 함께 빛내주세요.
        </p>
      </div>

      <div className="Customer_info">
        <div className="Groom_info">
          <div className="Groom_parents">
            <p>부 심현산</p>
            <p>모 김순애</p>
          </div>
          <p>의 장남</p>
          <div className="Groom">범수</div>
        </div>

        <div className="Bride_info">
          <div className="Bride_parents">
            <p>부 최정호</p>
            <p>모 윤정아</p>
          </div>
          <p>의 차녀</p>
          <div className="Bride">현진</div>
        </div>
      </div>

      <div className="Wedding_info">
        <div className="invitation_day">
          <h2>invitation</h2>
          <h2>11/16</h2>
        </div>
        <Calendar
          year={2025}
          month={11}
          specialDay={16}
          highlightColor="#d0b134"
        />
      </div>
    </section>
  );
}

export default Invitation;
