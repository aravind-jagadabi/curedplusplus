import styled  from "styled-components";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { firebaseAuth, userRef } from "../utils/FirebaseConfig";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../app/slices/AuthSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser) navigate("/home");
  })

  const login = async() =>{
    const provider = new GoogleAuthProvider();
    const {user: {displayName, email, uid}} = await signInWithPopup(firebaseAuth, provider);

    if(email){
      const firestoreQuiry = query(userRef, where("uid", "==", uid));
      const fetchedUsers = await getDocs(firestoreQuiry);
      if(fetchedUsers.docs.length === 0){
        await addDoc(userRef, {
          uid,
          name: displayName,
          email,
        });
      }
    }
    dispatch(setUser({uid, name: displayName, email}));
    navigate("/home");

  };

  
  return(
    <Container>
      <Section>
        <Hero>
          <h1> <Blue>Talk</Blue> <Black>with</Black> <Blue>International</Blue> <Black>Doctors</Black> <Blue>for a <Black>Cure</Black> Possibility</Blue></h1>
          <Logo src = "./images/cpplogo.png" alt = "Logo Image"/>
        </Hero>
        <Form>
          <Google onClick={login}>
            <img src = "./images/google_logo.png" alt = "Google Logo" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
      
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
`;

const Section = styled.div`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px){
    margin: auto;
    min-height: 0px;
    justify-content: center;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1{
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200; 
    
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2; 
    }
  }

  img{
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -250px;
    border-radius: 500px;
    
    @media (max-width: 768px){
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
      max-width: 470px;
    }

  }

`;

const Logo = styled.img``;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px){
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), 
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 0 / 0%);

  vertical-align: center;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &:hover{
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  
  img{
    max-width: 34px;
  }
  &:hover{
    cursor: pointer;
  }
`;

const Black = styled.span`
  color: black;
`;

const Blue = styled.span`
  color: #2977c9;
`;

export default Login;