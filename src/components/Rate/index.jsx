import React from 'react';
import styled from 'styled-components';
import '../../styles/apartment.css'
import { useLocation } from 'react-router';
import datas from '../../datas/logements.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import colors from '../../utils/color';


const HostRate = styled.div`
display: flex;

.redStar{
color: ${colors.primary};
}
.greyStar{
    color: ${colors.tertiary};
}
`

function Rate(){
    const locationObject = useLocation()
    const myApartment = datas.filter(data => data.id === locationObject.state)
    const {rating} = myApartment[0];
    parseInt(rating)
    const rate = [];

    for(let i = 0; i < rating; i ++){
        rate.push(i)
    }
    const myRate = rate.map((rate) => rate +1)
    console.log(myRate.length);
    let scale = [];
    if(myRate.length !== 5){
        for(let i = myRate.length; i < 5; i++ ){
            scale.push(i)
        }
        console.log(scale);
    }
    else{
        console.log("You found a 5 stars apartment!");
    }
    
    
    return(

        <HostRate>
           {myRate.map((rate) => (
            <FontAwesomeIcon icon={faStar} size={'1x'} className="redStar" key={`${rate}-${myRate.indexOf(rate)}`} />
           ))
           }
           {scale.map((greyStar) => (
            <FontAwesomeIcon icon={faStar} size={'1x'} className="greyStar" key={`${greyStar}-${scale.indexOf(greyStar)}`} />
           ))}
          
            
           
        </HostRate>
    )
}

export default Rate;