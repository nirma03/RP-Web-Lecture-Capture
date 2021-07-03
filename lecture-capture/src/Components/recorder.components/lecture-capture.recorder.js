import React from 'react';
import {MDBCol, MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardTitle,
    MDBCardImage, MDBRow
} from 'mdbreact';
import '../recorder.components/css.recorder/recorder.css';
import Navbar from "./navbar.recorder";

class LectureCaptureHomepage extends React.Component {
    render() {
        const container = {height: 500}
        return(
            <div>
                <Navbar/>
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <br/>
                    <br/>
                    <br/>
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src="https://static.videomaker.com/wp-content/uploads/2020/04/https___blogs-images.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Screen Share + Webcam </MDBCardTitle>
                                    <MDBBtn href="/screen-webcam">Record</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src="https://static.teamviewer.com/resources/2019/03/hero-devices-2f.png" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Screen Share Only</MDBCardTitle>
                                    <MDBBtn href="/screen-share">Record</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src="https://static.techspot.com/images2/news/bigimage/2020/02/2020-02-12-image-2.jpg" waves />
                                <MDBCardBody>
                                    <MDBCardTitle>Webcam Only</MDBCardTitle>
                                    <MDBBtn href="/webcam">Record</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default LectureCaptureHomepage;