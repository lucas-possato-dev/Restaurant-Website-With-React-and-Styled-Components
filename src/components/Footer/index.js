import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin, 
  FaTwitter,
} from 'react-icons/fa'

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

function handleClick(event) {
  event.preventDefault();
}

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink onClick={handleClick} href="/" target="blank" aria-label="Facebook" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink onClick={handleClick} href="/" target="blank" aria-label="Instagram" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink onClick={handleClick} href="/" target="blank" aria-label="Youtube" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink onClick={handleClick} href="/" target="blank" aria-label="Twitter" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink onClick={handleClick} href="/" target="blank" aria-label="Linkedin" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer