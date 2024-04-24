import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],   
    reducers: {
        addNewUser(state,action) {
            state.push(action.payload)
        },

        removeUsers(state,action) {
        },

        deleteUsers(state,action) {
            
        }

    }
})

export default userSlice.reducer;
export const { addNewUser } = userSlice.actions;