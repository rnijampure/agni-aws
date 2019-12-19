import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'
import arrow from '../../images/arrow-back.png';
import { useStyles } from '../../commonStyles.js';
import './load.css';



export default function LoadListLargeSreen() {
  const classes = useStyles();
  const history = useHistory()
  const teamList = [1, 2, 3];
  const listItems = teamList.map(function (item, index) {
    return (

      <div key={item}>

        <Paper className={classes.root}>
          <List component="nav" className={classes.root} aria-label="mailbox folders">

            <ListItem className={" flexWrapParent "} >
              <div className={" maxWidth84 "}>
                <ListItemText className={" fontSize20 "} primary={index} />

              </div>
              <Divider orientation="vertical" />
              <div className={" flexWrapParent  padding-left-0"} >
                <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop padding-left-0"} />
                <ListItemText primary="Area" className={" wrappedListItem  greyText "} />
              </div>
            </ListItem>

            <ListItem className={"  flexWrapParent padding-left-0 padding-right-0 "}  >

              <ListItemText primary="Team Number" className={" wrappedListItemTop padding-left-0 padding-right-0"} />
              <ListItemText primary="Leader Name" className={" wrappedListItemBigger  padding-left-0 padding-right-0"} />
            </ListItem>

            <ListItem className={classes.alignRight + "  padding-left-0 "} >

              <ListItemText primary="2220 Pts" />
            </ListItem>
          </List>

        </Paper>

        <div className={" heightOne "} >
          &nbsp;
    </div>
      </div>
    );
  }) 
  const LoadItems = teamList.map(function (item, index) {
    return (

      <div key={item}  className={ " margin-top-30 " } >

<Typography className={" blackText "}> Load {index}</Typography>
      <Paper className={classes.rootOne}>
        <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
          <ListItem variant="raised">
            <ListItemText className={" headingText "} primary="Driver" />
          </ListItem>

          <ListItem variant="raised">
            <ListItemText className={" headingText "} primary=" " />
          </ListItem>


          <ListItem className={" alignLeft padding-left-0"} >
            <ListItemText className={" headingText  padding-left-0 "} primary="Total Load Points" />
          </ListItem>
        </List>
      </Paper>
      <Paper className={classes.loadMain} id="load-main">
        <div className={" gridParent "} >
          <Grid container spacing={3} className={" border-bottom-grey "}>

            <Grid item xs={12} sm={6}>
              <ListItem className={"  flexWrapParent "}  >

                <ListItemText primary="Name" className={" wrappedListItemTop "} />
                <ListItemText primary="Vehicle Number" className={" wrappedListItemBigger  "} />
              </ListItem>  </Grid>
            <Grid item xs={12} sm={6} className={classes.alignRight}>
              <Typography> </Typography>
            </Grid>

          </Grid>

        </div>
        <Paper className={classes.rootOne}>
          <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
            <ListItem ariant="raised">
              <ListItemText className={" headingText "} primary="Green Cluster" />
            </ListItem>


            <ListItem variant="raised">
              <ListItemText className={" headingText "} primary="Feed Team" />
            </ListItem>

            <ListItem variant="raised" className={classes.alignRight} >
              <ListItemText className={" headingText "} primary="Total Points" />
            </ListItem>

          </List>
        </Paper>
        {listItems}
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.topPaper + " alignLeft  border-0 "].join(' ')}>
              <Button variant="outlined" color="primary" className={classes.button + " maxWidth150 "}>
                REPORT
      </Button>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper + " border-0 small-heading blackText"}> Total points to send: 8000 Pts
  <Button variant="contained" color="primary" className={classes.button + " maxWidth150 margin-left-40"} >
                SEND POINTS
      </Button>
            </Paper>
          </Grid>

        </Grid>
      </Paper>
   
      </div>
    );
  })
  return (
    <React.Fragment>
      <div className={" gridParent "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.alignLeft, classes.topPaper + "  padding-left-0 "].join(' ')}>
              <h1 className={" main_heading-text padding-left-0"} onClick={history.goBack} >  <img className={classes.img} alt="Back" src={arrow} />  Back</h1> </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper}>

            </Paper>
          </Grid>

        </Grid>


      </div>
      <Grid container spacing={3}>

<Grid item xs={12}>
      {LoadItems}
      </Grid>
      </Grid>
      </React.Fragment>
  );
}