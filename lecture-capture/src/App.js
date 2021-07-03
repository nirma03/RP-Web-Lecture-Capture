import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./Components/recorder.components/dashboard.recorder";
import LectureCaptureHomepage from "./Components/recorder.components/lecture-capture.recorder";
import ScreenShareOnly from "./Components/recorder.components/screen-share.recorder";
import WebcamOnly from "./Components/recorder.components/webcam.recorder";
import ScreenShareWebcam from "./Components/recorder.components/screen-webcam.recorder";

function App() {
  return (
      <Router>
        <Route path='/' exact component={Dashboard}></Route>
        <Route path="/lecture-capture" component={LectureCaptureHomepage}></Route>
          <Route path="/screen-share" component={ScreenShareOnly}></Route>
        <Route exact path="/screen-webcam" component={ScreenShareWebcam}></Route>
        <Route  path="/webcam" component={WebcamOnly}></Route>
      </Router>
  );
}


export default App;
