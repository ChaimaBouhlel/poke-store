import {atom, useRecoilState} from "recoil"
 const pokemonState = atom({
    key: "pokemons",
    default: [],
  })

export const usePokemonState = () => useRecoilState(pokemonState)

