import React from "react";

const Character = ({character}) => {
    return (
        <div className="card">
            <h3>{character.name}</h3>
            <p>{character.race}</p>
            <p>{character.realm}</p>
        </div>
    )
};

export default Character;