import * as React from 'react';
import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import MainPage from './MainPage'

import '../App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function LandingPage({handleClick}) {

// const handleClick = (event) =>{
//   event.preventDefault();
//   console.log("quit clicking me!")
//   setLoggedIn(!loggedIn)
//   console.log("logged in?: ", loggedIn)
//   if (loggedIn){ 
//     return(
//        //console.log("this is the first half of the if statement")
//        //<h1>ANYTHING<h1>
//       <MainPage state={state} setState={setState} volume={volume} setVolume={setVolume} quality={quality} setQuality={setQuality} />
//     )
//     } else {
//       return(
//       //console.log("this is the second half of the if statement")
//       //<h1>JUST DISPLAY ANYTHING<h1>
//       <LandingPage/>
//       )
//   }
// }

  return (
    <form className="landingMain">
        <Stack spacing={2} direction="row">
            <div className="loginInputContainer">
            <TextField className="loginInputs" id="standard-basic" label="Username*" variant="standard" />
            <TextField className="loginInputs"id="standard-basic" label="Password*" variant="standard" />
            <br></br>
            <Button className="loginInputs" variant="contained" onClick={handleClick}>LOGIN</Button>
            </div>
        </Stack>
    </form>
  );
}