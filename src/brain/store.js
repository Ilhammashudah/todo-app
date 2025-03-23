import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos";
import isToggle from "./features/toggle";
import  userSlice  from "./features/user";



export const brain = configureStore({
  reducer: { todoReducer, isToggle, userSlice },
 
});
