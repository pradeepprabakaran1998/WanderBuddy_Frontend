const storedTrip = localStorage.getItem('trip');

const initialState = {
    trip: storedTrip ? JSON.parse(storedTrip) : null
}

const tripReducer = (state = initialState, action) => {
    if (action.type == 'setTrip') {
        localStorage.setItem('trip', JSON.stringify(action.payload))
        return { ...state, trip: action.payload }
    }
    else
        return state
}

export default tripReducer;