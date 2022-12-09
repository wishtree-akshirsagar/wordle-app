import React, { useState } from 'react';
import TextField from './CustomInput';
import Button from '@mui/material/Button';

const Matrix = () => {
	const [noOfBox, setnoOfBox] = useState([
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
	])

	const [mainWord, setMainWord] = useState("RAPID");

	const [position, setPosition] = useState(0);

	const [userWord, setUserWord] = useState("");

	const handleChnaheUserWord = (e) => {
		setUserWord(e.target.value.toUpperCase());
	}

	const handleEnter = () => {
		if (userWord.length > 0 && userWord.length < 6) {
			let newWord = userWord.split("");
			let boxes = [...noOfBox];
			boxes[position] = [...newWord]
			setnoOfBox([...boxes]);
			setPosition(position + 1);
			setUserWord("");
		}
	}

	const checkLetter = (letter, position) => {
		console.log("mainWord", mainWord)
		console.log("letter", letter)
		console.log("position", position)
		console.log("mainWord.indexOf(letter)", mainWord.indexOf(letter));
		let color = ""
		// console.log("check",mainWord.indexOf(letter) > -1 && mainWord.indexOf(letter) != position )
		if (letter == "") {
			color = "#ececed"
		}
		else if (mainWord.indexOf(letter) > -1 && mainWord.indexOf(letter) != position) {
			color = "#9e9e9e"
		}
		else if (mainWord.indexOf(letter) > -1 && mainWord.indexOf(letter) == position) {
			color = "#00c853"
		}
		else if (mainWord.indexOf(letter) == -1) {
			
			color="#eeff41"
		}

		console.log("color", color);
		return color;

	}

	const handleSetBoxes = (array) => {
		return (
			<div className='wrapper'>
				<div className='sub_Main_box' style={{ backgroundColor: `${checkLetter(array[0], 0)}` }}>
					{array[0]}
				</div>
				<div className='sub_Main_box' style={{ backgroundColor: `${checkLetter(array[1], 1)}` }}>
					{array[1]}
				</div>
				<div className='sub_Main_box' style={{ backgroundColor: `${checkLetter(array[2], 2)}` }}>
					{array[2]}
				</div>
				<div className='sub_Main_box' style={{ backgroundColor: `${checkLetter(array[3], 3)}` }}>
					{array[3]}
				</div>
				<div className='sub_Main_box' style={{ backgroundColor: `${checkLetter(array[4], 4)}` }}>
					{array[4]}
				</div>
			</div>
		)
	}

	return (
		<div >

			<div className='input_word'>
				<TextField
					id="standard-basic"
					// label="Enter Word"
					// variant="standard"
					value={userWord}
					placeholder="Enter Word"
					onChange={handleChnaheUserWord}
				/>
				<Button size="small" onClick={handleEnter} variant="contained">Enter</Button>
			</div>


			<div className='main_box'>
				{
					noOfBox && noOfBox.length > 0 && noOfBox.map((item, index) => handleSetBoxes(item))
				}
			</div>

		</div>
	)
}

export default Matrix