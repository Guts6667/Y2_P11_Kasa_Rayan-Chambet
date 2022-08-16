import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/color';
import '../../styles/apartment.css'
import Rate from '../Rate';
import Description from '../Description';





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
width: 20%;

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
grid-row-gap: 5px;
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
`

const HostPicture = styled.img`
border-radius: 50%;
object-fit: cover;
width: 35%;
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
width: 40%;

`
const ApartmentInfos = styled.div`
display : flex;
flex-direction: column;

`

//Importer fontawesome : Render les chevrons. puis utliser map pour créer un composant image pour chaque img
// Créer un state qui prend en compe l'index de chaque img.
// Naviguer entre les images à chaque clique
function Infos({title, host, tags, location, rating, description}){

    console.log({title, host, tags, location, description});
    


    
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
                    <Description description = {description} />
                </ApartmentInfos>
            </InfoWrapper>
    )
}
export default Infos;