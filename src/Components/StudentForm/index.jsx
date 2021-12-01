import React, { Component } from "react";
import Slide from "@material-ui/core/Slide";
import {
  Box,
  Button,
  Grid,
  TextField,
  Radio,
  FormControl,
  RadioGroup,
  InputBase,
} from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Stack from "@mui/material/Stack";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import PhoneInput from "react-phone-input-2";
// import { KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import "./studentform.css";
import "react-phone-input-2/lib/style.css";
import { hobbies, appColor } from "../../Store/Data/data";

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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>ADD NEW STUDENT</DialogTitle>
        <DialogContent>
          <Grid container direction="column" className={"dialog-container"}>
            <Grid item className={"form-container"} xs={12}>
              <Grid container direction="column">
                <Grid item xs={12} className={"grid-separator"}>
                  <Grid container spacing={3}>
                    <Grid item lg={6} xl={6} sm={6} xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Name
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <InputBase
                            className="common-form-input"
                            autoComplete={"off"}
                            placeholder={"Enter Name"}
                            inputProps={{ maxLength: "50" }}
                            value={"changeOrderTitle"}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item lg={6} xl={6} sm={6} xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Date of Birth
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                              <DatePicker
                                label=""
                                renderInput={(params) => (
                                  <TextField
                                    variant="outlined"
                                    {...params}
                                    size="small"
                                  />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={"grid-separator"}>
                  <Grid container spacing={3}>
                    <Grid item lg={6} xl={6} sm={6} xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Select College
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <Autocomplete
                            options={["DDD", "s"]}
                            renderInput={(params) => (
                              <TextField
                                variant="outlined"
                                {...params}
                                size="small"
                                fullWidth
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item lg={6} xl={6} sm={6} xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Email
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <InputBase
                            className="common-form-input"
                            autoComplete={"off"}
                            placeholder={"Enter Email"}
                            inputProps={{ maxLength: "50" }}
                            value={"changeOrderTitle"}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={"grid-separator"}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Address
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <InputBase
                            className="common-form-input address-input"
                            autoComplete={"off"}
                            placeholder={"Enter Email"}
                            inputProps={{ maxLength: "300" }}
                            value={"changeOrderTitle"}
                            rows={5}
                            multiline={true}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={"grid-separator"}>
                  <Grid container spacing={3}>
                    <Grid item lg={6} xl={6} sm={6} xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Gender
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <RadioGroup
                            row
                            aria-label="gender"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="Female"
                            />
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="Male"
                            />
                            <FormControlLabel
                              value="other"
                              control={<Radio />}
                              label="Other"
                            />
                          </RadioGroup>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item lg={6} xl={6} sm={6} xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Mobile Number
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <div className="phone-input">
                            <PhoneInput
                              inputExtraProps={{
                                name: "phone",
                                required: true,
                                autoFocus: true,
                              }}
                              country={"in"}
                              placeholder="+91 123 456 7890"
                              disableCountryCode={false}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={"grid-separator"}>
                  <Grid container spacing={3}>
                    <Grid item lg={6} xl={6} sm={6} xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Select Hobbies
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <FormGroup style={{ flexDirection: "row" }}>
                            {hobbies.map((item) => {
                              return (
                                <Grid item xs={6}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        sx={{
                                          color: appColor,
                                          "&.Mui-checked": {
                                            color: appColor,
                                          },
                                        }}
                                        checked={true}
                                        // onChange={handleChange1}
                                      />
                                    }
                                    label={item}
                                  />
                                </Grid>
                              );
                            })}
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item lg={6} xl={6} sm={6} xs={12}>
                      <Grid container direction="column">
                        <Grid item>
                          <div className="common-label">
                            Custom Hobby
                            <span style={{ color: "red" }}>*</span>
                          </div>
                        </Grid>

                        <Grid item className={"form-input-seperator"}>
                          <InputBase
                            className="common-form-input"
                            autoComplete={"off"}
                            placeholder={"Enter Email"}
                            inputProps={{ maxLength: "50" }}
                            value={"changeOrderTitle"}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className="form-button-container">
          <Button className="form-button form-save-button common-bk-color">
            Save
          </Button>
          <Button className="form-button common-border-color common-color">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
