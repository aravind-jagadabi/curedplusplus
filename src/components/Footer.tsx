import styled from "styled-components";

const Footer = () => {
  return(
    <Container>
      <Section>
        <p>&copy; {new Date().getFullYear()} Copyright Curedplusplus. All rights reserved.</p>
      </Section>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  

`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:100px;
  margin-bottom: 30px;

`;



export default Footer;