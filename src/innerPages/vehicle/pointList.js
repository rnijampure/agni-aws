import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core'; 
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: ' ',
    padding: '0',
    display: 'flex',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    }
  },
  rootOne: {
    width: '100%',
    maxWidth: '100%',
    background: 'none',
    display: 'flex',
    color: '#868686',
    fontSize: '12px!important',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    },
    boxShadow: 'none',
    padding: '0',

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
  },
  heightOne: {
    height: '10px',
    padding: '0',
    margin: '0'
  }
  ,
  '& hr': {
    margin: theme.spacing(0, 0.5),
  },
  gridParent: {
    flexGrow: '1 1',
    marginBottom: '20px',
    border: 'none',
    boxShadow: 'none',
    width: '100%'
  },
  headingText: {
    fontSize: '12px',
  },
  topPaper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    background: 'none'
  },
  alignLeft: {
    textAlign: 'left',
    boxShadow: 'none'
  },
  wrappedListItem: {
    flex: '0 0 73%',
    color: '#868686'
  },
  flexWrapParent: {

    flexWrap: 'wrap', "& :first-of-type ": {
      "& span": {
        fontWeight: '700',

      }
    }
  },
  maxWidth150: {
    maxWidth: '150px'
  },
  wrappedListItemTop: {
    fontWeight: '700',
    flex: '0 0 53%'
  }, 
}));



export default function PointList() {
  const classes = useStyles();
  const teamList = [1, 2, 3];  
  
  const listItems = teamList.map(function (item) {
    return (

      <React.Fragment>
    
          <List component="nav" key={item} className={classes.root} aria-label="mailbox folders">
            <ListItem >
              <ListItemText primary="01/12/2019" />
 
            </ListItem>
            <ListItem  >

              <ListItemText primary="Description" className={ " wrappedListItemTop "} /> 
            </ListItem>

            <ListItem  >
              <ListItemText primary="1000Pts" />
            </ListItem>
            <ListItem className={classes.flexWrapParent} >

           
              <ListItemText primary="1000Pts"  />
            </ListItem>
            <ListItem  >

              <ListItemText primary="5642154Pts" />
            </ListItem>

         
          </List>

      

        <div  className={" heightOne "} >
          &nbsp;
    </div>
  </React.Fragment>
    );   
  })
  return (
    <React.Fragment>
      <div  className={" gridParent "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}><h1 className="{ main_heading-text }">     Point Transacions</h1>
            <p>Point Balance: 45124568 Pt</p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
 
          </Grid>

        </Grid>

      </div>
      <Paper className={classes.rootOne}>
        <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
          <ListItem className={classes.maxWidth150} variant="raised">
            <ListItemText  className={ " headingText " }  primary="Green Cluster" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText  className={ " headingText " }  primary="Description" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText  className={ " headingText " }  primary="WithDrawal Points" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText  className={ " headingText " }  primary="Deposit Poinst" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText  className={ " headingText " }  primary="Collection Days" />
          </ListItem>
 

        </List>
      </Paper>
      <Paper className={classes.root} style={{flexWrap:'wrap'}}> 
      {listItems}
      </Paper>
    </React.Fragment>
  );
}