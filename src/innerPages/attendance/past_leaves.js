import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Tooltip from '@material-ui/core/Tooltip';
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

class PastLeaves extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: this.GetFormattedDate(new Date('2019-08-18T21:11:54')),
      selectedEndDate: this.GetFormattedDate(new Date('2019-08-18T21:11:54')),
      LeaveReqList: [1, 2, 3, 4, 5],
      ApproveReqList: [1,2],
      DeniedList: [1,2,3],
      leaveStatus: "APPROVED"
    }
    this._nodes = new Map()
    this._handleClick = this.handleClick.bind(this);





  };
  searchPastAttendace() {

  }
  
  handleFocus(event) {
    event.target.focus()
  }

  handleClick(e, i) {
    var target = e.target || e.srcElement;
    console.log(target.parentNode.nodeName);
    const node = this._nodes.get(i);
    if (target.parentNode.nodeName == "BUTTON" && target.parentNode.classList.contains("approve_btn")) {


      this.state.LeaveReqList.splice(i, 1);
      this.state.ApproveReqList.push(this.state.LeaveReqList.splice(i, 1));
      this.setState({
        LeaveReqList: this.state.LeaveReqList,
        ApproveReqList: this.state.ApproveReqList,
        leaveStatus: "APPROVED"
      })
    }
    if (target.parentNode.nodeName == "BUTTON" && target.parentNode.classList.contains("deny_btn")) {

      this.state.LeaveReqList.splice(i, 1);
      this.state.DeniedList.push(this.state.LeaveReqList.splice(i, 1));
      this.setState({
        LeaveReqList: this.state.LeaveReqList,
        DeniedList: this.state.DeniedList,
        leaveStatus: "REJECTED"
      })
    }
    if (target.parentNode.nodeName != "BUTTON") {
      return
    }



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


      <div id="past_leaves_main">


        <Grid container spacing={3}>
          <div className={" gridParent  border-bottom-gery margin-top-40"}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}>
                  <h1 className="{ main_heading-text }" onClick={this.props.history.goBack} >  <img className={classes.img} alt="Back" src={arrow} />  Past   Leave</h1> </Paper>
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
          <Grid container spacing={2} id="approve_leaves_div">
          <Grid item id="All_leaves" xs={12} sm={6}>

            <Paper className={[classes.paper, classes.topPaper  + "  alignLeft  blackText"].join(' ')}>    Approved Requests ({this.state.ApproveReqList.length })
 

            </Paper>
            {this.state.ApproveReqList.map((el, i) => (
              <Paper key={i} className={classes.paper} id={i} ref={c => this._nodes.set(i, c)} >
                <Tooltip title="Leave Approved    " aria-label="add">
                  <List component="nav"  className={classes.root + "  border-bottom-gery  "}  aria-label="mailbox folders" >
                  <ListItem   className={" flexWrapParent    " }  >
                      <ListItemText primary="ID and Name" className={" wrappedListItemTop alignLeft"} />
                      <ListItemText primary="12 wed 2019" className={" wrappedListItem  greyText alignLeft "} />
                    </ListItem>
                    <ListItem className={"hideme "} >
                      <Button color="primary" disabled className={["  approved_btn approval_status greenClassBtn" ].join(' ')}>
                        APPROVED
</Button>
              
                      
                    </ListItem>
                  </List>
                </Tooltip>
                <List component="nav" className={classes.root + "  border-bottom-gery  "} aria-label="Approve Reject Leaves">
                    <ListItem   className={" flexWrapParent   width-100 " }  >
                      <ListItemText primary="Team and Cluster" className={" wrappedListItemTop greyText alignLeft"} />
                      <ListItemText primary="Reason" className={" wrappedListItem  greyText alignLeft "} />
                    </ListItem>
                    <ListItem className={"hideme "} >
 
                    </ListItem>

                  </List>
              </Paper>

            ))}

            {(this.state.LeaveReqList.length) == 0 &&
              <Paper className={classes.paper} style={{ minHeight: '80px' }}>

                <p>
                  You have no more leave requests
      </p>
              </Paper>
            }
          </Grid>

          <Grid item id="All_leaves" xs={12} sm={6}>
            <Paper className={[classes.paper, classes.topPaper  + "  alignLeft  blackText"].join(' ')}> Denied Leaves ( {this.state.DeniedList.length})  </Paper>
         
            {this.state.DeniedList.map((el, i) => (


<Paper key={i} className={" denied_list " + classes.paper} id={i} ref={c => this._nodes.set(i, c)} onClick={e => this.handleClick(e, i)}
>

  <Tooltip title="Leave Rejected" aria-label="add">
  <List component="nav"  className={classes.root + "  border-bottom-gery  "}  aria-label="mailbox folders" >
                  <ListItem   className={" flexWrapParent    " }  >
                      <ListItemText primary="ID and Name" className={" wrappedListItemTop alignLeft"} />
                      <ListItemText primary="12 wed 2019" className={" wrappedListItem  greyText alignLeft "} />
                    </ListItem>
      <ListItem className={"hideme "} >
        <Button color="primary"   className={ " hideme  approval_status deny_btn " }>
          REJECTED
</Button>
      
   
      </ListItem>

    </List>
  </Tooltip>
  
  <List component="nav" className={classes.root + "  border-bottom-gery  "} aria-label="Approve Reject Leaves">
                    <ListItem   className={" flexWrapParent   width-100 " }  >
                      <ListItemText primary="Team and Cluster" className={" wrappedListItemTop greyText alignLeft"} />
                      <ListItemText primary="Reason" className={" wrappedListItem  greyText alignLeft "} />
                    </ListItem>
                    <ListItem className={"hideme "} >
 
                    </ListItem>

                  </List>
</Paper>

))}
          </Grid>

        </Grid>
      </Grid>

      </div>






    </React.Fragment>
    )
  }
}

export default withStyles(styles)(PastLeaves); 