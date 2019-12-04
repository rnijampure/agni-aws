import React  from 'react';
 
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';

import './team.css';
const ITEM_HEIGHT = 48;
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
        boxShadow: 'none',
        textAlign: 'left',
        alignContent: 'flex-start',
        background: 'none'
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
    h5: { 
        fontSize: '24px',
        fontWeight: '400',
    },

    nobackground: {

        background: 'none',
        boxShadow: 'none',
    },

    paper1: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        flexWrap: 'nowrap',
        alignSelf: 'center',
        width: '90%'
    },
    flexBoxDiv : {
        width: '100%',
    display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    textAlign: 'left',
    alignItems: 'center',
    paddingTop: '0px',
    paddingBottom: '0px',
    justifyContent: 'flex-start',
    textDecoration: 'none'
        },
        noMargin: {
            margin: '0 16px!important',
            width: '100%!important'
        },
        
    button: { 
        width: '100%',
  
        margin: '10px 0px 10px'
 
    },
});



class Resources_side_component extends React.Component {
    constructor(props) {
        super(props);
        this._nodes = new Map()
        this._handleMenuClick = this.handleMenuClick.bind(this);
        this.state = {
            LeaveReqList: [1, 2, 3, 4, 5],
            ApproveReqList: [1],
            DeniedList: [],
            leaveStatus: "APPROVED",
            anchorEl: null,
            setAnchorEl: null,

        }

    }


    handleMenuClose = () => {
        this.setState(state => ({
            setAnchorEl: null,
        }));
    };
    handleFocus(event) {
        event.target.focus()
    }

    handleMenuClick(e, i) {

        let target = e.currentTarget;
        this.setState((prevState) => ({
            setAnchorEl: target,
        }));

    }



    render() {
        const { classes } = this.props;

        const options = [
            'None',
            'Atria',
            'Callisto',
        ];
        const Menuopen = Boolean(this.state.anchorEl);
        return (<React.Fragment>


            <div>

                <Grid container spacing={3}>
                    <Grid item id="All_leaves" xs={12} sm={4}>
                        <Paper className={[classes.paper1 + " headerMain ", classes.nobackground].join(' ')}>
                            <div className={" greyText " }>Feeder
                </div>
                            <div className={" align-right-grey "}>  Team: 01
                </div>
                        </Paper>
                        {this.state.LeaveReqList.map((el, i) => (


                            <Paper key={i} className={classes.paper} id={i}
                            > 
                                    <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
                                        <ListItem className={classes.flexWrapParent}>
                                            <ListItemText primary="Resource Name" className={ " wrappedListItemTop "} />
                                        </ListItem>
                                        <ListItem className={"hideme "} >
                                            100/Kg <div>
                                                <IconButton
                                                    aria-label="more"
                                                    aria-controls="long-menu"
                                                    aria-haspopup="true"
                                                    ref={c => this._nodes.set(i, c)} onClick={e => this.handleMenuClick(e, i)}
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                                <Menu
                                                    id="long-menu"
                                                    anchorEl={this.state.anchorEl}
                                                    
                                                    open={Menuopen}
                                                    ref={c => this._nodes.set(i, c)} onClick={e => this.handleMenuClose(e, i)}

                                                    PaperProps={{
                                                        style: {
                                                            maxHeight: ITEM_HEIGHT * 4.5,
                                                            width: 200,
                                                        },
                                                    }}
                                                >
                                                    {options.map(option => (
                                                        <MenuItem key={option} selected={option === 'Pyxis'} ref={c => this._nodes.set(i, c)} onClick={e => this.handleMenuClose(e, i)} >
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </Menu>
                                            </div>
                                        </ListItem>

                                    </List>
                         
                            </Paper>

                        ))}
 
                    </Grid>

                    <Grid item id="accepted_leaves" xs={12} sm={8}>
                         <Paper className={[classes.paper1 + " headerMain ", classes.nobackground, classes.noMargin].join(' ')}>
        <List component="nav" className={classes.flexBoxDiv} aria-label="mailbox folders">
          <ListItem   className={classes.maxWidth150}  variant="raised">
            <ListItemText  className={" greyText " } primary="Available Stock" />
          </ListItem>
        
          <ListItem     variant="raised">
            <ListItemText  className={" greyText " }  primary="Total Price" />
          </ListItem>
          <ListItem   variant="raised">
            <ListItemText  className={" greyText " } primary="Total Points" />
          </ListItem>
 
          <ListItem   variant="raised">

            <ListItemText  className={" greyText " } primary="Release To Vendor" />
          </ListItem>
        </List>
      </Paper>
    
                        {this.state.ApproveReqList.map((el, i) => (
                            <Paper key={i} className={ classes.flexBoxDiv } id={i} ref={c => this._nodes.set(i, c)} >
        <List component="nav" className={classes.flexBoxDiv} aria-label="mailbox folders">
        <ListItem   className={classes.maxWidth150}>
            <ListItemText primary="01" />

            <Divider orientation="vertical" /> 
          </ListItem>

  <ListItem  >
<ListItemText primary="0" />
            
          </ListItem>
          <ListItem  >
            <ListItemText primary="0" />
          </ListItem>
 
          <ListItem  >
            <Button variant="contained" color="primary" className={classes.button}>
              RELEASE
      </Button>
          </ListItem>
        
        </List>
                            </Paper>

                        ))}

                    </Grid>

                </Grid>
            </div>




        </React.Fragment>
        )
    }
}

export default withStyles(styles)(Resources_side_component); 