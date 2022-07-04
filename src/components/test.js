import { useEffect, useState } from "react"

function Test() {

    const [pokemons, setPokemons] = useState({
    })

    const fetchPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => {
            console.log("Setting res to json");
            return res.json()})
        console.log(response)
        console.log("Setting state");

        setPokemons(response)

    }

    // useEffect(()=>{
    //     fetchPokemons
    // },[])



    return (
        <div className="section row">
            <h3 className="display-3"> Pick your pokemons </h3>

            {pokemons?.results?.map((pokemon, id) => (
                console.log(pokemon)
            )
            )}
        </div>

    )
}

export default Test; 