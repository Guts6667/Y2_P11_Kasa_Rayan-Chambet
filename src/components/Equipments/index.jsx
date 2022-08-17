import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import colors from "../../utils/color";

const EquipmentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: ${colors.four};
  border-radius: 5px;
  .header-equipments {
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
  }
  .equipments-content {
    color: ${colors.primary};
    padding: 10px;
    list-style-type: none;
  }
  .hidden {
    display: none;
  }
  .dropdown-btn {
    cursor: pointer;
  }
`;

function Equipments({ equipments }) {
    console.log(equipments);
  const dropDownFunc = () => {
    const text = document.querySelector(".equipments-content");
    const chevronUp = document.querySelector(".chevron-up-equipments");
    const chevronDown = document.querySelector(".chevron-down-equipments");

    if (chevronUp.classList.contains("hidden")) {
      chevronDown.classList.add("hidden");
      chevronUp.classList.remove("hidden");
      text.classList.remove("hidden");
    } else {
      text.classList.add("hidden");
      chevronUp.classList.add("hidden");
      chevronDown.classList.remove("hidden");
    }
  };

  return (
    <EquipmentsWrapper>
      <div className="header-equipments">
        <span>Equipments</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          size="1x"
          className="hidden  dropdown-btn chevron-up-equipments"
          onClick={dropDownFunc}
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          size="1x"
          className="dropdown-btn chevron-down-equipments"
          onClick={dropDownFunc}
        />
      </div>
      <ul className="equipments-content hidden">
      {equipments.map((equipment) => (
        <li key={`${equipment}-${equipments.indexOf(equipment)}`}> {equipment}</li>
))}
      </ul>
      
    </EquipmentsWrapper>
  );
}

export default Equipments;
