import React, { useState, useContext } from 'react';
import Button from '../../components/Button/Button';
import { BsFillMicFill, BsFillMicMuteFill, BsCameraVideoFill, BsCameraVideoOffFill } from 'react-icons/bs';
import { CallContext } from '../../store/CallContext';
import { useNavigate, useParams } from 'react-router';

const CallNavigation = () => {
    const { id } = useParams();
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, toggleVideo, toggleMicrophone } =
        useContext(CallContext);
    const [idToCall, setIdToCall] = useState('');
    const [muted, setMuted] = useState(false);
    const [video, setVideo] = useState(true);
    const navigate = useNavigate();
    const muteOnClickHandler = () => {
        muted ? setMuted(false) : setMuted(true);
        toggleMicrophone();
    };
    const videoOnClickHandler = () => {
        video ? setVideo(false) : setVideo(true);
        toggleVideo();
    };
    const endCallOnClickHandler = () => {
        // leaveCall();
        navigate('/me');
    };
    return (
        <div className="w-full flex justify-center gap-4">
            <Button onClick={muteOnClickHandler}>
                {muted ? <BsFillMicMuteFill></BsFillMicMuteFill> : <BsFillMicFill></BsFillMicFill>}
            </Button>
            <Button onClick={videoOnClickHandler}>
                {video ? <BsCameraVideoFill></BsCameraVideoFill> : <BsCameraVideoOffFill></BsCameraVideoOffFill>}
            </Button>
            <Button primary onClick={endCallOnClickHandler}>
                Zakończ rozmowę
            </Button>
        </div>
    );
};

export default CallNavigation;
