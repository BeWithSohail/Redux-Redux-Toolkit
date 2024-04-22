const initialState = 0;

const changetheNumber = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") { 
        return state - 1;
    }
    
    // Return current state for unknown action types
    return state;
}

export default changetheNumber;
