import React  from 'react';
 
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
 
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
    margin: theme.spacing(2),
    background: 'none',
    '& div': {
      background: 'none',
      boxShadow: 'none',
      textAlign: 'left'
    }

  }, 

  topPaper: { 
    boxShadow:'none',
    textAlign:'left',
    alignContent: 'flex-start',
    background:'none'
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
    width: '50%',
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
  button: {
    margin: theme.spacing(1, 0, 5),
    width: '100%',
  },
  DialogContent: {
    flexWrap: 'wrap'
  },

  greenClass: {
    color: '#8dc149'
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
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: '90%'
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
    } 
   
});

 

class LeaveRequests extends React.Component {
  constructor(props) {
    super(props);
    this._nodes = new Map()
    this._handleClick = this.handleClick.bind(this);
    this.state = {
         LeaveReqList : [1, 2, 3, 4, 5],
    ApproveReqList: [1],
    DeniedList:[],
    leaveStatus: "APPROVED"
    }
    
  }


  handleFocus(event) {
    event.target.focus()
  }

  handleClick(e, i) {
    var target = e.target || e.srcElement;
    console.log(target.parentNode.nodeName);
        const node = this._nodes.get(i) ;
      if(target.parentNode.nodeName == "BUTTON" && target.parentNode.classList.contains("approve_btn")){ 

        
        this.state.LeaveReqList.splice(i, 1);
        this.state.ApproveReqList.push(this.state.LeaveReqList.splice(i, 1));
        this.setState({
            LeaveReqList : this.state.LeaveReqList,
            ApproveReqList: this.state.ApproveReqList,
            leaveStatus: "APPROVED"
        })
      }
      if(target.parentNode.nodeName == "BUTTON" && target.parentNode.classList.contains("deny_btn")){ 
 
        this.state.LeaveReqList.splice(i, 1);
        this.state.DeniedList.push(this.state.LeaveReqList.splice(i, 1));
        this.setState({
            LeaveReqList : this.state.LeaveReqList,
            DeniedList: this.state.DeniedList,
            leaveStatus: "REJECTED"
        })
      }
      if(target.parentNode.nodeName != "BUTTON"){
          return
      }
    
    
 
  }



  render() {
    const { classes } = this.props;
  
    
    return (<React.Fragment>

 
      <div>
 
        <Grid container spacing={3}>
          <Grid item id="All_leaves" xs={12} sm={6}>
 
            <Paper className={[classes.paper, classes.topPaper].join(' ')}>     Leave Requests </Paper>
  
            {this.state.LeaveReqList.map((el, i) => (


              <Paper key={i} className={classes.paper} id={i}  ref={c => this._nodes.set(i, c)}  onClick={e => this.handleClick(e, i)} 
             >
                      <Tooltip title="Approve or Reject" aria-label="add">
        <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
          <ListItem className={classes.flexWrapParent}>
               <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                <ListItemText primary="1st Block" className={[classes.wrappedListItem , classes.greyText ].join(' ')} /> 
          </ListItem>
          <ListItem className={"hideme "} >      
          <Button color="primary"  className={["hideme approved_btn approval_status " +  classes.hideme ].join(' ')}>
 APPROVED
</Button> 
 <Button color="primary" className={[classes.button , classes.hideme +  " hideme deny_btn " ].join(' ')}>
DENY
</Button> 
<Button color="primary" className={[classes.button , classes.hideme +  " hideme approve_btn " ].join(' ')}>   APROVE
</Button> 
          </ListItem>
          
        </List>
      </Tooltip>
              </Paper>

            ))}
        { (this.state.LeaveReqList.length) == 0 &&
           <Paper className={classes.paper} style={{    minHeight: '80px'}}>
                   
      <p>
          You have no more leave requests
      </p>
            </Paper>
        }  
          </Grid>

          <Grid item id="accepted_leaves" xs={12} sm={6}>
          <Paper  className={[classes.paper, classes.topPaper].join(' ')}>    Approved/Rejected Requests </Paper>
  
            {this.state.ApproveReqList.map((el, i) => ( 
              <Paper key={i} className={classes.paper} id={i}   ref={c => this._nodes.set(i, c)} >
                      <Tooltip title="Leave Approved    " aria-label="add">
        <List component="nav" className={classes.rootOne} aria-label="mailbox folders" >
          <ListItem  className={classes.flexWrapParent}> 
               <ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
                <ListItemText primary="1st Block" className={classes.wrappedListItem} /> 
          </ListItem>
          <ListItem className={"hideme "} >      
          <Button color="primary" disabled className={["hideme approved_btn approval_status " +  classes.hideme].join(' ')}>
APPROVED
</Button> 
 <Button color="primary" disabled className={[classes.button , classes.hideme +  " hideme deny_btn "].join(' ')}>
DENY
</Button> 
<Button color="primary" disabled className={[classes.button , classes.hideme +  " hideme approve_btn "].join(' ')}>    ss
</Button> 
         </ListItem>
        </List>
      </Tooltip>
              </Paper>

            ))}
                  {this.state.DeniedList.map((el, i) => (


<Paper key={i} className={" denied_list " + classes.paper} id={i}  ref={c => this._nodes.set(i, c)}  onClick={e => this.handleClick(e, i)} 
>

        <Tooltip title="Leave Rejected" aria-label="add">
<List component="nav" className={classes.rootOne} aria-label="mailbox folders"
>
    
<ListItem className={classes.flexWrapParent}> 
<ListItemText primary="Indranagar" className={ " wrappedListItemTop "} />
<ListItemText primary="1st Block" className={classes.wrappedListItem} />

</ListItem>
<ListItem className={"hideme "} >
<Button color="primary" disabled className={["hideme approved_btn approval_status " +  classes.hideme].join(' ')}>
REJECTED
</Button> 
 <Button color="primary" disabled className={[classes.button , classes.hideme +  " hideme deny_btn "].join(' ')}>
DENY
</Button> 
<Button color="primary" disabled className={[classes.button , classes.hideme +  " hideme approve_btn "].join(' ')}>    ss
</Button> 
</ListItem>

</List>
</Tooltip>
</Paper>

))}
          </Grid>

        </Grid>
      </div>

       


    </React.Fragment>
    )
  }
}

export default withStyles(styles)(LeaveRequests); 