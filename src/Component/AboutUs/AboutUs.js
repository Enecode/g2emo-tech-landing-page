import React from 'react';
import { styled } from '@mui/system';
import { Typography, Paper } from '@mui/material';
import MissionImage from '../../Component/Assets/mission.png';
import VisionImage from '../../Component/Assets/vision.png';
import ValuesImage from '../../Component/Assets/VALUES.png';

// Styled components
const AboutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
});

const AboutSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px 0',
});

const AboutImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '10px',
});

// const AboutTitle = styled('h2')({
//   margin: '10px 0',
// });

const AboutDescription = styled('p')({
  textAlign: 'center',
});

function About() {
  return (
    <AboutContainer>
      {/* Mission Section */}
      <AboutSection>
        <AboutImage src={MissionImage} alt="Mission" />
        <Paper elevation={3} sx={{ padding: '15px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>
            Mission
          </Typography>
          <AboutDescription>
            <Typography variant="body1">
              Creating advanced tech for user comfort, effectiveness, and efficiency, fulfilling our vision through innovative solutions.
            </Typography>
          </AboutDescription>
        </Paper>
      </AboutSection>

      {/* Vision Section */}
      <AboutSection>
        <AboutImage src={VisionImage} alt="Vision" />
        <Paper elevation={3} sx={{ padding: '15px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>
            Vision
          </Typography>
          <AboutDescription>
            <Typography variant="body1">
              To create a connected future by providing innovative solutions through technology.
            </Typography>
          </AboutDescription>
        </Paper>
      </AboutSection>

      {/* Values Section */}
      <AboutSection>
        <AboutImage src={ValuesImage} alt="Values" />
        <Paper elevation={3} sx={{ padding: '15px', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>
            Values
          </Typography>
          <AboutDescription>
            <Typography variant="body1">
              Teamwork, Innovation, Ease of Use, and Integrity (T.I.E).
            </Typography>
          </AboutDescription>
        </Paper>
      </AboutSection>
    </AboutContainer>
  );
}

export default About;
