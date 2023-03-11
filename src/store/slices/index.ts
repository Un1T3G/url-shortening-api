import { combineReducers } from "@reduxjs/toolkit";
import linksReducer from './links/links.slice'

export const rootReducer = combineReducers({
    linksReducer
})