import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContext";
import {useLocation, Navigate} from "react-router-dom";
import {Box, CircularProgress} from "@mui/material";

const PrivateRoute = ({children, ...rest}) => {
    const {user, isFetching} = useContext(AuthContext)
    let location = useLocation();
    if(isFetching){
        return (
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CircularProgress/>
            </Box>
        );
    }
    if(user?.email){
        return children
    }else {
        return <Navigate to="/login" state={{from: location}}/>
    }

};

export default PrivateRoute;