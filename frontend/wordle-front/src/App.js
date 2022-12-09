import logo from "./logo.svg";
import "./App.css";
import Wordle from "./wordle/Wordle";
import Form from "./wordle/Form";
import Matrix from "./wordle/Matrix";
import BackGround from './wordle/background.jpg';

function App() {
    document.title = "Wordle";
    return (
        <div >
            <Wordle style={{height : "20%"}}/>
            {/* <Form /> */}
            <div className="matrix" style={{ 
                backgroundImage: `url(${BackGround})`,
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat',
                height: "calc(100vh - 75px)"}}>
            <Matrix></Matrix>
            </div>
        </div>
    );
}

export default App;
