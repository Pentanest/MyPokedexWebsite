import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Grid } from "react-loader-spinner";
import { ModalPage } from "../modalPage/ModalPage";
import { letterCapitalizer } from "../../utils";
import { fetchPokemonCardsData } from "../../network/fetchPokemonData";

import "./card-styles.css";

function Card() {
  const navigate = useNavigate();
  const [pokeDetails, setPokeDetails] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [clickedPokemon, setClickedPokemon] = useState({});

  useEffect(async () => {
    try {
      const data = await fetchPokemonCardsData().then((res) => {
        setPokeDetails(res);
      });
    } catch {
      console.log("API is not responding");
      navigate("/documentation");
    }
  }, []);

  const cardClickHandler = (element) => {
    setOpenModal(true);
    setClickedPokemon({
      name: element.name,
      imageURL: element.image,
      abilities: element.type,
    });
  };

  return (
    <>
      {!pokeDetails ? (
        <div className="grid-loader">
          <Grid />
        </div>
      ) : (
        <div className="container">
          {pokeDetails.map((element, key) => {
            return (
              <div className="col-lg-4 col-md-6">
                <div
                  key={key}
                  onClick={() => cardClickHandler(element)}
                  className="blog-card alt"
                >
                  <div className="meta">
                    <div className="photo">
                      <img
                        src={element.image}
                        alt="pokemon"
                        style={{ height: "156px", width: "167px" }}
                      />
                    </div>
                  </div>
                  <div className="description">
                    <h5>{letterCapitalizer(element.name)} </h5>
                    <div className="btn-numbers">
                      <div className="weight">
                        <button className="btn btn-outline-dark number-btn">
                          {element.weight}
                        </button>
                        &nbsp;Weight
                      </div>
                      <div className="height">
                        <button className="btn btn-outline-dark number-btn">
                          {element.height}
                        </button>
                        &nbsp;&nbsp;Height
                      </div>
                    </div>

                    <div className="button-div">
                      <button className="btn btn-primary buttons">
                        {letterCapitalizer(element.type[0])}
                      </button>
                      <button className="btn btn-primary buttons second-button">
                        {letterCapitalizer(
                          element.type[1] ? element.type[1] : "nil"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {openModal && (
            <ModalPage
              imgSource={clickedPokemon.imageURL}
              name={clickedPokemon.name}
              abilities={clickedPokemon.abilities}
              closeModal={setOpenModal}
              modalStatus={openModal}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Card;
