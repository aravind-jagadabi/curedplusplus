import styled from "styled-components";
import { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoFooter = ({children}:any) => {
  const socketContext = useContext(SocketContext);

  if (!socketContext) {
    // Handle case where context is null (optional)
    return <div>Loading...</div>;
  }

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, leaveCall, answerCall } = socketContext;

  const handleEndClick = () => {
    leaveCall();
  }
  const handleAcceptClick = () => {
    answerCall();
  }

  return(
    <Container>
      {call.isReceivedCall && !callAccepted && (
        <CallStatus>
          <p>{call.name} already Joined, Join Call Now</p>
          <AcceptCall onClick={handleAcceptClick}>Answer</AcceptCall>
        </CallStatus>
      )}

      {callAccepted && !callEnded && (
        <EndCall onClick={handleEndClick}>End</EndCall>
      )}
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: black;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: -10px;
  position: relative;
  height: 55px;
`;
const AcceptCall = styled.button`
  background-color: rgb(23, 141, 23);
  border-style: none;
  border-radius: 8px;
  color: white;
  width: 70px;
  height: 28px;
  padding-top:2px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: rgb(0, 168, 0);
    transition: .4s;
  }

`;
const EndCall = styled.button`
  background-color: #dc1d1d;
  border-style: none;
  border-radius: 8px;
  color: white;
  width: 55px;
  height: 28px;
  padding-top:2px;
  margin-right: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: rgb(255, 0, 0);
    transition: .4s;
  }

`;

const CallStatus = styled.div``;

export default VideoFooter;