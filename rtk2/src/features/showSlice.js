import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };

export const counterSlice = createSlice({
    name: "showdata",
    initialState,
    reducers: {
        addData: () => {
            
        },
        showData: (state,action) => { 
            state.value = state.value;      
        },
        increaseData: (state, action) => { 
            state.value += 1;
        },
        increaseDataByValue: (state, action) => { 
            state.value = state.value + action.payload;
        },
    }
})

export const { addData, showData,increaseData,increaseDataByValue } = counterSlice.actions;
export default counterSlice.reducer;