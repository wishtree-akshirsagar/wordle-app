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
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    const [open, setOpen] = React.useState(false);
    const [openToaster, setOpenToaster] = useState(false);
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseToaster = () => {
        setOpenToaster(false);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmitEmail = async () => {
        if (email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
            try {
                const response = await Axios.post("", {
                    email,
                });
                if (response.status == 201) {
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
            }
        } else {
            setEmail("");
            console.log("in-valid email", email);

            setError("Invalid email addrress");
        }
    };

    // const handleEmailChange = (e) => {
    //     console.log(e.target.value);
    //     setEmail(e.target.value);
    // };

    return (
        <div>
            <Snackbar open={openToaster}>
                <Alert
                    onClose={handleCloseToaster}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Email saved successfully!
                </Alert>
            </Snackbar>
            <Button variant="outlined" onClick={handleClickOpen}>
                Subscribe wordle
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmitEmail}>
                    <DialogTitle>Subscribe To Wordle</DialogTitle>
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
                            error={error}
                            helperText={error}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmitEmail}>Subscribe</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default Form;
