import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { HouseReducer } from "../store/modules/housePoints/reducer";

const reducers = combineReducers({
  points: HouseReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
