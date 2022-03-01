import { createStore } from "redux";
import usersReducers from "./reducers/usersRuducers";

export const store = createStore(usersReducers);
