import React, {useContext} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import Dashboard from '../Components/Backend/Dashboard'
import AddDonors from "../Components/Backend/Donors/AddDonors";
import Login from "../Page/Login/Login";
import AddVolunteer from "../Components/Backend/Volunteer/AddVolunteer";
import {AuthContext} from "../Context/AuthContext";
import Home from "../Page/Home/Home";
import ListDonors from "../Components/Backend/Donors/ListDonors";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import MyDonorList from "../Components/Backend/Donors/MyDonorList";
const RouterNav = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    return (
       <Routes>
           <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
               <Route path="/dashboard/add-volunteer" element={<AdminRoute><AddVolunteer/></AdminRoute>}></Route>
               <Route path="/dashboard/add-donor" element={<AddDonors/>}></Route>
               <Route path="/dashboard/list-donors" element={<ListDonors/>}></Route>
               <Route path="/dashboard/my-donors-list" element={<MyDonorList/>}></Route>
           </Route>
           <Route path="/" element={<Login/>}></Route>
       </Routes>
    );
};

export default RouterNav;