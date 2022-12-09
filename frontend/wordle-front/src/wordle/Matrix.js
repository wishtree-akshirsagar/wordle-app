import React, { useState, useContext } from 'react';
import TextField from './CustomInput';
import Button from '@mui/material/Button';
import { UserContext } from "../App";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const dictionary = [
  {
    word: 'agent',
    meaning: 'a person or business authorized to act on another behalf:',
    
  },
  {
    word: 'above',
    meaning: 'in or to a higher place than, over:',
    
  },
  {
    word: 'adopt',
    meaning:
      "to choose or take as one's own, make one's own by selection or assent:",
    
  },
  {
    word: 'album',
    meaning:
      'a bound or loose-leaf book consisting of blank pages, pockets, envelopes, etc., for storing or displaying photographs, stamps, or the like, or for collecting autographs.',
    
  },
  {
    word: 'beach',
    meaning: 'an expanse of sand or pebbles along a shore.',
    
  },
  {
    word: 'blink',
    meaning:
      'to open and close the eye, especially involuntarily, wink rapidly and repeatedly.',
    
  },
  {
    word: 'cable',
    meaning:
      'a very strong rope made of strands of metal wire, as used to support cable cars or suspension bridges.',
    
  },
  {
    word: 'cabin',
    meaning:
      'an enclosed space for more or less temporary occupancy, as the living quarters in a trailer or the passenger space in a cable car.',
    
  },
  {
    word: 'candy',
    meaning:
      'any of a variety of confections made with sugar, syrup, etc., often combined with chocolate, fruit, nuts, etc.',
    
  },
  {
    word: 'dance',
    meaning:
      "to move one's feet or body, or both, rhythmically in a pattern of steps, especially to the accompaniment of music.",
    
  },
  {
    word: 'debug',
    meaning: 'to detect and remove defects or errors from.',
    
  },
  {
    word: 'doubt',
    meaning:
      'to be uncertain about, consider questionable or unlikely, hesitate to believe:.',
    
  },
  {
    word: 'eager',
    meaning: 'keen or ardent in desire or feeling, impatiently longing:',
    
  },
  {
    word: 'empty',
    meaning:
      'containing nothing, having none of the usual or appropriate contents:',
    
  },
  {
    word: 'equal',
    meaning:
      'a person or thing that is equal to another, as in quantity, degree, value, rank, or ability.',
    
  },
  {
    word: 'floor',
    meaning:
      'a continuous, supporting surface extending horizontally throughout a building, having a number of rooms, apartments, or the like, and constituting one level or stage in the structure, story.',
    
  },
];

const Matrix = () => {
	const {word, setWord} = useContext(UserContext)
	const [noOfBox, setnoOfBox] = useState([
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
	])
	const [openToaster, setOpenToaster] = useState(false);
	
	const [mainWord, setMainWord] = useState(dictionary[Math.floor(Math.random() * dictionary.length)].word.toUpperCase());

	const [position, setPosition] = useState(0);

	const [userWord, setUserWord] = useState("");

	const handleCloseToaster = () => {
		setOpenToaster(false);
};
	const handleChnaheUserWord = (e) => {
		if(e.target.value.length < 6)
		{
			setUserWord(e.target.value.toUpperCase());
		}
	}

	const handleEnter = () => {
		if (userWord.length > 0 && userWord.length < 6) {
			let newWord = userWord.split("");
			let boxes = [...noOfBox];
			boxes[position] = [...newWord]
			setnoOfBox([...boxes]);
			setPosition(position + 1);
			setUserWord("");
			if(mainWord == userWord)
			{
				setTimeout(() => {
					setnoOfBox([
						["", "", "", "", ""],
						["", "", "", "", ""],
						["", "", "", "", ""],
						["", "", "", "", ""],
						["", "", "", "", ""],
						["", "", "", "", ""],
					])
					setOpenToaster(true);
					setPosition(0);
				}, 5000);
			}
		}
	}

	const checkLetter = (letter, position) => {
		console.log("main word", mainWord)
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

			<Snackbar
                open={openToaster}
                autoHideDuration={3000}
                onClose={handleCloseToaster}
            >
                <Alert
                    onClose={handleCloseToaster}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Wordle completed successfully!!!!!
                </Alert>
            </Snackbar>

		</div>
	)
}

export default Matrix