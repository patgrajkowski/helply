import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const CallContext = createContext();

const socket = io('http://localhost:3002');

const CallContextProvider = ({ children }) => {
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [me, setMe] = useState('');

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
            setStream(currentStream);

            myVideo.current.srcObject = currentStream;
        });

        socket.on('me', (id) => {
            setMe(id);
        });

        socket.on('callUser', ({ from, name: callerName, signal }) => {
            setCall({ from, name: callerName, signal });
        });
        socket.on('userConnected', (userId, members) => {
            if (members === 2) {
                answerCall(userId);
            }
            if (members === 1) {
                callUser(userId);
            }
        });
        me && socket.emit('joinCall', 'xd', me);
    }, [me]);

    const toggleVideo = () => {
        myVideo.current.srcObject.getTracks()[1].enabled = !myVideo.current.srcObject.getTracks()[1].enabled;
    };
    const toggleMicrophone = () => {
        myVideo.current.srcObject.getTracks()[0].enabled = !myVideo.current.srcObject.getTracks()[0].enabled;
    };
    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answerCall', { signal: data, to: call.from });
        });

        peer.on('stream', (userStream) => {
            userVideo.current.srcObject = userStream;
        });

        console.log(call.signal);
        peer.signal(call.signal);
        connectionRef.current = peer;
    };

    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });
        socket.on('callAccepted', (signal) => {
            setCallAccepted(true);

            peer.signal(signal);
        });

        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
    };

    return (
        <CallContext.Provider
            value={{
                call,
                callAccepted,
                myVideo,
                userVideo,
                stream,
                name,
                setName,
                callEnded,
                me,
                callUser,
                leaveCall,
                answerCall,
                toggleVideo,
                toggleMicrophone,
            }}
        >
            {children}
        </CallContext.Provider>
    );
};

export { CallContextProvider, CallContext };
