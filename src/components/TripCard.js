import { useDispatch } from 'react-redux';
import '../styles/styles.css'
import { Link } from "react-router-dom";
import { setTrips } from '../redux-container/action-creators';

const TripCard = (props) => {
const dispatch = useDispatch()

  return (
    <div className="trip-card">
      <img className="card-img" src={props.trip.tripimages[0] && props.root + props.trip.tripimages[0].image}/>
      <div className="card-content">
        <h1 className="card-header">{props.trip.title}</h1>
        <p className="card-desc">{props.trip.description}</p>
        <button className="card-btn" onClick={() => {dispatch(setTrips(props.trip))}}><Link to="/tripdetail">Explore <span>&rarr;</span></Link></button>
      </div>
    </div>
  )
}

export default TripCard