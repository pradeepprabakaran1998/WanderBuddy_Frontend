import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'

const TripDetail = (props) => {
    const trip = useSelector(state => state.trip)
    var img1 = trip.tripimages[0]
    var img2 = trip.tripimages[1]
    var img3 = trip.tripimages[2]
    var button
    const [chatroomID, setChatroomID] = useState()
    //const chatRoomURL = `http://127.0.0.1:8000/createchatroom/7/`
    const chatRoomURL = `http://127.0.0.1:8000/createchatroom/${trip.id}/`

    useEffect(() => {
        axios.get(chatRoomURL).then((response) => {
            setChatroomID(response.data.chatroomID)
            localStorage.setItem('chatroomID', response.data.chatroomID)
            console.log('id set')
        })
    }, [])


    return (
        <div className="trip-info">
            <h1>{trip.title}</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img1 && props.rootURL + img1.image} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2 && props.rootURL + img2.image} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img3 && props.rootURL + img3.image} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="sr-only">Next</span>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                </a>
            </div>
            <br />
            <section className="trip-details">
                <p><b>Location:</b>  {trip.location}</p>
                <p><b>Description:</b> {trip.description}</p>
                <p><b>Origin:</b> {trip.origin}</p>
                <p><b>Destination:</b> {trip.destination}</p>
                <p><b>Start Date:</b> {trip.start_date.substring(0, 10)}</p>
                <p><b>End Date:</b> {trip.end_date.substring(0, 10)}</p>
            </section>

            <section className="participant-details">
                <h3>Participants Detail</h3>
                {trip.participants.map((participant, index) =>
                    <li key={index}>{participant.first_name} {participant.last_name}</li>
                )}
            </section>
            <button className="start-chat-btn"><Link to="/chatapp">Start Chat</Link></button>
        </div>
    )
}
//   var img1 = props.trip.tripimages[0]
//   var img2 = props.trip.tripimages[1]
//   var img3 = props.trip.tripimages[2]
//   console.log(props.rootURL) 
//   console.log(img1)
export default TripDetail