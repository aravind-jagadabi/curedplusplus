import styled from "styled-components";
import VideoSection from "./VideoSection";
import VideoFooter from "./VideoFooter";

const Connect = () => {
  return(
    <Container>
      <VideoSection />
      <VideoFooter />
    </Container>
  );
}


const Container = styled.div`
  margin: 0px;
  padding: 0px;
`;

export default Connect;