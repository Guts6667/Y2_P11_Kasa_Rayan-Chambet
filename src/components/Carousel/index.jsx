
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons";

const ApartmentCarousel = styled.div`
 > * {
    width: 100%;
height: 200px;
display: flex;
justify-content: center;
@media only screen and (min-width: 768px){
    height: 300px;
}
 }


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
span{
    color: white;
    font-weight: 500;
    font-size: 18px;
    position: relative;
    top: -25px;
    height: 10px;
}
`
const ApartmentImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  z-index: 0;
`;

function Carousel({pictures, title}){
    let [index, setIndex] = useState(0)
    let [isMultiple, setIsMultiple] = useState(false);
    useEffect(() => {
        if(pictures.length > 1){
            setIsMultiple(true)
        }
    }, [pictures])
    
    const nextApartment = () => {
        if(index === pictures.length -1){
            
            setIndex(0)
        }
        else{
            setIndex(index += 1)
        } 
    }
    const previousApartment = () => {
        if(index === 0){
            setIndex(pictures.length -1)
        }
        else{
            setIndex(index -=1)
        }
    }

   
    return(
    <ApartmentCarousel>
        <div>
            {isMultiple && (
                <FontAwesomeIcon icon= {faChevronLeft} size={'2x'} className='chevron-left chevron' onClick={previousApartment}  />
            )}
            
                <ApartmentImg src={pictures[index]} alt ={title} />
            {isMultiple && (
                <FontAwesomeIcon icon= {faChevronRight} size={'2x'} className='chevron-right chevron'  onClick={nextApartment} />
            )}
            
        </div>
            <span>{`${index +1}/${pictures.length}`}</span>        
    </ApartmentCarousel>
    )
}

export default Carousel;