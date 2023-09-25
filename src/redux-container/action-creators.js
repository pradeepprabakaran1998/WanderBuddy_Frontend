export const setTrips = (trip) => {
    console.log('action-creator'+trip)
    return {
        type : 'setTrip',
        payload : trip
    }
}