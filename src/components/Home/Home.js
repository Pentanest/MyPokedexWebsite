import React from "react";
import { GoogleLoginButton } from "../googleLoginButton/GoogleLoginButton";

import { BannerComplete } from "../../assets";

import "./home-styles.css";

export function Home() {
  return (
    <div className="home-container">
      <div className="body-container">
        <div>
          <h1 className="motto">
            <span className="motto-bold">Find</span> all your favorite{" "}
            <span className="motto-bold">Pokemon</span>
          </h1>
          <h2 className="support-text">
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </h2>
          <GoogleLoginButton />
        </div>
        <div>
          <img
            src={BannerComplete}
            className="image-container"
            alt="pokemon-pic"
          />
        </div>
      </div>
    </div>
  );
}
