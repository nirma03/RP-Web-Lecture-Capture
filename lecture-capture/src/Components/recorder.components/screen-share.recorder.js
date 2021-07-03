import React, {useEffect, useRef} from 'react';
import {
    MDBContainer,
    MDBIcon,
    MDBBtn, MDBRow, MDBCol, MDBBtnGroup, MDBCard, MDBCardBody
} from 'mdbreact';
import '../recorder.components/css.recorder/recorder.css';
import {ReactMediaRecorder} from "react-media-recorder";
import Navbar from "./navbar.recorder";

const ScreenPreview = ({ stream }: { stream: MediaStream | null }) => {
    const screenRef = useRef(null);

    useEffect(() => {
        if (screenRef.current && stream) {
            screenRef.current.srcObject = stream;
        }
    }, [stream]);

    if (!stream) {
        return null;
    }
    return (
        <video ref={screenRef} width={400} height={300} autoPlay controls />
    );
};


const RecordScreen = () =>(
    <ReactMediaRecorder
        screen
        render={({startRecording, stopRecording, mediaBlobUrl, previewStream})=>(
            <div>
                <MDBRow>
                    <MDBCol md='4'>
                        <MDBCard style = {{ width: '30rem'}}>
                            <br/>
                            <MDBRow center>
                                <h2> Screen Share Preview</h2>
                            </MDBRow>
                            <MDBCardBody>
                                <ScreenPreview stream={previewStream}/>
                                <MDBRow center>
                                    <MDBCol md='4'>
                                        <MDBBtnGroup vertical>
                                            <MDBBtn color="default" onClick={startRecording}>Start Recording</MDBBtn>
                                        </MDBBtnGroup>
                                    </MDBCol>
                                    <MDBCol md='4'>
                                        <MDBBtnGroup vertical>
                                            <MDBBtn color="default" onClick={stopRecording}>Stop Recording</MDBBtn>
                                        </MDBBtnGroup>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='2'/>
                    <MDBCol md='4'>
                        <MDBCard style={{ width: "45rem", height: "31rem" }}>
                            <br/>
                            <MDBRow center>
                                <h2>Screen Share Output Recording</h2>
                            </MDBRow>
                            <MDBCardBody>
                                <video src={mediaBlobUrl} style={{'width':650,'height':370}} controls autoPlay loop/>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        )}
    />
)

class ScreenShareOnly extends React.Component {
    render() {
        const container = {height: 500}
        return(
            <div>
                <Navbar/>
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <MDBCol size='3' left>
                        <MDBBtn outline rounded size="sm" color="primary" a href='/lecture-capture-home'>
                            <MDBIcon far icon="arrow-alt-circle-left" className="mr-1" /> Choose Recording Mode</MDBBtn>
                    </MDBCol>
                    <div className="App">
                        <header className="App-header">
                            <RecordScreen/>
                        </header>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default ScreenShareOnly;