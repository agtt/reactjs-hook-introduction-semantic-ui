import { combineReducers } from "redux";

import todoReducers from "./todoReducers";
import visibilityFilter from "./visibilityFilterReducers";

export default combineReducers({ todoReducers, visibilityFilter });
