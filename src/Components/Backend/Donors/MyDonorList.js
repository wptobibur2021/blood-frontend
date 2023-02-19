import React, { useContext, useEffect, useState } from "react";
import {
  CircularProgress,
  TableBody,
  TableCell,
  Grid,
  Box,
  TableContainer,
  Table,
  TableHead,
  Paper,
} from "@mui/material";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import DonnerList from "./DonnerList";
const MyDonorList = () => {
  const [donors, setDonors] = useState([]);
  const { user } = useContext(AuthContext);

  // GET API DECLARATION BELOW
  try {
    useEffect(() => {
      const url = `https://apibloodbank.vercel.app/api/my-donors-list/${user._id}`;
      axios.get(url).then((res) => {
        setDonors(res.data);
      });
    }, []);
  } catch (e) {
    console.log("Error", e);
  }

  if (donors.length > 0) {
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
                <TableCell>Actions</TableCell>
              </TableHead>
              <TableBody>
                {donors?.map((donor) => (
                  <DonnerList key={donor._id} donor={donor}></DonnerList>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    );
  } else {
    return (
      <Grid item sm={9} xs={12} md={9}>
        <Box
          sx={{
            display: "flex",
            py: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Grid>
    );
  }
};

export default MyDonorList;
