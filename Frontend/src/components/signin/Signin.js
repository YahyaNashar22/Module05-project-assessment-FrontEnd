import React from 'react'
import style from "./Signin.module.css"
import { TextField,Typography } from "@mui/material";
import opened from "../../assets/opened.svg"
import closed from "../../assets/closed.svg"
import { passHandlerStore } from '../../store';
import { Link } from 'react-router-dom';

function Signin() {
const {openClose, change} = passHandlerStore();


  return (
    <>
    <div className={style.wrapper}>
    <form className={style.container}>
          <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: "32px", marginBottom: "10px" }}
          className={style.header}
        >
          Log in
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ fontSize: "16px", marginBottom: "10px" }}
          className={style.subText}
        >
          Enter your details below
        </Typography>
        <TextField
                sx={{
                  width:"80%",
                  margin:"10px",
                  "& input::placeholder": { color: "#c0c0c0" },
                  "& label": { color: "#c0c0c0" },
                  "& .MuiInputBase-input": {
                    color: "blueviolet)",
                  },
                  "& fieldset": { borderColor: "blueviolet" },
                }}
                label="Email" 
                placeholder="Enter your Email"
                variant="outlined"
                type="email"
                required
                fullWidth
                className={style.signinInp}
              />
              <TextField
                  sx={{
                    width:"80%",
                  margin:"10px",
                    "& input::placeholder": { color: "var(--grey-color)" },
                    "& label": { color: "var(--grey-color)" },
                    "& .MuiInputBase-input": {
                      color: "var(--main-background-color)",
                    },
                    "& fieldset": { borderColor: "var(--grey-color)" },
                  }}
                  label="Password"
                  placeholder="Enter your Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  className={style.passInp}
                />
                <span className={style.passEye} onClick={change} >
                <img
                  src={openClose?opened:closed}
                  height="20px"
                  width="20px"
                  alt="open close eye"
                />
              </span> 
              <button type='submit' className={style.signIn} >Sign Me In !</button>
              <Link to="/signup" className={style.signUp}>I DON'T HAVE AN ACCOUNT !!!</Link>
    </form>
    </div>
    </>
  )
}

export default Signin