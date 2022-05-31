
import usersReducer from "../redux/reducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers ({
    userdata:usersReducer,
})
  

export default rootReducer