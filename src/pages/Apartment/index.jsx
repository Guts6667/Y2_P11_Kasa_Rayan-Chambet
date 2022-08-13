import React from 'react';
// import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import datas from '../../datas/logements.json'
// import colors from '../../utils/color';
import { useLocation } from 'react-router';
const ApartmentWrapper = styled.main`
display: flex;
flex-direction: column;
margin-top: 50px;
`
const ApartmentImg = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 10px;
`

function Apartment(){
    const location = useLocation()
    const myApartment = datas.filter(data => data.id === location.state)
    console.log(myApartment);
    const {id, title, cover} = myApartment[0];
    

    return(
        <ApartmentWrapper key={`${title}-${id}`}>
            <ApartmentImg src= {cover} alt={title}/>
        </ApartmentWrapper>
    )
}

export default Apartment;