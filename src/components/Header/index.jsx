import React from 'react';
import { PropTypes } from 'prop-types';
import logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/color'

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.primary};
    font-size: 12px;
    text-decoration: none;
    
    ${({ active }) => active && `
    text-decoration: underline;
  `}
    `
    const HeaderWrapper = styled.header`
    align-items: center;
    display : flex;
    justify-content : space-between;
    `

function Header() {
    
    return(
        <HeaderWrapper>
            <img src={logo} alt= 'Logo Kasa'/>
            <nav>
                <StyledLink to = '/'>Accueil</StyledLink>
                <StyledLink to = '/about'>A propos</StyledLink>
            </nav>
        </HeaderWrapper>
    )
}
Header.propTypes = {
logo : PropTypes.string,
alt : PropTypes.string
}
Header.defaultProps = {
logo : logo,
alt : ''

}
export default Header;