import logo from "./logo.svg";
import "./App.css";
import Wordle from "./wordle/Wordle";
import Form from "./wordle/Form";
import Matrix from "./wordle/Matrix";
import BackGround from './wordle/background.jpg';
import React, {createContext, useState} from "react";

const UserContext = createContext()
const App = () => {
    document.title = "Wordle";
    const [word, setWord] = useState("");
    const value = {word, setWord}

    return (
        <UserContext.Provider value={value}>
        <div>
            <Wordle style={{height : "20%"}}/>
            {/* <Form /> */}
            <div className="matrix" style={{ 
               
                height: "calc(100vh - 75px)"}}>
            <Matrix></Matrix>
            </div>
        </div>
        </UserContext.Provider>
    );
}

export default App
export {UserContext}

