import React from 'react'; 
import Tooltip from '@material-ui/core/Tooltip'; 
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import  AssignDriver  from '../common_files/assignDiver';  
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { styles } from '../../commonStyles.js'; 
import arrow from '../../images/arrow-back.png';
import DeleteIcon from '@material-ui/icons/Delete';
import InputBase from '@material-ui/core/InputBase';



class driverLoad extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: this.GetFormattedDate(new Date('2019-08-18T21:11:54')),
      selectedEndDate: this.GetFormattedDate(new Date('2019-08-18T21:11:54')),
      LeaveReqList: [1, 2, 3, 4, 5], 
      DeniedList: [1, 2, 3],
      leaveStatus: "APPROVED",
      VehicleTypeSelected: "Select Vehicle Type ",
      VehicleType: ["Truck", "Lorry"],
      VehicleList:["boggi","chogi","rogi"],
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
    this._nodes = new Map()
    this._handleClick = this.handleClick.bind(this);
    this._deleteVehicle = this.deleteVehicle.bind(this);
    




  };
  showPastAttendance = () => {
    this.props.history.push("/dashboard/PastAttendance");
  };
  handleDrawerOpenDriver = () => {
    this.setState({ openDriver: true });
  };
  handleFocus(event) {
    event.target.focus()
  }
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
  handleClick = (e, i)  => {
    var target = e.target || e.srcElement;
    console.log(target.value);
  this.setState.VehicleType.push(target.value)
  this.setState({
    VehicleTypeSelected:target.value
    })


  }
  deleteVehicle = (e, i)  => {
    var VehicleList = [...this.state.VehicleList]; // make a separate copy of the array
      var index = i;
    if (i !== -1) {
      VehicleList.splice(i, 1); 
   this.setState({VehicleList: VehicleList});
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

    const BootstrapInput = withStyles(theme => ({
      
      input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '1px solid #cbcbcb',
        fontSize: 16, 
    fontWeight: 'normal',
    color: 'grey',
        width: '176px',
        padding: '14px',
        transition: theme.transitions.create(['border-color', 'box-shadow']), 
        '&:focus': {
          borderRadius: 4,
          borderColor: '#cbcbcb',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
      },
    }))(InputBase);
    const dateRange = this.state.selectedStartDate + " - " + this.state.selectedEndDate;
    return (<React.Fragment>


      <div id="register_vehicles_main">


        <Grid container spacing={3}>
          <div className={" gridParent  border-bottom-gery margin-top-40"}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <Paper className={[classes.alignLeft, classes.topPaper].join(' ')}>
                  <h1 className="{ main_heading-text }" onClick={this.props.history.goBack} >  <img className={classes.img} alt="Back" src={arrow} />  Back</h1> </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.topPaper}>

                </Paper>
              </Grid>

            </Grid>

            <Grid container spacing={2}>


              <Grid item xs={12} sm={5} className={classes.nobackground + "   line-hight-35  "}>
                <Paper className={classes.nobackground + " alignLeft line-hight-35  greyText"}>  Register Vehicle: </Paper>
              </Grid>
              <Grid item xs={12} sm={5} className={classes.nobackground + " alignLeft line-hight-35 maxWidth100"}>
                <Paper className={classes.nobackground + " alignLeft line-hight-35 greyText maxWidth100"}>  Type:</Paper>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Paper className={classes.nobackground + " min-width-150 "}>


                </Paper>
              </Grid>

            </Grid>

            <Grid container spacing={2}>


              <Grid item xs={12} sm={5} className={classes.nobackground + "   line-hight-35 "}>
                <Paper className={classes.nobackground + " alignLeft line-hight-35 "}>  <TextField
                  id="outlined-vehicleNumber-input"
                  value="Enter Vehicle Register Number"
                  type="text"
                  autoComplete="Vehicle Number"
                  variant="outlined"
                  className={ " font-size-14 greyText"}
                /> </Paper>
              </Grid>
 
              <Grid item xs={12} sm={4} className={classes.nobackground + "   line-hight-35 "}>
                <Paper className={classes.nobackground + " alignLeft line-hight-35 "}>  
        <NativeSelect
          id="demo-customized-select-native"
          value={this.state.VehicleTypeSelected}
          onChange={this.handleClick}
            label="Enter Vehicle Number"
          input={<BootstrapInput />}
        >
          <option value="" />
          <option value={this.state.VehicleTypeSelected} >Enter Vehicle Number</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect></Paper>
              </Grid>
              <Grid item xs={12} sm={2} className={" alignRight "}>
                <Button variant="contained" color="primary" >
                REGISTER
      </Button> 
              </Grid>


            </Grid>
            <Grid container spacing={3} className={" margin-top-40 "}>

              <Grid item xs={12}>
                <Paper className={[classes.alignLeft, classes.nobackground + " flexAlignLeft  padding-bottom-0 "].join(' ')}>
                  <List component="nav" className={classes.root + " width-100  padding-left-0 flexAlignLeft"} >
                    <ListItem className={" flexWrapParent  flexAlignLeft"}  >
                      <ListItemText primary=" " className={"  flexAlignLeft  "} />
                    </ListItem>
                  </List>

                </Paper>
              </Grid>


            </Grid>
          </div>
          <Grid container spacing={2} id="vehicle_list_div">
            <Grid item id="All_Vehicles" xs={12} sm={8}>

              <Paper className={[classes.paper, classes.nobackground   + "  alignLeft  blackText"].join(' ')}>   
              <List component="nav" className={classes.root  } aria-label="mailbox folders" >
                      <ListItem    > 
                        <ListItemText primary="Vehicle Details" className={" wrappedListItem  greyText alignLeft "} />
                      </ListItem>
                      <ListItem className={"hideme "} >
                      <ListItemText primary="Driver" className={" wrappedListItem  greyText alignLeft "} />
                     

                      </ListItem>
                    </List>
              
              </Paper>
              {this.state.VehicleList.map((el, i) => (
                <Paper key={i} className={classes.paper} id={i} ref={c => this._nodes.set(i, c)} >
                  <Tooltip title="Assign Driver " aria-label="add">
                    <List component="nav" className={classes.root + "  border-bottom-gery  "} aria-label="mailbox folders" >
                      <ListItem className={" flexWrapParent    "}  >
                        <ListItemText primary={` ${el}_${i} ` } className={" wrappedListItemTop alignLeft"} />
                        <ListItemText primary="Vehicle Number" className={" wrappedListItem  greyText alignLeft "} />
                      </ListItem>
                      <ListItem  >
                      <Button variant="contained" color="primary" className={classes.button + " min-width-150  "}   onClick={e => this.handleDrawerOpenDriver(e )}  >
                       ASSIGN DRIVER 
               </Button>

                      </ListItem>
                      <ListItem  >
                      <DeleteIcon  color="secondary"   id={i} ref={c => this._nodes.set(i, c)} onClick={ e  => this.deleteVehicle(e, i )}   />

                      </ListItem>
                    </List>
                  </Tooltip>
 
                </Paper>

              ))}

              {(this.state.VehicleList.length) == 0 &&
                <Paper className={classes.paper + " centerAlignedContent "} style={{ minHeight: '80px' }}>

                  <p>
                    You have no more vehicles to register
      </p>
                </Paper>
              }
            </Grid>

        
          </Grid>
        </Grid>

      </div>



      { (this.state.openDriver) == true &&   <AssignDriver props={this.state}  handleDrawerClose={this.handleDrawerClose}/>}
 


    </React.Fragment>
    )
  }
}

export default withStyles(styles)(driverLoad); 