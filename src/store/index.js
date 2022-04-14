import { createStore } from "redux";
import { accountReducer } from "./account/reducer";

export const store = createStore(accountReducer);