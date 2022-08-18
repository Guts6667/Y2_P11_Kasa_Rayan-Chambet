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
  margin-top: 25px;
  margin-bottom: 50px;
  padding: 0 5% 0 5%;
  h1 {
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
  }
`;

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
        {apartment && (
          <Carousel pictures={apartment.pictures} title={apartment.title} />

        )}
        <Infos title = { apartment.title } location = {apartment.location} tags = {apartment.tags} host = {apartment.host} rating = {apartment.rating} description ={apartment.description} equipments = {apartment.equipments}/>
      </ApartmentWrapper>
    )
  );
}
export default Apartment;
