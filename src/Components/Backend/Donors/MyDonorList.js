import React, {useContext, useEffect, useState} from 'react';
import {CircularProgress,TableBody,TableRow,TableCell,Grid, Box, TableContainer, Table, TableHead, Paper} from "@mui/material";
import {AuthContext} from "../../../Context/AuthContext";
import axios from "axios";

const MyDonorList = () => {
    const [donors, setDonors] = useState([])
    const {user} = useContext(AuthContext)
    // GET API DECLARATION BELOW
    try{
        useEffect(()=>{
            const url = `https://vast-retreat-75200.herokuapp.com/api/my-donors-list/${user._id}`
            axios.get(url).then(res=>{
                setDonors(res.data)
            })
        },[])
    }catch (e) {
        console.log('Error', e)
    }

    if(donors.length>0){
        return (
            <Grid item sm={9} xs={12} md={9}>
                <Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableCell>Name</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Blood Group</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>Last Donation</TableCell>
                            </TableHead>
                            <TableBody>
                                {
                                    donors?.map((donor)=>(
                                        <TableRow key={donor._id}>
                                            <TableCell>{donor.name}</TableCell>
                                            <TableCell>{donor.address}</TableCell>
                                            <TableCell>{donor.group}</TableCell>
                                            <TableCell>{donor.mobile}</TableCell>
                                            <TableCell>{donor.last} Months</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>
        );
    }else{
        return (
            <Grid item sm={9} xs={12} md={9}>
                <Box sx={{display: 'flex', py: 6, justifyContent: 'center', alignItems: 'center'}}>
                    <CircularProgress/>
                </Box>
            </Grid>
        )
    }
};

export default MyDonorList;