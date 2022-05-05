import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { fetchPokemonModalData } from "../../network/fetchPokemonData";
import { letterCapitalizer } from "../../utils";
import { closeIcon } from "../../assets";
import "./modalPage-styles.css";

const BorderLinearProgress1 = styled(LinearProgress)(({ theme }) => ({
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#64D368" : "#F6F7F9",
  },
}));

const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F5DB13" : "#F6F7F9",
  },
}));

export const ModalPage = (props) => {
  document.getElementById("root").style.opacity = "0.5";
  const navigate = useNavigate();
  const [pokemonStats, setPokemonStats] = useState([]);
  const [clickedPokemonStats, setClickedPokemonStats] = useState({});

  useEffect(async () => {
    try {
      const data = await fetchPokemonModalData(props.name).then((res) => {
        setPokemonStats(res);
        const stats = res.stats;
        const thisClickedPokemonStats = stats.reduce((acc, statObject) => {
          const statName = statObject.stat.name;
          acc[`${statName}`] = statObject.base_stat;
          return acc;
        }, {});
        setClickedPokemonStats(thisClickedPokemonStats);
      });
    } catch {
      document.getElementById("root").style.opacity = "";
      console.log("API is not responding");
      navigate("/documentation");
    }
  }, []);

  return ReactDOM.createPortal(
    <div className="whole-modal">
      <div className="modal-card-container">
        <img
          className="modal-close-button"
          src={closeIcon}
          alt="Close"
          onClick={() => {
            props.closeModal(false);
            document.getElementById("root").style.opacity = "";
          }}
        />
        <div className="modal-card">
          <div className="modal-image-container">
            <img
              className="modal-close-button-inside"
              src={closeIcon}
              alt="Close"
              onClick={() => {
                props.closeModal(false);
                document.getElementById("root").style.opacity = "";
              }}
            />
            <div className="pokename-div-container">
              <label className="pokename-inside">
                {letterCapitalizer(props.name)}
              </label>
            </div>
            <div className="modal-image">
              <img src={props.imgSource} class="poke-image" alt="pokemon"></img>
            </div>
            <div className="modal-btn-container">
              <div className="modal-card-point-mobile">
                <label>{pokemonStats.base_experience}</label>
              </div>
              <div>
                <button className="modal-btn1">
                  {letterCapitalizer(props.abilities[0])}
                </button>
                <button className="modal-btn2">
                  {letterCapitalizer(
                    props.abilities[1] ? props.abilities[1] : "nil"
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="modal-information-container">
            <div className="modal-heading-container">
              <div className="modal-heading-text">
                <label>{letterCapitalizer(props.name)}</label>
              </div>
              <div className="modal-card-point">
                <label>{pokemonStats.base_experience}</label>
              </div>
            </div>

            <div className="modal-abilities">
              <label className="abilities-title">Abilities</label>
              <label className="rendered-abilities">
                {letterCapitalizer(props.abilities[0])}{" "}
                {letterCapitalizer(
                  props.abilities[1] ? props.abilities[1] : ""
                )}
              </label>
            </div>
            <div className="modal-data-part-container">
              <div className="modal-left">
                <div>
                  <label className="stats-title">HP</label>
                </div>
                <div>
                  <label>{clickedPokemonStats.hp}</label>
                </div>
                <div className="modal-progress">
                  <Box>
                    <BorderLinearProgress1
                      className="modal-progress-bar"
                      variant="determinate"
                      value={clickedPokemonStats.hp / 5}
                    />
                  </Box>
                </div>
              </div>
              <div className="modal-right">
                <div>
                  <label className="stats-title">Speed</label>
                </div>
                <div>
                  <label>{clickedPokemonStats.speed}</label>
                </div>
                <div className="modal-progress">
                  <Box>
                    <BorderLinearProgress2
                      className="modal-progress-bar"
                      variant="determinate"
                      value={clickedPokemonStats.speed / 5}
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div className="modal-sub-container">
              <div className="modal-square-container">
                <div className="modal-round">
                  <label>{clickedPokemonStats.defense}</label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defense
              </div>
              <div className="modal-square-container">
                <div className="modal-round">
                  <label>{clickedPokemonStats.attack}</label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attack
              </div>
              <div className="modal-square-container">
                <div className="modal-round">
                  <label>{clickedPokemonStats["special-attack"]}</label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;Sp Attack
              </div>
              <div className="modal-square-container">
                <div className="modal-round">
                  <label>{clickedPokemonStats["special-defense"]}</label>
                </div>
                &nbsp;&nbsp;Sp Defense
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-main")
  );
};
