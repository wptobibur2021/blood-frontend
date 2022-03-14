import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import TopBar from "./Topbar/TopBar";
import Sidebar from "./Sidebar/Sidebar";
import {Outlet} from "react-router-dom"
const Dashboard = () => {
    return (
        <Box>
            <TopBar></TopBar>
            <Box sx={{py: 6}}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Sidebar></Sidebar>
                        <Outlet />
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Dashboard;