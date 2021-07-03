import React, {useEffect, useRef, useState} from 'react';
import {
    MDBContainer,
    MDBIcon,
    MDBBtn, MDBRow, MDBCol, MDBBtnGroup, MDBCard, MDBCardBody, MDBBadge
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

const RecordWebcam = (props) => {

    //timer
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                let computedSecond =
                    String(secondCounter).length === 1
                        ? `0${secondCounter}`
                        : secondCounter;
                let computedMinute =
                    String(minuteCounter).length === 1
                        ? `0${minuteCounter}`
                        : minuteCounter;

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter((counter) => counter + 1);
            }, 650);
        }
        return () => clearInterval(intervalId);
    }, [isActive, counter]);

    //stop timer
    function stopTimer() {
        setIsActive(false);
        setCounter(0);
        setSecond("00");
        setMinute("00");
    }

    const {
        status,
        startRecording,
        stopRecording,
        pauseRecording,
        resumeRecording,
        mediaBlobUrl,
        previewStream
    } = useReactMediaRecorder({ video: true, audio:true, type: 'video/mp4'  });

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
                            <h4>Recording Status: <MDBBadge color="primary"> {status}</MDBBadge></h4>
                            <br/>
                            <VideoPreview stream={previewStream}/>
                            <MDBRow center>
                                <div style={{ marginLeft: "10px", fontSize: "40px" }}>
                                    <span className="minute">{minute}</span>
                                    <span>:</span>
                                    <span className="second">{second}</span>
                                </div>
                            </MDBRow>
                            <MDBRow center >
                                <MDBCol md='4' >
                                    <MDBBtnGroup vertical>
                                        {status !== 'recording'  && (
                                            <MDBBtn
                                                type="button" color="default"  onClick={() => {
                                                setIsActive(!isActive);
                                                startRecording();
                                            }}>
                                                Start recording </MDBBtn>
                                        )}
                                        {/*<MDBBtn color="default" onClick={startRecording}>Start Recording</MDBBtn>*/}
                                    </MDBBtnGroup>
                                </MDBCol>
                                <MDBCol md="4">
                                    {/*<MDBBtnGroup vertical>*/}
                                    {/*    {status === 'recording' && (*/}
                                    {/*        <MDBBtn type="button" color="default" onClick={pauseRecording}>*/}
                                    {/*            Pause recording*/}
                                    {/*        </MDBBtn>*/}
                                    {/*    )}*/}
                                    {/*    /!*<MDBBtn color="default" onClick={stopRecording}>Stop Recording</MDBBtn>*!/*/}
                                    {/*</MDBBtnGroup>*/}
                                    {/*<MDBBtnGroup vertical>*/}
                                    {/*    {status === 'stopping' && (*/}
                                    {/*        <MDBBtn type="button" color="default" onClick={resumeRecording}>*/}
                                    {/*            Resume recording*/}
                                    {/*        </MDBBtn>*/}
                                    {/*    )}*/}
                                    {/*    /!*<MDBBtn color="default" onClick={stopRecording}>Stop Recording</MDBBtn>*!/*/}
                                    {/*</MDBBtnGroup>*/}
                                    <MDBBtnGroup vertical>
                                        {status === 'recording' && (
                                            <MDBBtn type="button" color="default" onClick={() => {
                                                stopRecording();
                                                stopTimer();
                                                setIsActive(!isActive);
                                            }}>
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
                        <MDBBtn outline rounded size="sm" color="primary" a href='/lecture-capture'>
                            <MDBIcon far icon="arrow-alt-circle-left" className="mr-1" /> Choose Recording Mode</MDBBtn>
                    </MDBCol>
                    <RecordWebcam/>
                </MDBContainer>
            </div>
        );
    }
}

export default WebcamOnly;