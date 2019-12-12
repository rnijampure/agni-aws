import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'; 
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import shantaBai from '../../images/shantaBai.png'; 
import check from '../../images/check.png'; 
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles'; 

import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
 
import { styles } from '../../commonStyles.js';
import './team.css';


 
/* const DialogTitle = withStyles(makeStyles)(props => {
 
  //let classes = useStyles();
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
}); */

class EmployeeVerificationDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      maxWidth: 'sm',
      setMaxWidth: 'sm',
      open: this.props.open
 }
 

  }

//     handleClose = () => {
//       this.props = {
//         setOpen:false
//       };
//       this.setState({ setOpen: false });
// //    console.log(this.props )
//      };
     // fullScreen = useMediaQuery(this.theme.breakpoints.down('sm'));
  
  render() {
    
    const { classes } = this.props;


 
  return (
    <div>



      <Dialog open={this.props.open} id="employee-verify-dialog" 
        maxWidth={this.state.maxWidth} onClose={this.props.justClose} aria-labelledby="form-dialog-title" fullScreen={this.fullScreen}
      >
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>Employee Verification
        <IconButton aria-label="close" className={classes.closeButton} onClick={this.props.justClose}>
          <CloseIcon />
        </IconButton>
         </DialogTitle>
        <Paper className={[classes.paper + classes.nobackground + " employer_verify_dialog_body margin-top-10"  ].join( ' ' )}>
          <Grid container spacing={3} className={[classes.paper + classes.nobackground + " employer_verify_dialog_body margin-top-10 border-bottom-gery margin-bottom-ten padding-bottom-10"  ].join( ' ' )} >

            <Grid item>
              <img className={classes.img} alt="complex" src={shantaBai} />

            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs className={ "  space-vertically-even  "}>
                  <Typography variant="body2" gutterBottom >
                    <strong>  Name</strong>:      Shanta Bai - 1234ABC
                </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>         Dob</strong>: 12/10/1975
                </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>         Gender</strong>:     Female
                </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>         Contact</strong>:  9845198578
                </Typography>
                </Grid>
                <Grid item>

                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Paper>
        <DialogContent>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="caption" display="block" className={ " greyText "} gutterBottom>
                  Address
              </Typography>
                <Typography variant="body2" gutterBottom>  Shanta Bai - 1234ABC
                </Typography>
                <div className={classes.seperatorDiv}>
&nbsp;
                </div>
                <Typography variant="caption" display="block" className={" greyText "} gutterBottom>
                  Pin Code
              </Typography>
                <Typography variant="body2" gutterBottom>  Shanta Bai - 1234ABC
                </Typography>
                <div className={classes.seperatorDiv}>
&nbsp;
                </div>
                <Typography variant="caption" display="block" className={" greyText "} gutterBottom>
                  Pin Code
              </Typography>
                <Typography variant="body2" gutterBottom>  Shanta Bai - 1234ABC
                </Typography>
                <div className={classes.seperatorDiv}>
&nbsp;
                </div>
                <Typography variant="caption" display="block" className={" greyText "} gutterBottom>
                 Aadahar
              </Typography>
                <Typography variant="body2" gutterBottom>  Shanta Bai - 1234ABC
                </Typography>
                <div className={classes.seperatorDiv}>
&nbsp;
                </div>
                <Typography variant="caption" display="block" className={" greyText "} gutterBottom>
                  Education
              </Typography>
                <Typography variant="body2" gutterBottom>  Shanta Bai - 1234ABC
                </Typography>
                <div className={classes.seperatorDiv}>
&nbsp;
                </div>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>

          </Grid>

          <DialogActions>

<Button
  type="submit"
  fullWidth
  variant="contained"
  color="primary"
  className={classes.submit}      onClick={this.props.handleClose}
>
  APPOINT
</Button>
<Hidden mdUp>
  <Button
    type="button"
    fullWidth
    variant="contained"
    color="secondary"
    className={classes.button}
    onClick={this.props.justClose}
  >
    CANCEL
</Button>
</Hidden>
</DialogActions> 
        </DialogContent>

      </Dialog>
    </div>
  );
  }
}/* 
function EmployeeVerificationDialog(props) {   
  const handleClose = () => {
 //   setOpen(false); 
    //  props.open = false; 
    //const [setOpen] =  false ;

  };
  const classes = useStyles();
  let history = useHistory();
  
 
} */

export default   
withStyles(styles )(EmployeeVerificationDialog);