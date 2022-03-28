import './Login.css'
import { Typography, Grid, Container, TextField, FormControl, Box, Button, CircularProgress } from '@mui/material'
import React, { useContext, useRef } from "react";
import { useNavigate, } from "react-router-dom"
import useNotification from "../../Hooks/useNotification";
import { AuthContext } from "../../Context/AuthContext";
import useAPI from "../../Hooks/useAPI";
export default function Login() {
    const password = useRef(null)
    const email = useRef(null)
    const navigate = useNavigate()
    const { userLogin } = useAPI()
    const { isFetching, dispatch } = useContext(AuthContext)
    const { successNotify } = useNotification()
    const handleSubmit = (e) => {
        e.preventDefault()
        const userCredential = {
            email: email.current.value,
            password: password.current.value
        }
        userLogin(userCredential, dispatch, navigate, successNotify)
        // console.log("Login Data: ", loginData)
        // try{
        //     axios.post('http://localhost:8000/api/login', loginData).then(res=>{
        //         if(res.data){
        //             successNotify('Login has been successfully')
        //             navigate('/dashboard')
        //             dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        //         }
        //     })
        // }catch (e) {
        //
        // }
        // loginCall({email:email.current.value, password:password.current.value}, dispatch)
        // successNotify('Login has been Successful')
    }
    return (
        <Box sx={{ backgroundColor: '#f0f2f5' }}>
            <Container sx={{ py: 10 }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item md={6} sx={12}>
                        <div className="loginInfo" style={{ textAlign: 'center' }}>
                            <h2 className="loginTitle">Blood Bank</h2>
                        </div>
                    </Grid>
                    <Grid item md={6} sx={12}>
                        <div className="loginFrom">
                            <form onSubmit={handleSubmit}>
                                <FormControl fullWidth variant="standard">
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="standard"
                                        type="email"
                                        required
                                        multiline
                                        inputRef={email}
                                    />
                                </FormControl>
                                <FormControl fullWidth variant="standard">
                                    <TextField
                                        id="password"
                                        label="Password"
                                        variant="standard"
                                        type="password"
                                        minLength="6"
                                        required
                                        inputRef={password}
                                    />
                                </FormControl>
                                <Button fullWidth className="loginBtn" type="submit" variant="contained">{isFetching ? <CircularProgress size="25px" sx={{ color: "white" }} /> : "Login"}</Button>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
