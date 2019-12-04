import React from 'react'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useHistory } from "react-router-dom"; 
import { withStyles } from '@material-ui/styles';
import Loadable  from 'react-loadable'; 
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';  
import './greenCluster.css';

import  AssignDriver  from './assignDiver';
import {
 
  Route, Switch, withRouter
} from "react-router-dom"; 



const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      
      "fontSize": 16,
    },
    MuiButton:{
      "fontSize": 14,
     
    },
    ".MuiButton-outlinedPrimary":{
      "fontSize": 14,
  fontWeight: '500'  , 
  fontStretch: 'normal'  , 
  fontStyle: 'normal'  , 
  lineHeight: 'normal'  ,  
  textAlign: 'center'  , 
  padding:'16px',
  color: '#3a6eff'  , 
      "& span":{
        
        "fontSize": 14,
        }
    },
    h1:{
         fontSize : '24px',

         "&.main_heading-text":{
          color: 'black',
          padding: '16px'  , 
           fontSize : '24px',
          textAlign: 'left'  , 
          fontWeight: '500'  , 
          marginBottom: '0'  ,  
          paddingBottom: '0'  , 
          paddingLeft: '0'  , 
          paddingTop: '0'  , 
    marginTop: '12px'
         }
    },
    ".MuiDivider-root":{
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
      margin:'0 19px'
    }
  }, 
    
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: ' ',
    padding: '0',
    display: 'flex',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    },
    
    "& .fontSize20 span":{
      fontSize: '20px'
    },
    "&:.MuiPaper-rounded": {
      borderRadius: '8px'
  
    },
  }, 
  rootOne: {
    width: '100%',
    maxWidth: '100%',
    background: 'none',
    display: 'flex',
    
    margin: theme.spacing(0.5, 0),
    color: '#868686',
     fontSize:'12px!important',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    },
    boxShadow: 'none',
    "& li.MuiListItem-root":{
     
    padding: '0',
    }


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
    textAlign: 'center',
    flexWrap: 'wrap',
    borderRadius: '8px'

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
    margin: theme.spacing(1, 0, 1),
    width: '100%',
    borderRadius: '4px',
    padding: theme.spacing(1, 0, 1),
    "& span":{
     fontSize:'14px' 
    }
    
  
  },
 
    
  DialogContent: {
    flexWrap: 'wrap'
  },
 
  
  '& hr': {
    margin: theme.spacing(0, 0.5),
  }, 
  alignLeft:{
    textAlign:'left',
       boxShadow:'none'
  },
  paper: {
    width: '100%'
  },
  ListItem: {
    flexWrap: 'wrap',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "none"
    },
    paddingTop: '0'
  }
  ,
  '& hr': {
    margin: theme.spacing(0, 0.5),
  },
  topPaper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    background: 'none'
  }, 

  maxWidth150: {
    maxWidth: '150px'
  }, 
    maxWidth30: {
    maxWidth: '30px'
  }, 

  loadMain: {
    marginTop: '0px',
    padding: '0 20px',
    '& paper': {
      boxShadow: 'none',
      borderRadius: '0',
      border: '0',
      borderBottom: '1px solid #f2f2f2'
    }
  } 
}) ;

const FormDialog = Loadable({
  loader: () => import("./createGreenClustersDialog"),
  loading: Loading  
}); 
 
function Loading() {
  return <h3>Loading...</h3>;
}
  const AssignFeederTeams = Loadable({
      loader: () => import("./assignTeam"),
      loading: Loading  
    });  
    
class GCListlargeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open :false,
      setOpen: false,
      feederTeamData: {},

 }
 
  }
   handleDrawerOpen = () => {
    this.setState({ open: true }); 
  };
  handleDrawerOpen = () => {
    this.setState({ open: true }); 
  };
   handleDrawerClose = () => { 
    this.setState({ open: false });
  }; 
  setFeederTeamData = (data) => { 
    this.setState({ feederTeamData: data });
   
    console.log(this.state.feederTeamData)
  }; 
  render() {
    const { classes } = this.props;
    
  return (
    <React.Fragment>
      <div  className={" gridParent "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.alignLeft ,classes.topPaper].join( ' ')}>
    <h1 className="{ main_heading-text }">        Green Cluster</h1> </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper}>
            <FormDialog   varient="outlined"/></Paper>
          </Grid>

        </Grid>
      </div>
      <Paper className={classes.rootOne}>
        <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
          <ListItem    variant="raised">
            <ListItemText className={ " headingText " }  primary="Green Cluster" />
          </ListItem>
          
           
          <ListItem  className={ " alignCenter " }>
            <ListItemText className={ " headingText " }  primary="Feed Team" />
          </ListItem>

          <ListItem  className={ " alignCenter " } >
            <ListItemText className={ " headingText " }  primary="Driver" />
          </ListItem>
          
        </List>
      </Paper>
    
      <Paper className={classes.root}>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
     
          <ListItem   className={" flexWrapParent " } > 
          <div   className={ " maxWidth84 "}>
            <ListItemText  className={ " fontSize20 "} primary="01" />

          </div>
            <Divider orientation="vertical" /> 
          <div   className={" flexWrapParent " } > 
            <ListItemText primary="Locality"  className={ " wrappedListItemTop"} />
            <ListItemText primary="Area"   className={" wrappedListItem  greyText "} />
            </div>
          </ListItem>

 
          <ListItem    className={ " alignCenter " } >
            <Button variant="contained" color="primary" className={classes.button + " min-width-150 maxWidth150"}   onClick={this.handleDrawerOpen} >
              ASSIGN TEAM
      </Button>
          </ListItem>
          <ListItem   className={ " alignCenter " }  >
            <Button variant="contained" color="primary" className={classes.button + " min-width-150 maxWidth150"}  onClick={this.handleDrawerOpen} >
              ASSIGN DRIVER
      </Button>
          </ListItem>
 
        </List>

      </Paper>
      { (this.state.open) == true &&   <AssignFeederTeams open={this.state.open}  setFeederTeamData={() => this.setFeederTeamData} handleDrawerClose={this.handleDrawerClose}/>}
      { (this.state.openDriver) == true &&   <AssignDriver open={this.state.open}  handleDrawerClose={this.handleDrawerClose}/>}
    
    </React.Fragment>
  );
  }
}
export default withStyles(styles)( withRouter(GCListlargeScreen)); 

//function GCListlargeScreen() {
//   const classes = useStyles();
//   const buttonvarient = "outlined";
//   const history = useHistory(); onClick={() => { openAssignFTeamPopUp(history)}}
  
//   var openpopUp = false;
//   function openAssignFTeamPopUp(history){ 
//   return openpopUp = true;

// // history.push("/dashboard/Teams/")
// }

// }
