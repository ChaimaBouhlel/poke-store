import { useQuery } from "react-query";
import Element from "./Element.js";
import { usePokemonState} from "../atom.js";

function Pokemons() {


    const [pokemonsSelected, setPokemonsSelected] = usePokemonState();


    const fetchPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        return response.json()
    }

    const { data, status } = useQuery("pokemons", fetchPokemons)

    if (status === "loading") {
        return <div> loading </div>
    }
    if (status === "error") {
        return <div> Error </div>
    }


    return (
        <div className="section row">
            <h3 className="display-3"> Pick your pokemons </h3>


            {data.results.map((pokemon, id) => (
                <div key={id} className="element col-lg-3 col-md-4 col-sm-6" onClick={() => setPokemonsSelected([...pokemonsSelected, pokemon])}>
                    <Element element={pokemon} />
                </div>
            )
            )}


        </div>

    )
}

export default Pokemons; 