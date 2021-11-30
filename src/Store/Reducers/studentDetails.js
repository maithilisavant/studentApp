import { STORE_STUDENT_DETAILS } from "./types";

const initialState = {
  studentDetails: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_STUDENT_DETAILS:
      return {
        studentDetails: action.payload,
      };
    default:
      return state;
  }
}
