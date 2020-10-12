export const incline = (state={value:1},action)=>{
    console.log("incline reducer")
    switch(action.type){
        case 'increment':
            console.log('inside increment')
            return {value: state.value+1};
        case 'multiply':
            return {value: state.value*2};
        default:
            return {...state};
    }
}

export const decline = (state={value:1},action)=>{
    console.log("decline reducer")
    switch(action){
        case 'decrement':
            return {value: state.value-1};
        case 'divide':
            return {value: state.value*2};
        default:
            return {...state};
    }
}