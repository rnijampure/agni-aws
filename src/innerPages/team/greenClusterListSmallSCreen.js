import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid'; 
 
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import   FormDialog from './createGreenClustersDialog'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
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
      height:'1px'
  },
  
  alignLeft:{
    textAlign:'left',
       boxShadow:'none'
  },
  WrappedListItem:{
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
    maxWidth:'150px'
  },
  WrappedListItemTop:{
    fontWeight:'700',
     flex: '0 0 53%'
  } 
}));

export default function teamListSmallScreen() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.gridParent}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.alignLeft }>Request</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper}>
            <FormDialog/></Paper>
          </Grid>

        </Grid>
      </div>
      <Paper className={classes.rootOne}>
        <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
          <ListItem  variant="raised">
            <ListItemText className={classes.maxWidth150} primary="Green Cluster Id:" />
            <ListItemText className={classes.headingText} primary="01" />
        
          </ListItem>
  <ListItem   > 
  <ListItemText className={classes.maxWidth150} primary="Location" />
  <div className={classes.flexWrapParent}>
<ListItemText primary="Indranagar"  className={classes.WrappedListItemTop} />
<ListItemText primary="1st Block"  className={classes.WrappedListItem} />
</div>
</ListItem>
          <ListItem     variant="raised">
            <ListItemText className={classes.maxWidth150}  primary="Total Request" />
            <ListItemText className={classes.headingText}  primary="Total Request" />
          </ListItem>
          <ListItem   variant="raised">
            <ListItemText className={classes.maxWidth150} primary="Feed Team" />
            <Button variant="contained" color="primary" className={classes.button}>
              ASSIGN DRIVER
      </Button>
          </ListItem>

          <ListItem   variant="raised">
            <ListItemText className={classes.maxWidth150} primary="Driver" />
            <Button variant="contained" color="primary" className={classes.button}>
              ASSIGN DRIVER
      </Button>
          </ListItem>
          <ListItem   variant="raised">

            <ListItemText className={classes.maxWidth150} primary="Total Points" />
            <ListItemText primary="0" />
          </ListItem>
        </List>
      </Paper>
    

    </React.Fragment>
   );
}
