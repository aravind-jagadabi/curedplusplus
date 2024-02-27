import styled from "styled-components";
import Doctors from "./Doctors";
import { useState } from "react";
import Country from "./Country";
import Illnesses from "./Illnesses";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";


const Header = () => {
  const [showDoctors, setShowDoctors] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showIllnesses, setShowIllnesses] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleShowDoctors = () => {
    setShowDoctors(true);
  }
  const handleNotShowDoctors = () => {
    setShowDoctors(false);
  }
  const handleShowCountry = () => {
    setShowCountry(true);
  }
  const handleNotShowCountry = () => {
    setShowCountry(false);
  }
  const handleShowIllnesses = () => {
    setShowIllnesses(true);
  }
  const handleNotShowIllnesses = () => {
    setShowIllnesses(false);
  }
  const handleUserClick = () => {
    setShowSignOut(!showSignOut);
  }
  
  const logout = () => {
    signOut(firebaseAuth);
    setShowSignOut(!showSignOut);
  }

  
  return(
    <Container>
      <Content>
        <Logo>
          <a href = "/">
            <Image src = "/images/cpplogo.png" alt = "Company Logo" draggable={false}/>
          </a>
        </Logo>
        <Nav>
          <NavListWrap>
            <NavList>
              <a onMouseOver={handleShowDoctors} onMouseOut={handleNotShowDoctors}>
                <span>
                  Doctors
                  <DownLogo src="/images/down.png" draggable={false}/>
                </span>
                { showDoctors && <Doctors />}
              </a>
            </NavList>
            <NavList>
              <a onMouseOver={handleShowCountry} onMouseOut={handleNotShowCountry}>
                <span>
                  Countries
                  <DownLogo src="/images/down.png" draggable={false}/>
                </span>
                { showCountry && <Country />}
              </a>
            </NavList>
            <NavList>
              <a onMouseOver={handleShowIllnesses} onMouseOut={handleNotShowIllnesses}>
                <span>
                  Illnesses
                  <DownLogo src="/images/down.png" draggable={false}/>
                </span>
                { showIllnesses && <Illnesses />}
              </a>
            </NavList>
            <NavList>
              <a><span>Appointments</span></a>
            </NavList>
             
          </NavListWrap>
        </Nav>
        <Profile>
          <a href = "/support">
            <Support src = "/images/support.png" alt = "Support" draggable={false}/>
          </a>
          <a href = "/language">
            <Language src = "/images/globe.png" alt = "Language" draggable={false}/>
          </a>
          <a onClick={handleUserClick} >
            <User src = "/images/user.png" alt = "User" draggable={false}/>
          </a>
          {showSignOut && <SignOut>
            <a onClick={logout}>Sign Out</a>
          </SignOut>}
          {showSignIn && <SignIn>
            <a href="/login">Sign In</a>
          </SignIn>}
        </Profile>
      </Content>
    </Container>
  );
}


const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;

`;

const Image = styled.img`
  max-width: 55px;
  border-radius: 2px;
  margin: 5px 5px 5px 5px;
`;


const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px){
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
    margin-bottom: 0px;
  }
`;


const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  align-items: center;
  justify-content: center;

`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span{
      color: rgb(0, 0, 0);
      display: flex;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 4px;
      padding-bottom: 4px;
      border-radius: 3px;
      font-size: 17px;
      opacity: 75%;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }

    &:hover{
      span{
        opacity: 100%;
        cursor: pointer;
      }
      img{
        transform: scale(1) rotate(-180deg);
        transition: .5s;
      }
    }

    &:active{

    }
  }
`;


const DownLogo = styled.img`
  max-width: 20px;
  opacity: 70%;
  &:hover{
    transform: scale(1) rotate(-180deg);
    transition: .5s;
  };

`;


const Profile = styled.div`
  display: flex;
  align-items: center;

  a{
    display: flex;
    align-items: center;
  }
`;


const Support = styled.img`
  max-width: 25px;
  padding: 7px 8px 5px 50px;
`;

const Language = styled.img`
  max-width: 21px;
  padding: 7px 8px 5px 8px;
`;

const SignOut = styled.div`
  position: absolute;
  margin-top: 110px;
  margin-left: 125px;
  background-color: black;
  color: white;
  border-radius: 0px 0px 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: -100;
  cursor: pointer;

  a{
    text-decoration: none;
    color: white;
  }
`;

const SignIn = styled.div`
  position: absolute;
  margin-top: 110px;
  margin-left: 125px;
  background-color: black;
  color: white;
  border-radius: 0px 0px 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  a{
    text-decoration: none;
    color: white;
  }
`;

const User = styled.img`
  max-width: 20px;
  padding: 7px 8px 5px 8px;
  cursor: pointer;
  
`;


export default Header;