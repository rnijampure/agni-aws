import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; 

import Grid from '@material-ui/core/Grid'; 
import { Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: ' ',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '10px',
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
  
  alignRight: {
    textAlign: 'right',
    alignItems: 'flex-end!important'
  },
  alignCenter: {
    textAlign: 'center',
    alignItems: 'center!important'
  },
  marginBottom20:{
      marginBottom: '30px'
  }
  ,paddingBottom20:{
      paddingBottom: '20px'
  }
  ,
  wrappedListItem: {
    flex: '0 0 53%'
  },
  flexWrapParent: {

    flexWrap: 'wrap',
     "& :first-of-type ": {
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
  flexColunmDiv:{
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
  }
  ,
  fullWidthDiv:{ 
    flexDirection:'row',
    width:'100%',
    marginBottom: '20px'
  },
  fullWidthDivContainer:{ 
    flexWrap:'wrap',
    width:'100%',
  }

}));

export default function VendorRequests() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div  className={" gridParent "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}>
              <h1 className="{ main_heading-text }">     Vendors</h1> </Paper>
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
                <ListItemText className={ " headingText " }  primary="Vendor Name and  Details" />
              </ListItem>

              

            </List>
          </Paper>

          <Paper className={[classes.root, classes.marginBottom20].join(' ')}>
            <List component="nav" className={classes.root } aria-label="mailbox folders">

              <ListItem className={[ " flexWrapParent " +  classes.flexColunmDiv].join(' ')} >

                <ListItemText primary=" JCB Garbage Collector" className={ " wrappedListItemTop "} />
                <ListItemText primary="KA 01" className={ " wrappedListItem greyText " } />
              </ListItem>

              <ListItem   className={[classes.flexColunmDiv , classes.alignRight  + " greyText "].join(' ')} >
                    <Typography>Date and Time</Typography>
              </ListItem>
            </List>
            <List component="nav" className={classes.root} aria-label="mailbox folders">

 
              <ListItem   className={classes.fullWidthDivContainer}>
              <Grid container  className={[classes.fullWidthDiv + " greyText " +  classes.paddingBottom20 + " border-bottom-grey "].join(' ')} >

<Grid item  sm={4}>
    Resource
       </Grid>
       <Grid item   sm={4} className={ classes.alignCenter}>
    Weight
       </Grid>
       <Grid item   sm={4} className={ classes.alignRight}>
    Price
       </Grid>

      </Grid>
      <Grid container   className={classes.fullWidthDiv} >

<Grid item  sm={4}>
    Resource 1
       </Grid>
       <Grid item   sm={4} className={ classes.alignCenter}>
   200 Kg
       </Grid>
       <Grid item   sm={4}  className={ classes.alignRight}>
       &#8377; 24565658
       </Grid>

      </Grid>
      <Grid container   className={classes.fullWidthDiv} >

<Grid item  sm={4}>
    Resource 1
       </Grid>
       <Grid item   sm={4} className={ classes.alignCenter}>
   200 Kg
       </Grid>
       <Grid item   sm={4}  className={ classes.alignRight}>
       &#8377; 24565658
       </Grid>

      </Grid>
              </ListItem>
            </List>

          </Paper>
          <Paper className={[classes.root, classes.marginBottom20].join(' ')}>
            <List component="nav" className={classes.root } aria-label="mailbox folders">

              <ListItem className={[classes.flexWrapParent , classes.flexColunmDiv].join(' ')} >

                <ListItemText primary=" JCB Garbage Collector" className={ " wrappedListItemTop "} />
                <ListItemText primary="KA 01" className={[classes.wrappedListItem, ].join(' ')} />
              </ListItem>

              <ListItem   className={[classes.flexColunmDiv , classes.alignRight   + " greyText "].join(' ')} >
                    <Typography>Date and Time</Typography>
              </ListItem>
            </List>
            <List component="nav" className={classes.root} aria-label="mailbox folders">

 
              <ListItem   className={classes.fullWidthDivContainer}>
              <Grid container  className={[classes.fullWidthDiv  + " greyText " + classes.paddingBottom20 + " border-bottom-grey "].join(' ')} >

<Grid item  sm={4}>
    Resource
       </Grid>
       <Grid item   sm={4} className={ classes.alignCenter}>
    Weight
       </Grid>
       <Grid item   sm={4} className={ classes.alignRight}>
    Price
       </Grid>

      </Grid>
      <Grid container   className={classes.fullWidthDiv} >

<Grid item  sm={4}>
    Resource 1
       </Grid>
       <Grid item   sm={4} className={ classes.alignCenter}>
   200 Kg
       </Grid>
       <Grid item   sm={4}  className={ classes.alignRight}>
       &#8377; 24565658
       </Grid>

      </Grid>
      <Grid container   className={classes.fullWidthDiv} >

<Grid item  sm={4}>
    Resource 1
       </Grid>
       <Grid item   sm={4} className={ classes.alignCenter}>
   200 Kg
       </Grid>
       <Grid item   sm={4}  className={ classes.alignRight}>
       &#8377; 24565658
       </Grid>

      </Grid>
              </ListItem>
            </List>

          </Paper>

        </Grid>

      </Grid>
    </React.Fragment>
  );
}
