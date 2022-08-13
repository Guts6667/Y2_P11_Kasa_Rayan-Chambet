import React from 'react';
import styled from 'styled-components';
import datas from '../../datas/logements.json'
import colors from '../../utils/color';
import '../../styles/apartment.css'
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";


const ApartmentWrapper = styled.main`
display: flex;
flex-direction: column;
margin-top: 50px;
h1{
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
}
span{
    color: ${colors.primary};
    font-weight: 500;
    font-size: 14px;
}
`
const ApartmentCarousel = styled.div`
width: 100%;
height: 200px;
display: flex;
justify-content: center;

.chevron{
    align-self: center;
    z-index: 2;
    cursor: pointer;
    position: absolute;
    color: white;
}

.chevron-left{
    left: 7%;

}
.chevron-right{
    right: 7%;
}


`
const ApartmentImg = styled.img`
width: 100%;
object-fit: cover;
border-radius: 10px;
z-index: 0;
`
const TagWrapper = styled.div`
display: flex;
flex-flow: wrap;
grid-column-gap: 5px;
`
const Tag = styled.div`
background-color: ${colors.primary};
color: white;
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
`
const InfoHostWrapper = styled.div`
display: flex;
justify-content: space-between;
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
const HostRate = styled.div`
display: flex;
`
const InfoHost = styled.div`
display: flex;
align-items: center;
width: 40%;

`
const GreyStar = styled(FontAwesomeIcon)`
color: ${colors.secondary};
`
const RedStar = styled(FontAwesomeIcon)`
color: ${colors.primary};
`



//Importer fontawesome : Render les chevrons. puis utliser map pour créer un composant image pour chaque img
// Créer un state qui prend en compe l'index de chaque img.
// Naviguer entre les images à chaque clique
function Apartment(){
    const locationObject = useLocation()
    const myApartment = datas.filter(data => data.id === locationObject.state)
    console.log(myApartment);
    const {id, title, cover, location, tags, host, rating} = myApartment[0];
    console.log(id);
    const [myPictures] = myApartment[0].pictures;
    console.log(myPictures);
    const apartmentRating = ({rating}, myRate) =>{
        const rate = 5;
        parseInt(rating)
        myRate = rate - rating;
        return(
            
            <GreyStar icon= {faStar} size={'2x'}  /> * myRate +
            <RedStar icon= {faStar} size={'2x'} /> * rate
        )

    }
    apartmentRating({rating})
    

    return(
        <ApartmentWrapper key={`${title}-${id}`}>
            <ApartmentCarousel>
            <FontAwesomeIcon icon= {faChevronLeft} size={'2x'} className='chevron-left chevron' />
                <ApartmentImg src= {cover} alt={title}/>
                <FontAwesomeIcon icon= {faChevronRight} size={'2x'} className='chevron-right chevron' />
            </ApartmentCarousel>
            <InfoWrapper>
                <h1>{title}</h1>
                <span>{location}</span>
                <TagWrapper>
                    {tags.map((tag => (
                        <Tag key={`${tag}-${tag.index}`}>
                            <span>{tag}</span>
                        </Tag>
                    )))}
                </TagWrapper>
                <InfoHostWrapper>
                    <HostRate>
                        {apartmentRating({rating}, )}
                    </HostRate>
                    <InfoHost>
                        <HostName>{host.name}</HostName>
                        <HostPicture src={host.picture}/>
                    </InfoHost>

                </InfoHostWrapper>
            </InfoWrapper>
        </ApartmentWrapper>
    )
}
export default Apartment;