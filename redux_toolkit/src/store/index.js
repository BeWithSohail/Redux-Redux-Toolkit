import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/Userslices";


const store = configureStore({
    reducer: {
        usersDetails:userSlice,
    }
})

export default store;