import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TripCard from './TripCard'
export default function Trips(props) {

    const baseURL = 'http://127.0.0.1:8000/upcomingtrips/2/'
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data)
            setTrips(response.data)
        })
    }, [])

    return (
        <div>
            <div className="Trip-cards">
                {trips.map((trip, index) =>
                    <TripCard key={index} trip={trip} root={props.rootURL} />
                )}
            </div>
        </div>
    )

}