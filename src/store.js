import {createStore , compose , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root-reducers";

const initialState = {};
const variableApplyMiddleware= [thunk];
const store = createStore(rootReducer , initialState , compose(applyMiddleware(...variableApplyMiddleware)) );
export default store;
