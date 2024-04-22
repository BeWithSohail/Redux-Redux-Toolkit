const incNumber = () => {
    return {
        type: "INCREMENT",
        
    }
}

const decNumber = () => {
    return {
        type: "DECREMENT",
        
    }
}

export { incNumber, decNumber };