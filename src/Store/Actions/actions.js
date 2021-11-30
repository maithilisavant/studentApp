import axios from "axios";

import { SET_ERRORS, STORE_STUDENT_DETAILS } from "../Reducers/types";

export const getStudentDetails =
  (searchText, callback, errorCallback) => async (dispatch) => {
    //Api Call Here, On a Success dispatch to SET_STUDENT_DETAILS and it will fill the store
  };
