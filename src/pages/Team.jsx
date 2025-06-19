import Page8 from "./Page8";
import Founders from './Founders'
import './Team.css'
import { useState } from "react";

export default function Team() {
    const [teamVisible, setTeamVisible] = useState(true);

    return (
        <main className="team-founder-container">
            <div className="page-buttons">
                <button onClick={() => setTeamVisible(true)}>Team</button>
                <button onClick={() => setTeamVisible(false)}>Founding Team</button>
            </div>

            {teamVisible ? <Page8 /> : <Founders />}
        </main>
    );
}
