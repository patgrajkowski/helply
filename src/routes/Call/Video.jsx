import React, { useContext } from 'react';
import { CallContext } from '../../store/CallContext';

const Video = () => {
    const { callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(CallContext);

    return (
        <div className="w-12/12 flex flex-wrap justify-around">
            <div className="w-12/12 sm:w-5/12">
                {stream && <video className="w-full rounded-3xl" playsInline ref={myVideo} autoPlay />}
            </div>
            <div className="w-12/12 sm:w-5/12">
                <video className="w-full rounded-3xl" playsInline ref={userVideo} autoPlay />
            </div>
            {callAccepted && !callEnded && (
                <div className="w-12/12 sm:w-5/12">
                    <video className="w-full rounded-3xl" playsInline ref={userVideo} autoPlay />
                </div>
            )}
        </div>
    );
};

export default Video;
