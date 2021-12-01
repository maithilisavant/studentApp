import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import "./homescreen.css";
import {Link} from "react-router-dom";
import { getStudentDetails } from "../../Store/Actions/actions";
import StudentForm from "../../Components/StudentForm";
import StudentCard from "../../Components/StudentCard";
import Header from '../../Assets/header.png'

import {Button, Grid, Avatar} from '@material-ui/core';

class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: true,
    };
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

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
          <div className="title">Student Registration System
            {/* <img src={Header} alt="header" className="header-image"/> */}
          </div>

          <div className="block-1">
              <div className="student-count-block">
                  <div className="student-count">450</div>
                  <div className="student-title">Students</div>
              </div>

              <div className="new-student">
                  <Button variant="contained">Add New Student</Button>
              </div>
          </div>

          <Grid className="student-cards-block" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <StudentCard/>
            <StudentCard/>
            <StudentCard/>
          </Grid>

          <div className="student-card-more">
            <Button variant="outlined"><Link to="/student-details">View Student List</Link>{" "}</Button>
          </div>
      </div>

      <div className="footer">
        {/* <img src={Footer} alt="header" className="footer-image"/> */}
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentDetails: state.studentDetails,
  };
};

export default connect(mapStateToProps, {
  getStudentDetails,
})(Homescreen);
