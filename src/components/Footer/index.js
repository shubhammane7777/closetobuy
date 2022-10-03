import React from "react";
import { animateScroll as scroll} from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink

} from "./FooterElements";
import {FaFacebook,FaInstagram,FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    const toggleHome= ()=>{
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Term of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destination</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Partner with us</FooterLinkTitle>
              <FooterLink to="/signin">For Restaurants</FooterLink>
              <FooterLink to="/signin">For Driver</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">LinkedIn</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>CLOSE TO BUY</SocialLogo>
            <WebsiteRights>CLOSE TO BUY © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_balnk' area-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='/' target='_balnk' area-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href='/' target='_balnk' area-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href='/' target='_balnk' area-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
