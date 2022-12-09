import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Matrix = () => {
	const [noOfBox , setnoOfBox] = useState([
		["","","","",""],
		["","","","",""],
		["","","","",""],
		["","","","",""],
		["","","","",""],
		["","","","",""],
	])

	const [mainWord, setMainWord] = ("RAPID");

	const [position, setPosition] = useState(0);

	const [userWord, setUserWord] = useState("");

	const handleChnaheUserWord = (e) => {
			setUserWord(e.target.value.toUpperCase());
	}

	const handleEnter = () => {
		if(userWord.length > 0 && userWord.length < 6)
		{
			let newWord = userWord.split("");
			let boxes = [...noOfBox];
			boxes[position] = [...newWord]
			setnoOfBox([...boxes]);
			setPosition(position+1);
			setUserWord("");
		}
	}

	const checkLetter =  (letter, position) => {
		console.log("letter",letter )
		console.log("position",position )
		// console.log("check",mainWord.indexOf(letter) > -1 && mainWord.indexOf(letter) != position )
		if(letter == "")
		{
			return "#808080"
		}
    else if(mainWord.indexOf(letter) > -1 && mainWord.indexOf(letter) != position)
    {
        return "#ffff00"
    }
    else if(mainWord.indexOf(letter) > -1 && mainWord.indexOf(letter) == position)
    {
        return "#00FF00"
    }
		else if(mainWord.indexOf(letter) == -1)
    {
        return "black"
    }

}

	const handleSetBoxes = (array) => {
			return (
				<div className='wrapper'>
					{
						array.map((letter, index) => 
						<div className='sub_Main_box' style={{backgroundColor: `${checkLetter(letter, index)}`}}>
							{letter}
						</div>)
					}
				</div>
			)
	}

	return (
		<div style={{display:"flex", justifyContent: "space-evenly"}}>
		<div className='main_box'>
			{
				noOfBox && noOfBox.length > 0 && noOfBox.map((item , index) => handleSetBoxes(item))
			}
		</div>
			<div>
			<TextField 
				id="standard-basic" 
				label="Enter Word" 
				variant="standard" 
				value={userWord}
				onChange={handleChnaheUserWord}
				/>
				<button onClick={handleEnter}>
					Enter
				</button>
			</div>
		</div>
	)
}

export default Matrix