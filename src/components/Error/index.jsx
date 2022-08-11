import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/color"

const ErrorWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
color: ${colors.primary};
 h1{
  font-weight: 700;
  font-size: 96px;
 }
 h2{
  font-size: 18px;
 }
 margin-top: 50px;
`
const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.primary};
    font-size: 12px;
    ${({ active }) => active && `
    text-decoration: underline;
  `}`

function Error() {
  
    return (
      <ErrorWrapper>
        <h1>404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas</h2>
        <StyledLink to={'/'}>Retourner sur la page d'accueil</StyledLink>
      </ErrorWrapper>
      
    )
  }
  
  export default Error