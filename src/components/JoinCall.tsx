import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SocketContext } from "../SocketContext";

const JoinCall = ({children}:any) => {

  //UI part first created
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();


  //using all context part after fixing bugs on socketcontext
  const [idToCall, setIdToCall] = useState<string>('');
  const socketContext = useContext(SocketContext);
  
  if (!socketContext) {
    // Handle case where context is null (optional)
    return <div>Loading...</div>;
  }
  const {me, callAccepted, callEnded, name, setName, leaveCall, callUser} = socketContext;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    setIdToCall(event.target.value);
  }
  console.log({me});

  const handleJoinClick = () => {
    if(userInput){
      callUser(idToCall);
      navigate("/connect");
      
    }
  }

  return(
    <Container>
      <LoginBox>
        <h1>Join Meeting</h1>
        <JoinSection>
          <p>Meeting ID or Personal Link Name</p>
          <input type="text" value = {idToCall} placeholder="Enter Meeting ID or Personal Link Name" onChange={handleInputChange}></input>
          <button onClick={handleJoinClick}>Join</button>
        </JoinSection>
      </LoginBox>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  

  h1{
    font-size: 22px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

`;
const JoinSection = styled.div`
  display: flex;
  flex-direction: column;

  p{
    font-size: 13px;
    color: #717171;
    margin-bottom: 10px;
  }

  input{
    height: 35px;
    width: 332px;
    border-radius: 12px;
    border-style: solid;
    border-color: #e7e7e7;
    padding-left: 20px;
    font-size: 15px;


    &::placeholder{
      font-size: 15px;
    }

  }
  button{
    height: 37px;
    width: 357px;
    font-size: 16px;
    margin-top: 18px;
    margin-bottom: 18px;
    border:none;
    border-radius: 12px;
    background-color: #d4d9e0;
    color: black;
    opacity: 50%;
    cursor: pointer;

  }

`;


export default JoinCall;