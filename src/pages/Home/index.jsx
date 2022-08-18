import React from 'react';
import Hero from '../../components/Hero';
import styled from 'styled-components';
import Cards from '../../components/Cards/Cards';
import colors from '../../utils/color';


const HomeWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 0 5% 0 5%;

`
const CardWrapper = styled.main`
margin-top: 50px;
display: flex;
flex-flow: wrap;
justify-content: space-between;
width: 100%;
border-radius: 10px;
padding: 20px;
@media only screen and (min-width: 768px){
    background-color: ${colors.four};
    width: auto;
}
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