import React  from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';  
import { withStyles } from '@material-ui/styles'; 
import Resources_side_component from './resources_side_Component';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
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

    gridParent: {
        flexGrow: '1 1',
        marginBottom: '20px',
        border: 'none',
        boxShadow: 'none',
        width: '100%'
    },

    topPaper: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        background: 'none'
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
        flexWrap: 'wrap',
        display: 'inline-flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        width: '100%',
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
        width: '20%',
        margin: '8px 47px 40px'
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
    margin12:{
        margin:'12px'
    }

});



class ResourceList extends React.Component {
    constructor(props) {
        super(props);
        this._nodes = new Map() 
    }


    handleFocus(event) {
        event.target.focus()
    }
 



    render() {
        const { classes } = this.props;
 
        return (<React.Fragment>
            <div  className={" gridParent "} >
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={12}>
                        <Paper className={classes.alignLeft, classes.topPaper}>
                            <h1 className="{ main_heading-text }">     Resource</h1> </Paper>
                    </Grid>

                    <Grid container spacing={3} className={classes.margin12}>
                        <Grid item id="All_leaves" xs={12} sm={4}>
      <TextField
          id="outlined-textarea"
          label="Resource Name"
          placeholder="Enter Resource Name"
          multiline
          className={classes.textField}
          margin="normal" 
        />
                        </Grid>

                        <Grid item id="accepted_leaves" xs={12} sm={8}>
 
                         
   
          <TextField
          id="outlined-textarea"
          label="Value/Kg"
          placeholder="&#8377;"
          multiline
          className={classes.textField}
          margin="normal" 
        /> 
          <Button variant="contained" color="primary" className={classes.button}>
              ADD
      </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </div>

            <div>


                <Resources_side_component />
            </div>

            <div>


            </div>


        </React.Fragment>
        )
    }
}

export default withStyles(styles)(ResourceList); 