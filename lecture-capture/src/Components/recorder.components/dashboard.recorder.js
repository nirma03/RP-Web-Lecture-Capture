import React from 'react';
import '../recorder.components/css.recorder/recorder.css';
import Navbar from "./navbar.recorder";
import {MDBBadge, MDBContainer} from "mdbreact";

class Dashboard extends React.Component {
    render() {
        const container = {height: 500}
        return(
            <div>
                <Navbar/>
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <h2><MDBBadge color="primary"> Welcome! </MDBBadge></h2>
                </MDBContainer>
            </div>
        );
    }
}

export default Dashboard;