import React, { useState, useRef, useEffect } from "react";
import Page8 from "./Page8";
import Founders from "./Founders";
import "./Team.css";

export default function Team() {
  const [teamVisible, setTeamVisible] = useState(true);
  const teamBtnRef = useRef(null);
  const foundersBtnRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeBtn = teamVisible ? teamBtnRef.current : foundersBtnRef.current;
    if (activeBtn) {
      setUnderlineStyle({
        left: activeBtn.offsetLeft + "px",
        width: activeBtn.offsetWidth + "px"
      });
    }
  }, [teamVisible]);

  return (
    <main className="team-founder-container">
      <div className="tab-container">
        <div className="page-buttons">
          <button ref={teamBtnRef} onClick={() => setTeamVisible(true)}>Team</button>
          <button ref={foundersBtnRef} onClick={() => setTeamVisible(false)}>Founding Team</button>
        </div>
        <div className="underline-bar" style={{
          left: underlineStyle.left,
          width: underlineStyle.width
        }} />
      </div>

      {teamVisible ? <Page8 /> : <Founders />}
    </main>
  );
}
