import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { Paper } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex', 
    "&:hover": {
        //you want this to be the same as the backgroundColor above display:'inline-block',
        backgroundColor: "none"
    }
  },
  rootOne: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex', 
    "&:hover": {
        //you want this to be the same as the backgroundColor above display:'inline-block',
        backgroundColor: "none"
    },
    boxShadow:'none',
    padding:'0'
  },
  paper:{
      width:'100%'
  },
  ListItem:{
    flexWrap:'wrap',
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "none"
    },
    paddingTop:'0'
  },
  button:{
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "none"
    },
    paddingTop:'0'
  },
  heightOne:{
      height:'1px'
  } 
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Paper className={classes.rootOne}>
    <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
      <ListItem button  className={classes.ListItem}>
        <ListItemText primary="Inbox" />
      </ListItem>
      
      <ListItem button  >
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem> 
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      
      <ListItem button  >
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem> 
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  </Paper>
  <div  className={classes.root} >
      &nbsp;
  </div>
  <Paper className={classes.root}>
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
    
      <ListItem button  >
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem> 
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
    
      <ListItem button  >
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem> 
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  </Paper>
  </React.Fragment>
  );
}
