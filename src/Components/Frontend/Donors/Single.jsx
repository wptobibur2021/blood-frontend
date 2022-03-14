import React from 'react';
import {Box, Grid, Paper, Typography} from "@mui/material";
const Single = ({donor}) => {
    const {name, address, mobile, group, last} = donor
    return (
        <Grid item xs={12} sm={3} md={3}>
            <Paper elevation={3} sx={{px:4, py: 2}}>
                <Box>
                    <Typography variant="h5"  sx={{fontSize: '16px', lineHeight: '25px'}}>
                        Name: {name}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="p"  sx={{fontSize: '16px', lineHeight: '25px'}}>
                        Address: {address}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="p"  sx={{fontSize: '16px', lineHeight: '25px'}}>
                        Blood Group: {group}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="p"  sx={{fontSize: '16px', lineHeight: '25px'}}>
                        Mobile: {mobile}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="p" sx={{fontSize: '16px', lineHeight: '25px'}}>
                        Last Donation: {last} Months
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Single;