import {createStore} from "redux"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import rootReducer from "../redux/redux/index"

const middleware=[thunk]

if(process.env.NODE_ENV==="development"){
    middleware.push(logger )
}

const store=createStore(rootReducer,applyMiddleware(...middleware))

export default store;