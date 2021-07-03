import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Components/login.components/login.recorder"
import Dashboard from "./Components/recorder.components/dashboard.recorder";
import LectureCaptureHomepage from "./Components/recorder.components/lecture-capture.recorder";
import ScreenShareOnly from "./Components/recorder.components/screen-share.recorder";
import WebcamOnly from "./Components/recorder.components/webcam.recorder";
import ScreenShareWebcam from "./Components/recorder.components/screen-webcam.recorder";

function App() {
  return (
      <Router>
        <Route path='/' exact component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        <Route path="/lecture-capture" component={LectureCaptureHomepage}/>
          <Route path="/screen-share" component={ScreenShareOnly}/>
        <Route exact path="/screen-webcam" component={ScreenShareWebcam}/>
        <Route  path="/webcam" component={WebcamOnly}/>
      </Router>
  );
}


export default App;
