import React  from 'react'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import {styles} from '../../commonStyles.js';
import  AssignDriver  from './assignDiver';
import  AssignFeederTeams  from './assignTeam';
import './greenCluster.css';

import DateSelector from '../../dateSelector';
import {
 
  Route, Switch, withRouter, NavLink,
} from "react-router-dom"; 
 
class editGreenCluster extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openTeam :false,
      openDriver :false,
      setOpen: false,
      theArray:[],
      GCDetails:{
          feederTeamDetails: " ",
          driverDetails:{
          driverName: 'hell',
              }
      },
      driverDetailsSet: false, 
 } 
 
  }

  handleDrawerOpen = () => { 
   this.setState({ openTeam: true, 
     openDriver :false,
    });
 };
 handleDrawerOpenDriver = () => {
   this.setState({ openDriver: true });
 };
 editGreenCluster = () => { 
   console.log('s');
 };
  handleDrawerClose = (obj) => { 
   this.setState({  
     openTeam :false,
     openDriver :false,
     driverDetailsSet: true,
     GCDetails:{
       GCId:1,
       feederTeamDetails: {},
       driverDetails:{
       driverName: "Driver Name",
                } 
     } 
   });
 
 
 }; 
 

 addToSelectedDateList(day, index, values ) {
  //this.props.validate(values)
  //this.props.handleBlur(values)

  // if (this.props.props.values.days.indexOf(day) < 0) { 
  //     this.props.props.values.days.push(day);
  //     this.state.theArray.push(index);
  //     this.setState({
  //         theArray: this.state.theArray
  //     })
 
  
  //     //  setTheArray([...theArray, index]);   
  // }
  // else {
  //     this.props.props.values.days.pop(day);
  //     this.state.theArray.pop(index);
  //     this.setState({
  //         theArray: this.state.theArray,
  //     })
      //   
     // console.log(this.state.theArray)
      //   setTheArray(theArray.splice(index,1));  

      //  
      //  selectedDay(value => index); 

  //}


};

determineItemStyle = (index) => {

  if (this.state.theArray.indexOf(index) > -1) {
      return ` MuiButton-outlinedPrimary ${index}`
  }
  if (this.state.theArray.indexOf(index) >= 0) {
      console.log(this.state.theArray.indexOf(index))
      return 'hompononi'
  }

}
 handleDrawerTeamClose = (obj) => { 
   this.setState({ 
     open: false , 
     openTeam :false, 
     GCDetails:{
       feederTeamDetails:   obj
     },  
     
     theArray: [],
   });
  
 }; 
 setDriverDetails = (obj ) => { 
   this.setState({  
     driverDetailsSet: obj || "ramu"
   });
 }
  render() {
    const { classes } = this.props;
  
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const teamList = [1, 2, 3];
  const listItems = teamList.map(function (item) {
    return (

      <div key={item}>

        <Paper className={classes.root}>
          <List component="nav" className={classes.root} aria-label="mailbox folders">
          <ListItem   className={" flexWrapParent " } > 
          <div   className={ " maxWidth84 "}>
            <ListItemText  className={ " fontSize20 "} primary="01" />

          </div>
            <Divider orientation="vertical" /> 
          <div   className={" flexWrapParent " } > 
            <ListItemText primary="Locality"  className={ " wrappedListItemTop"} />
            <ListItemText primary="Area"   className={" wrappedListItem  greyText "} />
            </div>
          </ListItem>


            <ListItem className={ "  flexWrapParent "}  >

              <ListItemText primary="Team Number" className={ " wrappedListItemTop "} />
              <ListItemText primary="Leader Name" className={ " wrappedListItemBigger  "} />
            </ListItem>

            <ListItem className={classes.alignRight} >

              <ListItemText primary="2220 Pts" />
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

      <div  className={" gridParent"}>

        <Grid container spacing={3} >

          <Grid item xs={12} sm={12} style={{paddingBottom:'0'}}>
          <NavLink to="/dashboard/GCListTeam/" className ={ " backButton "}>
            <Typography>Back</Typography> 
      </NavLink>
       </Grid>
          <Grid item xs={12} sm={12} className={[classes.alignRight, classes.bottomAlignContent].join(' ')}>
            <Typography> </Typography>
          </Grid>

        </Grid>

      </div>
      <Paper className={classes.loadMain}  id="edit-green-cluster" >
        <div  className={" gridParent  border-bottom-gery"} >
          <Grid container spacing={3} className={" border-bottom-grey "}>

            <Grid item xs={12} sm={6}>
            <ListItem   className={" flexWrapParent " } > 
          <div   className={ " maxWidth84 "}>
            <ListItemText  className={ " fontSize20 "} primary="01" />

          </div>
            <Divider orientation="vertical" /> 
          <div   className={" flexWrapParent " } > 
            <ListItemText primary="Locality"  className={ " wrappedListItemTop"} />
            <ListItemText primary="Area"   className={" wrappedListItem  greyText "} />
            </div>
          </ListItem> </Grid>
            <Grid item xs={12} sm={6} className={classes.alignRight}>
            
            </Grid>

          </Grid>

        </div>
        <div  className={" gridParent  border-bottom-gery"} >
          <Grid container spacing={3} className={" border-bottom-grey "}>

            <Grid item xs={12} sm={6}  className={" padding-top-0" } >
            <ListItem   className={" flexWrapParent padding-top-0" } > 
            <ListItemText primary="Feeder Team"   className={"headerText margin-bottom-ten greyText "} />
          <div   className={" flexWrapParent " } > 
            <ListItemText primary="Locality"  className={ " wrappedListItemTop"} />
            <ListItemText primary="Area"   className={" wrappedListItem  greyText "} />
            </div>
          </ListItem> </Grid>
            <Grid item xs={12} sm={6} className={  "alignRight centerAlignContent"}>
              
            <Button variant="outlined" color="primary" className={classes.button + " min-width-150 maxWidth150"}   onClick={e => this.handleDrawerOpen(e )}  >
                       ASSIGN TEAM 
               </Button>
            </Grid>

          </Grid>

        </div>
        <div  className={" gridParent  border-bottom-gery "} >
          <Grid container spacing={3} className={" border-bottom-grey "}>

            <Grid item xs={12}   className={" padding-top-0" } >
            <ListItem   className={" flexWrapParent " } > 
            <ListItemText primary="Day"   className={"headerText margin-bottom-ten greyText "} />
          <div  id="editGreenCluster" > 
          {
                        days.map((day, index) => (

                            <div key={index} className={" displayInlineBlock "}>
                                <Button variant="outlined" name="day" className={this.determineItemStyle(index)} onClick={(e, values, arrayHelpers) => this.addToSelectedDateList(day, index,   values)}  >{day}</Button>
                            </div>

                        ))
                    } 
            </div>
          </ListItem> </Grid>
  

          </Grid>

        </div>

        <div  className={" gridParent  border-bottom-gery"} >
          <Grid container spacing={3} className={" border-bottom-grey "}>

            <Grid item xs={12} sm={6}  className={" padding-top-0" } >
            <ListItem   className={" flexWrapParent " } > 
            <ListItemText primary="Time"   className={"headerText margin-bottom-ten greyText "} />
          <div   className={" flexWrapParent " } > 
            <ListItemText primary="7:30"  className={ " wrappedListItemTop"} />
            <ListItemText primary=" "   className={" wrappedListItem  greyText "} />
            </div>
          </ListItem> </Grid>
            <Grid item xs={12} sm={6} className={  "alignRight centerAlignContent"}>
              
            <Button variant="outlined" color="primary" className={classes.button + " min-width-150 maxWidth150"}   onClick={e => this.handleDrawerOpenDriver(e )}  >
                      CHANGE TIME
               </Button>
            </Grid>

          </Grid>

        </div>
        <div  className={" gridParent  border-bottom-gery"} >
          <Grid container spacing={3} className={" border-bottom-grey "}>

            <Grid item xs={12} sm={6}   className={" padding-top-0" } >
            <ListItem   className={" flexWrapParent " } > 
            <ListItemText primary="Feeder Team"   className={"headerText margin-bottom-ten greyText "} />
          <div   className={" flexWrapParent " } > 
            <ListItemText primary="Locality"  className={ " wrappedListItemTop"} />
            <ListItemText primary="Area"   className={" wrappedListItem  greyText "} />
            </div>
          </ListItem> </Grid>
            <Grid item xs={12} sm={6} className={  "alignRight centerAlignContent"}>
              
            <Button variant="outlined" color="primary" className={classes.button + " min-width-150 maxWidth150"}   onClick={e => this.handleDrawerOpenDriver(e )}  >
                       ASSIGN DRIVER 
               </Button>
            </Grid>

          </Grid>

        </div> 
        
        <Grid container spacing={3}>
 
          <Grid item xs={12} >
            <Paper className={classes.topPaper}>  
  <Button variant="contained" color="primary" className={classes.button} style={{ marginLeft: '10px' }}>
              SAVE
      </Button>
            </Paper>
          </Grid>

        </Grid>
      </Paper>
      { (this.state.openTeam) == true &&   <AssignFeederTeams props={this.state}  handleDrawerTeamClose={this.handleDrawerTeamClose}/>}
       { (this.state.openDriver) == true &&   <AssignDriver props={this.state}  handleDrawerClose={this.handleDrawerClose}/>}
 
    </React.Fragment>
  );
  }
}

export default withStyles(styles)( withRouter(editGreenCluster)); 