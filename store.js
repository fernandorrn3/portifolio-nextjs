import { configureStore } from "@reduxjs/toolkit";
import menuReducer  from "./reducer/reducermenu";

export default configureStore({
reducer:{
    menu:menuReducer
}
})