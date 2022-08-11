import React from 'react';
// import { PropTypes } from 'prop-types';
import Hero from '../../components/Hero';
import styled from 'styled-components';

const HomeWrapper = styled.div`
display: flex;
justify-content: center;
`

function Home(){
    return(
        <HomeWrapper>
            <Hero />
        </HomeWrapper>
    )
}
export default Home;