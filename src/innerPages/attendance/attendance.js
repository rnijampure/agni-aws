import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import LeaveRequests from './attendance_side_Component';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { styles } from '../../commonStyles.js';
import './team.css';


class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this._nodes = new Map()
    this._handleClick = this.handleClick.bind(this)
  }


  handleFocus(event) {
    event.target.focus()
  }

  handleClick(e, i) {
    const node = this._nodes.get(i)
    console.log(node)
    node.style.background = "red";
  }



  render() {
    const { classes } = this.props;
    return (<React.Fragment>
      <div className={" gridParent  margin-top-40"}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}>
              <h1 className="{ main_heading-text }">       Leave</h1> </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.topPaper}>
              <Button variant="outlined" color="primary" onClick={() => this.showPastAttendance()}>
                PAST LEAVE
      </Button>

            </Paper>
          </Grid>

        </Grid>
 
      </div>
 

      <div>


        <LeaveRequests />
      </div>

      <div>


      </div>


    </React.Fragment>
    )
  }
}

export default withStyles(styles)(Attendance); 