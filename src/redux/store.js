import { createStore,applyMiddleware } from "redux";
import postreducers from "./reducers/postreducers";
import {thunk} from "redux-thunk";
const store = createStore(postreducers,applyMiddleware(thunk))
export default store