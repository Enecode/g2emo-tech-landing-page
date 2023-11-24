import React from 'react';
import { styled } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import bg from '../../Component/Assets/bg.png';

const HeroContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: theme.spacing(10),

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        height: '130vh',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        height: '130vh',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        Color: 'red',
        
    }
}));

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common,
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
        textAlign: 'left',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(10),
        marginRight: theme.spacing(14),
    }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'left',
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
        textAlign: 'left',
        marginRight: theme.spacing(7),
        width: '60%',
    }
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#ffc000',
    padding: theme.spacing(1, 4),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'left',  
    marginRight: theme.spacing(36),

    [theme.breakpoints.down('md')]: {
        
        textAlign: 'left',
        marginRight: theme.spacing(26),
    },

    [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
        marginRight: theme.spacing(19),
        
    },

    [theme.breakpoints.down('xs')]: {
        textAlign: 'left',
        marginRight: theme.spacing(19),
    },

    

}));


function HeroPage() {
    return (
        <HeroContainer>
            <Title variant="h1" sx={{ 
                textAlign: 'left',   
                width: '50%',
                color: '#FFC000',
                fontfamily: 'Inter',
                fontsize: '56px',
                fontstyle: 'normal',
                fontweight: '700',
                lineheight: '70px',
                }}>CREATING A CONNECTED FUTURE THROUGH TECH</Title>
            <Subtitle variant="h2" sx={{
                textAlign: 'left',
                width: '50%',
                color: 'white',
                fontfamily: 'Inter',    
                fontsize: '24px',
                fontstyle: 'normal',
                fontweight: '400',
                lineheight: '32px',
            }}
            
            >Empowering Tomorrow, Today: Building a Tech-Driven Connected Future</Subtitle>
            <GetStartedButton variant="contained">Request Demo</GetStartedButton>
        </HeroContainer>
    );
}

export default HeroPage;
