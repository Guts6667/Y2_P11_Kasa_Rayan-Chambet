import React from "react";
import styled from "styled-components";
import aboutImg from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import DropDownText from "../../components/Dropdown";




const AboutInfos = [
    {
        title : 'Fiabilité',
        content : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title : 'Respect',
        content : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title : 'Service',
        content : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title : 'Sécurité',
        content : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }

]

const AboutWrapper = styled.section`
display: flex;
flex-direction: column;
padding: 5%;
grid-row-gap: 50px;
margin: 50px 0;
`
const AboutImg =styled.img`
width: 100%;
height: 250px;
object-fit: cover;
border-radius: 10px;

`
const DropDownWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
grid-row-gap: 15px;
@media only screen and (min-width: 768px){
    width: 90%;
    align-self: center;
}
`
function About(){
return(
    <AboutWrapper >
        <AboutImg src={aboutImg} alt ='Paysage montagneux' />
        <DropDownWrapper>
            {AboutInfos.map((info) => (
                <DropDownText title={info.title} content = {info.content} key={`${info.title}-${AboutInfos.indexOf(info)}`} />
            ))}
        </DropDownWrapper>
    </AboutWrapper>


)
}



export default About;