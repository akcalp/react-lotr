import React from "react";

const Navbar = ({setPage}) => {
    return (
        <nav>
            <button onClick={() => setPage("characters")}>Characters</button>
            <button onClick={() => setPage("races")}>Races</button>
        </nav>
    )
};

export default Navbar;