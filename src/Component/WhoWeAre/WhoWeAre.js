import React from 'react';
import { styled } from '@mui/system';
import { Typography, Paper } from '@mui/material';
import Image1 from '../../Component/Assets/smart-cities.jpg';
import Image2 from '../../Component/Assets/athena.jpg';

// Styled components
const WhoWeAreContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#ffffff',
});

const WhoWeAreSection = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0',
});

const WhoWeAreContent = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'left',
  textAlign: 'left',
  marginLeft: '16%',
});

const WhoWeAreImage = styled('img')({
  maxWidth: '30%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '10px',
  marginRight: '50px',
});

const WhoWeAreDescription = styled('div')({
  maxWidth: '400px',
  marginLeft: '50px'
});

// Main WhoWeAre component
const WhoWeAre = () => {
  return (
    <WhoWeAreContainer>
      {/* Section 1 */}
      <WhoWeAreSection>
        <WhoWeAreContent >
          <WhoWeAreImage sx={{ width: '50%' }} src={Image1} alt="Image 1" />
          <Paper elevation={3} sx={{ backgroundColor: '#ffc000', padding: '15px', borderRadius: '8px' }}>
            <Typography sx={{ textAlign: 'center' }} variant="h6" gutterBottom>
              Our Story
            </Typography>
            <WhoWeAreDescription>
              <Typography variant="body1">
                G2EMO TECHNOLOGIES: A pioneering tech firm, simplifying lives through innovative solutions in asset management and monitoring.
              </Typography>
            </WhoWeAreDescription>
          </Paper>
        </WhoWeAreContent>
      </WhoWeAreSection>

      {/* Section 2 */}
      <WhoWeAreSection>
        <WhoWeAreContent>
          
          <Paper sx={{ marginRight: '50px', backgroundColor: '#ffc000', padding: '15px', borderRadius: '8px' }}>
            <Typography sx={{ textAlign: 'center',  }} variant="h6" gutterBottom>
              Our Values
            </Typography>
            <WhoWeAreDescription>
              <Typography variant="body1">
                Our expertise empowers global industries with adaptable, secure, and top-tier tech, ensuring operational excellence and user-centric advancements. Join us in shaping tomorrow's intelligent business operations.
              </Typography>
            </WhoWeAreDescription>
          </Paper>
          <WhoWeAreImage sx={{ width: '50%' }} src={Image2} alt="Image 2" />
        </WhoWeAreContent>
      </WhoWeAreSection>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;
