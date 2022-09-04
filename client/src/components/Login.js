import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Blood Bank Management
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const theme = createTheme();

export default function Login(props) {
    let navigate = useNavigate();

    let [logForm,setLogForm]=useState({
        type:props.logintype,
        username:"",
        password:""
    })


    // let [checkLoginType,setCheckLogin]=useState(false)

    useEffect(()=>{

        if(props.logintype==null){
            navigate("/logintype")
        }
        }
    ,[props.logintype])



    let loginType=props.logintype
    // alert(loginType)
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/login",{
            payload : logForm
        }).then((res)=>{
            alert(res.data.status)
            if(res.data.status=="Success"){
                window.sessionStorage.setItem("userdata",JSON.stringify(res.data.payload))
                window.sessionStorage.setItem("loggedinStatus",true)
                if(props.logintype=="hospitalType"){
                    navigate("/hospitaldashboard")
                }
                else {
                    navigate("/admindashboard")

                }
            }
            else {
                alert(res.data)
            }
        })
            .catch(()=>{
                alert("Server Down")
            })
    };

    const formchangehandler=(e)=>{
        const newdata = {...logForm}
        newdata[e.target.name] = e.target.value
        setLogForm(newdata)
    }

    return (


        <ThemeProvider theme={theme}>
            <Grid id={"loginContainer"} container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://us.123rf.com/450wm/yupiramos/yupiramos1803/yupiramos180330947/98841003-heart-and-bag-blood-donor-transfusion-for-medical-care-illustration-.jpg?ver=6)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        // backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'seagreen' }}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {
                                props.logintype=="bloodBankType"?"Blood Bank Login":"Hospital Login"
                            }
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                name="username"
                                onChange={(e)=>formchangehandler(e)}
                                value={logForm.username}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Username"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                name="password"
                                onChange={(e)=>formchangehandler(e)}

                                value={logForm.password}
                                margin="normal"
                                required
                                fullWidth

                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="remember" color="primary" />}*/}
                            {/*    label="Remember me"*/}
                            {/*/>*/}
                            <Button
                                id={"loginButton"}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <div>
                                        <Link href="/hospitalregister" variant="body2">
                                            {"Register Hospital"}
                                        </Link>
                                    </div>

                                    <Link href="/bloodbankregister" variant="body2">
                                        {"Register Blood Bank"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}