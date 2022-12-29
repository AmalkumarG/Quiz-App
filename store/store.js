import {combineReducers, createStore} from "redux"

import answerReducer from "../src/reducer"

const store=createStore(answerReducer)
export default store