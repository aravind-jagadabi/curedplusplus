import styled from "styled-components";
import DropdownSelect from "./Dropdownselect";
import { useState } from "react";

const AppointmentBooking = () => {
  const doctors: string[] = ["Oncologist", "Cardiologist", "Neurologist", "Pulmonologist", "Gastroenterologist", "Endocrinologist",
  "Rheumatologist", "Nephrologist", "Hematologist", "Infectious Specialist", "Dermatologist", "Psychiatrist", "Urologist",
  "Ophthalmologist", "Orthopedic Surgeon", "Palliative Care Specialist", "Geneticist", "Allergist", "Geriatrician",
  "Pediatrician"
  ];

  const problems: string[] = ["Cancer disorders", "Heart disorders", "Neurological disorders", "Chronic respiratory disorders", "Gastrointestinal disorders", 
  "Diabetes mellitus", "Autoimmune disorders", "Chronic kidney disorders", "Blood disorders", "Infectious disorders", "Dermatological conditions",
  "Mental health disorders", "Urinary tract disorders", "Eye disorders", "Orthopedic conditions", "Chronic pain syndromes",
  "Genetic disorders", "Allergies and immune system disorders", "Geriatric syndromes and conditions", "Pediatric conditions", "Not Listed"
  ];

  const countries: string[] = ["United States", "Germany", "Switzerland", "Japan", "Sweden", "Canada", "United Kingdom", "Australia", "France", "Netherlands"];

  const availableSlots: string[] = ["12:00", "12:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
  const availableTime: string[] = ["AM", "PM"];
  doctors.sort();
  problems.sort();

  const [selectedDate, setSelectedDate] = useState(new Date());
  

  return(
    <Container>
      <Section>
        <Heading>
          <h1>Schedule Meeting</h1>
        </Heading>
        <DoctorPick>
          <Left>
            <p>Doctor Type</p>
            <DropdownSelect options={doctors}/>
            <p>Illness Type</p>
            <DropdownSelect options={problems}/>
            <p>Country</p>
            <DropdownSelect options={countries}/>
          </Left>
          <Right>
            <Image src = "/images/appointment.jpg" alt = "Doctor Types" draggable={false}/>
          </Right>
        </DoctorPick>
        <BookingDetails>
          <p>When</p>
          <BookDate>
          <input
            type="date"
            value={`${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
              .toString()
              .padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`}
            onChange={(e) => setSelectedDate(new Date(e.target.value))} />
            <DropdownSelect options={availableSlots} />
            <DropdownSelect options={availableTime} />
          </BookDate>
          
          <p>Enter mail to receive the Invite</p>
          <input type = "mail" placeholder="Your Email"/>
        </BookingDetails>
        <Payment>
          <a><span>Book Appointment</span></a>
        </Payment>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;


`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;


`;
const Heading = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    margin:20px;
  }

`;
const DoctorPick = styled.div`
  display: flex;
  flex-direction: row;

`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  p{
    font-size: 14px;
    color: #717171;
    margin-bottom: 5px;
    margin-top: 20px;
  }

`;
const Right = styled.div``;

const Image = styled.img`
  max-width: 278px;
  margin-left: 40px;
  margin-top: 42px;
  /* box-shadow: 0 2px 12px 0 rgba(35, 35, 51, .5); */
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  @media(max-width:768px){
    max-width: 0px;
  }

`;


const BookingDetails = styled.div`
  display: flex;
  flex-direction: column;

  p{
    font-size: 14px;
    color: #717171;
    margin-bottom: 2px;
    margin-top: 20px;
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

`;
const Payment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px;
  margin-left: 0px;

  a{
    height: 37px;
    width: 357px;
    font-size: 16px;
    margin-top: 18px;
    margin-bottom: 18px;
    border:none;
    border-radius: 8px;
    background-color: #d4d9e0;
    color: black;
    opacity: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;


const BookDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input{
    margin-right: 10px;
    width: 150px;
    height: 33px;
    padding-right: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    appearance: none; /* remove default arrow */
    font-size: 15px;
    @media (max-width:768px){
      margin-bottom: 10px;
    }
  }

  @media (max-width:768px){
    flex-direction: column;
    align-items: start;
  }

`;

export default AppointmentBooking;