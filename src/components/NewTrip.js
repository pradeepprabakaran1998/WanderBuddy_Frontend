import axios from "axios"
import { useState } from "react"
import React from 'react'

const NewTrip = () => {

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [travelPlan, setTravelPlan] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [budget, setBudget] = useState()

  const createTrip = async () => {
    let formfield = new FormData()
    formfield.append('title', title)
    formfield.append('location', location)
    formfield.append('description', description)
    formfield.append('origin', origin)
    formfield.append('destination', destination)
    formfield.append('travelPlan', travelPlan)
    formfield.append('start_date', startDate)
    formfield.append('end_date', endDate)
    formfield.append('budget', budget)

    await axios.post('http://127.0.0.1:8000/createtrip/', formfield, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <div className="trip">
      <h1 className="title">Initiate a trip</h1>
      <form className="trip-detail">

        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required value={title} onChange={(event) => setTitle(event.target.value)} /><br />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required value={location} onChange={(event) => setLocation(event.target.value)} /><br />
        </div>
        <div>
          <label htmlFor="description" className="talabel">Description:</label><br />
          <textarea id="description" name="description" rows="4" cols="50" required value={description} onChange={(event) => setDescription(event.target.value)} /><br />
        </div>
        <div>
          <label htmlFor="origin">Origin:</label>
          <input type="text" id="origin" name="origin" required value={origin} onChange={(event) => setOrigin(event.target.value)} /><br />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" required value={destination} onChange={(event) => setDestination(event.target.value)} /><br />
        </div>
        <div>
          <label htmlFor="travelPlan" className="talabel">Travel Plan:</label><br />
          <textarea id="travelPlan" name="travelPlan" rows="4" cols="50" required value={travelPlan} onChange={(event) => setTravelPlan(event.target.value)} /><br />
        </div>
        <div>
          <label htmlFor="start_date">Start Date:</label>
          <input type="datetime-local" id="start_date" name="start_date" required value={startDate} onChange={(event) => setStartDate(event.target.value)} /><br />
        </div>
        <div>
          <label htmlFor="end_date">End Date:</label>
          <input type="datetime-local" id="end_date" name="end_date" required value={endDate} onChange={(event) => setEndDate(event.target.value)} /><br />
        </div>
        <div>
          <label htmlFor="budget">Budget:</label>
          <input type="number" id="budget" name="budget" required value={budget} onChange={(event) => setBudget(event.target.value)}></input><br />
        </div>
        <button type="submit" id="btn" value="Create Trip" onClick={createTrip}>Create Trip</button>

      </form>
    </div>
  )
}

export default NewTrip