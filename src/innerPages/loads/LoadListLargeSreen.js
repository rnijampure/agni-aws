import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import {useStyles} from '../../commonStyles.js';
import './load.css';



export default function LoadListLargeSreen() {
  const classes = useStyles();
  
  const teamList = [1, 2, 3];
  const listItems = teamList.map(function (item) {
    return (

      <div key={item}>

        <Paper className={classes.root}>
          <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem className={classes.maxWidth84}>
              <ListItemText primary="01" />

              <Divider orientation="vertical" />
            </ListItem>
            <ListItem className={ "  flexWrapParent "}  >

              <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
              <ListItemText primary="1st Block" className={ " wrappedListItemBigger  "} />
            </ListItem>

            <ListItem className={ "  flexWrapParent "}  >

              <ListItemText primary="Team Number" className={ " wrappedListItemTop "} />
              <ListItemText primary="Leader Name" className={ " wrappedListItemBigger  "} />
            </ListItem>

            <ListItem className={classes.alignRight} >

              <ListItemText primary="2220 Pts" />
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
        <Grid container spacing={3} >

          <Grid item xs={12} sm={6} style={{paddingBottom:'0'}}>
            <ListItem className={ "  flexWrapParent "}  style={{paddingBottom:'0'}} >

              <ListItemText primary="Name" className={ " wrappedListItemTop "} />
              <ListItemText primary="Vehicle Name" className={ " wrappedListItemBigger  "} />
            </ListItem>  </Grid>
          <Grid item xs={12} sm={6} className={[classes.alignRight, classes.bottomAlignContent].join(' ')}>
            <Typography>Total lead Points</Typography>
          </Grid>

        </Grid>

      </div>
      <Paper className={classes.loadMain} id="load-main">
        <div  className={" gridParent "} >
          <Grid container spacing={3} className={" border-bottom-grey "}>

            <Grid item xs={12} sm={6}>
              <ListItem className={ "  flexWrapParent "}  >

                <ListItemText primary="Team Number" className={ " wrappedListItemTop "} />
                <ListItemText primary="Leader Name" className={ " wrappedListItemBigger  "} />
              </ListItem>  </Grid>
            <Grid item xs={12} sm={6} className={classes.alignRight}>
              <Typography>8000 Pts</Typography>
            </Grid>

          </Grid>

        </div>
        <Paper className={classes.rootOne}>
          <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
            <ListItem className={classes.maxWidth150} variant="raised">
              <ListItemText className={ " headingText " }  primary="Green Cluster" />
            </ListItem>
            <ListItem variant="raised">
              <ListItemText className={ " headingText " }  primary="  " />
            </ListItem>

            <ListItem variant="raised">
              <ListItemText className={ " headingText " }  primary="Feed Team" />
            </ListItem>

            <ListItem variant="raised" className={classes.alignRight} >
              <ListItemText className={ " headingText " }  primary="Total Points" />
            </ListItem>

          </List>
        </Paper>
        {listItems}
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.topPaper + " alignLeft "].join(' ')}>
              <Button variant="outlined" color="primary" className={classes.button}>
                REPORT
      </Button>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper}> Total points to send: 8000 Pts
  <Button variant="contained" color="primary" className={classes.button} style={{ marginLeft: '10px' }}>
                SEND POINTS
      </Button>
            </Paper>
          </Grid>

        </Grid>
      </Paper>
    </React.Fragment>
  );
}