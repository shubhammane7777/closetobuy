import React from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinkS,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {

    const toggleHome= ()=>{
        scroll.scrollToTop();
    }
  return (
      <>
      <Nav>
          <NavbarContainer>
              
              <NavLogo to='/' onClick={toggleHome}>CLOSE TO BUY</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars/>
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinkS to='about'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-70}>About</NavLinkS>
                  </NavItem>

                  <NavItem>
                      <NavLinkS to='contact'
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-70}>Contact</NavLinkS>
                  </NavItem>

                  <NavItem>
                      <NavLinkS to='services'
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-70}>Services</NavLinkS>
                  </NavItem>
              </NavMenu>

              <NavBtn>
                  <NavBtnLink to='/signin'>Add  Restaurants</NavBtnLink>
              </NavBtn>
              
          </NavbarContainer>
      </Nav>
      </>
  )
}

export default Navbar