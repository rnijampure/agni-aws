import React  from 'react'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid'; 
import { Paper } from '@material-ui/core'; 

import {useStyles} from '../../commonStyles.js';
 

export default function TeamListLargeSreen() {
  const classes = useStyles();
  const teamList = [1, 2, 3];
  const listItems = teamList.map(function (item) {
    return (

      <div key={item}>

        <Paper className={classes.root}>
          <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem className={classes.maxWidth150}>
              <ListItemText primary="01" />

              <Divider orientation="vertical" />
            </ListItem>
            <ListItem className={classes.flexWrapParent} >

              <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
              <ListItemText primary="1st Block" className={classes.wrappedListItem} />
            </ListItem>

            <ListItem  >
              <ListItemText primary="01" />
            </ListItem>
            <ListItem className={classes.flexWrapParent} >

              <ListItemText primary="08" className={ " wrappedListItemTop "} />
              <ListItemText primary="Hansika Motvani" className={classes.wrappedListItem} />
            </ListItem>
            <ListItem  >

              <ListItemText primary="Mon, Wed, Fri" />
            </ListItem>

            <ListItem  >

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
            <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}><h1 className="{ main_heading-text }">     Request</h1></Paper>
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
            <ListItemText  className={ " headingText " }  primary="  " />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText  className={ " headingText " }  primary="Team Number" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText  className={ " headingText " }  primary="Total Feeders" />
          </ListItem>
          <ListItem variant="raised">
            <ListItemText  className={ " headingText " }  primary="Collection Days" />
          </ListItem>

          <ListItem variant="raised">
            <ListItemText  className={ " headingText " }  primary="Repeat Days" />
          </ListItem>

        </List>
      </Paper>
      {listItems}
    </React.Fragment>
  );
}