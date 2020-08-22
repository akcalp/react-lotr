import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Race from "./components/Race";
import {FixedSizeList as List} from "react-window";

function App() {

    // const renderRow = ({index, style}) => (
    //     <div className="content" style={style}>
    //         {page === "characters" ? <Characters/> : <Race/>}
    //     </div>
    // );





    const [page, setPage] = useState("characters");

    return (
        <div className="App">
            <h1>Lord of the Rings Info</h1>
            <Navbar setPage={setPage}/>
            {/*<List*/}
            {/*    className="List"*/}
            {/*    height={window.innerHeight - 20}*/}
            {/*    itemCount={1000}*/}
            {/*    itemSize={35}*/}
            {/*    width={window.innerWidth}*/}
            {/*>*/}
            {/*    {renderRow}*/}
            {/*</List>*/}

            <div className="content">
                {page === "characters" ? <Characters/> : <Race/>}
            </div>

        </div>
    );
}

export default App;
