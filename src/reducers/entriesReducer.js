import { GET_ALL_ENTRIES } from "../constant/actionTypes";

const entriesReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_ENTRIES: {
      return { entries: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default entriesReducer;
