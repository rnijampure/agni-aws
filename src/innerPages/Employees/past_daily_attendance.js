import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { DatePicker } from "@material-ui/pickers";
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
import spinner from '../../images/Spinner-1s-60px.gif';

import arrow from '../../images/arrow-back.png';

class PastAttendance extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: this.GetFormattedDate(new Date('2019-08-18T21:11:54')),
      selectedEndDate: this.GetFormattedDate(new Date('2019-08-18T21:11:54'))
    }






  };
  searchPastAttendace() {

  }
  GetFormattedDate(date) {
    var todayTime = date;
    //var month =  date.getMonth() + 1 ;
    var month = date.toLocaleString('default', { month: 'short' });
    var day = date.getDate();
    var year = date.getFullYear();
    return month + " " + day + " " + year;

  }
  handleDateStartDateChange = date => {
    const selectedStartDate = this.state.selectedStartDate || "No Start Date Selected";
    const formattedDate = this.GetFormattedDate(date)

    this.setState({
      selectedStartDate: formattedDate,
    })

    if (date == null) {
      this.setState({
        selectedEndDate: formattedDate,
      })
    }
  }
  handleDateEndDateChange = date => {
    const selectedStartDate = this.state.selectedStartDate || "No Start Date Selected";
    const formattedDate = this.GetFormattedDate(date)
    this.setState({
      selectedEndDate: formattedDate,
    })
    if (date == null) {

      this.setState({
        selectedEndDate: formattedDate,
      })

    }
  }
  render() {
    const { classes } = this.props;

    const dateRange = this.state.selectedStartDate + " - " + this.state.selectedEndDate;
    return (<React.Fragment>


      <div>


        <Grid container spacing={3} id="daily-attendence">
          <div className={" gridParent  border-bottom-gery margin-top-40"}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}>
                  <h1 className="{ main_heading-text }" onClick={this.props.history.goBack} >  <img className={classes.img} alt="Back" src={arrow} />  Past   Attendance</h1> </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.topPaper}>

                </Paper>
              </Grid>

            </Grid>

            <Grid container spacing={2}>

              <Grid item xs={12} sm={2} className={" margin-top-40 "}>
                <Paper className={classes.nobackground + " alignLeft padding-left-20 line-hight-35"}>
                  Select a Period: </Paper>
              </Grid>
              <Grid item xs={12} sm={2} className={classes.nobackground + "   line-hight-35 maxWidth100"}>
                <Paper className={classes.nobackground + " alignRight line-hight-35 maxWidth100"}>  From: </Paper>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Paper className={classes.nobackground + " min-width-150 "}>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className={classes.nobackground + " min-width-150 "}
                      value={this.state.selectedStartDate}
                      placeholder="10/10/2018"
                      onChange={date => this.handleDateStartDateChange(date)}

                      format="dd/MM/yyyy"
                    />
                  </MuiPickersUtilsProvider>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={2} className={classes.nobackground + " alignRight line-hight-35 maxWidth100"}>
                <Paper className={classes.nobackground + " alignRight line-hight-35 maxWidth100"}>  To:</Paper>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Paper className={classes.nobackground + " min-width-150 "}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className={classes.nobackground + " min-width-150 "}
                      value={this.state.selectedEndDate}
                      placeholder="10/10/2018"
                      onChange={date => this.handleDateEndDateChange(date)}
                      disableFuture
                      format="dd/MM/yyyy"
                    />
                  </MuiPickersUtilsProvider>

                </Paper>
              </Grid>
              <Grid item xs={12} sm={2} className={" alignRight "}>
                <Button variant="contained" color="primary" onClick={this.searchPastAttendace()}>
                  SUBMIT
      </Button>
                <img className={classes.img + "  position-absolute "} alt="complex" src={spinner} />
              </Grid>


            </Grid>
            <Grid container spacing={3} className={" margin-top-40 "}>

              <Grid item xs={12}>
                <Paper className={[classes.alignLeft, classes.nobackground + " flexAlignLeft  padding-bottom-0 "].join(' ')}>
                  <List component="nav" className={classes.root + " width-100  padding-left-0 flexAlignLeft"} >
                    <ListItem className={" flexWrapParent  flexAlignLeft"}  >
                      <ListItemText primary={dateRange} className={"  flexAlignLeft  "} />
                    </ListItem>
                  </List>

                </Paper>
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
                <ListItem className={" flexWrapParent    "}  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street" className={" wrappedListItem  greyText "} />
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem className={" flexWrapParent  alignRight "}  >
                  <ListItemText primary="Present" className={[classes.greenClass + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM" className={" wrappedListItem alignRight greyText "} />

                </ListItem>

              </List>
            </Paper>
            <Paper className={classes.paper + " margin-bottom-5 "}>
              <List component="nav" className={classes.root} >
                <ListItem className={" flexWrapParent    "}  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street" className={" wrappedListItem  greyText "} />
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem className={" flexWrapParent  alignRight "}  >
                  <ListItemText primary="Present" className={[classes.greenClass + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM" className={" wrappedListItem alignRight greyText "} />

                </ListItem>

              </List>
            </Paper>
            <Paper className={classes.paper + " margin-bottom-5 "}>
              <List component="nav" className={classes.root + "  "} >
                <ListItem className={" flexWrapParent    "}  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street" className={" wrappedListItem  greyText "} />
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem className={" flexWrapParent  alignRight "}  >
                  <ListItemText primary="Present" className={[classes.greenClass + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM" className={" wrappedListItem alignRight greyText "} />

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

              <div className={"  lighter-text  greyText"}>Feeder
           </div>
              <div className={" align-right "}>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <List component="nav" className={classes.root + "  "} >
                <ListItem className={" flexWrapParent    "}  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street" className={" wrappedListItem  greyText "} />
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem className={" flexWrapParent  alignRight "}  >
                  <ListItemText primary="Present" className={[classes.greenClass + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM" className={" wrappedListItem alignRight greyText "} />

                </ListItem>

              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={[classes.paper + " headerMain margin-bottom-ten", classes.nobackground].join(' ')}>

              <div className={"  lighter-text  greyText"}>Driver
           </div>
              <div className={" align-right "}>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <List component="nav" className={classes.root + "  "} >
                <ListItem className={" flexWrapParent    "}  >
                  <ListItemText primary="Rahul Mahajan" className={"   "} />
                  <ListItemText primary="High Street" className={" wrappedListItem  greyText "} />
                </ListItem>
              </List>
              <List component="nav" className={" right_side_div  alignRight " + classes.root} >
                <ListItem className={" flexWrapParent  alignRight "}  >
                  <ListItemText primary="Present" className={[classes.greenClass + "   alignRight lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM" className={" wrappedListItem alignRight greyText "} />

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

export default withStyles(styles)(PastAttendance); 