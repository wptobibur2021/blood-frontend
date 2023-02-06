import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Input,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
const bloodGroup = [
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
const AddVolunteer = () => {
  const [file, setFile] = useState(null);
  const { successNotify, errorNotify } = useNotification();
  const [currency, setCurrency] = useState("A+");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const group = useRef();
  const name = useRef();
  const password = useRef();
  const mobile = useRef();
  const address = useRef();
  const email = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // New Data Object
    const newData = {
      name: name.current.value,
      password: password.current.value,
      mobile: mobile.current.value,
      address: address.current.value,
      email: email.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newData.photo = fileName;
      try {
        await axios.post(
          "https://bloodbank-chi.vercel.app/api/photoUpload",
          data
        );
      } catch (e) {
        console.log(e);
      }
    }
    try {
      axios
        .post("https://bloodbank-chi.vercel.app/api/add-volunteer", newData)
        .then((res) => {
          if (res.data) {
            successNotify("Volunteer add successfully");
            setFile("");
            e.target.reset();
          }
        });
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <Grid
      sx={{ display: "flex", alignItems: "center" }}
      item
      xs={12}
      sm={9}
      md={9}
    >
      <Paper elevation={3} sx={{ p: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 5 }}>
            Attach volunteer information here
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item sm={6} md={6} sx={12}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="The name of the volunteer"
                  type="text"
                  sx={{ width: "100%" }}
                  inputRef={name}
                  required={true}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} sx={12}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Current address"
                  type="text"
                  sx={{ width: "100%" }}
                  inputRef={address}
                  required={true}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} sx={12}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Mobile Number"
                  type="number"
                  sx={{ width: "100%" }}
                  inputRef={mobile}
                  required={true}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} sx={12}>
              <Box>
                <TextField
                  sx={{ width: "100%", mb: 2 }}
                  select
                  label="Select blood group"
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
            <Grid item sm={6} md={6} sx={12}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="E-mail Address"
                  type="email"
                  sx={{ width: "100%" }}
                  inputRef={email}
                  required={true}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} sx={12}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Password"
                  type="password"
                  sx={{ width: "100%" }}
                  inputRef={password}
                  required={true}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} sx={12}>
              <Box sx={{ mb: 2 }}>
                {file && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      mb: 3,
                    }}
                  >
                    <img
                      style={{ width: "100%", objectFit: "cover" }}
                      src={URL.createObjectURL(file)}
                      alt=""
                    />
                    <Cancel
                      sx={{
                        position: "absolute",
                        top: "5px",
                        right: "3px",
                        left: "320px",
                        cursor: "pointer",
                      }}
                      onClick={() => setFile(null)}
                    />
                  </Box>
                )}
                <label htmlFor="contained-button-file">
                  <Input
                    required={true}
                    sx={{ display: "none" }}
                    accept=".jpg, .png, .jpeg"
                    id="contained-button-file"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <Button variant="contained" component="span">
                    Photo
                  </Button>
                </label>
              </Box>
            </Grid>
          </Grid>
          <Button variant="contained" type="submit">
            Add Now
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddVolunteer;
