import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';
import Loadable from 'react-loadable';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { styles } from '../../commonStyles.js';
import {
  withRouter
} from "react-router-dom";

function Loading() {
  return <h3>Loading...</h3>;
}
class Collections extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openTeam: false,
      openDriver: false,
      GCDetails: {
        feederTeamDetails: " ",
        driverDetails: {
          driverName: 'hell',
        }
      },
      driverDetailsSet: false,
    }
    this._nodes = new Map()
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerOpenDriver = this.handleDrawerOpenDriver.bind(this)
    this.editCollections = this.editCollections.bind(this)

  }
  handleDrawerOpen = (e) => {
    e.stopPropagation();
    this.setState({
      openTeam: true,
      openDriver: false,
    });
  };
  handleDrawerOpenDriver = (e) => {
    e.stopPropagation();
    this.setState({ openDriver: true });
  };
  editCollections = (e, i) => {
    this.props.history.push("/dashboard/specialRequest/");
  };
  handleDrawerClose = (obj) => {
    this.setState({
      openTeam: false,
      openDriver: false,
      driverDetailsSet: true,
      GCDetails: {
        GCId: 1,
        feederTeamDetails: {},
        driverDetails: {
          driverName: "Driver Name",
        }
      }
    });


  };

  handleDrawerTeamClose = (obj) => {
    this.setState({
      openTeam: false,
      GCDetails: {
        feederTeamDetails: obj
      },
    });

  };
  setDriverDetails = (obj) => {
    this.setState({
      driverDetailsSet: obj || "ramu"
    });
  }
  render() {
    const { classes } = this.props;
    const { history } = this.props;
    const GCListTeam = [1, 2, 3, 4]
    //console.log(history.location.state)
    return (
      <React.Fragment>
        <div id="collections_div">
          <div className={" gridParent  border-bottom-gery margin-top-40"} id="collections_div_header">
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}>
                  <h1 className="{ main_heading-text }">       Collection</h1> </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.topPaper}>


                </Paper>
              </Grid>

            </Grid>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6} className={" align-self-flex-end "}>
                <Paper className={[classes.alignLeft, classes.topPaper + "   padding-top-0 "].join(' ')}>
                  <h2 className="{ main_heading-text   }">       Today 10 Dec 2019</h2> </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.topPaper}>

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
                </Paper>
              </Grid>

            </Grid>
          </div>
          <Paper className={classes.rootOne}>
            <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
              <ListItem variant="raised">
                <ListItemText className={" headingText "} primary="Green Cluster" />
              </ListItem>


              <ListItem className={" alignLeft "}>
                <ListItemText className={" headingText "} primary="Feed Team" />
              </ListItem>

              <ListItem className={" alignLeft "} >
                <ListItemText className={" headingText "} primary="Driver" />
              </ListItem>

              <ListItem className={" alignLeft "}>
                <ListItemText className={" headingText "} primary="Total Units" />
              </ListItem>

              <ListItem className={" alignLeft "} >
                <ListItemText className={" headingText "} primary="Total Points" />
              </ListItem>
            </List>
          </Paper>
          {GCListTeam.map((el, i) => (
            <Paper key={i} className={classes.root}>
              <List component="nav" className={classes.root} aria-label="mailbox folders" ref={c => this._nodes.set(i, c)} onClick={e => this.editCollections(e, i)} >

                <ListItem className={" flexWrapParent "} >
                  <div className={" maxWidth84 "}>
                    <ListItemText className={" fontSize20 "} primary={i} />

                  </div>
                  <Divider orientation="vertical" />
                  <div className={" flexWrapParent "} >
                    <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop"} />
                    <ListItemText primary="Area" className={" wrappedListItem  greyText "} />
                  </div>
                </ListItem>

                <ListItem className={" alignLeft "} >
                  <div className={" flexWrapParent "} >
                    <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop"} />
                    <ListItemText primary="Area" className={" wrappedListItem  greyText "} />
                  </div>
                </ListItem>
                <ListItem className={" alignLeft "} >
                  <div className={" flexWrapParent "} >
                    <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop"} />
                    <ListItemText primary="Area" className={" wrappedListItem  greyText "} />
                  </div>
                </ListItem>
                <ListItem className={" alignLeft "} >
                  <div className={" flexWrapParent "}  >
                    <ListItemText primary=" ils.feederTea " />
                  </div>
                </ListItem>
                <ListItem      >

                  <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop"} />

                </ListItem>
              </List>

            </Paper>

          ))}
          <Grid container spacing={3} className="{ margin-top-30 padding-top-24 }"> 
            <Grid item xs={12} sm={6}>
              <Paper className={[classes.alignLeft, classes.topPaper + " padding-top-0 "].join(' ')}>
                <h2 className="{ main_heading-text }">       Today 10 Dec 2019</h2> </Paper>
            </Grid> 
          </Grid>
          {GCListTeam.map((el, i) => (
            <Paper key={i} className={classes.root}>
              <List component="nav" className={classes.root} aria-label="mailbox folders" ref={c => this._nodes.set(i, c)} onClick={e => this.editCollections(e, i)} >

                <ListItem className={" flexWrapParent "} >
                  <div className={" maxWidth84 "}>
                    <ListItemText className={" fontSize20 "} primary={i} />

                  </div>
                  <Divider orientation="vertical" />
                  <div className={" flexWrapParent "} >
                    <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop"} />
                    <ListItemText primary="Area" className={" wrappedListItem  greyText "} />
                  </div>
                </ListItem>

                <ListItem className={" alignLeft "} >
                  <div className={" flexWrapParent "} >
                    <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop"} />
                    <ListItemText primary="Area" className={" wrappedListItem  greyText "} />
                  </div>
                </ListItem>
                <ListItem className={" alignLeft "} >
                  <div className={" flexWrapParent "} >
                    <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop"} />
                    <ListItemText primary="Area" className={" wrappedListItem  greyText "} />
                  </div>
                </ListItem>
                <ListItem className={" alignLeft "} >
                  <div className={" flexWrapParent "}  >
                    <ListItemText primary=" ils.feederTea " />
                  </div>
                </ListItem>
                <ListItem      >

                  <ListItemText primary=" ils.feederTea " className={" wrappedListItemTop"} />

                </ListItem>
              </List>

            </Paper>

          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(withRouter(Collections));
