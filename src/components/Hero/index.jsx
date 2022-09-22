import React from 'react';
import heroPicture from '../../assets/IMG.png'
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const HeroWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 120px;
height: 200px;
width: 100%;
border-radius: 10px;
background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroPicture});
background-size: cover;
background-repeat: no-repeat;
background-position: center;



h1{
    font-weight : 500;
    font-size : 24px;
    text-align: center;
   
    
}
`
function Hero() {
    return (
        <HeroWrapper aria-label="image d'arrière plan d'un">
            <h1>Chez vous, partout ailleurs</h1>
        </HeroWrapper>
    )
}

Hero.propType ={
    heroPicture : PropTypes.string.isRequired,
}
Hero.defaultProps = {
    heroPicture : heroPicture,
}


export default Hero;