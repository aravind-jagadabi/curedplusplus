import styled from "styled-components";

const ShowBookings = () => {
  const bookings:{doctor: string, illness: string, country: string, date: string, time: string, attendee_name: string} = {
    doctor: 'Allergist',
    illness: 'Allergy',
    country: 'United States',
    date: '20-03-2024',
    time: '07:30 PM',
    attendee_name: 'Aravind Jagadabi',
  };


  
  return(
    <Container>
      <Block>
        <HeaderSection>Your Appointment Bookings</HeaderSection>
        <Bookings>
          <Card>

          </Card>
        </Bookings>
      </Block>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const HeaderSection = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 17px;

`;
const Bookings = styled.div``;
const Card = styled.div``;


export default ShowBookings;