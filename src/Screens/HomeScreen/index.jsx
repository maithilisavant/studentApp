import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import "./homescreen.css";
import { Link } from "react-router-dom";
import StudentForm from "../../Components/StudentForm";
import StudentCard from "../../Components/StudentCard";
import Header from "../../Assets/Background/header3.svg";
import Loader from "../../Assets/Background/loader.svg";
import { deleteStudentDetails } from "../../Store/Actions/actions";
import { Button, Grid } from "@material-ui/core";

class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      studentDetails: this.props.studentDetails,
    };
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    const { showPopup } = this.state;
    return (
      <>
        <div>
          <StudentForm
            isPopupActive={showPopup}
            closePopup={this.togglePopup}
          />
          <div className="container">
            <div className="header-block">
              <div className="title">
                <div className="subtitle1">Student Registry</div>
                <div className="subtitle2">
                  To advance, adapt and accelerate careers.
                </div>
              </div>
              <div className="header-image">
                <img src={Header} alt="header image" />
              </div>
            </div>

            <div className="block-1">
              <div className="student-count-block">
                <div className="student-count">
                  {this.state.studentDetails.length}
                </div>
                <div className="student-title">Students</div>
              </div>
            </div>

            <div className="button-block">
              <Button
                className="form-button form-save-button common-bk-color home-btn"
                variant="text"
                onClick={this.togglePopup}
              >
                Add New Student
              </Button>

              <Button className="form-button common-border-color common-color home-btn">
                <Link to="/student-details">View Student List</Link>{" "}
              </Button>
            </div>

            <div className="student-card-container">
              {this.state.studentDetails.length === 0 ? (
                <div className="loaderImage">
                  <img src={Loader} alt="Loader image" />
                </div>
              ) : (
                <Grid
                  className="student-cards-block"
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {this.state.studentDetails.map((element, index) => {
                    return (
                      <StudentCard
                        mappedData={element}
                        deleteFunction={() => {
                          this.props.deleteStudentDetails(
                            this.props.studentDetails,
                            index,
                            () => {
                              this.setState({
                                studentDetails: this.props.studentDetails,
                              });
                            }
                          );
                        }}
                      ></StudentCard>
                    );
                  })}
                </Grid>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentDetails: state.studentDetails.studentDetails,
  };
};

export default connect(mapStateToProps, { deleteStudentDetails })(Homescreen);
