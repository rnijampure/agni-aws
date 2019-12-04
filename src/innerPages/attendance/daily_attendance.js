import React from 'react';

import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { styles } from '../../commonStyles.js';
import './team.css';



class DailyAttendance extends React.Component {

  showPastAttendance = () => { 
    this.props.history.push("/dashboard/PastAttendance");
  };




  render() {
    const { classes } = this.props;


    return (<React.Fragment>


      <div>
 
      
        <Grid container spacing={3} id="daily-attendence">
          <div className={" gridParent  border-bottom-gery margin-top-40"}>
             <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}>
                  <h1 className="{ main_heading-text }">       Attendance</h1> </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.topPaper}>
                <Button variant="outlined"  color="primary" onClick={() => this.showPastAttendance()}>
      PAST ATTENDANCE
      </Button>

                </Paper>
              </Grid>

            </Grid>   
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <Paper className={[classes.alignLeft, classes.topPaper+ " padding-top-0 "].join(' ')}>
                  <h2 className="{ main_heading-text }">       Today 10 Dec 2019</h2> </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.topPaper}></Paper>
              </Grid>

            </Grid>
          </div>
          <Grid item xs={12} sm={4}>
            <Paper className={[classes.paper + " headerMain primary-heading margin-bottom-ten", classes.nobackground].join(' ')}>
              <div className={" greyText"}>Feeder
                </div>
              <div className={" alignRight "}>  Team: 01
                </div>
            </Paper>
            <Paper className={classes.paper + " margin-bottom-5 "}>
              <List component="nav" className={classes.root} >
                <ListItem   className={" flexWrapParent    " }  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street"   className={" wrappedListItem  greyText "}/>
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem   className={" flexWrapParent  alignRight " }  >
                  <ListItemText primary="Present" className={[classes.greenClass  + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM"  className={" wrappedListItem alignRight greyText "}/>

                </ListItem>

              </List>
            </Paper>
            <Paper className={classes.paper + " margin-bottom-5 "}>
              <List component="nav" className={classes.root} >
                <ListItem   className={" flexWrapParent    " }  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street"   className={" wrappedListItem  greyText "}/>
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem   className={" flexWrapParent  alignRight " }  >
                  <ListItemText primary="Present" className={[classes.greenClass  + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM"  className={" wrappedListItem alignRight greyText "}/>

                </ListItem>

              </List>
            </Paper>
            <Paper className={classes.paper + " margin-bottom-5 "}>
              <List component="nav" className={classes.root + "  "} >
                <ListItem   className={" flexWrapParent    " }  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street"   className={" wrappedListItem  greyText "}/>
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem   className={" flexWrapParent  alignRight " }  >
                  <ListItemText primary="Present" className={[classes.greenClass  + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM"  className={" wrappedListItem alignRight greyText "}/>

                </ListItem>

              </List>
            </Paper>
            <Paper className={[classes.paper + " headerMain primary-heading margin-bottom-ten margin-top-40", classes.nobackground].join(' ')}>
              <div className={" greyText"}>Feeder
                </div>
              <div className={" alignRight "}>  Team: 01
                </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={[classes.paper + " headerMain margin-bottom-ten", classes.nobackground].join(' ')}>

              <div  className={ "  lighter-text  greyText"}>Feeder
           </div>
              <div className={" align-right "}>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <List component="nav" className={classes.root + "  "} >
                <ListItem   className={" flexWrapParent    " }  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street"   className={" wrappedListItem  greyText "}/>
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem   className={" flexWrapParent  alignRight " }  >
                  <ListItemText primary="Present" className={[classes.greenClass  + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM"  className={" wrappedListItem alignRight greyText "}/>

                </ListItem>

              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={[classes.paper + " headerMain margin-bottom-ten", classes.nobackground].join(' ')}>

              <div className={ "  lighter-text  greyText"}>Driver
           </div>
              <div className={" align-right "}>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <List component="nav" className={classes.root + "  "} >
                <ListItem   className={" flexWrapParent    " }  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street"   className={" wrappedListItem  greyText "}/>
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem   className={" flexWrapParent  alignRight " }  >
                  <ListItemText primary="Present" className={[classes.greenClass  + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM"  className={" wrappedListItem alignRight greyText "}/>

                </ListItem>

              </List>
            </Paper>
          </Grid>
        </Grid>

      </div>






    </React.Fragment>
    )
  }
}

export default withStyles(styles)(DailyAttendance); 