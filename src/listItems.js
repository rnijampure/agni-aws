import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import {
  withRouter, NavLink,
} from "react-router-dom";
import { Link, IndexLink } from 'react-router'




class MainListItems extends React.Component {
  constructor(props) {
    super(props);

  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  setActive(obj) {
    console.log(obj.props.to)
  }

  // dont use setState in constructor, initialize state instead
  getNavStyles = (path) => {
    var mypath = this.props.location.pathname;

    if (typeof path == "object") {
      if (path.indexOf(mypath) !== -1) {
        console.log(mypath === path ? 'active-nav-link-main' : ' '+ "here");
        return "active-nav-link-main";

      } else {
        console.log(mypath+ "there");
        return mypath === path ? 'active-nav-link-main' : ' ';
      }
    }
    else {
      return this.props.location.pathname === path ? 'active-nav-link-main' : ' ';
    }

  }
  render() {


    const { location } = this.props
    var currentActive = location.pathname === this.props.to;
    var classNameA = currentActive ? 'active-nav-link' : '';


    return (
      <React.Fragment>

        <List className={this.getNavStyles(["/dashboard/GCListTeam/","/dashboard/GCListTeam"]) + " single-link "} >
           <NavLink to="/dashboard/GCListTeam/" activeClassName="active-nav-link"  >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

         
          <ListItemText primary="GREEN CLUSTERS" />
          </NavLink>
        </List>
        <ExpansionPanel>
          <ExpansionPanelSummary
            className={this.getNavStyles(["/dashboard/Attendance/", "/dashboard/Leave_Requests/","/dashboard/CreateTeam/", "/dashboard/Teams/", "/dashboard/EmployeeVerification"]) + " single-link "}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
 
           <NavLink to="/dashboard/Attendance/" activeClassName="active-nav-link"  >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

         
          <ListItemText className={"primary-heading"} primary="ATTENDANCE" />
          </NavLink>
         
          
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>

              <ListItem button>
                <NavLink to="/dashboard/CreateTeam/" activeClassName="active-nav-link"  >
                  <ListItemIcon>
                    <GroupAddIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="Create Team" />
                </NavLink>
              </ListItem>
              <ListItem button  >
                <NavLink to="/dashboard/Teams/" activeClassName="active-nav-link" >
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="View Team" />
                </NavLink>
              </ListItem>
              <ListItem button  >
                <NavLink to="/dashboard/EmployeeVerification" activeClassName="active-nav-link" >
                  <ListItemIcon>
                    <VerifiedUserIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="Employee Verification" />
                </NavLink>
              </ListItem>
              <ListItem button  >
                <NavLink to="/dashboard/Leave_Requests/" activeClassName="active-nav-link" >
                  <ListItemIcon>
                    <WorkOffIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="Leave Requests" />
                </NavLink>
              </ListItem>
              <ListItem button  >
                <NavLink to="/dashboard/Attendance/" activeClassName="active-nav-link" >
                  <ListItemIcon>
                    <AssignmentTurnedInIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="Employee Attendance" />
                </NavLink>
              </ListItem>


            </List>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            className={"primary-heading"}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText className={"primary-heading"} primary="P0INTS" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>

              <ListItem button>
                <NavLink to="/dashboard/PointList/" activeClassName="active-nav-link"  >
                  <ListItemIcon>
                    <AccountBalanceWalletIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="View Points" />
                </NavLink>
              </ListItem>

              <ListItem style={{ borderBottom: '1px dashed white' }}>

                <Divider />
              </ListItem>
            </List>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            className={"primary-heading"}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText className={"primary-heading"} primary="RESOURCES" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <ListItem button>
                <NavLink to="/dashboard/vendorRequests/" activeClassName="active-nav-link"  >
                  <ListItemIcon>
                    <AccountBalanceWalletIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="Vendor Requests" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink to="/dashboard/ResourcesList/" activeClassName="active-nav-link"  >
                  <ListItemIcon>
                    <AccountBalanceWalletIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="Resources" />
                </NavLink>
              </ListItem>

            </List>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            className={"primary-heading"}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText className={"primary-heading"} primary="VEHICLE" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>

              <ListItem button>
                <NavLink to="/dashboard/vehicle/" activeClassName="active-nav-link"  >
                  <ListItemIcon>
                    <AccountBalanceWalletIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="View Vehicles" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink to="/dashboard/load/" activeClassName="active-nav-link"  >
                  <ListItemIcon>
                    <AccountBalanceWalletIcon />
                  </ListItemIcon>
                  <ListItemText className={"inset-heading"} primary="Driver Loads" />
                </NavLink>
              </ListItem>

            </List>

          </ExpansionPanelDetails>
        </ExpansionPanel>


      </React.Fragment>
    )
  }
}

export default withRouter(MainListItems)