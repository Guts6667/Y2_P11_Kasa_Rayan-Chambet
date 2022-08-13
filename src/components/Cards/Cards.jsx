import React from 'react';
// import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/color';
import datas from '../../datas/logements.json'
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const ApartmentLink = styled(Link)`
display: flex;
text-decoration: none;
width: 100%;
height: 250px;
margin-bottom: 20px;
`

const Card = styled.article`
background-color: ${colors.primary};
overflow: hidden;
border-radius: 10px;
width: 100%;
=======


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
>>>>>>> main

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
<<<<<<< HEAD
padding-right: 10px;
=======
>>>>>>> main
`
const CardTitle = styled.span`
color: white;
font-size: 18px;
font-weight: 500;
<<<<<<< HEAD
=======

`
>>>>>>> main

`

const storeId = (e) => {
    console.log(e.currentTarget)
    
}

<<<<<<< HEAD
=======
function Cards() {
>>>>>>> main

function Cards() {
    
    return (

        datas.map((data => (
<<<<<<< HEAD
            <ApartmentLink to = '/apartment' state={data.id} key={`${data.title}-${data.id}`}>
                <Card  onClick = {storeId} >
                    <CardImg src={data.cover} alt = {data.title} />
                    <CardTitleWrapper>
                        <CardTitle>{data.title}</CardTitle>
                    </CardTitleWrapper>
                </Card>
            </ApartmentLink>
=======
            <Card  key={`${data.title}-${data.id}`} >
                <CardImg src={data.cover} alt = {data.title} />
                <CardTitleWrapper>
                <CardTitle>{data.title}</CardTitle>
                </CardTitleWrapper>
            </Card>
>>>>>>> main
        )))
        )
}



export default Cards;