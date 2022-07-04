import { useQuery } from "react-query";
import Element from "./Element";
function Types() {


    const fetchTypes = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/type/")
        return response.json()
    }

    const { data, status } = useQuery("types", fetchTypes)

    if (status === "loading") {
        return <div> loading </div>
    }
    if (status === "error") {
        return <div> Error </div>
    }

    return (
        <div className="section row">
                <h3 className="display-3"> Pick your type </h3>

            {data.results.map((type) => (
                <div className="col-lg-3 col-md-4 col-sm-6 element">
                                    <Element element={type} />

                </div>
            )
            )}

        </div>

    )
}

export default Types; 