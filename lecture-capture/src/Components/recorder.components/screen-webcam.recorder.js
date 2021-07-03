import React, { useEffect, useRef } from 'react';
import {MDBContainer, MDBIcon, MDBBtn, MDBRow, MDBCol, MDBBtnGroup, MDBCard, MDBCardBody} from 'mdbreact';
import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";
import '../recorder.components/css.recorder/recorder.css';
import Navbar from "./navbar.recorder";


//Video preview
const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    if (!stream) {
        return null;
    }
    return (
        <video ref={videoRef} width={400} height={300} autoPlay controls />
    );
};

//Screen preview
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


//record webcam
const RecordWebcam = () => {
    const {
        startRecording,
        stopRecording,
        mediaBlobUrl,
        previewStream
    } = useReactMediaRecorder({ video: true });

    return (
        <div>
            <MDBRow >
                <MDBCol md='4'>
                    <MDBCard style={{ width: "30rem" }}>
                        <br />
                        <MDBRow center>
                            <h2>Webcam Preview</h2>
                        </MDBRow>
                        <MDBCardBody>
                            <VideoPreview stream={previewStream} />
                            <MDBRow center >
                                <MDBCol md='4' >
                                    <MDBBtnGroup vertical>
                                        <MDBBtn color="default" onClick={startRecording}>Start Recording</MDBBtn>
                                    </MDBBtnGroup>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBBtnGroup vertical>
                                        <MDBBtn className='' color="default" onClick={stopRecording}>Stop Recording</MDBBtn>
                                    </MDBBtnGroup>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard style={{ width: "30rem", height: "31rem" }}>
                        <br />
                        <MDBRow center>
                            <h2>Webcam Output Recording</h2>
                        </MDBRow>
                        <MDBCardBody>
                            <video src={mediaBlobUrl} style={{ 'width': 400, 'height': 300 }} controls autoPlay loop />
                            {/*<MDBBtn className='' color="default" onClick={null}>Upload</MDBBtn>*/}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

//record screen share
const RecordScreen = () =>(
    <ReactMediaRecorder
        screen
        render={({startRecording, stopRecording, mediaBlobUrl, previewStream})=>(
            <div>
                <br/>
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


class ScreenShareWebcam extends React.Component {
    render() {
        const container = { height: 1300 }
        return (
            <div>
                <Navbar />
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <MDBCol size='3' >
                        <MDBBtn outline rounded size="sm" color="default" a href='/lecture-capture'>
                            <MDBIcon far icon="arrow-alt-circle-left" className="mr-1" /> Choose Recording Mode</MDBBtn>
                    </MDBCol>
                    <RecordWebcam />
                    <RecordScreen />
                </MDBContainer>
            </div>
        );
    }
}


export default ScreenShareWebcam;