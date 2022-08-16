import React from "react";
import styled from "styled-components";
import colors from "../../utils/color";
import "../../styles/apartment.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import Infos from "../../components/Infos";

const ApartmentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 100px;
  padding: 0 5% 0 5%;
  h1 {
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
  }
`;



//Importer fontawesome : Render les chevrons. puis utliser map pour créer un composant image pour chaque img
// Créer un state qui prend en compe l'index de chaque img.
// Naviguer entre les images à chaque clique
function Apartment() {
  const [apartment, setApartment] = useState(undefined);
  const apartmentId = useParams();

useEffect(() => {
    fetch('/datas/logements.json')
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        const temp = res.filter((data) => data.id === apartmentId.id)[0]
        console.log(temp);
        setApartment(temp)
        
    })
},[apartmentId])



return (
    apartment && (
      <ApartmentWrapper>
        <h1>{apartment.title}</h1>
        {apartment && (
          <Carousel pictures={apartment.pictures} title={apartment.title} />

        )}
        <Infos title = { apartment.title } location = {apartment.location} tags = {apartment.tags} host = {apartment.host} rating = {apartment.rating} description ={apartment.description}/>
      </ApartmentWrapper>
    )
  );
}
export default Apartment;
