import React from 'react';
import { styled } from '@mui/system';
import { Typography, Paper } from '@mui/material';
import MissionImage from '../../Component/Assets/mission.png';
import VisionImage from '../../Component/Assets/vision.png';
import ValuesImage from '../../Component/Assets/VALUES.png';

const AboutContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
  display: 'flex',
  alignItems: 'center',
  padding: '40px',
  backgroundColor: 'black',
  height: '100%',
  },

}));
  


const AboutSection = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    // display: 'flex',
    alignItems: 'center',
    // marginRight: '60px',
    // backgroundColor: 'red',
    width: '50%',
  },

  [theme.breakpoints.up('sm')]: {
    // backgroundColor: 'red',
    width: '90%',
    // backgroundColor: 'red',

  }

}));



const AboutImage = styled('img')({
  maxWidth: '20%',
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '10px',
});

const AboutDescription = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
  width: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    // backgroundColor: 'red',
    width: '60%',
  }
}));

function About() {
  return (
    <AboutContainer >
      {/* Mission Section */}
     

      {/* Vision Section */}
      <AboutSection  sx={{ padding: '10px',  width: '100%'  }}>
        <AboutImage src={VisionImage} alt="Vision" />
        <Paper elevation={3} sx={{ 
          padding: '15px', 
          borderRadius: '8px',
          }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#ffc000', fontSize: '26px', fontFamily: 'sans-serif' }} >
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
      <AboutSection sx={{ padding: '10px', width: '100%' }}>
        <AboutImage src={ValuesImage} alt="Values" />
        <Paper elevation={3} 
        sx={{ 
          padding: '15px', 
          width: '92%', 
          borderRadius: '8px',
          }}>
        
          <Typography variant="h6" gutterBottom sx={{ color: '#ffc000',  fontSize: '26px', fontFamily: 'sans-serif' }}>
            Values
          </Typography>
          <AboutDescription>
            <Typography variant="body1">
              Teamwork, Innovation, Ease of Use, and Integrity (T.I.E).
            </Typography>
          </AboutDescription>
        </Paper>
      </AboutSection>

      <AboutSection sx={{  padding: '10px', width: '100%'  }}>
        <AboutImage src={MissionImage} alt="Mission" />
        <Paper elevation={3} sx={{ 
          padding: '15px', 
          borderRadius: '8px',
          

          }}>
          <Typography  variant="h6" gutterBottom sx={{ color: '#ffc000',  fontSize: '26px', fontFamily: 'sans-serif' }}>
            Mission
          </Typography>
          <AboutDescription>
            <Typography variant="body1">
              Creating advanced tech for user comfort, effectiveness, and efficiency, fulfilling our vision through innovative solutions.
            </Typography>
          </AboutDescription>
        </Paper>
      </AboutSection>
    </AboutContainer>
  );
}

export default About;
