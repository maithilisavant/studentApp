import React, { Component } from "react";
import { Grid, Dialog } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import {Box, TextField, Radio,RadioGroup,FormControlLabel , TextareaAutosize, Checkbox , FormControl} from '@material-ui/core';
import {Autocomplete} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});

export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { open, close } = this.props;
    return (
      <div>
        <Dialog open={open} TransitionComponent={Transition}></Dialog>

        <div className="username input" label="Name"><TextField></TextField></div>
        <div className="userdob input" label="Date of Birth"></div>
        <div className="useremail input" label="Email"><TextField></TextField></div>
        <div className="userphone input" label="Phone"><TextField></TextField></div>
        <div className="useraddress input" label="Address"><TextareaAutosize></TextareaAutosize></div>
        <div className="usergender input" label="Gender">
        <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group" >
          <FormControlLabel control={<Radio />} value="Female" label="Female"></FormControlLabel>
          <FormControlLabel control={<Radio />} value="Male" label="Male">Male</FormControlLabel>
        </RadioGroup>
          </div>
        <div className="usercollege input" label="College"><FormControl></FormControl></div>
        <div className="userhobbies input" label="Hobbies">
        
        </div>
        <div className="userhobbiesother input" label="Check Hobbies"><Checkbox></Checkbox></div>
        <div className="userhobbiesother input" label="Other Hobbies"><TextField></TextField></div>
      </div>
    );
  }
}
