import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../Component/Assets/G2EMO_LOGO_White.png';

const NavbarContainer = styled('div')({
    flexGrow: 1,
});

const NavbarLogo = styled('img')({
    height: '50px',
    marginRight: '10px',
});

const NavbarMenu = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        marginLeft: '130px',
        alignItems: 'center',
    },
}));

const NavbarMenuItem = styled(ListItem)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginleft: '10px',
        
        '&:last-child': {
            marginleft: '0',

        }
    },
}));

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavbarContainer>
            <AppBar position="static">
                <Toolbar>
                    <NavbarLogo src={Logo} alt="Logo" />

                    <NavbarMenu>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { md: 'none' } }}
                            onClick={toggleMenu}

                        >
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            anchor="left"
                            open={isMenuOpen}
                            onClose={toggleMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <List>
                                <NavbarMenuItem button>
                                    <ListItemText primary="About" />
                                </NavbarMenuItem>
                                <NavbarMenuItem button>
                                    <ListItemText primary="Technology" />
                                </NavbarMenuItem>
                                <NavbarMenuItem button>
                                    <ListItemText primary="Contact" />
                                </NavbarMenuItem>
                                <NavbarMenuItem button>
                                    <ListItemText primary="Demo" />
                                </NavbarMenuItem>
                                <NavbarMenuItem button>
                                    <ListItemText primary="Tech News" />
                                </NavbarMenuItem>
                            </List>
                        </Drawer>

                        <NavbarMenu sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <NavbarMenuItem>
                                <Typography variant="body1">About</Typography>
                            </NavbarMenuItem>
                            <NavbarMenuItem>
                                <Typography variant="body1">Technology</Typography>
                            </NavbarMenuItem>
                            <NavbarMenuItem>
                                <Typography variant="body1">Contact</Typography>
                            </NavbarMenuItem>
                            <NavbarMenuItem>
                                <Typography variant="body1">Demo</Typography>
                            </NavbarMenuItem>
                            <NavbarMenuItem>
                                <Typography variant="body1">Tech News</Typography>
                            </NavbarMenuItem>
                        </NavbarMenu>
                    </NavbarMenu>
                </Toolbar>
            </AppBar>
        </NavbarContainer>
    );
};

export default Navbar;
