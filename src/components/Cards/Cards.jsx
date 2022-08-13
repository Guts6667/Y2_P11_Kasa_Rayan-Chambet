import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/color';
import datas from '../../datas/logements.json'
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
padding-right: 10px;
`
const CardTitle = styled.span`
color: white;
font-size: 18px;
font-weight: 500;

`

const storeId = (e) => {
    console.log(e.currentTarget)
    
}


function Cards() {
    

    return (

        datas.map((data => (
            <ApartmentLink to ='/apartment' state={data.id} key={`${data.title}-${data.id}`}>
                <Card  onClick = {storeId} >
                    <CardImg src={data.cover} alt = {data.title} />
                    <CardTitleWrapper>
                        <CardTitle>{data.title}</CardTitle>
                    </CardTitleWrapper>
                </Card>
            </ApartmentLink>
        )))
        )
}



export default Cards;