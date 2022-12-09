import React from "react";
import  Typography   from '@mui/material/Typography'
import './header.css'
import Form from "./Form";

const Header = () => {
    return (
      <div style={{ borderBottom: "1px solid #d3d6da"}}>
      <div className="wordle-header">
        <Typography className="header-heading" >
          <img src="favicon.webp" style={{width:"20px",height:"20px",marginRight:"8px"}}/>
          <span>  Wordle</span>
        </Typography>
        <div className="subscribe-btn">
        <Form/>
        </div>
        </div>
      </div>
    
    )
};

export default Header;
