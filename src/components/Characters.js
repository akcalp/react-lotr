import React, {useEffect} from "react";
import {useQuery} from "react-query";
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
    // console.log(data);

    const Row = ({index, style}) => (
        <div style={style}>
            {data.docs[index].name}
            {/*{data.docs.map(char => <div key={char[index]}>{char.name}</div>)}*/}
        </div>
    );


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
                <List
                    className="List"
                    height={window.innerHeight - 20}
                    itemCount={1000}
                    itemSize={35}
                    width={window.innerWidth}
                    overScanCount={4}
                >
                    {Row}
                </List>

            )}
        </div>
    )
};

export default Characters;