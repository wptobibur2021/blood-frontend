import React, {useContext} from 'react';
import {Box, Divider, Grid, List, ListItem, ListItemText, Paper,} from "@mui/material";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext";

const Sidebar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Grid item sm={3} xs={12} md={3}>
            <Paper elevation={1} sx={{p:2}}>
                {
                    user?.role === 1 ? <AdminMenu/> : <UserMenu/>
                }
            </Paper>
        </Grid>
    );
};
export default Sidebar;
const AdminMenu = () =>{
    return(
        <List button>
            <Link style={{textDecoration: 'none'}} to="/dashboard/list-donors">
                <ListItem>
                    <ListItemText  primary="সকল রক্তদাতা" />
                </ListItem>
            </Link>
            <Divider />
            <Link style={{textDecoration: 'none'}} to="/dashboard/add-volunteer">
                <ListItem>
                    <ListItemText  primary="স্বেচ্ছাসেব সংযুক্ত করুন" />
                </ListItem>
            </Link>
            <Divider />
            <Link style={{textDecoration: 'none'}} to="/dashboard/add-donor">
                <ListItem>
                    <ListItemText  primary="রক্তদাতা সংযুক্ত করুন" />
                </ListItem>
            </Link>
        </List>
    )
}
const UserMenu = () =>{
    return(
        <List button>
            <Link style={{textDecoration: 'none'}} to="/dashboard/add-donor">
                <ListItem>
                    <ListItemText  primary="রক্তদাতা সংযুক্ত করুন" />
                </ListItem>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/dashboard/list-donors">
                <ListItem>
                    <ListItemText  primary="সকল রক্তদাতা" />
                </ListItem>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/dashboard/my-donors-list">
                <ListItem>
                    <ListItemText  primary="আমার রক্তদাতা তালিকা" />
                </ListItem>
            </Link>
        </List>
    )
}
