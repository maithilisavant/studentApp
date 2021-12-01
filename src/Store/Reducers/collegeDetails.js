import { STORE_COLLEGE_DETAILS } from "./types";

const initialState = {
  collegeDetails: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_COLLEGE_DETAILS:
      return {
        collegeDetails: action.payload,
      };
    default:
      return state;
  }
}
