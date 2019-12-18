import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; 

import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useStyles } from '../../commonStyles.js'; 
import Grid from '@material-ui/core/Grid'; 
import { Paper } from '@material-ui/core'; 
import getPoints from './getPoints.js';

  

export default function PointList() {
  const classes = useStyles();
  const teamList = [1, 2, 3];  
    const history = useHistory();
    function getPointsList ()  {
    

   history.push("/dashboard/PointStatement");
  };
  const listItems = teamList.map(function (object,item) {
    return (

 
    
           <List component="nav" key={item} className={classes.root + "  border-bottom-gery margin-0-17  "} aria-label="mailbox folders">
            <ListItem className={ " alignLeft "} >
              <ListItemText primary="01/12/2019" />
 
            </ListItem>
            <ListItem  className={ " alignLeft "}  >

              <ListItemText primary="Description" className={ " wrappedListItemTop "} /> 
            </ListItem>

            <ListItem  className={ " alignLeft "}  >
              <ListItemText primary="1000Pts" />
            </ListItem>
            <ListItem className={classes.flexWrapParent} >

           
              <ListItemText primary="1000Pts"  />
            </ListItem>
            <ListItem className={ " alignRight " } >

              <ListItemText primary="5642154Pts"  className={ " alignRight " } />
            </ListItem>

         
          </List> 
       
    );   
  })
  return (
    <React.Fragment>
      <div  className={" gridParent "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}><h1 className="{ main_heading-text }">     Point Transacions</h1>
            <h2 className={ "  small-heading alignLeft "}>Point Balance: 45124568 Pt</h2>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Paper className={classes.topPaper + " margin-top-30 "}>
              <Button variant="outlined" color="primary" onClick={() => getPointsList()}>
                GET POINTS
      </Button>

            </Paper>
          </Grid>

        </Grid>

      </div>
      <Paper className={classes.rootOne}>
        <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
          <ListItem   variant="raised">
            <ListItemText className={ " headingText alignLeft padding-left-16" }  primary="Date" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText className={ " headingText alignLeft padding-left-16" }  primary="Description" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText className={ " headingText alignLeft padding-left-16" }  primary="WithDrawal Points" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText className={ " headingText alignLeft padding-left-16" }  primary="Deposit Points" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText className={ " headingText alignRight padding-left-16" }  primary="Collection Days" />
          </ListItem>
 

        </List>
      </Paper>
      <Paper className={classes.root} style={{flexWrap:'wrap', width: '100%'}}> 
      {listItems}
      </Paper>
    </React.Fragment>
  );
}