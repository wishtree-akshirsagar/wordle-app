import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import './form.css'

const Form = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Subscribe wordle
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className="subscribe-title">Subscribe To Wordle</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to wordle, please enter your email address
                        here. We will send daily updated puzzles.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions style={{paddingRight:"24px",paddingBottom:"20px"}}>
                    <Button onClick={handleClose} variant="outlined">Cancel</Button>
                    <Button onClick={handleClose} variant="contained">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Form;
