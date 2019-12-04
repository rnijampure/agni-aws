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
  };
   handleDrawerClose = () => { 
    this.setState({ open: false });
  }; 
  render() {
    const { classes } = this.props;
 
const CreateTeam = lazy(() => import('./innerPages/team/createTeam'));
const TeamListMain = lazy(() => import('./innerPages/team/teamListMain'));
const GreenCluster = lazy(() => import('./innerPages/GreenCluster/createGreenClusters'));
const GCListMain = lazy(() => import('./innerPages/GreenCluster/greenClusterListMain'));
const employeeVerMain = lazy(() => import('./innerPages/team/employeeVerificationMain')); 
const Attendance = lazy(() => import('./innerPages/attendance/attendance'));  
const DailyAttendance = lazy(() => import('./innerPages/attendance/daily_attendance'));  
const PointList = lazy(() => import('./innerPages/points/pointList'));   
const Vehicle = lazy(() => import('./innerPages/vehicle/VehicleMain'));   
const DriverMain = lazy(() => import('./innerPages/vehicle/driverMain'));   
const LoadMain = lazy(() => import('./innerPages/loads/LoadMain'));     
const VendorRequests = lazy(() => import('./innerPages/loads/verdorRequests'));     
const GCListTeam = lazy(() => import('./innerPages/GreenCluster/greenClusterListTeam'));      
const editGreenCluster = lazy(() => import('./innerPages/GreenCluster/editGreenCluster'));     

const PastAttendance = lazy(() => import('./innerPages/attendance/past_daily_attendance'));  

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
        sidebar: GCListMain,
      }
      ,
      {
        id: "3",
        path: "/dashboard/CreateTeam/",
        exact: true,
        sidebar: CreateTeam,
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
        path: "/dashboard/load/",
        exact: true,
        sidebar: LoadMain,
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
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container, classes.heightMax}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map((route, index, history) => (
                  //      <List><MainListItems></MainListItems></List>
                  // You can render a <Route> in as many places
                  // as you want in your app. It will render along
                  // with any other <Route>s that also match the URL.
                  // So, a sidebar or breadcrumbs or anything else
                  // that requires you to render multiple things
                  // in multiple places at the same URL is nothing
                  // more than multiple <Route>s.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.sidebar}
                    history={history}
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