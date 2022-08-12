import React from 'react';
// import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/color';
import datas from '../../datas/logements.json'


const Card = styled.article`
background-color: ${colors.primary};
display: flex;
flex-direction: column;
overflow: hidden;
border-radius: 10px;
width: 100%;
height: 250px;
margin-bottom: 20px;
cursor: pointer;

`
const CardImg = styled.img`
width: 100%;
object-fit: cover;
height: 75%;
`
const CardTitleWrapper = styled.div`
height: 25%;
display: flex;
align-items: center;
padding-left: 10px;
`
const CardTitle = styled.span`
color: white;
font-size: 18px;
font-weight: 500;

`



function Cards() {

    return (

        datas.map((data => (
            <Card  key={`${data.title}-${data.id}`} >
                <CardImg src={data.cover} alt = {data.title} />
                <CardTitleWrapper>
                <CardTitle>{data.title}</CardTitle>
                </CardTitleWrapper>
            </Card>
        )))
        )
}



export default Cards;