import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import studentDetails from "./studentDetails";
import collegeDetails from "./collegeDetails";

const allReducers = combineReducers({
  errors: errorReducer,
  studentDetails: studentDetails,
  collegeDetails: collegeDetails,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
};

export default rootReducer;
