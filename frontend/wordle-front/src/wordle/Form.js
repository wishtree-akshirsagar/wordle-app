import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import Axios from "axios";
import MuiAlert from "@mui/material/Alert";
import "./form.css";

import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = () => {
    const [open, setOpen] = React.useState(false);
    const [openToaster, setOpenToaster] = useState(false);
    const [openErrorToaster, setOpenErrorToaster] = useState(false);
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");
    const [errorStatus, setErrorStatus] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setErrorStatus(false);
        setError("");
        setEmail("");
    };
    const handleCloseToaster = () => {
        setOpenToaster(false);
    };

    const handleCloseErrorToaster = () => {
        setOpenErrorToaster(false);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmitEmail = async () => {
        if (email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
            try {
                const response = await Axios.get(
                    `http://127.0.0.1:5000/user/getUserProfile/${email}`
                );
                if (response.status == 200) {
                    console.log("Email submitted successfully");

                    setOpen(false);
                    setEmail("");
                    setError("");
                    console.log("valid email", email);
                    setOpenToaster(true);
                    return null;
                }
            } catch (error) {
                console.log("Error from backend");
                setOpenErrorToaster(true);
            }
        } else {
            setEmail("");
            setErrorStatus(true);
            console.log("in-valid email", email);
            // setOpenErrorToaster(true);
            setError("Invalid email addrress");
        }
    };

    return (
        <div>
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
                    Email saved successfully!
                </Alert>
            </Snackbar>
            <Snackbar
                open={openErrorToaster}
                autoHideDuration={3000}
                onClose={handleCloseErrorToaster}
            >
                <Alert
                    onClose={handleCloseErrorToaster}
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    Something went wrong!
                </Alert>
            </Snackbar>
            <Button variant="outlined" onClick={handleClickOpen}>
                Subscribe wordle
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmitEmail}>
                    <DialogTitle className="subscribe-title">
                        Subscribe To Wordle
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to wordle, please enter your email
                            address here. We will send daily updated puzzles.
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                            error={errorStatus}
                            helperText={error}
                        />
                    </DialogContent>
                    <DialogActions
                        style={{ paddingRight: "24px", paddingBottom: "20px" }}
                    >
                        <Button onClick={handleClose} variant="outlined">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmitEmail} variant="contained">
                            Subscribe
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default Form;
