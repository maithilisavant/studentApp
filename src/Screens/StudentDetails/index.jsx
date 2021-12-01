import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import "./studentdetails.css";
import { getStudentDetails } from "../../Store/Actions/actions";
import StudentForm from "../../Components/StudentForm";
import {TextField , Avatar, Table, TableHead, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, Paper, Button, IconButton, Typography} from '@material-ui/core';
import { size } from "lodash";
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import EditIcon from '@mui/icons-material/EditOutlined'; 
import SearchIcon from '@mui/icons-material/SearchOutlined'; 
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

// import {SearchIcon, EditIcon, DeleteIcon} from '@material-ui/icons';

const rows = [];

const theme = createTheme({
  typography: {
    // fontFamily: ['BlinkMacSystemFont',].join(",")
    fontFamily: 'Raleway, Arial',
    fontSize: 14,
  }
});

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.popup });
  };

  createData(name, dob, email, phone, address, gender, college, hobbies) {
    return { name, dob, email, phone, address, gender, college, hobbies };
  }
d

  rows = [
    this.createData('Maithili Savant', '31/03/1997', 'maithilisavant31@gmail.com', 6547898525, '71 Pilgrim Avenue Chevy Chase, MD 20815','Female', 'MIT school of Management', 'Drawing, Travelling'),
    this.createData('Maithili Savant', '31/03/1997', 'maithilisavant31@gmail.com', 6547898525, '71 Pilgrim Avenue Chevy Chase, MD 20815','Female', 'MIT school of Management', 'Drawing, Travelling'),
    this.createData('Maithili Savant', '31/03/1997', 'maithilisavant31@gmail.com', 6547898525, '71 Pilgrim Avenue Chevy Chase, MD 20815','Female', 'MIT school of Management', 'Drawing, Travelling')
  ];


  render() {
    const { showPopup } = this.state;
    return (
      <div>
        <StudentForm
          open={showPopup}
          close={this.togglePopup}
          onClick={this.togglePopup}
        />
        <div className="main-container">
          <div className="search-block">
          
            <TextField className="search-box" variant="outlined" label="Search" InputProps={{endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}></TextField>

            <div className="home-page">
              <Button variant="contained"><Link to="/">Home</Link>{" "}</Button>
          </div>
            <div className="new-student">
              <Button variant="contained" className="new-student-button" onClick={this.togglePopup}>Add New Student</Button>
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
                    {this.rows.map((row)=> (
                      <TableRow key={row.name}>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.dob}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                        <TableCell align="center">{row.address}</TableCell>
                        <TableCell align="center">{row.gender}</TableCell>
                        <TableCell align="center">{row.college}</TableCell>
                        <TableCell align="center">{row.hobbies}</TableCell>
                        {/* <TableCell align="center"><IconButton><EditIcon></EditIcon></IconButton></TableCell>
                        <TableCell align="center"><IconButton><DeleteIcon></DeleteIcon></IconButton></TableCell> */}

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
  };
};

export default connect(mapStateToProps, {
  getStudentDetails,
})(StudentDetails);
