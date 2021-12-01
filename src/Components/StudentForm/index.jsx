import React, { Component } from "react";
import Slide from "@material-ui/core/Slide";
import {Box, Button,  Grid, Dialog, TextField, Radio, RadioGroup, FormControlLabel, Select, TextareaAutosize, Checkbox, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import {LocalizationProvider ,AdapterDateFns , DatePicker} from '@mui/lab';
// import { KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import './studentform.css';

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
      <div className="dialog-container">
        <Dialog open={open} TransitionComponent={Transition}>
          <form className="formdialog">

            <Grid>

              <Grid item>
                <div id="name-input">
                  <TextField  className="input" name="name" label="Name" type="text" required variant="outlined"></TextField>
                </div>
              </Grid>

              <Grid item>
                <div className="userdob input" label="Date of Birth" name="dob" type="date" variant="outlined" required>
                
                </div>
              </Grid>

              <Grid item>
                <div className="useremail input">
                  <TextField className="input" label="Email" name="email" type="email" variant="outlined" required ></TextField>
                </div>
              </Grid>

              <Grid item>
                <div className="userphone input">
                  <TextField className="input" name="phone" type="number" label="Phone" variant="outlined" required ></TextField>
                </div>
              </Grid>

              <Grid item>
                <div className="useraddress input">
                  <TextareaAutosize minRows={3} className="input" name="address" type="text" label="Address" variant="outlined" required></TextareaAutosize>
                </div>
              </Grid>

              <Grid item>
                <div className="usergender input" label="Gender">
                  <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group" >
                    <FormControlLabel control={<Radio />} value="Female" label="Female"></FormControlLabel>
                    <FormControlLabel control={<Radio />} value="Male" label="Male"></FormControlLabel>
                  </RadioGroup>
                </div>
              </Grid>

              <Grid item>
                <div className="usercollege input">
                  <Select className="input" native label="College" variant="outlined"> </Select>
                </div>
              </Grid>
              
              <Grid item>
                <div className="userhobbies input">
                  <Select className="input" native name="hobbies" type="text" label="Hobbies" variant="outlined"> </Select>
                  {/* <TextField name="" type="" label="Hobbies" required ></TextField> */}
                </div>
              </Grid>

              <Grid item>
                <div className="input" className="userhobbiesother input" label="Check Hobbies"><Checkbox></Checkbox></div>
              </Grid> 

              <Grid item>
                <div className="input" className="userhobbiesother input"><TextField name="otherhobbies" type="text" label="Other Hobbies" variant="outlined"></TextField></div>
              </Grid>

              <Grid>
                <Button variant="contained" type="submit"> Submit </Button>
              </Grid>

            </Grid>
          </form>
        </Dialog>

        
      </div>
    );
  }
}
