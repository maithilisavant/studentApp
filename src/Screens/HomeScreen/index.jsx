import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import "./homescreen.css";
import { getStudentDetails } from "../../Store/Actions/actions";
import StudentForm from "../../Components/StudentForm";
import StudentCard from "../../Components/StudentCard";

import {Button, Grid, Avatar} from '@material-ui/core';

class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
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
          <div className="title">DASHBOARD</div>

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
            <Button variant="outlined">View Student List</Button>
          </div>
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
