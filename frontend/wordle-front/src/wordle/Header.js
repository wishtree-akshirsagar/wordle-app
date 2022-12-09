import React from "react";
import  Typography   from '@mui/material/Typography'
import './header.css'
import Form from "./Form";

const Header = () => {
    return (
    <div className="wordle-header">
        <Typography className="header-heading">
        Wordle
        </Typography>
        <div className="subscribe-btn">
        <Form/>
        </div>
        
        </div>
    )
};

export default Header;
