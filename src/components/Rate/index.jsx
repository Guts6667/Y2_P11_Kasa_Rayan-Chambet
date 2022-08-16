import React from 'react';
import styled from 'styled-components';
import '../../styles/apartment.css'
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

function Rate({rating}){
    
    parseInt(rating)
    const rate = [];

    for(let i = 0; i < rating; i ++){
        rate.push(i)
    }
    const myRate = rate.map((rate) => rate +1)
    console.log(`It's a ${rate.length} star(s) apartment`);
    let scale = [];
    if(myRate.length !== 5){
        for(let i = myRate.length; i < 5; i++ ){
            scale.push(i)
        }
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