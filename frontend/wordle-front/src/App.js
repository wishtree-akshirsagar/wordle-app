import logo from "./logo.svg";
import "./App.css";
import Wordle from "./wordle/Wordle";
import Form from "./wordle/Form";

function App() {
    document.title = "Wordle";
    return (
        <div>
            <Wordle />
        </div>
    );
}

export default App;
