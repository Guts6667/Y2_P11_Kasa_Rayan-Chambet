import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import colors from "../../utils/color";

const EquipmentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 5px;
  width: 100%;

  .header-equipments {
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    z-index: 1;
     @media only screen and (min-width: 768px){
    font-weight: 500;
    font-size: 18px;
  }
  }
  .dropdown-btn {
    cursor: pointer;
  }
  ul{
  background-color: ${colors.four};
  position: relative;
  top: -5px;
  z-index: 0;
  margin-block-start: 0;
  border-radius: 0px 0 10px 10px;
  padding: 15px;
  color: ${colors.primary};
  list-style-type: none;
 }
`;

function Equipments({ title, equipments }) {

  const [isOpen, setIsOpen] = useState(false)
  function toggling(){
    setIsOpen(!isOpen)
  }
  return (
    <EquipmentsWrapper>
     
        <div className="header-equipments">
        <span>{title}</span>
        {isOpen || (
          
        <FontAwesomeIcon
          icon={faChevronDown}
          size="1x"
          className="dropdown-btn chevron-down-equipments"
          onClick={toggling}
        />
        )}
        {isOpen && (
          <FontAwesomeIcon
          icon={faChevronUp}
          size="1x"
          className="  dropdown-btn chevron-up-equipments"
          onClick={toggling}
        />
        )}
      </div>
        {isOpen && (
      <ul >
        {equipments.map((equipment) => (
        <li key={`${equipment}-${equipments.indexOf(equipment)}`}> {equipment}</li>
          ))}
 </ul>
 
      )}
     
    </EquipmentsWrapper>
  );
}

export default Equipments;
