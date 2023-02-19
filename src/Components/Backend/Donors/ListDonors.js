import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, TextField, MenuItem } from "@mui/material";
import axios from "axios";
import Single from "./Single";
const bloodGroup = [
  {
    value: 0,
    label: "Please select group",
  },
  {
    value: "A+",
    label: "Blood Group A+",
  },
  {
    value: "A-",
    label: "Blood Group A-",
  },
  {
    value: "B+",
    label: "Blood Group B+",
  },
  {
    value: "B-",
    label: "Blood Group B-",
  },
  {
    value: "AB+",
    label: "Blood Group AB+",
  },
  {
    value: "O+",
    label: "Blood Group O+",
  },
  {
    value: "O-",
    label: "Blood Group O-",
  },
];
const ListDonors = () => {
  const [donors, setDonors] = useState([]);
  const [group, setGroup] = React.useState(0);
  const handleChange = (event) => {
    setGroup(event.target.value);
  };
  const sendGroup = encodeURIComponent(group);
  // let updateList = []
  // const deleteDonor = (id) =>{
  //     console.log('ID: ', id)
  //     console.log('Ok')
  //     const url = `http://localhost:8000/api/delete-donor/${id}`
  //     console.log('Url: ', url)
  //     axios.delete(url).then(res=>{
  //         if(res.data){
  //             updateList = donors.filter((d)=> d !==id)
  //             setDonors(updateList)
  //         }
  //     })
  // }

  try {
    useEffect(() => {
      let url;
      if (sendGroup == 0) {
        url = `https://apibloodbank.vercel.app/api/query/get-donors`;
      } else {
        url = `https://apibloodbank.vercel.app/api/query/get-donors?group=${sendGroup}`;
      }
      axios.get(url).then((res) => {
        setDonors(res.data);
      });
    }, [sendGroup]);
  } catch (e) {}
  return (
    <Grid item sm={9} xs={12} md={9} sx={12}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          flexDirection: "column",
        }}
      >
        <TextField
          sx={{ width: "50%", mb: 2 }}
          select
          label="Select blood group"
          value={group}
          onChange={handleChange}
          required={true}
        >
          {bloodGroup.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        Total: {donors.length}
      </Box>
      {donors.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {donors?.map((donor) => (
            <Single key={donor._id} donor={donor}></Single>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            py: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Not Found This Blood Group {group}
          </Typography>
        </Box>
      )}
    </Grid>
  );
};

export default ListDonors;
