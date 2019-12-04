import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase'; 
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'; 
import EmployeeVerificationDialog from './verifyEmployeeDialog' 
 
import { withStyles } from '@material-ui/core/styles'; 




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
    margin: theme.spacing(2),
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
    color: 'black',
    paddingLeft: '0px'
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
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    minWidth: '158px',
    "& :first-of-type ": {
      "& span": {
        fontWeight: '700',

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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  Dialog: {
    maxWidth: '800px'
  },
  paper: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    textAlign: 'left',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
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
  nobackground: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    alignContent: 'flex-start',
    fontSize: '13px',
    color: ' #868686'
  },
  marginbottom15: {
    marginBottom: '15px',
    marginTop: '15px  '
  }
 
  
});

class EVLargeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      setOpen: false,
      i: 1,
      emptype: "feeder"
    }
    this._nodes = new Map()
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }

  handleClose = (event, i, emptype) => {
    this.setState({
      setOpen: false,
      i: i,
      emptype: emptype
    });
    document.querySelector("." + this.state.emptype + "_" + this.state.i + "_verified").style.display = "inline-flex";
    //    document.querySelector(".user_0_verified").innerHTML = "Hello World!";
  };


  justClose = (event, i) => {
    this.setState({
      setOpen: false,
      i: i
    });

  };
  handleClickOpen = (event, i, emptype) => { 
    this.setState(state => ({
      setOpen: true,
      i: i,
      emptype: emptype
    }));
    console.log(this.state.emptype)
  };

  render() {

    const { classes } = this.props;


    return (
      <React.Fragment>

        <div className={classes.rootOne}>
          <Grid container  >
            <Grid item xs={12} sm={6}>
              <Paper className={classes.textAlignLeft}>Employee Verifcation</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.textAlignRight}>

                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search By Employee Id"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>

              </Paper>
            </Grid>

          </Grid>

        </div>
        <div>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper className={[classes.paper, classes.nobackground, classes.marginbottom15].join(' ')}>Feeder</Paper>
              {[1, 2, 3, 4, 5].map((el, i) => (


                <Paper key={i} className={[classes.paper, classes.root].join(' ')} id={i}
                  ref={c => this._nodes.set(i, c)} onClick={e => this.handleClickOpen(e, i, "feeder")} >

                  <List component="nav"    >
                    <ListItem button className={classes.flexWrapParent} >
                      <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                      <ListItemText primary="1st Block" className={[classes.wrappedListItem  + " greyText "].join(' ')} />
                    </ListItem>
                  </List>
                  <List component="nav" className={" right_side_div " + classes.flexWrapParent} >

                    <ListItem className={[classes.hideme, ` feeder_${i}_verified `].join(' ')} >
                      <VerifiedUserIcon  className={ " greenClass" }  />
                      User Verified
                </ListItem>
                  </List>

                </Paper>

              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={[classes.paper, classes.nobackground, classes.marginbottom15].join(' ')}>Driver</Paper>
              {[1, 2, 3, 4, 5].map((el, i) => (


                <Paper key={i} className={[classes.paper, classes.root].join(' ')} id={i}
                  ref={c => this._nodes.set(i, c)} onClick={e => this.handleClickOpen(e, i, "Driver")} >

                  <List component="nav"    >
                    <ListItem button className={classes.flexWrapParent} >
                      <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                      <ListItemText primary="1st Block" className={[classes.wrappedListItem + " greyText "].join(' ')} />
                    </ListItem>
                  </List>
                  <List component="nav" className={" right_side_div " + classes.flexWrapParent} >

                    <ListItem className={[classes.hideme, ` Driver_${i}_verified `].join(' ')} >
                      <VerifiedUserIcon  className={ " greenClass" }  />
                      User Verified
</ListItem>
                  </List>

                </Paper>

              ))}    </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={[classes.paper, classes.nobackground, classes.marginbottom15].join(' ')}>Others</Paper>
              {[1, 2, 3, 4, 5].map((el, i) => (


                <Paper key={i} className={[classes.paper, classes.root].join(' ')} id={i}
                  ref={c => this._nodes.set(i, c)} onClick={e => this.handleClickOpen(e, i, "Others")} >

                  <List component="nav"    >
                    <ListItem button className={classes.flexWrapParent} >
                      <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                      <ListItemText primary="1st Block" className={[classes.wrappedListItem  + " greyText "].join(' ')} />
                    </ListItem>
                  </List>
                  <List component="nav" className={" right_side_div " + classes.flexWrapParent} >

                    <ListItem className={[classes.hideme, ` Others_${i}_verified `].join(' ')} >
                      <VerifiedUserIcon  className={ " greenClass" }  />
                      User Verified
</ListItem>
                  </List>

                </Paper>

              ))}
            </Grid>
          </Grid>

        </div>

        <div>


        </div>
        <EmployeeVerificationDialog open={this.state.setOpen} handleClose={this.handleClose} justClose={this.justClose} />
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(EVLargeScreen);
  /* creat*/


