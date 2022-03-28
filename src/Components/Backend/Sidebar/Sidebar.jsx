import React, { useContext } from 'react';
import { Divider, Grid, List, ListItem, ListItemText, Paper, } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";

const Sidebar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Grid item sm={3} xs={12} md={3}>
            <Paper elevation={1} sx={{ p: 2 }}>
                {
                    user?.role === 1 ? <AdminMenu /> : <UserMenu />
                }
            </Paper>
        </Grid>
    );
};
export default Sidebar;
const AdminMenu = () => {
    return (
        <List button>
            <Link style={{ textDecoration: 'none' }} to="/dashboard/list-donors">
                <ListItem>
                    <ListItemText primary="All blood donors" />
                </ListItem>
            </Link>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/dashboard/add-volunteer">
                <ListItem>
                    <ListItemText primary="Attach voluntarily" />
                </ListItem>
            </Link>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/dashboard/add-donor">
                <ListItem>
                    <ListItemText primary="Connect the blood donor" />
                </ListItem>
            </Link>
        </List>
    )
}
const UserMenu = () => {
    return (
        <List button>
            <Link style={{ textDecoration: 'none' }} to="/dashboard/add-donor">
                <ListItem>
                    <ListItemText primary="Connect the blood donor" />
                </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/dashboard/list-donors">
                <ListItem>
                    <ListItemText primary="All blood donors" />
                </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/dashboard/my-donors-list">
                <ListItem>
                    <ListItemText primary="My blood donor list" />
                </ListItem>
            </Link>
        </List>
    )
}
