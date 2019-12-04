import React from 'react';
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
    display: 'flex',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    },


  },
  button: {
    whiteSpace: 'nowrap',
    "& span": {
      whiteSpace: 'nowrap',
    },

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
    height: '1px'
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
    flex: '0 0 53%'
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
    flex: '0 0 53%',
    minWidth:'200px'
  }
}));

export default function Vehicle() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div  className={" gridParent "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.alignLeft, classes.topPaper}>
              <h1 className="{ main_heading-text }">     Request</h1> </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper}>
            </Paper>
          </Grid>

        </Grid>
      </div>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.rootOne}>
            <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
              <ListItem   variant="raised">
                <ListItemText  className={ " headingText " }  primary="Vehicle Details" />
              </ListItem>

              <ListItem variant="raised">
                <ListItemText  className={ " headingText " }  primary="Driver" />
              </ListItem>

            </List>
          </Paper>

          <Paper className={classes.root}>
            <List component="nav" className={classes.root} aria-label="mailbox folders">

              <ListItem className={classes.flexWrapParent} >

                <ListItemText primary=" JCB Garbage Collector" className={ " wrappedListItemTop "} />
                <ListItemText primary="KA 01" className={classes.wrappedListItem} />
              </ListItem>

              <ListItem  >
                <Button variant="contained" color="primary" className={classes.button}>
                  ASSIGN DRIVER
      </Button>
              </ListItem>
            </List>

          </Paper>

        </Grid>

      </Grid>
    </React.Fragment>
  );
}
