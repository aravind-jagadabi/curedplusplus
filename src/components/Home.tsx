import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const Home = () => {

  useAuth();

  return(
    <Container>
      <Section>
        {/* <Caption> Talk with International Doctors regarding terminal illnesses</Caption> */}
      </Section>
      <Content>
        <Left>
          <Image src = "/images/doctors.jpg" alt = "World Map" />
        </Left>
        <Right>
          <Cards>
            <Card>Reliable</Card>
            <Card>Trusted</Card>
            <Card>Secure</Card>
            <Card>Professional</Card>
            <Card>Verified</Card>
            <Card>Credible</Card>
          </Cards>
        </Right>
      </Content>
      <Section>
        <Button1 href = "/joincall"><span>Join the Call</span></Button1>
        <Button2 href = "appointment"><span>Book Appointment</span></Button2>
      </Section>

    </Container>
  );
}




const Container = styled.div`
  margin-top: 72px;
  margin-bottom: 50px;
  max-width: 100%;

`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


`;

const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0px;
  flex-wrap: nowrap;
`;

// const Caption = styled.div`
//   font-family: 'Internacional','Helvetica','Arial';
//   font-weight: bold;
//   font-size: 25px;
// `;


const Left = styled.div`
  display: flex;

  @media (max-width: 768px){
    margin-bottom: 40px;
  }

`;


const Right = styled.div`

`;

const Image = styled.img`
  max-width: 500px;
  border-radius: 4px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 245px 245px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media (max-width: 768px){
    grid-template-columns: 220px 220px;
  }

`;

const Card = styled.span`
  border-radius: 20px;
  border-color: #0077ff54;
  border-style: solid;
  border-width: 0.1vw;
  font-weight: bold;
  font-size: 25px;
  font-family: Arial, Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;


  &:hover{
      border-color: #0077ff;
      box-shadow: 0px 10px 20px rgba(0, 81, 255, 0.3);
      transition: 0.3s;
      color: #0077ff;
      cursor: pointer;
    }

`;

const Button1 = styled.a`
  text-decoration: none;
  background-color: #efeded;
  color: black;
  margin: 15px;
  width: 250px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Button2 = styled.a`
  text-decoration: none;
  background-color: black;
  color: white;
  margin: 15px;
  width: 250px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export default Home;
