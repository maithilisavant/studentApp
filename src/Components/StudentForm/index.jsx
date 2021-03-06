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
import { connect } from "react-redux";
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
import PhoneInput from "react-phone-input-2";
import "./studentform.css";
import "react-phone-input-2/lib/style.css";
import { hobbies, appColor } from "../../Store/Data/data";
import {
  getCollegeDetails,
  storeStudentDetails,
} from "../../Store/Actions/actions";
import { emailValidator, phoneValidator } from "../../Functions/functions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      college: {},
      address: "",
      email: "",
      gender: "",
      phone: "",
      userHobbies: [],
      customHobby: "",
      isEdit: false,
      editKey: 0,
      errors: {
        name: "",
        dob: "",
        college: "",
        address: "",
        email: "",
        gender: "",
        phone: "",
        userHobbies: "",
        customHobby: "",
      },
    };
  }

  onChangeHandler = (e, type) => {
    //Dynamic state setting
    if (this.state.errors[type]) {
      let errors = this.state.errors;
      errors[type] = "";
      this.setState({ errors: errors });
    }
    this.setState({ [type]: e.target.value });
  };

  handleValidation = () => {
    //Validator Function, used before form submit
    let formIsValid = true;
    let errors = this.state.errors;

    //FOR BLANK NAME
    if (!this.state.name || !this.state.name.length) {
      formIsValid = false;
      errors.name = "Please Enter a valid name.";
      this.setState({ errors: errors });
    }

    //FOR BLANK DOB
    if (!this.state.dob || this.state.dob == "") {
      formIsValid = false;
      errors.dob = "Please Enter a valid dob.";
      this.setState({ errors: errors });
    }

    //FOR BLANK & VALID EMAIL
    if (
      !this.state.email ||
      !this.state.email.length ||
      !emailValidator(this.state.email)
    ) {
      formIsValid = false;
      errors.email = "Please Enter a valid email.";
      this.setState({ errors: errors });
    }

    //FOR BLANK COLLEGE
    if (!this.state.college || this.state.college == "") {
      formIsValid = false;
      errors.college = "Please Enter a valid college.";
      this.setState({ errors: errors });
    }

    //FOR BLANK ADDRESS
    if (!this.state.address || !this.state.address.length) {
      formIsValid = false;
      errors.address = "Please Enter a valid address.";
      this.setState({ errors: errors });
    }

    //FOR BLANK PHONE
    if (!this.state.phone || !this.state.phone.length) {
      formIsValid = false;
      errors.phone = "Please Enter a valid phone.";
      this.setState({ errors: errors });
    }

    //if checkbox of other is checked and custom hobby is empty
    if (
      this.state.userHobbies.includes("Other") &&
      (!this.state.customHobby || !this.state.customHobby.length)
    ) {
      formIsValid = false;
      errors.customHobby = "Please Enter a valid customHobby.";
      this.setState({ errors: errors });
    }

    return formIsValid;
  };

  saveForm = () => {
    let validationPass = this.handleValidation();
    if (validationPass) {
      //Save Student Data
      let studentData = {
        name: this.state.name,
        dob: this.state.dob,
        college: this.state.college,
        address: this.state.address,
        email: this.state.email,
        gender: this.state.gender,
        phone: this.state.phone,
        userHobbies: this.state.userHobbies,
        customHobby: this.state.customHobby,
      };

      let reducerData = this.props.studentDetails;

      if (this.state.isEdit) {
        reducerData[this.state.editKey] = studentData;
        this.props.storeStudentDetails(reducerData, this.props.closePopup);
      } else {
        reducerData.unshift(studentData);
        this.props.storeStudentDetails(reducerData, this.props.closePopup);
        this.clearFormField();
      }
    }
  };

  //PUSHING SELECTED HOBBIES & ENABLING OTHER
  checkBoxFunction = (data) => {
    if (!this.state.userHobbies.includes(data)) {
      let currentState = this.state.userHobbies;
      currentState.push(data);
      this.setState({ userHobbies: currentState });
    } else {
      let currentState = this.state.userHobbies;
      let itemIndex = currentState.indexOf(data);
      currentState.splice(itemIndex, 1);
      this.setState({ userHobbies: currentState });
    }
  };

  clearFormField = () => {
    this.setState({
      name: "",
      dob: "",
      college: {},
      address: "",
      email: "",
      gender: "",
      phone: "",
      userHobbies: [],
      customHobby: "",
      isEdit: false,
      editKey: 0,
    });
  };

  componentDidMount() {
    //Check if edit mode is enabled

    if (this.props.editData) {
      let data = this.props.editData;
      let editKey = this.props.editKey;

      this.setState({
        isEdit: true,
        editKey: editKey,
        name: data.name,
        dob: data.dob,
        college: data.college,
        address: data.address,
        email: data.email,
        gender: data.gender,
        phone: data.phone,
        userHobbies: data.userHobbies,
        customHobby: data.customHobby,
      });
    }
  }

  render() {
    const { isPopupActive, closePopup } = this.props;
    return (
      <Dialog
        open={isPopupActive}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          {this.state.isEdit ? "EDIT STUDENT" : "ADD NEW STUDENT"}
        </DialogTitle>
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
                            value={this.state.name}
                            onChange={(e) => {
                              this.onChangeHandler(e, "name");
                            }}
                          />
                          {this.state.errors.name && (
                            <div className="form-input-error">
                              {this.state.errors.name}
                            </div>
                          )}
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
                                value={this.state.dob}
                                onChange={(value) => {
                                  this.setState({ dob: value });
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    variant="outlined"
                                    {...params}
                                    size="small"
                                  />
                                )}
                              />
                              {this.state.errors.dob && (
                                <div className="form-input-error">
                                  {this.state.errors.dob}
                                </div>
                              )}
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
                            options={this.props.collegeDetails}
                            getOptionLabel={(option) => option.name}
                            value={this.state.college}
                            onChange={(event, newValue) => {
                              this.setState({ college: newValue });
                            }}
                            renderInput={(params) => (
                              <TextField
                                variant="outlined"
                                {...params}
                                size="small"
                                onChange={(e) =>
                                  this.props.getCollegeDetails(e.target.value)
                                }
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
                            value={this.state.email}
                            onChange={(e) => {
                              this.onChangeHandler(e, "email");
                            }}
                          />
                          {this.state.errors.email && (
                            <div className="form-input-error">
                              {this.state.errors.email}
                            </div>
                          )}
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
                            placeholder={"Enter Address"}
                            inputProps={{ maxLength: "300" }}
                            value={this.state.address}
                            onChange={(e) => this.onChangeHandler(e, "address")}
                            rows={5}
                            multiline={true}
                          />
                          {this.state.errors.address && (
                            <div className="form-input-error">
                              {this.state.errors.address}
                            </div>
                          )}
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
                            onChange={(e) => this.onChangeHandler(e, "gender")}
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
                            {/* <FormControlLabel
                              value="other"
                              control={<Radio />}
                              label="Other"
                            /> */}
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
                              value={this.state.phone}
                              onChange={(phone) =>
                                this.setState({ phone: phone })
                              }
                            />
                            {this.state.errors.phone && (
                              <div className="form-input-error">
                                {this.state.errors.phone}
                              </div>
                            )}
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
                                        checked={this.state.userHobbies.includes(
                                          item
                                        )}
                                        onChange={() => {
                                          this.checkBoxFunction(item);
                                        }}
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
                      {this.state.userHobbies.includes("Other") && (
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
                              placeholder={"Enter Custom Hobby"}
                              inputProps={{ maxLength: "50" }}
                              value={this.state.customHobby}
                              onChange={(e) => {
                                this.onChangeHandler(e, "customHobby");
                              }}
                            />
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className="form-button-container">
          <Button
            className="form-button form-save-button common-bk-color"
            onClick={this.saveForm}
          >
            Save
          </Button>
          <Button
            className="form-button common-border-color common-color"
            onClick={this.props.closePopup}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentDetails: state.studentDetails.studentDetails,
    collegeDetails: state.collegeDetails.collegeDetails,
  };
};

export default connect(mapStateToProps, {
  getCollegeDetails,
  storeStudentDetails,
})(StudentForm);
