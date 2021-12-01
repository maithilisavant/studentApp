import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import "./studentdetails.css";
import { getStudentDetails } from "../../Store/Actions/actions";
import StudentForm from "../../Components/StudentForm";
import {TextField , Avatar, Table, TableHead, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, Paper, Button } from '@material-ui/core';
// import {SearchIcon, EditIcon, DeleteIcon} from '@material-ui/icons';

const rows = [];
//   createData('Maithili Savant', '31/03/1997', 'maithilisavant31@gmail.com', 6547898525, '71 Pilgrim Avenue Chevy Chase, MD 20815','Female', 'MIT school of Management', 'Drawing, Travelling')
// ];


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
        <div className="container">
          <div className="search-block">
            {/* <SearchIcon/> */}
            <TextField className="search-box" variant="outlined" label="Search"></TextField>

            <div className="new-student">
              <Button variant="contained" className="new-student-button" onCLick={this.togglePopup}>Add New Student</Button>
            </div>
          </div>

          <div className="user-table-block">
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
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Delete</TableCell>
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
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* <DataGrid page={page}
            onPageChange={(newPage) => setPage(newPage)}
            pageSize={5}
            rowsPerPageOptions={[10]}
            pagination></DataGrid>       */}
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
