import React from 'react';
// import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/color';



const Card = styled.article`
background-color: ${colors.primary};
border-radius: 10px;
width: 100%;
height: 250px;
margin-bottom: 20px;

`
const CardImg = styled.img`
width: 100%;
object-fit: cover;
`
const CardTitle = styled.span`
color: white;
font-size: 18px;
font-weight: 500;
`



function Cards(img, alt, title) {

    return (
           <Card >
            <CardImg src={img} alt={alt} />
                <CardTitle>${title}</CardTitle>
           </Card>

    )
}



export default Cards;