import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NewTrip from "./components/NewTrip";
import Trips from "./components/Trips";
import TripDetail from './components/TripDetail';
import ChatApp from './components/ChatApp';
import { useState } from "react";


function App() {
  const rootURL = 'http://127.0.0.1:8000'

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/tripdetail" element={<TripDetail rootURL={rootURL}/>} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/newtrip" element={<NewTrip />} />
        <Route exact path="/viewtrips" element={<Trips rootURL={rootURL}/>} />
        <Route exact path="/chatapp" element={<ChatApp/>} />
      </Routes>

    </Router>
  );
}

export default App;
