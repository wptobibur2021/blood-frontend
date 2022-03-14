import React from 'react';
import {Box} from "@mui/material";
import Slider from "../../Components/Frontend/Header/Slider";
import PageLayout from "../../Components/Frontend/PageLayout/PageLayout";
import Donors from "../../Components/Frontend/Donors/Donors";

const Home = () => {
    return (
        <PageLayout>
            <Box>
                <Slider></Slider>
                <Donors></Donors>
            </Box>
        </PageLayout>
    );
};

export default Home;