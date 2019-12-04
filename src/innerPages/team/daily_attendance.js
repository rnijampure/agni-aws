import React  from 'react';
 
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
 
import Grid from '@material-ui/core/Grid'; 
import { Paper } from '@material-ui/core'; 
import './team.css';
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  rootOne: {
    flexGrow: 1,
    margin: theme.spacing(0),
    width: '100%',
    background: 'none',
    padding: '0',
    '& div': {
      background: 'none',
      boxShadow: 'none',

    }

  },
  rootHeading: {
    flexGrow: 1,
    margin: theme.spacing(0),
    padding:0,
    background: 'none',
    '& div': {
      background: 'none',
      boxShadow: 'none',
      textAlign: 'left'
    }

  },
 
  textAlignLeft: {
    textAlign: 'left', padding: theme.spacing(2),
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black'
  },
  textAlignRight: {
    textAlign: 'right', padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#B5B5B5!important',
    '&:hover': {
      backgroundColor: '#E5E5E5 !important',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      maxWidth: '300px',
      float: 'right'
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 300,
      },
    },
  },
  alignLeft: {
    textAlign: 'left',
    boxShadow: 'none'
  },
  wrappedListItem: {
    flex: '0 0 53%'
  },
  flexWrapParent: {
    flexWrap: 'nowrap',
    display: 'inline-flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    
    textAlign: 'left',
    alignItems: 'flex-start',
    width: '100%',
    "& :first-of-type ": {
      "& span": {
        fontWeight: '500',

      },
      "&:hover": {
        button: {
          display: 'block'
        },
      }
    }
  },
  wrappedListItemTop: {
    fontWeight: '700',
    color: '#262626',
    flex: '0 0 53%'
  }, 
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 5), width: '100%',
  },  
  greenClass: {
    color: '#8dc149'
  },
 
  Dialog: {
    maxWidth: '800px'
  },
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    flexWrap: 'nowrap',
    alignSelf: 'center',
    width: '90%'
  },
  button: {
    margin: theme.spacing(1, 0, 5),
    width: '100%',
  },
  DialogContent: {
    flexWrap: 'wrap',
  },
  img: {
    maxWidth: '115px',
    width: '100%',
    height: 'auto'
  },
 
  seperatorDiv: {
    height: '5px',
    padding: '0',
    margin: '0'
  },
  hideme: {
    display: "none"
  }, 
    h5:{ 
      fontSize: '24px',
  fontWeight: '400',
    },
    paperHeadingStyles :{
        margin:'0',
        padding: '0'
    },
    maxWidth98:{
      maxWidth :'98px'
    },
    nobackground:{
      
      background: 'none',
      boxShadow: 'none',
    }
   
});



class DailyAttendance extends React.Component {
 

 



  render() {
    const { classes } = this.props;
  
    
    return (<React.Fragment>

 
      <div>
          <Grid container spacing={3}>
          
          <Grid item    xs={12} sm={4}>
          <Paper className={[ classes.paper + " headerMain ", classes.nobackground].join(' ')}>  
                 <div className={" greyText"}>Feeder
                </div>
                <div className={" align-right "  }>  Team: 01ss
                </div>
            </Paper>
            <Paper className={classes.paper}> 
                <List component="nav" className={classes.rootOne} >
                  <ListItem   className={classes.flexWrapParent} > 
                  <ListItemText primary="Rahul Mahajan" className={ " wrappedListItemTop "} />
                  <ListItemText primary="High Street"  className={[classes.wrappedListItem + " greyText "].join(' ')}  /> 
                  </ListItem>  
                </List>
                <List component="nav" className={" right_side_div " + classes.rootOne} >
                  <ListItem   className={classes.flexWrapParent} > 
                  <ListItemText primary="Present" className={[classes.greenClass , classes.wrappedListItem  + " lighter-text "].join(' ')} />
                  <ListItemText primary="10:30 AM" className={[classes.wrappedListItem + " greyText "].join(' ')} />

                  </ListItem>
             
                </List> 
            </Paper>
          </Grid> 
          <Grid item  xs={12} sm={4}>
          <Paper className={[ classes.paper + " headerMain ", classes.nobackground].join(' ')}> 
            
            <div className={classes.greyText}>Feeder
           </div>
           <div className={" align-right "  }>   
           </div> 
       </Paper>
            <Paper className={classes.paper}> 
                <List component="nav" className={classes.rootOne} >
                  <ListItem   className={classes.flexWrapParent} >

                    <ListItemText primary="Rahul Mahajan" className={ " wrappedListItemTop "} />
                    <ListItemText primary="High Street"  className={[classes.wrappedListItem + " greyText "].join(' ')}  />

                  </ListItem>
                  
               
                </List>
                <List component="nav" className={" right_side_div " + classes.rootOne} >
                  <ListItem   className={classes.flexWrapParent} >

                    <ListItemText primary="Present" className={[classes.greenClass , classes.wrappedListItem  + " lighter-text "].join(' ')} />
                    <ListItemText primary="10:30 AM" className={[classes.wrappedListItem + " greyText "].join(' ')} />

                  </ListItem>
             
                </List> 
            </Paper>
          </Grid> 
   
          <Grid item  xs={12} sm={4}>
          <Paper className={[ classes.paper + " headerMain ", classes.nobackground].join(' ')}> 
            
            <div className={classes.greyText}>Feeder
           </div>
           <div className={" align-right "  }>   
           </div> 
       </Paper>
            <Paper className={classes.paper}> 
                <List component="nav" className={classes.rootOne} >
                  <ListItem   className={classes.flexWrapParent} >

                    <ListItemText primary="Rahul Mahajan" className={ " wrappedListItemTop "} />
                    <ListItemText primary="High Street"  className={[classes.wrappedListItem + " greyText "].join(' ')}  />

                  </ListItem>
                  
               
                </List>
                <List component="nav" className={" right_side_div " + classes.rootOne} >
                  <ListItem   className={classes.flexWrapParent} >

                    <ListItemText primary="Present" className={[classes.greenClass , classes.wrappedListItem  + " lighter-text "].join(' ')} />
                    <ListItemText primary="10:30 AM" className={[classes.wrappedListItem + " greyText "].join(' ')} />

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

export default withStyles(styles)(DailyAttendance); 