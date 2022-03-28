import React from 'react'
import { TableRow, TableCell, Button } from "@mui/material";
import Update from './Update';
const DonnerList = ({ donor }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <TableRow key={donor._id}>
            <TableCell>{donor.name}</TableCell>
            <TableCell>{donor.address}</TableCell>
            <TableCell>{donor.group}</TableCell>
            <TableCell>{donor.mobile}</TableCell>
            <TableCell>{donor.last} Months</TableCell>
            <TableCell><Button onClick={handleOpen} variant="outlined">Update</Button></TableCell>
            <Update donner={donor} open={open} handleClose={handleClose} ></Update>
        </TableRow>
    )
}

export default DonnerList