import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                AgniShidhi
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignupSchema = Yup.object().shape({
email: Yup.string()
        .required('Required hello'),
    password: Yup.string()
    .min(1, 'Password is too short - should be 8 chars minimum.')
        .required('Required')
    
});
export default function SignIn() {

    const classes = useStyles();

    return (
        <div>  <Formik
            initialValues={{
                email: '',
                password: '',
               
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
            onChange={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            
            {({ errors, touched }) => (
                
        <Form className={classes.form}>
             <Container component="main" maxWidth="xs">
             <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
        </Typography>
                   
                </div>
              
             <CssBaseline />
             <TextField
                            variant="outlined"
                            margin="normal" 
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            error={errors.email && touched.email}
                            autoComplete="email"
                            
                        helperText={(errors.email && touched.email) && errors.email}
                        
                            autoFocus
                        />  
           
                 <TextField
                            variant="outlined"
                            margin="normal" 
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />  {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit} 
                        >
                            Sign In
          </Button>
          <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
          <Box mt={8}>
                    <Copyright />
                </Box>
          </Container> </Form>
      )}
        </Formik>
            <div>    </div>
     
        </div>
    );
}