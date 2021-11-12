import { createStore, combineReducers } from "redux"

import { authReducer } from "./reducers"

const rootReducer = combineReducers({authReducer})

export const store = createStore(rootReducer)
