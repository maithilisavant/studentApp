//Functional Component
import React from 'react';
import "./studentCard.css";
import profileFemale from "../../Assets/F.jpg";
import profileMale from "../../Assets/M.jpg";
import {Avatar} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined'; 

function studentCard(){
    function stringAvatar(name) {
        return {
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return(
    <>
        <div className="card-container">
            <div className="profile-block">
                <div className="edit-delete-block">
                    <EditIcon></EditIcon>
                    <DeleteIcon></DeleteIcon>
                </div>
                <div className="userprofile">
                    <img src={profileFemale} alt="user-profile" className="profile-image" ></img>
                    {/* <Avatar {...stringAvatar('Maithili Savant')} /> */}
                </div>
                
                <div className="username input">Maithili Savant</div>
                <div className="usercollege input">MIT School of Management</div>
            </div>

            <div className="info-block">
                {/* <div className="label dob">Date of Birth</div>
                <div className="userdob input">31 March 1997</div> */}

                {/* <div className="label email">Email</div>
                <div className="useremail input">maithilisavant31@gmail.com</div>

                <div className="label phone">Phone</div>
                <div className="userphone input">6547898525</div>

                <div className="label address">Address</div>
                <div className="useraddress input">71 Pilgrim Avenue Chevy Chase, MD 20815</div>

                <div className="label gender">Gender</div>
                <div className="usergender input">Female</div> */}

                {/* <div className="usercollege input">MIT school of Management</div> */}

                {/* <div className="label hibbies">Hobbies</div>
                <div className="userhibbies input">Drawing, Travelling</div> */}
            </div>
        </div>
    </>

    )
}

export default studentCard;