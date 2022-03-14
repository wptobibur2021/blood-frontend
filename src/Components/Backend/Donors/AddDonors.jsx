import React, {useContext, useRef} from 'react';
import {Box, Container, Grid, TextField, Typography, Button, MenuItem, Paper} from "@mui/material";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
import {AuthContext} from "../../../Context/AuthContext";
const bloodGroup = [
    {
        value: 'A+',
        label: 'Blood Group A+',
    },
    {
        value: 'A-',
        label: 'Blood Group A-',
    },
    {
        value: 'B+',
        label: 'Blood Group B+',
    },
    {
        value: 'B-',
        label: 'Blood Group B-',
    },
    {
        value: 'AB+',
        label: 'Blood Group AB+',
    },
    {
        value: 'O+',
        label: 'Blood Group O+',
    },
    {
        value: 'O-',
        label: 'Blood Group O-',
    },

];

const AddDonors = () => {
    const {user}  = useContext(AuthContext)
    const {successNotify} = useNotification()
    const name = useRef()
    const address = useRef()
    const group = useRef()
    const mobile = useRef()
    const lastDonate = useRef()
    const [currency, setCurrency] = React.useState('A+');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const newData ={
            name: name.current.value,
            group: group.current.value,
            address: address.current.value,
            mobile: mobile.current.value,
            last:lastDonate.current.value,
            userId: user._id
        }
        try{
            axios.post('https://vast-retreat-75200.herokuapp.com/api/add-donner', newData).then(res=>{
                if(res.data){
                    successNotify("Donors add successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            console.log(e)
        }
    }
    return (
           <Grid item xs={12} sm={9} md={9}>
               <Paper elevation={3} sx={{p:6}}>
                  <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Typography variant="h4" sx={{ mb:5 }}>
                          রক্তদাতাদের তথ্য এখানে সংযুক্ত করুন
                      </Typography>
                  </Box>
                   <form onSubmit={handleSubmit}>
                   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item sm={6} md={6}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="রক্তদাতার নাম"
                                    type="text"
                                    sx={{width: '100%'}}
                                    inputRef={name}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                       <Grid item sm={6} md={6}>
                           <Box sx={{mb: 2}}>
                               <TextField
                                   label="বর্তমান ঠিকানা"
                                   type="text"
                                   sx={{width: '100%'}}
                                   inputRef={address}
                                   required={true}
                               />
                           </Box>
                       </Grid>
                       <Grid item sm={6} md={6}>
                           <Box sx={{mb: 2}}>
                               <TextField
                                   label="কত মাস আগে রক্ত দিয়েছেন?"
                                   type="text"
                                   sx={{width: '100%'}}
                                   inputRef={lastDonate}
                                   required={true}
                               />
                           </Box>
                       </Grid>
                       <Grid item sm={6} md={6}>
                           <Box>
                               <TextField
                                   sx={{width: '100%', mb: 2}}
                                   select
                                   label="রক্তের গ্রুপ নিবর্বাচন করুন"
                                   value={currency}
                                   inputRef={group}
                                   onChange={handleChange}
                                   required={true}
                               >
                                   {bloodGroup.map((option) => (
                                       <MenuItem key={option.value} value={option.value}>
                                           {option.label}
                                       </MenuItem>
                                   ))}
                               </TextField>
                           </Box>
                       </Grid>
                       <Grid item sm={6} md={6}>
                           <Box sx={{mb: 2}}>
                               <TextField
                                   inputRef={mobile}
                                   label="মোবাইল নাম্বার"
                                   type="number"
                                   sx={{width: '100%'}}
                                   required={true}
                               />
                           </Box>
                       </Grid>
                   </Grid>
                        <Button variant="contained" type="submit">সংযুক্ত করুন</Button>
                    </form>
               </Paper>
           </Grid>
    );
};

export default AddDonors;