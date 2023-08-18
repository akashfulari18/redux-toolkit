import {configureStore}  from "@reduxjs/toolkit"
import todoReducer from "../store/features/todo/todoSlice"

export const store =  configureStore({
    reducer:todoReducer,
})