import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/color';
import '../../styles/apartment.css'
import Rate from '../Rate';
import Equipments from '../Equipments';
import DropDownText from '../Description';





const TagWrapper = styled.div`
display: flex;
flex-flow: wrap;
grid-column-gap: 5px;


`
const Tag = styled.div`
background-color: ${colors.primary};
color: white !important;
padding: 5px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
width: 25%;

span{
    font-weight: 500;
    font-size: 10px;
    text-align: center;
    color: white;
}
`
const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0 10px 0;
grid-row-gap: 10px;
h1{
    margin-bottom: 5px;
}
.location{
    color: ${colors.primary};
}
.tag{
    color: white;
}

`
const InfoHostWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media only screen and (min-width: 768px){
    flex-direction: column-reverse;
    align-items: flex-end;
    grid-row-gap: 10px;
} 

`

const HostPicture = styled.img`
border-radius: 50%;
object-fit: cover;
width: 20%;
align-self: flex-end;

`
const HostName = styled.div`
color: ${colors.primary};
text-align: end;
margin-right: 10px;
`

const InfoHost = styled.div`
display: flex;
align-items: center;
justify-content: end;


`
const ApartmentInfos = styled.div`
display : flex;
flex-direction: column;
grid-row-gap: 10px;
@media only screen and (min-width: 768px){
	flex-direction: row;
    justify-content: space-between;
    grid-column-gap: 10px;
    > *{
        width: 50%;
    }
   
}

`


function Infos({title, host, tags, location, rating, description , equipments}){

    console.log({title, host, tags, location, description, equipments});
    


    
    return(
            <InfoWrapper>
                <h1>{title}</h1>
                <span className='location'>{location}</span>
                <TagWrapper>
                    {tags.map((tag => (
                        <Tag key={`${tag}-${tags.indexOf(tag)}`} className='tag'>
                            <span>{tag}</span>
                        </Tag>
                    )))}
                </TagWrapper>
                <InfoHostWrapper>
                    <Rate rating = {rating} />
                    <InfoHost>
                        <HostName>{host.name}</HostName>
                        <HostPicture src={host.picture}/>
                    </InfoHost>
                </InfoHostWrapper>
                <ApartmentInfos>
                    <DropDownText title = {'Description'} content = {description} />
                    <Equipments title = {'Equipments'} equipments={equipments} />
                </ApartmentInfos>
                
            </InfoWrapper>
    )
}
export default Infos;