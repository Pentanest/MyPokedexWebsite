import React from "react";
import { useNavigate } from "react-router-dom";
import { team } from "../../assets";
import "./errorPage-style.css";

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="error-wrapper-container">
        <div className="error-text-container">404</div>
        <div class="team-image-container">
          <img src={team} class="team-image" alt="Team" />
        </div>
        <div className="text-intro-container">
          <div className="white-text">The rocket team</div>
          <div className="black-text">has won this time</div>
        </div>
      </div>

      <div className="error-return-button-container">
        <button onClick={() => navigate("/")} className="error-return-button">
          Return
        </button>
      </div>
    </div>
  );
}
