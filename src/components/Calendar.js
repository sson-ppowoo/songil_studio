import React from "react";
import "./Calendar.css";

function Calendar({ year, month, specialDay, highlightColor = "red" }) {
  // 달의 마지막 날 구하기
  const daysInMonth = new Date(year, month, 0).getDate();

  // 월 시작 요일 (0=일요일)
  const startDay = new Date(year, month - 1, 1).getDay();

  // 날짜 배열 생성
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // 달력용 배열 (빈칸 포함)
  const calendarCells = [...Array(startDay).fill(null), ...daysArray];

  // 한 주는 7일씩 끊어서 배열화
  const weeks = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(calendarCells.slice(i, i + 7));
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {year}년 {month}월
      </div>

      <div className="calendar-grid">
        {["일", "월", "화", "수", "목", "금", "토"].map((day, idx) => (
          <div key={idx} className="day-label">
            {day}
          </div>
        ))}

        {weeks.map((week, wIdx) =>
          week.map((day, dIdx) =>
            day ? (
              <div
                key={`${wIdx}-${dIdx}`}
                className={`day ${day === specialDay ? "special" : ""}`}
                style={
                  day === specialDay
                    ? { "--highlight-color": highlightColor }
                    : {}
                }
              >
                {day}
              </div>
            ) : (
              <div key={`${wIdx}-${dIdx}`} className="empty"></div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default Calendar;
