import React from 'react';
// import { PropTypes } from 'prop-types';
import Hero from '../../components/Hero';
import styled from 'styled-components';
import Cards from '../../components/Cards/Cards';
import colors from '../../utils/color';

// Voir avec Ryade comment modifier l'url de manière à afficher le nom de l'appartement

const HomeWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const CardWrapper = styled.main`
margin-top: 50px;
display: flex;
flex-flow: wrap;
justify-content: space-evenly;
width: 100%;
border-radius: 10px;
background-color: ${colors.secondary};
padding: 20px;
`
function Home(){
    return(
        <HomeWrapper>
            <Hero />
            <CardWrapper>
            <Cards />
            </CardWrapper>
        </HomeWrapper>
    )
}

export default Home;