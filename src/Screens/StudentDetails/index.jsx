import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./studentdetails.css";
import { deleteStudentDetails } from "../../Store/Actions/actions";

import StudentForm from "../../Components/StudentForm";
import {
  TextField,
  Avatar,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import { size } from "lodash";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/EditOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// import {SearchIcon, EditIcon, DeleteIcon} from '@material-ui/icons';

const theme = createTheme({
  typography: {
    // fontFamily: ['BlinkMacSystemFont',].join(",")
    fontFamily: "Raleway, Arial",
    fontSize: 14,
  },
});

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      searchText: "",
      studentDetails: this.props.studentDetails,
    };
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  hobbyFunction = (data, customData) => {
    if (!customData) {
      return data.toString();
    }

    let current = data;
    let index = current.indexOf("Other");
    current.splice(index, 1);
    current.push(customData);
    return current.toString();
  };

  searchFunction = () => {
    let searchText = this.state.searchText;
    const filteredData = this.props.studentDetails.filter(function (item) {
      let itemName = item.name.toUpperCase(); //MAITHILI
      let itemEmail = item.email.toUpperCase();
      const textData = searchText.toUpperCase(); //MAI

      return (
        itemName.indexOf(textData) > -1 || itemEmail.indexOf(textData) > -1
      );
    });

    this.setState({ studentDetails: filteredData });
  };

  removeStudent = (data) => {
    let index = this.props.studentDetails.indexOf(data);

    this.props.deleteStudentDetails(this.props.studentDetails, index);
  };

  render() {
    const { showPopup } = this.state;
    return (
      <div>
        <StudentForm isPopupActive={showPopup} closePopup={this.togglePopup} />
        <div className="main-container">
          <div className="search-block">
            <TextField
              className="search-box"
              variant="outlined"
              label="Search"
              value={this.state.searchText}
              onChange={(e) => {
                this.setState({ searchText: e.target.value }, () => {
                  this.searchFunction();
                });
              }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            ></TextField>

            <div className="home-page">
              <Button className="form-button form-save-button common-bk-color">
                <Link to="/">Home</Link>{" "}
              </Button>
            </div>
            <div className="new-student">
              <Button
                className="form-button common-border-color common-color"
                onClick={this.togglePopup}
              >
                Add New Student
              </Button>
            </div>
          </div>

          <div className="user-table-block">
            <ThemeProvider theme={theme}>
              <Typography component="div">
                <TableContainer className="user-list-block">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">DOB</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Gender</TableCell>
                        <TableCell align="center">College</TableCell>
                        <TableCell align="center">Hobbies</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {this.state.studentDetails.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">
                            {new Date(row.dob).toISOString().substring(0, 10)}
                          </TableCell>
                          <TableCell align="center">{row.email}</TableCell>
                          <TableCell align="center">{row.phone}</TableCell>
                          <TableCell align="center">{row.address}</TableCell>
                          <TableCell align="center">{row.gender}</TableCell>
                          <TableCell align="center">
                            {row.college.name}
                          </TableCell>
                          <TableCell align="center">
                            {this.hobbyFunction(
                              row.userHobbies,
                              row.customHobby
                            )}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton>
                              <EditIcon></EditIcon>
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">
                            <IconButton>
                              <DeleteIcon
                                onClick={() => this.removeStudent(row)}
                              ></DeleteIcon>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Typography>
            </ThemeProvider>
          </div>
        </div>
      </div>
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
  deleteStudentDetails,
})(StudentDetails);
