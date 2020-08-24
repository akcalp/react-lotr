import React  from "react";
import {useQuery} from "react-query";
import Character from "./Character";
import {FixedSizeList as List} from "react-window";


const Characters = () => {

    const fetchCharacters = async () => {
        const res = await fetch("https://the-one-api.herokuapp.com/v1/character", {
            method: "get",
            headers: {
                "Authorization": "Bearer zrfnRU5Ta7G-PcCeQT_4",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return res.json();
    };

    const {data, status} = useQuery("characters", fetchCharacters);
    console.log(data);




    return (
        <div>
            <h2>Characters</h2>
            {status === "loading" && (
                <div>Loading data...</div>
            )}
            {status === "error" && (
                <div>Error fetching data</div>
            )}
            {status === "success" && (
                <div>
                    {data.docs.map(character => <Character key={character._id} character={character}/>)}
                </div>
            )}
        </div>
    )
};

export default Characters;