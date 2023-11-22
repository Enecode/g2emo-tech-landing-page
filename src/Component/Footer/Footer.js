import React from 'react';
import { styled } from '@mui/system';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../Component/Assets/G2EMO_LOGO_White.png';

const FooterContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '20px',
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
});

const FooterSection = styled('div')({
  margin: '20px 0',
  width: '100%',
  '@media (min-width: 768px)': {
    width: '33%',
  },
});

const FooterLogo = styled('div')({
  marginBottom: '20px',
  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },
});

const FooterDescription = styled('p')({
  fontSize: '14px',
});

const SocialIconsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  '& a': {
    color: '#fff',
    margin: '0 10px',
    fontSize: '24px',
    textDecoration: 'none',
    transition: 'color 0.3s',
    '&:hover': {
      color: '#4CAF50',
    },
  },
});

const FooterLinks = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '& a': {
    color: '#fff',
    textDecoration: 'none',
    margin: '5px 0',
  },
});

// Main Footer component
const Footer = () => {
  return (
    <FooterContainer>
      {/* Logo and Description */}
      <FooterSection>
        <FooterLogo>
          <img src={Logo} alt="Logo" />
        </FooterLogo>
        <FooterDescription>
          G2EMO Technologies was founded by a group of like-minded and experienced experts in the technology space who wanted to develop solutions that help make life easier. As we grew, we recruited some of the brightest minds to help create the well-oiled engine we have today.
        </FooterDescription>
      </FooterSection>

      {/* Social Icons */}
      <FooterSection>
        <SocialIconsContainer>
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </SocialIconsContainer>
      </FooterSection>

      {/* Footer Links */}
      <FooterSection>
        <FooterLinks>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </FooterLinks>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
