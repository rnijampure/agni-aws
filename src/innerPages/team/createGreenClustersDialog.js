import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Redirect } from 'react-router';

import { useHistory } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap'
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
    margin: theme.spacing(3, 0, 5), width: '100%',
  },
  button: {
    margin: theme.spacing(1, 0, 5),
    width: '100%',
  },
  DialogContent: {
    flexWrap: 'wrap'
  }
}));
function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);


  };

  const handleClose = () => {
    setOpen(false);

  };
  const classes = useStyles();
 let history = useHistory();
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        CREATE GREEN CLUSTER12
      </Button>




      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen}
      >
        <DialogTitle id="form-dialog-title">Create Green Cluster</DialogTitle>
        <DialogContent>




          <Formik
            initialValues={{ greenclusterNumber: '' }}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              setTimeout(() => {
                setOpen(false);
                history.push("/dashboard/greenClusterList/")



                //  setSubmitting(false);
              }, 500);
            }}

            validationSchema={Yup.object().shape({
              greenclusterNumber: Yup.string()
                .required('Required email')
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

                    <form className={classes.form} noValidate onSubmit={handleSubmit} >
                      <Field
                        validateOnBlur
                        validateOnChange
                        name="greenclusterNumber"
                        render={({ field, form }) => (

                          <TextField
                            error={
                              Boolean(form.errors.greenclusterNumber && form.touched.greenclusterNumber)
                            }
                            margin="normal"
                            required
                            fullWidth
                            id="greenclusterNumber"
                            label="Create Green Cluster Number"
                            name="greenclusterNumber"
                            autoComplete="greenclusterNumber"
                            autoFocus
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.greenclusterNumber &&
                              form.touched.greenclusterNumber &&
                              String(form.errors.greenclusterNumber)
                            }
                          />
                        )}
                      />



                 
                  <DialogActions>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      CREATE
     </Button>
                    <Hidden mdUp>
                      <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={handleClose}
                      >
                        CANCEL
     </Button>
                    </Hidden>
                  </DialogActions>   </form>
                  </div>
                </Container>
              );
            }}

          </Formik>
        </DialogContent>

      </Dialog>
    </div>
  );
}

export default withRouter(FormDialog)