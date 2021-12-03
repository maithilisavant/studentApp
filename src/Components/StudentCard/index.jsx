//Functional Component
import React from "react";
import "./studentCard.css";
import profileFemale from "../../Assets/images/F.jpg";
import profileMale from "../../Assets/images/M.jpg";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/EditOutlined";
import { appColor } from "../../Store/Data/data";
function studentCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="profile-block">
          <div className="edit-delete-block">
            <IconButton><EditIcon></EditIcon></IconButton>
            <IconButton>
              <DeleteIcon>
              </DeleteIcon>
            </IconButton>
          </div>
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
