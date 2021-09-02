import { createAction } from "@reduxjs/toolkit";

const setPrevious = createAction("set previous");
const initialState = "";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set previous":
      return action.payload;
    default:
      return state;
  }
};

export { reducer, setPrevious };
