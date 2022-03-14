import * as React from 'react';
import {AppBar,Divider, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import {PowerSettingsNew,AccountCircle} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'
import useNotification from "../../../Hooks/useNotification";
import {useNavigate} from "react-router-dom";
const pages = ['Products', 'Pricing', 'Blog'];
const TopBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate()
    const {successNotify} = useNotification()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logOut = () =>{
        localStorage.removeItem("user");
        navigate('/')
        successNotify('User Logout Successfully')
        window.location.reload()
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        EFD Blood Bank
                    </Typography>

                    {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>*/}
                    {/*    <IconButton*/}
                    {/*        size="large"*/}
                    {/*        aria-label="account of current user"*/}
                    {/*        aria-controls="menu-appbar"*/}
                    {/*        aria-haspopup="true"*/}
                    {/*        onClick={handleOpenNavMenu}*/}
                    {/*        color="inherit"*/}
                    {/*    >*/}
                    {/*        <MenuIcon />*/}
                    {/*    </IconButton>*/}
                    {/*    <Menu*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElNav}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'bottom',*/}
                    {/*            horizontal: 'left',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'left',*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElNav)}*/}
                    {/*        onClose={handleCloseNavMenu}*/}
                    {/*        sx={{*/}
                    {/*            display: { xs: 'block', md: 'none' },*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {pages.map((page) => (*/}
                    {/*            <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                    {/*                <Typography textAlign="center">{page}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                    <Box sx={{ flexGrow: 1}}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            EFD Blood Bank
                        </Typography>
                    </Box>

                    {/*<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>*/}
                    {/*    {pages.map((page) => (*/}
                    {/*        <Button*/}
                    {/*            key={page}*/}
                    {/*            onClick={handleCloseNavMenu}*/}
                    {/*            sx={{ my: 2, color: 'white', display: 'block' }}*/}
                    {/*        >*/}
                    {/*            {page}*/}
                    {/*        </Button>*/}
                    {/*    ))}*/}
                    {/*</Box>*/}

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="TOBIBUR ROHMAN" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem>
                                <Typography sx={{ textAlign:"center", display: 'flex', alignItems: 'center' }}>
                                    <AccountCircle sx={{fontSize: '22px', mr: 1}} />Profile
                                </Typography>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                               <Typography onClick={logOut} sx={{ color: "#f00143", textAlign:"center", display: 'flex', alignItems: 'center' }}>
                                   <PowerSettingsNew sx={{fontSize: '22px', mr: 1}} />Logout
                               </Typography>
                            </MenuItem>
                            {/*{settings.map((setting) => (*/}
                            {/*    <MenuItem key={setting} onClick={handleCloseNavMenu}>*/}
                            {/*        <Typography textAlign="center">{setting}</Typography>*/}
                            {/*    </MenuItem>*/}
                            {/*))}*/}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default TopBar;