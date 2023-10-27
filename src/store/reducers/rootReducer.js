import {  combineReducers } from 'redux'
import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
    app: appReducer,
  })
export default (state, action)=> rootReducer(state, action)



 