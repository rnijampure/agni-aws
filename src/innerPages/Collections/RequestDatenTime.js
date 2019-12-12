import React, { useState } from 'react';
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

import { Formik, Form, Field, FieldArray, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import DateSelector from '../../dateSelector';  
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
import { useStyles } from '../../commonStyles';
import './greenCluster.css';


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


function RequestDatenTime(props) {
  const [open, setOpen] = React.useState(props.props.open);
  console.log(props  )
  const [value, selectedDay] = React.useState(' ');
  const [theArray, setTheArray] = React.useState([]);
  const theme = useTheme(); 
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  let history = useHistory();

  return (
    <div>




      <Dialog open={open} id="requestDatenTimePopup" onClose={props.handleDrawerClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen}
      >
 
        
        <DialogTitle id="form-dialog-title" className={classes.paddingLeft20 + " padding-bottom-0 "} onClose={props.handleDrawerClose}>Request Date and Time</DialogTitle>

        <DialogContent>
<Divider />
        

          <Formik
            initialValues={{ 
              time: '07:30',
              days : []
            }}
            onSubmit={(values, { setSubmitting }) => {
          //    alert(JSON.stringify(values, null, 2));
              setTimeout(() => {
                let fromValues =  JSON.stringify(values, null, 2)
 
                const json = JSON.parse(fromValues);
                console.log(json.driverName) 
             let setDriverName= json.driverName;
           


            setOpen(false);
                //  setSubmitting(false);
              },  500);
            //  

            }}
            handleChange={(values, index) => {
              console.log('this');
            }}
            validationSchema={Yup.object().shape({ 
              days: Yup.array()
               
                .required("Please at least one day")
                .min(1),
                time: Yup.string()
                .required('Please provide a valid time'),
            })


            }
          >
 
            {props => {
              const {
                values,
                handleChange,
                handleBlur,
                handleSubmit,

              } = props;
              function addToSelectedDateList(day, index, e) {
                  props.handleBlur()
                if (props.values.days.indexOf(day) < 0) {
                  props.values.days.push(day) 
                  setTheArray([...theArray, index]);   
                }
                else {
                  props.values.days.pop(day)
                 
                  setTheArray(theArray.splice(index,1));  
                  
              //  
                //  selectedDay(value => index); 
                    
                }


              };
              function validatedays(props,form) {
                let error;
                console.log(props.errors.days)
                form.errors.days = " ";
                props.isValidating = true;
              //  if (value.days.length > 0) {
                //   error = 'Nice try!';
                // }
                // return error;
              }
              return (

                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div className={classes.paper}>

                    <form className={classes.form} noValidate onSubmit={handleSubmit} >
 
                      <DialogTitle id="form-dialog-title" className={" padding-bottom-0 padding-left-0"} onClose={props.handleDrawerClose}>Day</DialogTitle>

                      <div>

                        <FieldArray
                          name="days"
                          render={({ arrayHelpers,form,  }) => (
                            <React.Fragment>   <ErrorMessage name="days"  >
                             {msg => <p className={" MuiFormHelperText-root MuiFormHelperText-contained Mui-error Mui-required  MuiFormHelperText-root "} id="days-helper-text">
                             {msg}</p>  }</ErrorMessage>
                         
                              <DateSelector props={props}  handleBlur={() => handleBlur(props,form)}  />
                             </React.Fragment> 
                          
                          )}
                        />
          
                      </div>
                      <DialogTitle id="form-dialog-title" className={" padding-bottom-0 padding-left-0"} onClose={props.handleDrawerClose}>Time</DialogTitle>

                      <Field
                        validateOnBlur
                        validateOnChange
                        name="time"
                        render={({ field, form }) => (
                          <TextField
                            error={
                              Boolean(form.errors.time && form.touched.time)
                            }
                            margin="normal"
                            id="time"
                            fullWidth
                            name="time"
                            label="Time"
                            type="time"
                            autoComplete="current-area"
                            onChange={handleChange}
                            min="07:00" max="18:00" 
                            variant="outlined"
                            onBlur={handleBlur}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            defaultValue="07:30" 
                            inputProps={{
                              step: 300, // 5 min
                            }}
                            helperText={
                              form.errors.time &&
                              form.touched.time &&
                              String(form.errors.time)
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
                          SAVE
     </Button>
                        <Hidden mdUp>
                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            onClick={props.handleDrawerClose}
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

export default withRouter(RequestDatenTime)