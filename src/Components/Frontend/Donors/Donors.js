import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import axios from "axios";
import Single from "./Single";

const Donors = () => {
    const [donors, setDonors] = useState([])
    useEffect(()=>{
        const url = "https://vast-retreat-75200.herokuapp.com/api/get-donors"
        axios.get(url).then(res=>{
            setDonors(res.data)
        })
    }, [])
    return (
        <Box>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {
                        donors?.map((donor)=><Single key={donor._id} donor={donor}></Single>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Donors;