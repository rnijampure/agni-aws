import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent'; 
import { withRouter } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import './greenCluster.css';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
import {useStyles} from '../../commonStyles';

 

function Loading() {
  return <h3>Loading...</h3>;
}
const DialogTitle = withStyles(makeStyles)(props => {

  let classes = useStyles();
  const { children, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

function FormDialog(props) {
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
    <div id="">
      <Button variant={props.varient}  color="primary" onClick={handleClickOpen}>
        CREATE GREEN CLUSTER
      </Button>




      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen}
      >
        <DialogTitle id="create-green-cluster-dialog"  onClose={handleClose}>Create Green Cluster</DialogTitle>
        <Divider />
        <DialogContent>




          <Formik
            initialValues={{
              greenclusterNumber: '',
              Locality: '',

            }}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              setTimeout(() => {
                setOpen(false);
                history.push("/dashboard/GreenClusters/")



                //  setSubmitting(false);
              }, 500);
            }}

            validationSchema={Yup.object().shape({
              greenclusterNumber: Yup.string()
                .required('Please provide a greencluster number'),
                Locality :  Yup.string()
                .required('Locaity is Mandatory!')
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

                      <Field
                        validateOnBlur
                        validateOnChange
                        name="Locality"
                        render={({ field, form }) => (
                          <TextField
                            error={
                              Boolean(form.errors.Locality && form.touched.Locality)
                            }
                            margin="normal"
                            required
                            fullWidth
                            name="Locality"
                            label="Locality"
                            id="Locality"
                            autoComplete="current-Locality"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.Locality &&
                              form.touched.Locality &&
                              String(form.errors.Locality)
                            }
                          />
                        )}
                      />

                      <Field
                        validateOnBlur
                        validateOnChange
                        name="Area"
                        render={({ field, form }) => (
                          <TextField
                            error={
                              Boolean(form.errors.area && form.touched.area)
                            }
                            margin="normal" 
                            fullWidth
                            name="Area"
                            label="Area"
                            id="Area"
                            autoComplete="current-area"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.area &&
                              form.touched.area &&
                              String(form.errors.area)
                            }
                          />
                        )}
                      />

                      <Field
                        validateOnBlur
                        validateOnChange
                        name="Kasaragod"
                        render={({ field, form }) => (
                          <TextField
                            error={
                              Boolean(form.errors.area && form.touched.area)
                            }
                            margin="normal" 
                            fullWidth
                            name="Kasaragod"
                            label="Kasaragod"
                            id="Kasaragod"
                            autoComplete="current-kasaragod"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.kasaragod &&
                              form.touched.kasaragod &&
                              String(form.errors.kasaragod)
                            }
                          />
                        )}
                      />
                      <Field
                        validateOnBlur
                        validateOnChange
                        name="State"
                        render={({ field, form }) => (
                          <TextField
                            error={
                              Boolean(form.errors.area && form.touched.area)
                            }
                            margin="normal" 
                            fullWidth
                            name="State"
                            label="State"
                            id="State"
                            autoComplete="current-state"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.state &&
                              form.touched.state &&
                              String(form.errors.state)
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