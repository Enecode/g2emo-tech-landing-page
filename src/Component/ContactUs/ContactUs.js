import React from 'react';
import { styled } from '@mui/system';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Styled components
const ContactUsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '20px',
  flexDirection: 'column',
  textAlign: 'center',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
});

const ContactForm = styled('div')({
  width: '100%',
  '@media (min-width: 768px)': {
    width: '50%',
  },
});

const FormTitle = styled('h2')({
  marginBottom: '20px',
});

const FormGroup = styled('div')({
  marginBottom: '20px',
});

const FormLabel = styled('label')({
  display: 'block',
  marginBottom: '5px',
});

const FormInput = styled('input')({
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #ccc',
});

const FormTextarea = styled('textarea')({
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #ccc',
});

const SubmitButton = styled('button')({
  backgroundColor: '#4CAF50',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
});

const ContactInfo = styled('div')({
  width: '100%',
  '@media (min-width: 768px)': {
    width: '50%',
  },
});

const InfoGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
});

const InfoIcon = styled('div')({
  marginRight: '10px',
});

const InfoText = styled('div')({
  textAlign: 'left',
});

const InfoTitle = styled('h4')({
  margin: '0 0 5px',
});

const InfoLink = styled('a')({
  color: '#333',
  textDecoration: 'none',
});

const SocialMedia = styled('div')({
  textAlign: 'center',
});

const SocialTitle = styled('h4')({
  marginBottom: '10px',
});

const SocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const SocialIcon = styled('a')({
  color: '#333',
  margin: '0 10px',
  fontSize: '24px',
  textDecoration: 'none',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#4CAF50',
  },
});

// Main ContactUs component
function ContactUs() {
  return (
    <ContactUsContainer>
      {/* Contact Form */}
      <ContactForm>
        <FormTitle>Contact Us</FormTitle>
        <form>
          <FormGroup>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput type="text" id="name" name="name" required />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="phone">Phone:</FormLabel>
            <FormInput type="tel" id="phone" name="phone" required />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput type="email" id="email" name="email" required />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Message:</FormLabel>
            <FormTextarea id="message" name="message" rows="4" required />
          </FormGroup>

          <SubmitButton type="submit">Send</SubmitButton>
        </form>
      </ContactForm>

      {/* Contact Information */}
      <ContactInfo>
        <InfoGroup>
          <InfoIcon><FaPhone /></InfoIcon>
          <InfoText>
            <InfoTitle>Phone</InfoTitle>
            <InfoLink href="tel:123-456-7890">(123) 456-7890</InfoLink>
          </InfoText>
        </InfoGroup>

        <InfoGroup>
          <InfoIcon><FaEnvelope /></InfoIcon>
          <InfoText>
            <InfoTitle>Email</InfoTitle>
            <InfoLink href="mailto:info@example.com">info@example.com</InfoLink>
          </InfoText>
        </InfoGroup>

        <InfoGroup>
          <InfoIcon><FaMapMarkerAlt /></InfoIcon>
          <InfoText>
            <InfoTitle>Address</InfoTitle>
            <p className="info-link">123 Main St, Cityville, Country</p>
          </InfoText>
        </InfoGroup>

        <SocialMedia>
          <SocialTitle>Follow Us</SocialTitle>
          <SocialIcons>
            <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIcon>
            <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" alt="LinkedIn"><FaLinkedin /></SocialIcon>
          </SocialIcons>
        </SocialMedia>
      </ContactInfo>
    </ContactUsContainer>
  );
}

export default ContactUs;