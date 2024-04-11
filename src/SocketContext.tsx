import { createContext, useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import SimplePeer, { Instance } from "simple-peer";

type SocketContextType = {
  call: any;
  callAccepted: boolean;
  myVideo: React.MutableRefObject<HTMLVideoElement | null>;
  userVideo: React.MutableRefObject<HTMLVideoElement | null>;
  stream: MediaStream | null;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  callEnded: boolean;
  me: string;
  callUser: (id: string) => void;
  leaveCall: () => void;
  answerCall: () => void;
};

const SocketContext = createContext<SocketContextType | null>(null);
const socket: Socket = io('http://localhost:5000');

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [me, setMe] = useState<string>('');
  const [call, setCall] = useState<any>({});
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const myVideo = useRef<HTMLVideoElement>(null);
  const userVideo = useRef<HTMLVideoElement>(null);
  const connectionRef = useRef<Instance | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        if (myVideo.current) {
          myVideo.current.srcObject = currentStream;
        }
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });

    socket.on('me', (id) => setMe(id));
    socket.on('calluser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal });
    });

    return () => {
      socket.off('me');
      socket.off('calluser');
    };
  }, []);


  const answerCall = () => {
    setCallAccepted(true);

    if (!stream) return;

    const peer = new SimplePeer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answercall', { signal: data, to: call.from });
    });
    peer.on('stream', (currentStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream;
      }
    });
    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id: string) => {
    if (!stream) return;

    const peer = new SimplePeer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('calluser', { userToCall: id, signalData: data, from: me, name });
    });
    peer.on('stream', (currentStream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = currentStream;
      }
    });

    socket.on('callaccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    if (connectionRef.current) {
      connectionRef.current.destroy();
    }
    window.location.reload();
  };

  const contextValue: SocketContextType = {
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
  };

  return <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>;
};

export { ContextProvider, SocketContext };