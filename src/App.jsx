import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page9 from "./pages/Page9";
import SocialIcons from "./components/SocialIcons";
import Submit from "./pages/Submit";
import Team from './pages/Team'

function HomePage() {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page9 />
      <Submit />
      <Page4 />
      <SocialIcons />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Team" element={<Team />} />

      </Routes>
    </Router>
  );
}
