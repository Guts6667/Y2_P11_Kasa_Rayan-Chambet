import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import colors from "../../utils/color";

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 5px;
  width: 100%;
  .header-description {
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    z-index: 01;
    @media only screen and (min-width: 768px){
    font-weight: 500;
    font-size: 18px;
  }
  }
  .dropdown-btn {
    cursor: pointer;
  }
 p{
  background-color: ${colors.four};
  position: relative;
  top: -5px;
  z-index: 0;
  margin-block-start: 0;
  border-radius: 0px 0 10px 10px;
  padding: 15px;
  color: ${colors.primary};
 }
  
`;

function DropDownText({ title, content }) {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () =>{
    setIsOpen(!isOpen)
  } 
  return (
    <DescriptionWrapper>
      <div className="header-description">
        <span>{title}</span>

        {isOpen || (
          <FontAwesomeIcon icon={faChevronDown} size="1x" className="dropdown-btn" onClick={toggling} />
        )}
        {isOpen && (
          <FontAwesomeIcon icon={faChevronUp} size="1x" className="dropdown-btn" onClick={toggling} />
        )}
      </div>
      {isOpen &&(
        <p>{content}</p>
      )}
    </DescriptionWrapper>
  );
}

export default DropDownText;
