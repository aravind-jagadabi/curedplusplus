import styled from "styled-components";


const Doctors = () => {
  const doctors: string[] = ["Oncologist", "Cardiologist", "Neurologist", "Pulmonologist", "Gastroenterologist", "Endocrinologist",
  "Rheumatologist", "Nephrologist", "Hematologist", "Infectious Specialist", "Dermatologist", "Psychiatrist", "Urologist",
  "Ophthalmologist", "Orthopedic Surgeon", "Palliative Care Specialist", "Geneticist", "Allergist", "Geriatrician",
  "Pediatrician"
];
  doctors.sort();

  return(
    <Container>
      <Content>
        {doctors.map((doctor: string)=> {
          return <Item>{doctor}</Item>
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
  width: 15vw;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  /* border-style: solid;
  border-width: 1px;
  border-color: #979797; */
  box-shadow: 0 2px 12px 0 rgba(35, 35, 51, .5);
  overflow-y: scroll;
  padding: 5px;

`;

const Item = styled.div`
  color: black;
  padding: 4px 2px 4px 15px;
  border-radius: 8px;

  &:hover{
    background-color: #f1f4f6;
    cursor: pointer;
  }
`;


export default Doctors;