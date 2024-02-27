import React, { useState } from 'react';
import styled from 'styled-components';


interface DropdownSelectProps {
  options: string[];
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <SelectContainer>
      <SelectStyled value={selectedOption} onChange={handleSelectChange}>
        {/* <option value="">Select an option</option> */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </SelectStyled>
    </SelectContainer>
  );
};


const SelectStyled = styled.select`
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  appearance: none; /* removing default arrow */
  font-size: 15px;
  margin-right: 10px;
  @media (max-width:768px){
    margin-bottom: 5px;
  }
  
`;

// Define the styled component for the container
const SelectContainer = styled.div`
  position: relative;
`;



export default DropdownSelect;