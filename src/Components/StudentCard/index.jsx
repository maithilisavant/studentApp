//Functional Component
import React from "react";
import "./studentCard.css";
import profileFemale from "../../Assets/images/F.jpg";
import profileMale from "../../Assets/images/M.jpg";
import { appColor } from "../../Store/Data/data";
function studentCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="profile-block">
          <div className="userprofile">
            <img
              src={
                props.mappedData.gender === "female"
                  ? profileFemale
                  : profileMale
              }
              alt="user-profile"
              className="profile-image"
            ></img>
          </div>

          <div className="username input">{props.mappedData.name}</div>
          <div className="usercollege input">
            {props.mappedData.college.name}
          </div>
        </div>
      </div>
    </>
  );
}

export default studentCard;
