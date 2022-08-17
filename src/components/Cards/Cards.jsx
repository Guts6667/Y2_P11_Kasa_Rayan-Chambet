import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ApartmentLink = styled(Link)`
display: flex;
text-decoration: none;
width: 100%;
height: 250px;
margin-bottom: 20px;

    @media only screen and (min-width: 768px){
	width: 45%;
}

@media only screen and (min-width: 1024px){
	width: 30%;
}
`


const Card = styled.article`
overflow: hidden;
border-radius: 10px;
width: 100%;

`
const CardImg = styled.img`
width: 100%;
object-fit: cover;
height: 100%;
`
const CardTitleWrapper = styled.div`
height: 25%;
display: flex;
align-items: center;
padding-left: 10px;
padding-right: 10px;
position: sticky;
bottom: 0px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`
const CardTitle = styled.span`
color: white;
font-size: 18px;
font-weight: 500;

`




function Cards() {
    
    const [datas, setDatas] = useState([]);

    
useEffect(() => {
    fetch('/datas/logements.json')
    .then((res) => res.json())
    .then((res) => {
        setDatas(res);
        console.log(res);
    })
    
}, [])

    return (

        datas.map((data => (
            <ApartmentLink to ={`/apartment/${data.id}`} key={`${data.title}-${data.id}`}>
                <Card  >
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