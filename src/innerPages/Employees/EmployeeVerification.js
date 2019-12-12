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
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles'; 

import { styles } from '../../commonStyles.js';
import './team.css';
 

class EVLargeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      setOpen: false,
      i: 1,
      emptype: "feeder",
      unverifiedList: [1, 2, 3, 4, 5],
     verifiedList: [1],
    }
    this._nodes = new Map()
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }

  handleClose = (event, i, emptype) => {
    this.state.unverifiedList.splice(i, 1);
    this.state.verifiedList.push(this.state.unverifiedList.splice(i, 1));

    this.setState({
      LeaveReqList: this.state.LeaveReqList,
      ApproveReqList: this.state.ApproveReqList,
      leaveStatus: "VERIFIED"
    })
    this.setState({
      setOpen: false,
      i: i,
      emptype: emptype
    });
    document.querySelector("." + this.state.emptype + "_" + this.state.i + "_verified").style.display = "inline-flex";
    this.state.unverifiedList.push()
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
        <div id="employee_verification_main">
      <div  className={" gridParent  border-bottom-gery margin-top-40 "} >
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={[classes.alignLeft ,classes.topPaper].join( ' ')}>
    <h1 className="{ main_heading-text }">     Employee Verifcation</h1> </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Paper className={classes.textAlignRight + "  margin-top-30   "}>

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
        <Grid container spacing={3}>
 
<Grid item xs={12} sm={6}  id="employee_sorter"  >
  <Paper className={classes.topPaper}>
  <List component="nav"  >
                    <ListItem>
                    <ListItemText   className={" alignLeft    "} >
                    <h2 className="{ main_heading-text }">     Sort By:</h2>
                      </ListItemText> 
                      <ListItemText primary="All"   className={" alignCenter    "} /> 
                      <Divider orientation="vertical" /> 
                      <ListItemText primary="Verified"   className={" alignCenter    "} /> 
                      <Divider orientation="vertical" /> 
                      <ListItemText primary="Not Verified"   className={" alignCenter    "} /> 
                    </ListItem>
                  </List>
  </Paper>
</Grid>

</Grid>
      </div>

        <div>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper className={[classes.paper, classes.nobackground, classes.marginbottom15 + " greyText " ].join(' ')}>Feeder</Paper>
              {this.state.unverifiedList.map((el, i) => (


                <Paper key={i} className={ classes.root + " flexDirectionColumn "} id={i}
                  ref={c => this._nodes.set(i, c)} onClick={e => this.handleClickOpen(e, i, "feeder")} >

                  <List component="nav"  >
                    <ListItem     className={" flexWrapParent " }  >
                      <ListItemText primary="Indranagar"   className={" wrappedListItemTop    "} />
                      <ListItemText primary="1st Block"  className={" wrappedListItem  greyText "} />
                    </ListItem>
                  </List>
                  <List component="nav" className={" right_side_div flexWrapParent" } >

                    <ListItem className={ `hideme feeder_${i}_verified  greenClass font-size-14` } >
                      <VerifiedUserIcon  className={ "" }  />
                     APPOINTED
                </ListItem>
                  </List>

                </Paper>

              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={[classes.paper, classes.nobackground, classes.marginbottom15 + " greyText " ].join(' ')}>Driver</Paper>
              {[1, 2, 3, 4, 5].map((el, i) => (


                <Paper key={i} className={ classes.root  + " flexDirectionColumn "} id={i}
                  ref={c => this._nodes.set(i, c)} onClick={e => this.handleClickOpen(e, i, "Driver")} >

                  <List component="nav"    >
                    <ListItem   className={" flexWrapParent " } >
                      <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                      <ListItemText primary="1st Block"  className={" wrappedListItem  greyText "}  />
                    </ListItem>
                  </List>
                  <List component="nav"  className={" right_side_div flexWrapParent" } >

                  <ListItem className={ `hideme feeder_${i}_verified  greenClass font-size-14` } >
                      <VerifiedUserIcon  className={ "" }  />
                     APPOINTED
                </ListItem>
                  </List>

                </Paper>

              ))}    </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={[classes.paper, classes.nobackground, classes.marginbottom15 + " greyText "].join(' ')}>Others</Paper>
              {[1, 2, 3, 4, 5].map((el, i) => (


                <Paper key={i} className={[" flexDirectionColumn "  + classes.root].join(' ')} id={i}
                  ref={c => this._nodes.set(i, c)} onClick={e => this.handleClickOpen(e, i, "Others")} >

                  <List component="nav"    >
                    <ListItem  className={" flexWrapParent " } >
                      <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                      <ListItemText primary="1st Block"   className={" wrappedListItem  greyText "}  />
                    </ListItem>
                  </List>
                  <List component="nav" className={" right_side_div flexWrapParent" }  >

                  <ListItem className={ `hideme feeder_${i}_verified  greenClass font-size-14` } >
                      <VerifiedUserIcon  className={ "" }  />
                     APPOINTED
                </ListItem>
                  </List>

                </Paper>

              ))}
            </Grid>
          </Grid>

        </div>

        


        </div>
        <EmployeeVerificationDialog open={this.state.setOpen} handleClose={this.handleClose} justClose={this.justClose} />
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(EVLargeScreen);
  /* creat*/


