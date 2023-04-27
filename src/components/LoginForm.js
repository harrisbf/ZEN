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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth0 } from "@auth0/auth0-react";
import zen_logo from '../assets/Zen.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        ZEN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm(props) {
  const { loginWithRedirect } = useAuth0();
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', overflowY: "hidden" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
        >
            <img src={zen_logo} className="login-logo"/>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} round>
          <Box
            sx={{
              my: 8,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
             <Button type="submit" variant="contained" size="large" onClick={() => loginWithRedirect()}>Login</Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}