import React, {useEffect, useRef} from 'react';
import {
    MDBContainer,
    MDBIcon,
    MDBBtn, MDBRow, MDBCol, MDBBtnGroup, MDBCard, MDBCardBody
} from 'mdbreact';
import '../recorder.components/css.recorder/recorder.css';
import { useReactMediaRecorder} from "react-media-recorder";
import Navbar from "./navbar.recorder";


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

const RecordWebcam = () => {
    const {
        status,
        startRecording,
        stopRecording,
        pauseRecording,
        resumeRecording,
        mediaBlobUrl,
        previewStream
    } = useReactMediaRecorder({ video: true });

    return (
        <div>
            <MDBRow >
                <MDBCol md='4'>
                    <MDBCard style={{ width: "30rem" }}>
                        <br/>
                        <MDBRow center>
                            <h2>Webcam Preview</h2>
                        </MDBRow>
                        <MDBCardBody>
                            <VideoPreview stream={previewStream}/>
                            <MDBRow center >
                                <MDBCol md='4' >
                                    <MDBBtnGroup vertical>
                                        <p>{status}</p>
                                        {status !== 'recording' && (
                                            <MDBBtn
                                                type="button" color="default"  onClick={startRecording}>
                                                Start recording </MDBBtn>
                                        )}
                                        {/*<MDBBtn color="default" onClick={startRecording}>Start Recording</MDBBtn>*/}
                                    </MDBBtnGroup>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBBtnGroup vertical>
                                        {status === 'recording' && (
                                            <MDBBtn type="button" color="default" onClick={pauseRecording}>
                                                Pause recording
                                            </MDBBtn>
                                        )}
                                        {/*<MDBBtn color="default" onClick={stopRecording}>Stop Recording</MDBBtn>*/}
                                    </MDBBtnGroup>
                                    <MDBBtnGroup vertical>
                                        {status === 'stopping' && (
                                            <MDBBtn type="button" color="default" onClick={resumeRecording}>
                                                Resume recording
                                            </MDBBtn>
                                        )}
                                        {/*<MDBBtn color="default" onClick={stopRecording}>Stop Recording</MDBBtn>*/}
                                    </MDBBtnGroup>
                                    <MDBBtnGroup vertical>
                                        {status === 'recording' && (
                                            <MDBBtn type="button" color="default" onClick={stopRecording}>
                                                Stop recording
                                            </MDBBtn>
                                        )}
                                        {/*<MDBBtn color="default" onClick={stopRecording}>Stop Recording</MDBBtn>*/}
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
                            <h2>Webcam Output Recording</h2>
                        </MDBRow>
                        <MDBCardBody>
                            <video src={mediaBlobUrl} style={{'width':650,'height':370}} controls autoPlay loop/>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

class WebcamOnly extends React.Component {
    render() {
        const container = {height: 500}
        return(
            <div>
                <Navbar/>
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <MDBCol size='3' left >
                        <MDBBtn outline rounded size="sm" color="primary" a href='/lecture-capture-home'>
                            <MDBIcon far icon="arrow-alt-circle-left" className="mr-1" /> Choose Recording Mode</MDBBtn>
                    </MDBCol>
                    <RecordWebcam/>
                </MDBContainer>
            </div>
        );
    }
}

export default WebcamOnly;