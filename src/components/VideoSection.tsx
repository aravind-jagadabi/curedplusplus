import styled from "styled-components";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";

const VideoSection = () => {
  const socketContext = useContext(SocketContext);

  if (!socketContext) {
    // Handle case where context is null (optional)
    return <div>Loading...</div>;
  }

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = socketContext;

  return (
    <Container>
      {stream && (
        <StreamBox>
          <video playsInline muted ref={myVideo} autoPlay />
          <UserOne>{name || 'User1'}</UserOne>
        </StreamBox>
      )}

      {callAccepted && !callEnded && (
        <StreamBox2>
          <video playsInline muted ref={userVideo} autoPlay />
          <UserTwo>{call.name || 'User2'}</UserTwo>
        </StreamBox2>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: -8px;
  background-color: #111111;
`;
const StreamBox = styled.div`
  width: 1250px;
  height: 680px;
  border-style: solid;
  background-color: white;
  color: black;
  border-color: black;
  border-width: 1px;
  margin-right: 20px;
  margin-bottom: 0px;

  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StreamBox2 = styled.div`
  position: absolute;
  width: 250px;
  height: 150px;
  border-style: solid;
  background-color: white;
  color: black;
  border-color: black;
  border-width: 1px;
  margin-left: 1260px;
  margin-top: 10px;
  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserOne = styled.p`
  position: absolute;
  background-color: black;
  color: white;
`;
const UserTwo = styled.p`
  position: absolute;
  margin-top: -22px;
  background-color: black;
  color: white;
`;

export default VideoSection;
