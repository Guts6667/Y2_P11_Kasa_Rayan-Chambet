
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons";

const ApartmentCarousel = styled.div`
width: 100%;
height: 200px;
display: flex;
justify-content: center;

.chevron{
    align-self: center;
    z-index: 2;
    cursor: pointer;
    position: absolute;
    color: white;
}

.chevron-left{
    left: 7%;

}
.chevron-right{
    right: 7%;
}
`

function Carousel(){
    return(
    <ApartmentCarousel>
        <FontAwesomeIcon icon= {faChevronLeft} size={'2x'} className='chevron-left chevron' />
        <FontAwesomeIcon icon= {faChevronRight} size={'2x'} className='chevron-right chevron' />
    </ApartmentCarousel>)
}

export default Carousel;