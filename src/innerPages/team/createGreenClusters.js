import React from 'react'  
import FormDialog  from './createGreenClustersDialog'  

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
 
  centerAlignedContent:{
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    minHeight: '88vh',
    textAlign:'center',
    "h1#{&}":{
      fontWeight:"normal",
      fontSize: '24px',
  fontWeight: '400',
    }
  }
}));
  export default function  createTeam() { 
    const classes = useStyles();

    return (
        <div   className={classes.centerAlignedContent} >
         Request
          <h1>
            Create Green Clusters
        </h1> 
        <FormDialog/> 
        </div>
       
      )
 
  }
  
