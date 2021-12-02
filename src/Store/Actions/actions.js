import axios from "axios";

import { SET_ERRORS, STORE_STUDENT_DETAILS, STORE_COLLEGE_DETAILS } from "../Reducers/types";

export const getCollegeDetails = 
  (searchText, callback, errorCallback) => async (dispatch) => {
    //Api Call Here, On a Success dispatch to SET_COLLEGE_DETAILS and it will fill the store
    try{
      let data = await axios.get(`http://universities.hipolabs.com/search?name=${searchText}`);
      console.log(data);
      dispatch({type: STORE_COLLEGE_DETAILS,
        payload: data.data,
      })
    }catch(e){
      console.log("Error", e);
    }
    
  };


  export const getStudentDetails = 
  (callback, errorCallback) => async (dispatch) => {
    try{
     
    }catch(e){
      
    }
    
  };

  //TO EMPTY 
  export const setCollegeEmpty = () => async (dispatch) => {
    dispatch({type: STORE_COLLEGE_DETAILS,
    payload: [],})
  }