import React, { useEffect, useState } from 'react';
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
 
    `
    const HeaderWrapper = styled.header`
    align-items: center;
    display : flex;
    justify-content : space-evenly;
    padding-bottom: 5px;
    background: linear-gradient(180deg,rgba(30,30,30,.9),rgba(30,30,30,0));
    position: fixed;
    align-items: center;
    z-index: 2;
    width: 100%;
    top: 0;
    `

function Header() {

    const [isAboutActive, setAboutActive] = useState(false);
    const [isHomeActive, setHomeActive] = useState(false);
    let location = useLocation()
    
        useEffect(() => {
            if(location.pathname === '/about'){
                setAboutActive(false)
            }
            else{
                setAboutActive(true)
            }
            if(location.pathname === '/'){
                setHomeActive(false)
            }
            else{
                setHomeActive(true)
            }
             
        }, [location.pathname])
    
    
    return(
        <HeaderWrapper>
            <img src={logo} alt= 'Logo Kasa'/>
            <nav>
                <StyledLink to = '/'>
                    {isHomeActive && (<span> Accueil </span>)}
                    {isHomeActive || (<span className='active'> Accueil </span>)}
                </StyledLink>
                <StyledLink to = '/about'>
                    {isAboutActive && (<span> A propos </span>)}
                    {isAboutActive || (<span className='active'> A propos </span>)}
                    </StyledLink>
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