import React from 'react';
import styled from 'styled-components';
import datas from '../../datas/logements.json'
import colors from '../../utils/color';
import '../../styles/apartment.css'
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons";


const ApartmentWrapper = styled.main`
display: flex;
flex-direction: column;
margin-top: 50px;
h1{
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
}
`
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
const ApartmentImg = styled.img`
width: 100%;
object-fit: cover;
border-radius: 10px;
z-index: 0;
`

//Importer fontawesome : Render les chevrons. puis utliser map pour créer un composant image pour chaque img
// Créer un state qui prend en compe l'index de chaque img.
// Naviguer entre les images à chaque clique
function Apartment(){
    const location = useLocation()
    const myApartment = datas.filter(data => data.id === location.state)
    console.log(myApartment);
    const {id, title, cover} = myApartment[0];
    console.log(id);
    const [myPictures] = myApartment[0].pictures;
    console.log(myPictures);
    

    return(
        <ApartmentWrapper key={`${title}-${id}`}>
            <ApartmentCarousel>
            <FontAwesomeIcon icon= {faChevronLeft} size={'2x'} className='chevron-left chevron' />
                <ApartmentImg src= {cover} alt={title}/>
                <FontAwesomeIcon icon= {faChevronRight} size={'2x'} className='chevron-right chevron' />
            </ApartmentCarousel>
            <h1>{title}</h1>
        </ApartmentWrapper>
    )
}
export default Apartment;