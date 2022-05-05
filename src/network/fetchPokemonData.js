import { ALL_POKEMON_DATA_URL, SPECIFIC_POKEMON_DATA_URL } from "../config";
import axios from "axios";

export const fetchPokemonCardsData = async () => {
  const data = await axios.get(`${ALL_POKEMON_DATA_URL}`).then((res) => {
    return res.data;
  });
  return data;
};

export const fetchPokemonModalData = async (pokemonName) => {
  const data = await axios
    .get(`${SPECIFIC_POKEMON_DATA_URL}${pokemonName}`)
    .then((res) => {
      return res.data;
    });
  return data;
};
