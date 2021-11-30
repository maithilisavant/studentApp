import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import studentDetails from "./studentDetails";

const allReducers = combineReducers({
  errors: errorReducer,
  studentDetails: studentDetails,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return allReducers(state, action);
};
export default rootReducer;
