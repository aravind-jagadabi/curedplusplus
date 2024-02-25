import styled from "styled-components";


const Illnesses = () => {
  const problems: string[] = ["Cancer disorders", "Heart disorders", "Neurological disorders", "Chronic respiratory disorders", "Gastrointestinal disorders", 
  "Diabetes mellitus", "Autoimmune disorders", "Chronic kidney disorders", "Blood disorders", "Infectious disorders", "Dermatological conditions",
  "Mental health disorders", "Urinary tract disorders", "Eye disorders", "Orthopedic conditions", "Chronic pain syndromes",
  "Genetic disorders", "Allergies and immune system disorders", "Geriatric syndromes and conditions", "Pediatric conditions"
];
  

  return(
    <Container>
      <Content>
        {problems.map((problem: string)=> {
          return <Item>{problem}</Item>
        })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
`;

const Content = styled.div`
  position: absolute;
  margin-top: 5px;
  background: white;
  width: 16vw;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  border-style: solid;
  border-width: 1px;
  border-color: #979797;
  overflow-y: scroll;

`;

const Item = styled.div`
  color: black;
  padding: 4px 2px 4px 15px;
  border-radius: 10px;
  margin:2px;

  &:hover{
    background-color: #dddddd;
    cursor: pointer;
  }
`;


export default Illnesses;