import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; 

import Grid from '@material-ui/core/Grid'; 
  
import { Paper } from '@material-ui/core'; 
const useStyles = makeStyles(theme => ({

  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
   
  },
  gridParent:{
    "& paper:":{
backgroundColor:'none',
      
    },
    "& h1.main_heading-text":{
        paddingBottom: '0px'
      }
      
  },
  rootOne: {
    width: '100%',
    maxWidth: '100%', 
    boxShadow:'none',
    
    display:'inline-block',
    padding:'0'
  },
  paper:{
      width:'50%',
      display:'inline-block'
  } ,
  button:{
  
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "none"
    } 
  },
  heightOne:{
      height:'1px',
      marginBottom: '15px'
  },
  
  alignLeft:{
    textAlign:'left',
       boxShadow:'none',
       backgroundColor: 'transparent'
  },
  topPaper:{
 backgroundColor: 'transparent',
 
 boxShadow:'none',
 backgroundColor: 'transparent',

 "& button":{
  
  [theme.breakpoints.down('sm')]: {
    width: '100%', margin: '10px',    marginLeft: '0px' ,    marginBottom: '30px',
  },
 }
 
  },
  wrappedListItem:{
    flex: '0 0 53%'
  },
  flexWrapParent:{

    flexWrap: 'wrap',    "& :first-of-type ":{
    "& span":{ 
      fontWeight:'700', 
   
    }
  }
  },
  maxWidth150:{
    maxWidth:'130px'
  },
  wrappedListItemTop:{
    fontWeight:'700',
     flex: '0 0 53%'
  } 
}));

export default function TeamListSmallScreen() {
  const classes = useStyles();
  const teamList = [1, 2, 3];
  const listItems = teamList.map(function (item) {
    return (

      <div key={item}>


      <Paper className={classes.rootOne}>
        <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
          <ListItem  variant="raised">
            <ListItemText className={classes.maxWidth150} primary="Green Cluster Id:" />
            <ListItemText className={ " headingText " }  primary="01" />
        
          </ListItem>
  <ListItem   > 
  <ListItemText className={classes.maxWidth150} primary="Location" />
  <div className={classes.flexWrapParent}>
<ListItemText primary="Indranagar"  className={ " wrappedListItemTop "} />
<ListItemText primary="1st Block"   className={" wrappedListItem "} />
</div>
</ListItem>
          <ListItem     variant="raised">
            <ListItemText className={classes.maxWidth150}  primary="Team Number" />
            <ListItemText className={ " headingText " }   primary="01" />
          </ListItem>
          <ListItem   variant="raised">
            <ListItemText className={classes.maxWidth150} primary="Total Feeders" />
            <div className={classes.flexWrapParent}>
<ListItemText primary="08"  className={ " wrappedListItemTop "} />
<ListItemText primary="Hansika Motvani"   className={" wrappedListItem "} />
</div>
          </ListItem>

          <ListItem   variant="raised">
            <ListItemText className={classes.maxWidth150} primary="Collection Days" />
            <ListItemText primary="  Mon, Wed, Fri" />
          </ListItem>
          <ListItem   variant="raised">

            <ListItemText className={classes.maxWidth150} primary="Repeat Days" />
            <ListItemText primary="0" />
          </ListItem>
        </List>
      </Paper>
    

        <div  className={" heightOne "} >
          &nbsp;
    </div>
      </div>
    );
  })
  return (
    <React.Fragment>
      <div  className={" gridParent "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.alignLeft }>  <h1 className="{ main_heading-text }">     Request</h1></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper}>
 </Paper>
          </Grid>

        </Grid>
      </div>
   {listItems}
    </React.Fragment>
   );
}
