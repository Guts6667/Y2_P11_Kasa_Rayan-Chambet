import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, } from "@fortawesome/free-solid-svg-icons";
import colors from "../../utils/color";


const DescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
color: white;
background-color: ${colors.four};
border-radius: 5px;
.header-description{
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    
}
.description-content{
    color: ${colors.primary};
    padding: 10px;
}
.hidden{
    display: none;
}
`
function Description({description}){

    const text = document.querySelector('.description-content');
    const chevronUp = document.querySelector('.fa-chevron-up');
    const chevronDown = document.querySelector('.fa-chevron-down');
const showDropdown = () => {
        chevronUp.classList.add('hidden');
        chevronDown.classList.remove('hidden');
        text.classList.remove('hidden');

}
    const hideDropdown = () => {
        text.classList.add('hidden');
        chevronDown.classList.add('hidden');
        chevronUp.classList.remove('hidden')
    }
        
    
   

    return(
        <DescriptionWrapper>
            <div className="header-description">
                <span>Description</span>
                <FontAwesomeIcon icon={faChevronUp} size= "1x" onClick={showDropdown}/>
                <FontAwesomeIcon icon={faChevronDown} size= "1x" className="hidden" onClick={hideDropdown}/>
            </div>
                <p className="description-content hidden">{ description }</p>
        </DescriptionWrapper>
    )
}

export default Description;