import React from 'react';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { styles , useStyles} from '../../commonStyles.js';
import './team.css';
import IconButton from '@material-ui/core/IconButton';
import arrow from '../../images/arrow-back.png'; 
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button'; 
import PropTypes from 'prop-types';
import clsx from 'clsx'; 
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';   
import DeleteIcon from '@material-ui/icons/Delete';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
 

function MySnackbarContentWrapper(props) {
  const classes ={ useStyles };
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
 
  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={props.onClose()}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

class EditVehicle extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      VehicleType: ["Truck", "Lorry"],
      VehicleList: ["boggi", "chogi", "rogi"],
      openSnack: false,
      doneCondition: false 
    }
    this._nodes = new Map();
    this._deleteVehicle = this.deleteVehicle.bind(this);
  };

  handleFocus(event) {
    event.target.focus()
  }
  deleteVehicle = (e, i) => {
    this.setState({ VehicleList: [] ,
      openSnack:true
    });

  }

  doneChecklist = (e, i) => {
    console.log('hi');
    this.setState({ 
      doneCondition:true
    });

  }
 

    handleClose = (event, reason) => {
console.log('hi')
    this.setState({ VehicleList: [] ,
      openSnack:false
    });
  };




  render() {
    const { classes } = this.props;
    return (<React.Fragment>


      <div id="register_vehicles_main">


        <Grid container spacing={3}>
          <div className={" gridParent  margin-top-40"}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}>
                  <h1 className="{ main_heading-text }" onClick={this.props.history.goBack} >  <img className={classes.img} alt="Back" src={arrow} />  Back</h1> </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.topPaper}>

                </Paper>
              </Grid>

            </Grid>


            <Grid container spacing={3}  >

              <Grid item xs={12}>
                <Paper className={[classes.alignLeft, classes.nobackground + " flexAlignLeft  padding-bottom-0 "].join(' ')}>
                  <List component="nav" className={classes.root + " width-100  padding-left-0 flexAlignLeft"} >
                    <ListItem className={" flexWrapParent  flexAlignLeft"}  >
                      <ListItemText primary=" " className={"  flexAlignLeft  "} />
                    </ListItem>
                  </List>

                </Paper>
              </Grid>


            </Grid>
          </div>
          <Grid container spacing={2} id="vehicle_list_div">
            <Grid item id="vehicle_details_edit" xs={12} sm={8}>

              <Paper className={classes.paper + " padding-10 "} >
                <List component="nav" className={classes.root + "  border-bottom-gery "} aria-label="Approve Reject Leaves">
                  <ListItem className={" flexWrapParent    "}  >
                    <ListItemText primary="ID and Name" className={" wrappedListItemTop alignLeft"} />
                    <ListItemText primary="12 wed 2019" className={" wrappedListItem  greyText alignLeft "} />
                  </ListItem>
                  <ListItem className={"     alignRight justify-flex-right "}  >
                  <div className={" flexWrapParent    "}   >
                    <ListItemText primary="ID and Name" className={" wrappedListItemTop alignLeft"} />
                    <ListItemText primary="12 wed 2019" className={" wrappedListItem    alignLeft "} />
                    </div>
                    <div className={"   "}  >
                      <DeleteIcon color="secondary" onClick={e => this.deleteVehicle(e)} />

                    </div>   
                  </ListItem>
 
                </List>
                <List component="nav" className={classes.root} > 
                  <ListItem>
                    <ListItemText primary="01, Checklist1" className={"  alignLeft"} />
                  </ListItem>
                  <ListItem  className={"     alignRight justify-flex-right "}  >
                    <Button variant="outlined" color="primary" >
                      DONE
                     </Button>   
                  </ListItem>
                </List>
                <List component="nav" className={classes.root} > 
                  <ListItem>
                    <ListItemText primary="02, Checklist1" className={"  alignLeft"} />
                  </ListItem>
                  <ListItem  className={"     alignRight justify-flex-right "}  >
                    <Button variant="outlined" color="primary" className={  this.state.doneCondition ? " displayNone " : "  " }  onClick={e => this.doneChecklist(e)} >
                   DONE 123
                     </Button>  
                       <CheckCircleIcon  variant="info"  color="secondary" className={  this.state.doneCondition ? " " : " displayNone " } ></CheckCircleIcon>  
                  </ListItem>
                </List>
                <List component="nav" className={classes.root} > 
                  <ListItem>
                    <ListItemText primary="03, Checklist1" className={"  alignLeft"} />
                  </ListItem>
                  <ListItem  className={"     alignRight justify-flex-right "}  >
                    <Button variant="outlined" color="primary" >
                      DONE
                     </Button>   
                  </ListItem>
                </List>
                <List component="nav" className={classes.root} > 
                  <ListItem>
                    <ListItemText primary="04, Checklist1" className={"  alignLeft"} />
                  </ListItem>
                  <ListItem  className={"     alignRight justify-flex-right "}  >
                    <Button variant="outlined" color="primary" >
                      DONE
                     </Button>   
                  </ListItem>
                </List>
              </Paper>



              
            </Grid>
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.openSnack}
        autoHideDuration={6000}
        onClose={() => this.handleClose}
      >
        <MySnackbarContentWrapper
          onClose={() => this.handleClose}
          variant="info" 
          message="  Vehicle Number XXX Deleted!"
        />
      </Snackbar>

          </Grid>
        </Grid>

      </div>





    </React.Fragment>
    )
  }
}

export default withStyles(styles)(EditVehicle); 