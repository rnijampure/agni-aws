import React , { Suspense, lazy }  from 'react';
import clsx from 'clsx'; 
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton'; 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'; 
import  MainListItems   from './listItems';

import ResourcesListMain from './innerPages/resources/ResourcesListMain'; 
import CreateTeam from './innerPages/team/createTeam'; 
import TeamListMain  from './innerPages/team/teamListMain' ;
import GreenCluster  from './innerPages/GreenCluster/createGreenClusters' ; 
import employeeVerMain  from './innerPages/Employees/EmployeeVerification' ;
import Attendance  from './innerPages/attendance/attendance' ; 
import DailyAttendance  from './innerPages/attendance/daily_attendance' ; 
import PointList  from './innerPages/points/pointList' ;  
import Vehicle  from './innerPages/vehicle/VehicleMain' ;  
import DriverMain  from './innerPages/vehicle/driverMain' ;  
import driverLoad  from './innerPages/loads/driverLoad' ;    
import VendorRequests  from './innerPages/loads/verdorRequests' ;    
import GCListTeam  from './innerPages/GreenCluster/greenClusterListTeam' ;     
import editGreenCluster  from './innerPages/GreenCluster/editGreenCluster' ;    
import Collections  from './innerPages/Collections/collection' ;
import PastAttendance  from './innerPages/attendance/past_daily_attendance' ; 
import PastLeaves  from './innerPages/attendance/past_leaves' ; 
import SpecialRequest  from './innerPages/Collections/SpecialRequest' ;
import Assets  from './innerPages/Assets/AssetList' ; 
import RegisterVehicle  from './innerPages/Assets/register_vehicles' ; 
import EditVehicle  from './innerPages/Assets/edit_vehicle' ; 
import driverLoadAssets  from './innerPages/Assets/driverLoad' ; 
import GetPoints  from './innerPages/points/getPoints' ;  
import { withStyles } from '@material-ui/styles';
import {
 
  Route, Switch, withRouter
} from "react-router-dom"; 



const drawerWidth = 333;

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#f6f6f6',
    fontSize: '16px',
  fontWeight: 500,
  fontStretch: 'normal' , 
  fontStyle: 'normal' , 
  lineHeight: 'normal' , 
  letterSpacing: 'normal' , 
  color: '#ffffff' , 
    '& a': {
      color: 'white',
      textDecoration: 'none',
      display: 'inline-flex'
    },
    '& span': { 
      fontSize: '16px',
    },
    '& > svg': {
      minWidth: '30px',
    },
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 5px',
    color: 'white',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'black'
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      width: '0',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  menuButton: {
    marginRight: 36,
    color: 'white',
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: 'black',
    color: 'white',
    width: drawerWidth,
    borderLeft: 'none',
    paddingRight: '0',
    [theme.breakpoints.down('sm')]: {
      width: '320px',
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    "& span " :{
      display:'none'
    },
    width: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',

  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: "stretch"

  }, 
  heightMax: {
    display: 'flex',
    flex: '1',
    height: '87%'
  },
  fixedHeight: {
    height: '100%', alignItems: "stretch"
  }
});

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open :true,
      setOpen: true  
 }
 
  }

   handleDrawerOpen = () => {
    this.setState({ open: true });
   
     this.props.match.params.open = true;
  };
   handleDrawerClose = () => { 
    this.setState({ open: false });
    this.props.match.params.open = false;
  }; 
  data = ( ) => {
    this.props.match.params.open= this.state.open;
    } 
 
  render() {
    const { classes} = this.props;  
  

    const routes = [
      {
        id: "1",
        path: "/dashboard/CreateCluster",
        exact: true,
        sidebar: GreenCluster,
      },
      {
        id: "2",
        path: "/dashboard/GCListTeam",
        exact: true,
        sidebar: GCListTeam,
        open : this.state.open
      }
      ,
      {
        id: "3",
        path: "/dashboard/CreateTeam/",
        exact: true,
        sidebar: CreateTeam,
        
        open : this.state.open
      },
      {
        id: "3",
        path: "/dashboard/Teams/",
        exact: true,
        sidebar: TeamListMain,
      }, {
        id: "3",
        path: "/dashboard/EmployeeVerification/",
        exact: true,
        sidebar: employeeVerMain,
      }, {
        id: "3",
        path: "/dashboard/Attendance/",
        exact: true,
        sidebar: DailyAttendance,
      }, {
        id: "3",
        path: "/dashboard/Leave_Requests/",
        exact: true,
        sidebar: Attendance,
      },
      {
        id: "3",
        path: "/dashboard/PointStatement/",
        exact: true,
        sidebar: GetPoints,
      },
      {
        id: "3",
        path: "/dashboard/PointList/",
        exact: true,
        sidebar: PointList,
      },
      {
        id: "3",
        path: "/dashboard/vehicle/",
        exact: true,
        sidebar: Vehicle,
      },
      {
        id: "3",
        path: "/dashboard/driver/",
        exact: true,
        sidebar: DriverMain,
      },
      {
        id: "3",
        path: "/dashboard/driverLoad/",
        exact: true,
        sidebar: driverLoad,
      },
      {
        id: "3",
        path: "/dashboard/driverLoadAssets/",
        exact: true,
        sidebar: driverLoadAssets,
      },
      {
         id: "3",
        path: "/dashboard/vendorRequests/",
        exact: true,
        sidebar: VendorRequests,
      }, {
         id: "3",
        path: "/dashboard/ResourcesList/",
        exact: true,
        sidebar: ResourcesListMain,
      },
      {
        id: "3",
       path: "/dashboard/GCListTeam/",
       exact: true,
       sidebar: GCListTeam,
     },
     {
      id: "3",
     path: "/dashboard/editGreenCluster/",
     exact: true,
     sidebar: editGreenCluster,
   },
     {
      id: "3",
     path: "/dashboard/PastAttendance/",
     exact: true,
     sidebar: PastAttendance,
   },
     {
      id: "3",
     path: "/dashboard/PastLeaves/",
     exact: true,
     sidebar: PastLeaves,
   },
     {
      id: "3",
     path: "/dashboard/Collections/",
     exact: true,
     sidebar: Collections,
   }
   ,
     {
      id: "3",
     path: "/dashboard/specialRequest/",
     exact: true,
     sidebar: SpecialRequest,
   }
   ,
     {
      id: "3",
     path: "/dashboard/Assets/",
     exact: true,
     sidebar: Assets,
      },
     {
      id: "3",
     path: "/dashboard/RegisterVehicle/",
     exact: true,
     sidebar: RegisterVehicle,
     
     open : this.state.open
     },
     {
      id: "3",
     path: "/dashboard/editVehicle",
     exact: false,
     sidebar: EditVehicle,
     
     open : this.state.open
     }
    ];  

    return (
      <React.Fragment>
    <div className={classes.root}>
     
      <AppBar position="absolute" className={clsx(classes.appBar, this.state.open &&  classes.appBarShift )}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="default"
            fill="white"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={clsx(classes.menuButton,  this.state.open &&   classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
         Logo
          </Typography>
         <span> Work Organization </span>
         <span className="padding-left-15">JijoThomas@gmail.com</span>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, (this.state.open == false)  &&  classes.drawerPaperClose),
        }}
        open={ this.state.open }
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div id="MenuItems"> <MainListItems  />  </div>
        <Divider />
      </Drawer>
      <main className={classes.content,(this.state.open == false) ?  (classes.content + " menu_hidden ") : (classes.content + " menu_shown ")}
      
      >
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container, classes.heightMax}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map((route, index, history,props) => (
   <Route
   key={index}
   path={route.path} 
   component={route.sidebar} 
   history={history}    {...props} 
   />
                ))}
              </Switch>
              </Suspense>
            </Grid>

          </Grid>
        </Container>
      </main>
    </div>
</React.Fragment>
    )
  }
}  
export default withStyles(styles)( withRouter(Dashboard)); 