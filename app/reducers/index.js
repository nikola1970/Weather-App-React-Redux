export let CitiesReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_CITY":
            console.log(state);
            return [...state, action.payload.data];
        default:
            return state;
    }
};