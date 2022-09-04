import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Logintype from "./components/Logintype";
import {useEffect, useState} from "react";
import Findblood from "./components/Findblood";
import Admindashboard from "./components/Admindashboard";
import Hospitaldashboard from "./components/Hospitaldashboard";
import Hospitalregister from "./components/Hospitalregister";
import Bloodbankregister from "./components/Bloodbankregister";


function App() {
    let [logintype,setloginType]=useState(null)

    return (
      <Router>
              <Routes>
                  <Route exact path="/" element={<Landing />}>
                  </Route>
                  <Route path="/login" element={<Login   logintype={logintype}/>}>
                  </Route>
                  <Route path="/findblood" element={<Findblood/>}>
                  </Route>
                  <Route path="/hospitalregister" element={<Hospitalregister />}>
                  </Route>
                  <Route path="/bloodbankregister" element={<Bloodbankregister/>}>
                  </Route>
                  <Route path="/logintype" element={<Logintype  setloginType={setloginType}/>}>
                  </Route>

                  <Route path="/admindashboard" element={
                      true?<Admindashboard  />:<Login/>}>
                  </Route>
                  <Route path="/hospitaldashboard" element={<Hospitaldashboard />}>
                  </Route>
              </Routes>

      </Router>
  );
}

export default App;
