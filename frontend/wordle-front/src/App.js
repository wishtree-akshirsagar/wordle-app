import logo from "./logo.svg";
import "./App.css";
import Wordle from "./wordle/Wordle";
import Form from "./wordle/Form";
import Matrix from "./wordle/Matrix";

function App() {
    return (
        <div>
            <Wordle />
            <Form />
            <div className="matrix">
            <Matrix></Matrix>
            </div>
           
        </div>
    );
}

export default App;
