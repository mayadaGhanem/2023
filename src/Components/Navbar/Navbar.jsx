
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppBar, Button, Container, Drawer, Link, MenuItem, Select, useTheme } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';

export function Navbar() {
    const [scrollY, setScrollY] = React.useState(0);
    const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
    const theme = useTheme();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const background = scrollY > theme.breakpoints.values.xs
        ? "rgba(249, 250, 253, 0.047)"
        : "transparent";

    const backdropFilter = scrollY > theme.breakpoints.values.xs
        ? "blur(4px)"
        : "none";
    const handleOpen = () => {
        setOpenMobileMenu(!openMobileMenu)
    }
    const NavbarShared = () => {
        return <Box display={'flex'} sx={{ py: 2, justifyContent: 'space-between', }}>
            <Box
                component={Link}
                to={'/'}
            >
                <Box component={() => <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt={'logo'} />} />
            </Box>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { sm:'block',md: 'none' } }}
                onClick={handleOpen}


            >
                <MenuIcon color={'primary'} />
            </IconButton>
        </Box>
    }

    return (
        <AppBar
            position={'fixed'}
            elevation={0}
            sx={{ backgroundColor: background, backdropFilter: backdropFilter }}
        >
            <Container sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box display={'flex'} justifyContent={'space-between'} width={1} sx={{ alignItems: 'center' }} paddingY={2.5}>
                    <NavbarShared />
                    <MainNavbar />
                    <Setting />
                </Box>
            </Container>
            <Toolbar sx={{ display: { xs: 'block', md: 'none' } }}>

                <NavbarShared />

                {openMobileMenu && <Drawer
                    open={openMobileMenu}
                    anchor='top'
                    onClose={handleOpen}
                >
                    <NavbarShared />
                    <MainNavbar />
                    <Setting />
                </Drawer>}
            </Toolbar>
        </AppBar>
    );
}
const MainNavbar = () => {
    const navbarList = [{ name: "Home", to: "/" }, { name: "About us", to: "/about" }, { name: "News", to: "/news" }, { name: "Contact us", to: "contact" }];
    return <Box display={'flex'} sx={{ alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }} gap={'2rem'}>
        {navbarList.map(({ to, name }, index) =>
            <Link
                key={index}
                underline={'none'}
                to={to}
                sx={{ cursor: 'pointer' }}
                color={'#212832'}

            >
                <Typography >{name}</Typography>
            </Link>)}
    </Box>
}

const Setting = () => {
    return <Box paddingLeft={{ md: 3, xs: 0 }} display={'flex'} sx={{ alignItems: 'center', flexDirection: { xs: 'column', md: 'row' },paddingTop:{xs:4,md:0} }} gap={'2rem'}>
        <Box>
            <Link
                to={'/'}
                sx={{ cursor: 'pointer', display: "flex" }}
                color={'#212832'}
                underline='none'
            >

                <Typography >Login</Typography>
            </Link>
        </Box>

        <Box>
            <Button variant={'outlined'} sx={{ color: '#212832' }}
            >Sign up</Button>
        </Box>

        <Box>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={'en'}
                label="Age"
                sx={{
                    '.MuiSelect-select.MuiSelect-outlined': {
                        paddingY: '9px !important',
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                }}            >
                <MenuItem value={'en'} >EN</MenuItem>
                <MenuItem value={'ar'}>AR</MenuItem>
            </Select>

        </Box>

    </Box>
}