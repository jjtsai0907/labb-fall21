import { combineReducers } from "redux";
import { reducer as previousReducer } from "./Action";

const RootReducer = combineReducers({
  previous: previousReducer,
});

export { RootReducer };
