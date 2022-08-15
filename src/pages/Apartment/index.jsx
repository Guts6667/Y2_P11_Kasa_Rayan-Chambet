import React from 'react';
import styled from 'styled-components';
import datas from '../../datas/logements.json'
import colors from '../../utils/color';
import '../../styles/apartment.css'
import { useLocation } from 'react-router';
import Carousel from '../../components/Carousel';
import Infos from '../../components/Infos';


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
    const locationObject = useLocation()
    const myApartment = datas.filter(data => data.id === locationObject.state)
    console.log(myApartment);
    const {title, id} = myApartment[0];

    return(
        <ApartmentWrapper key={`${title}-${id}`}>
            <Carousel>

            </Carousel>
            <Infos/>
        </ApartmentWrapper>
    )
}
export default Apartment;