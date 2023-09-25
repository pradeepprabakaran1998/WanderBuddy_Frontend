import { createStore } from 'redux';
import tripReducer from './trip-reducer';

//Holds the state of the application
const store = createStore(tripReducer)

export default store