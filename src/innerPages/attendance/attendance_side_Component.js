import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';
import { styles } from '../../commonStyles.js';
import './team.css';


class LeaveRequests extends React.Component {
  constructor(props) {
    super(props);
    this._nodes = new Map()
    this._handleClick = this.handleClick.bind(this);
    this.state = {
      LeaveReqList: [1, 2, 3, 4, 5],
      ApproveReqList: [1],
      DeniedList: [],
      leaveStatus: "APPROVED", 
    }

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



  render() {
    const { classes } = this.props;


    return (<React.Fragment>


      <div>

        <Grid container spacing={2} id="approve_leaves_div">
          <Grid item id="All_leaves" xs={12} sm={6}>

            <Paper className={[classes.paper, classes.topPaper  + "  alignLeft  blackText"].join(' ')}>     Leave Requests

              ({this.state.LeaveReqList.length})

            </Paper>

            {this.state.LeaveReqList.map((el, i) => (

 
              <Paper key={i} className={classes.paper + " margin-bottom-5 "} id={i} ref={c => this._nodes.set(i, c)} onClick={e => this.handleClick(e, i)}
              >
                <Tooltip title="Approve or Reject" aria-label="add">
                  <List component="nav" className={classes.root + "  border-bottom-gery  "} aria-label="Approve Reject Leaves">
                    <ListItem   className={" flexWrapParent    " }  >
                      <ListItemText primary="ID and Name" className={" wrappedListItemTop alignLeft"} />
                      <ListItemText primary="12 wed 2019" className={" wrappedListItem  greyText alignLeft "} />
                    </ListItem>
                    <ListItem className={"hideme "} >
                      <Button color="primary" className={["hideme approved_btn approval_status " + classes.hideme].join(' ')}>
                        APPROVED
</Button>
                      <Button color="primary" className={[classes.button, classes.hideme + " hideme deny_btn "].join(' ')}>
                        DENY
</Button>
                      <Button color="primary" className={[classes.button, classes.hideme + " hideme approve_btn "].join(' ')}>   APROVE
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

          <Grid item id="accepted_leaves" xs={12} sm={6}>
            <Paper className={[classes.paper, classes.topPaper  + "  alignLeft  blackText"].join(' ')}>    Approved/Rejected Requests </Paper>

            {this.state.ApproveReqList.map((el, i) => (
              <Paper key={i} className={classes.paper} id={i} ref={c => this._nodes.set(i, c)} >
                <Tooltip title="Leave Approved    " aria-label="add">
                  <List component="nav"  className={classes.root + "  border-bottom-gery  "}  aria-label="mailbox folders" >
                  <ListItem   className={" flexWrapParent    " }  >
                      <ListItemText primary="ID and Name" className={" wrappedListItemTop alignLeft"} />
                      <ListItemText primary="12 wed 2019" className={" wrappedListItem  greyText alignLeft "} />
                    </ListItem>
                    <ListItem className={"hideme "} >
                      <Button color="primary" disabled className={["hideme approved_btn approval_status greenClassBtn" + classes.hideme].join(' ')}>
                        APPROVED
</Button>
                      <Button color="primary" disabled className={[classes.button, classes.hideme + " hideme deny_btn "].join(' ')}>
                        DENY
</Button>
                      <Button color="primary" disabled className={[classes.button, classes.hideme + " hideme approve_btn "].join(' ')}>    ss
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
            {this.state.DeniedList.map((el, i) => (


              <Paper key={i} className={" denied_list " + classes.paper} id={i} ref={c => this._nodes.set(i, c)} onClick={e => this.handleClick(e, i)}
              >

                <Tooltip title="Leave Rejected" aria-label="add">
                  <List component="nav" className={classes.root } aria-label="mailbox folders"
                  >

                    <ListItem className={classes.flexWrapParent}>
                      <ListItemText primary="Indranagar" className={" wrappedListItemTop "} />
                      <ListItemText primary="1st Block" className={classes.wrappedListItem} />

                    </ListItem>
                    <ListItem className={"hideme "} >
                      <Button color="primary" disabled className={["hideme approved_btn approval_status " + classes.hideme].join(' ')}>
                        REJECTED
</Button>
                      <Button color="primary" disabled className={[classes.button, classes.hideme + " hideme deny_btn "].join(' ')}>
                        DENY
</Button>
                      <Button color="primary" disabled className={[classes.button, classes.hideme + " hideme approve_btn "].join(' ')}>    ss
</Button>
                    </ListItem>

                  </List>
                </Tooltip>
              </Paper>

            ))}
          </Grid>

        </Grid>
      </div>




    </React.Fragment>
    )
  }
}

export default withStyles(styles)(LeaveRequests); 