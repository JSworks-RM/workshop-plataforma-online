import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { 
    postReducer, 
    especialityReducer, 
    courseReducer, 
    teacherReducer, 
    fragmentReducer } 
    from "./reducers"



export default createStore(
  combineReducers(
    {
      postReducer,
      especialityReducer,
      courseReducer,
      teacherReducer,
      fragmentReducer
    }
  ),
  composeWithDevTools(applyMiddleware(thunk))
)
