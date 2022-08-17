import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import logo from '../../assets/LOGO.png'
import { Link, useLocation,} from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/color'

const StyledLink = styled(Link)`
    padding: 15px;
    color: ${colors.primary};
    font-size: 12px;
    text-decoration: none;
    .active{
        text-decoration: underline;
    }

    @media only screen and (min-width: 768px){
	font-size: 24px;
}
    
    /* ${({ active }) => active && `
    text-decoration: underline;
  `} */
  
    `
    const HeaderWrapper = styled.header`
    align-items: center;
    display : flex;
    justify-content : space-between;
    `

function Header() {
    let location = useLocation()
    useEffect(() => {
        let nav = document.querySelector('nav');
        let about = nav.lastElementChild.firstChild;
        let home = nav.firstElementChild.lastChild;
        if(location.pathname.includes('about')){
            about.classList.add('active')
            home.classList.remove('active')
        }
        else if( !location.pathname.includes('about') && location.pathname !== '/'){
            about.classList.remove('active');
            home.classList.remove('active')
        }
         else{
            about.classList.remove('active')
            home.classList.add('active')
        }
    },[location.pathname] )
    
    return(
        <HeaderWrapper>
            <img src={logo} alt= 'Logo Kasa'/>
            <nav>
                <StyledLink to = '/' ><span>Accueil</span></StyledLink>
                <StyledLink to = '/about'><span>A propos</span></StyledLink>
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