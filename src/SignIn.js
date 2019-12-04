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
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
      AgniShudhi
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
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
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
    margin: theme.spacing(3, 0, 8),
  },
}));
 

export default function SignIn() {
  const classes = useStyles();
  
  let history = useHistory();
  return (
    <Formik
    initialValues={{ email: '',password:'' }}
    onSubmit={(values, { setSubmitting }) => {
        //  alert(JSON.stringify(values, null, 2));
      //   window.location.replace("/dashboard/createCluster/")
      history.push("/dashboard/GCListTeam/")
      setTimeout(() => {
      
      //  setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required('Required email'),
        password: Yup.string()
        .required('No password provided.') 
        .min(1, 'Password is too short - should be 1 chars minimum.')
    })}
  >

       {props => {
        const {

          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit} >
              <Field
    validateOnBlur
    validateOnChange
    name="email"
    render={({ field, form }) => (
   
    <TextField
        error={
            Boolean(form.errors.email && form.touched.email)
        }
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={
            form.errors.email &&
            form.touched.email &&
            String(form.errors.email)
        }
    />
    )}
/>
<Field
    validateOnBlur
    validateOnChange
    name="password"
    render={({ field, form }) => (
    <TextField
        error={
            Boolean(form.errors.password && form.touched.password)
        }
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={
            form.errors.password &&
            form.touched.password &&
            String(form.errors.password)
        }
    />
    )}
/>
                 
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
                  <Grid item xs={12}>
                    <Link href="#" variant="body2" align="center" >
                      Forgot password?
                    </Link>
                  </Grid>
                 
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        );
      }}

    </Formik>
  );
}