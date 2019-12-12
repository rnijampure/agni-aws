import React , { Suspense, lazy }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { useHistory } from "react-router-dom";
import { useStyles } from '../../commonStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';


export default function Assets() {
  const classes = useStyles(); 
  const history = useHistory(); 
const resisterVehicle = () => { 
  history.push("/dashboard/RegisterVehicle");
};

  return (
    <React.Fragment>
      <div  className={" gridParent "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.alignLeft, classes.topPaper}>
              <h1 className="{ main_heading-text }">     Assets</h1> </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper}>
            </Paper>
          </Grid>

        </Grid>
      </div>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
   
          <Paper className={classes.root+ " margin-bottom-5 "}>
            <List component="nav" className={classes.root}  onClick={() =>  resisterVehicle()} >

              <ListItem  >

                <ListItemText primary="Vehicles" />
                <ListItemText primary=" " />
              </ListItem>
 
            </List>

          </Paper>
          <Paper className={classes.root + " margin-bottom-5 "}>
            <List component="nav" className={classes.root} >

              <ListItem  >

                <ListItemText primary="Ecumenist" />
                <ListItemText primary=" " />
              </ListItem>
 
            </List>

          </Paper>
          <Paper className={classes.root + " margin-bottom-5 "}>
            <List component="nav" className={classes.root} >

              <ListItem  >

                <ListItemText primary="Machine Details" />
                <ListItemText primary=" " />
              </ListItem>
 
            </List>

          </Paper>

        </Grid>
        

      </Grid>
    </React.Fragment>
  );
}
