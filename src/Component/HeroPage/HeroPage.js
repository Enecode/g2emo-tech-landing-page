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
}));

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.common,
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'left',
    marginBottom: theme.spacing(4),
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.common.white,
    backgroundColor: theme.palette.primary,
    padding: theme.spacing(1, 4),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'left',
}));

function HeroPage() {
    return (
        <HeroContainer>
            <Title variant="h1">CREATING A CONNECTED FUTURE THROUGH TECH</Title>
            <Subtitle variant="h2">Empowering Tomorrow, Today: Building a Tech-Driven Connected Future</Subtitle>
            <GetStartedButton variant="contained">Request Demo</GetStartedButton>
        </HeroContainer>
    );
}

export default HeroPage;
