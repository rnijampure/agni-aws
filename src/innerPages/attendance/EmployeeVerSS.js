import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase'; 
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Tooltip from '@material-ui/core/Tooltip'; 
import { withStyles } from '@material-ui/core/styles'; 
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  rootOne: {
    flexGrow: 1,
    margin: theme.spacing(0),
    width: '100%',
    background: 'none',
    padding: '0',
    '& div': {
      background: 'none',
      boxShadow: 'none',

    }

  },
  rootHeading: {
    flexGrow: 1,
    margin: theme.spacing(2),
    background: 'none',
    '& div': {
      background: 'none',
      boxShadow: 'none',
      textAlign: 'left'
    }

  }, 
  textAlignLeft: {
    textAlign: 'left', padding: theme.spacing(2),
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: '0px'
  },
  textAlignRight: {
    textAlign: 'right', padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#B5B5B5!important',
    '&:hover': {
      backgroundColor: '#E5E5E5 !important',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      maxWidth: '300px',
      float: 'right'
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 300,
      },
    },
  },
  alignLeft: {
    textAlign: 'left',
    boxShadow: 'none'
  },
  wrappedListItem: {
    flex: '0 0 53%'
  },
  flexWrapParent: {
    flexWrap: 'wrap',
    display: 'inline-flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    width: '100%',
    "& :first-of-type ": {
      "& span": {
        fontWeight: '700',

      },
      "&:hover": {
        button: {
          display: 'block'
        },
      }
    }
  },
  wrappedListItemTop: {
    fontWeight: '700',
    color: '#262626',
    flex: '0 0 53%'
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
  greenClass: {
    color: '#8dc149'
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  Dialog: {
    maxWidth: '800px'
  },
  paper: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: '100%',
    margin:'auto'
  },
  button: {
    margin: theme.spacing(1, 0, 5),
    width: '100%',
  },
  DialogContent: {
    flexWrap: 'wrap',
  },
  img: {
    maxWidth: '115px',
    width: '100%',
    height: 'auto'
  },  
  hideme: {
    display: "none"
  },
  marginAuto: {
      margin:'auto'
  },
  ExpansionPanelSummary:{
      padding:'0',
      margin: '0'
  },
  nobackground:{
      
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  greybackground:{ 
    backgroundColor: '#E5E5E5 ',
    boxShadow: 'none',
  },
}) ; 

class EmployeeVerSS extends React.Component {
  constructor(props) {
    super(props);
    this._nodes = new Map() 
    
    this.state = {
      open :true,
      setOpen: true  
 }
  }
  
    handleClose = () => { 
    this.setState({ setOpen: false });
 
  };

    handleClickOpen = (event) => { 
    this.setState({ setOpen: true });

  }; 
  render() {

    const { classes } = this.props;

    
    return (
      <React.Fragment>

        <div className={classes.rootOne}>
          <Grid container  >
            <Grid item xs={12} sm={6}>
              <Paper className={classes.textAlignLeft}>Employee Verifcation</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.textAlignRight}>

                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search By Employee Id"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>

              </Paper>
            </Grid>

          </Grid>

        </div>
        <div>
 
          <Grid container spacing={3} id="employee_verification">
            <Grid item xs={12} sm={4} className={classes.marginAuto}> 
            <ExpansionPanel className={classes.nobackground}>
        <ExpansionPanelSummary className={classes.greybackground}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Paper className={[classes.paper , classes.nobackground].join(' ')}>Feeder</Paper>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Paper className={classes.paper}>
                <Tooltip title="Verify and Add" aria-label="add">
                  <List component="nav" className={classes.rootOne} aria-label="mailbox folders"   onClick={this.handleClickOpen }>
                    <ListItem button className={classes.flexWrapParent} >

                      <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                      <ListItemText primary="1st Block" className={classes.wrappedListItem} />

                    </ListItem>

                    <ListItem className={classes.hideme}>
                      <VerifiedUserIcon  className={ " greenClass" }  />
                      User Verified
                </ListItem>
                  </List>
                </Tooltip>
              </Paper>
         
        </ExpansionPanelDetails>
      </ExpansionPanel>
              
             </Grid>
             <Grid item xs={12} sm={4} className={classes.marginAuto}> 
            <ExpansionPanel className={classes.nobackground}>
        <ExpansionPanelSummary className={classes.greybackground}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Paper className={[classes.paper , classes.nobackground].join(' ')}>Driver</Paper>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Paper className={classes.paper}>   
               <Tooltip title="Verify and Add" aria-label="add">
                <List component="nav" className={classes.rootOne} aria-label="mailbox folders"  onClick={this.handleClickOpen }>
                  <ListItem button className={classes.flexWrapParent} >

                    <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                    <ListItemText primary="1st Block" className={classes.wrappedListItem} />
                  </ListItem>
                  <ListItem className={classes.hideme}>
                    <VerifiedUserIcon  className={ " greenClass" }  />
                    User Verified
                </ListItem>
                </List>
              </Tooltip>
              </Paper>
           
         
        </ExpansionPanelDetails>
      </ExpansionPanel>
                
          
  
            </Grid>
            <Grid item xs={12} sm={4} className={classes.marginAuto}> 
            <ExpansionPanel className={classes.nobackground}>
        <ExpansionPanelSummary className={classes.greybackground}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Paper className={[classes.paper , classes.nobackground].join(' ')}>Others</Paper>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Paper className={classes.paper}>
                <Tooltip title="Verify and Add" aria-label="add">
                  <List component="nav" className={classes.rootOne} aria-label="mailbox folders"  onClick={this.handleClickOpen }>
                    <ListItem button className={classes.flexWrapParent} >

                      <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                      <ListItemText primary="1st Block" className={classes.wrappedListItem} />
                    </ListItem>
                    <ListItem className={classes.hideme}>
                      <VerifiedUserIcon  className={ " greenClass" }  />
                      User Verified
                </ListItem>
                  </List>
                </Tooltip>


              </Paper>
           
           
         
        </ExpansionPanelDetails>
      </ExpansionPanel>
                
              </Grid>
          </Grid>

        </div>

        <div>


    </div>


      </React.Fragment>
    );
  }
}
export default withStyles(styles)(EmployeeVerSS); 
  /* creat*/


