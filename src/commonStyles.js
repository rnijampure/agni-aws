
import { makeStyles } from '@material-ui/core/styles';

 export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      
      "fontSize": 16,
    },
    MuiButton:{
      "fontSize": 14,
     
    }, 
   
   ".MuiOutlinedInput-input":{"fontSize": 16},
    ".MuiButton-outlinedPrimary":{
      "fontSize": 14,
  fontWeight: '500'  , 
  fontStretch: 'normal'  , 
  fontStyle: 'normal'  , 
  lineHeight: 'normal'  ,  
  textAlign: 'center'  , 
  padding:'16px',
  color: '#3a6eff'  , 
      "& span":{
        
        "fontSize": 14,
        }
    },
    h1:{
         fontSize : '24px',

         "&.main_heading-text":{
          color: 'black',
          padding: '16px'  , 
           fontSize : '24px',
          textAlign: 'left'  , 
          fontWeight: '500'  , 
          marginBottom: '0'  ,  
          paddingBottom: '0'  , 
          paddingLeft: '0'  , 
          paddingTop: '0'  , 
    marginTop: '12px'
         }
    },
    ".MuiDivider-root":{
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
      margin:'0 19px'
    }
  }, 
    
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: ' ',
    padding: '0',
    display: 'flex',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    },
    
    "& .fontSize20 span":{
      fontSize: '20px'
    },
    "&:.MuiPaper-rounded": {
      borderRadius: '8px'
  
    },
  }, 
  rootOne: {
    width: '100%',
    maxWidth: '100%',
    background: 'none',
    display: 'flex',
    
    margin: theme.spacing(0.5, 0),
    color: '#868686',
     fontSize:'12px!important',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    },
    boxShadow: 'none',
    "& li.MuiListItem-root":{
     
    padding: '0',
    }


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
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    borderRadius: '8px'

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
    margin: theme.spacing(1, 0, 1),
    width: '100%',
    borderRadius: '4px',
    padding: theme.spacing(1, 0, 1),
    "& span":{
     fontSize:'14px' 
    }
    
  
  },
 
    
  DialogContent: {
    flexWrap: 'wrap'
  },
 
  
  '& hr': {
    margin: theme.spacing(0, 0.5),
  }, 
  alignLeft:{
    textAlign:'left',
       boxShadow:'none'
  },
  paper: {
    width: '100%'
  },
  ListItem: {
    flexWrap: 'wrap',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "none"
    },
    paddingTop: '0'
  }
  ,
  '& hr': {
    margin: theme.spacing(0, 0.5),
  },
  topPaper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    background: 'none'
  }, 

  maxWidth150: {
    maxWidth: '150px'
  }, 
    maxWidth30: {
    maxWidth: '30px'
  }, 

  loadMain: {
    marginTop: '0px',
    padding: '0 20px',
    '& paper': {
      boxShadow: 'none',
      borderRadius: '0',
      border: '0',
      borderBottom: '1px solid #f2f2f2'
    }
  } , 
paddingLeft20:{
  paddingLeft:'20px'
},
displayInlineBlock:{
display:'inline-block'
}
}));

export const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      
      "fontSize": 16,
    },
    MuiButton:{
      "fontSize": 14,
     
    },
    ".MuiButton-outlinedPrimary":{
      "fontSize": 14,
  fontWeight: '500'  , 
  fontStretch: 'normal'  , 
  fontStyle: 'normal'  , 
  lineHeight: 'normal'  ,  
  textAlign: 'center'  , 
  padding:'16px',
  color: '#3a6eff'  , 
      "& span":{
        
        "fontSize": 14,
        }
    },
    h1:{
         fontSize : '24px',

         "&.main_heading-text":{
          color: 'black',
          padding: '16px'  , 
           fontSize : '24px',
          textAlign: 'left'  , 
          fontWeight: '500'  , 
          marginBottom: '0'  ,  
          paddingBottom: '0'  , 
          paddingLeft: '0'  , 
          paddingTop: '0'  , 
    marginTop: '12px'
         }
    },
    ".MuiDivider-root":{
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
      margin:'0 19px',
    },
    ".MuiDivider-vertical":{

      minHeight: '56px'
    }
  }, 
    
  root: {
    
marginTop:'4px',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: ' ',
    padding: '0',
    display: 'flex',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    },
    
    "& .fontSize20 span":{
      fontSize: '20px'
    },
    "&:.MuiPaper-rounded": {
      borderRadius: '8px'
  
    },
  }, 
  
  greenClass: {
    color: '#8dc149'
  },
 
  rootOne: {
    width: '100%',
    maxWidth: '100%',
    background: 'none',
    display: 'flex',
    
    margin: theme.spacing(0.5, 0),
    color: '#868686',
     fontSize:'12px!important',
    "&:hover": {
      //you want this to be the same as the backgroundColor above display:'inline-block',
      backgroundColor: "none"
    },
    boxShadow: 'none',
    "& li.MuiListItem-root":{
     
    padding: '0',
    }


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
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    borderRadius: '8px',
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
    margin: theme.spacing(1, 0, 1),
    width: '100%',
    borderRadius: '4px',
    padding: theme.spacing(1, 0, 1),
    "& span":{
     fontSize:'14px' 
    }
    
  
  },
 
    
  DialogContent: {
    flexWrap: 'wrap'
  },
 
  
  '& hr': {
    margin: theme.spacing(0, 0.5),
  }, 
  alignLeft:{
    textAlign:'left',
       boxShadow:'none'
  },
  paper: {
    width: '100%'
  },
  ListItem: {
    flexWrap: 'wrap',
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "none"
    },
    paddingTop: '0'
  }
  ,
  '& hr': {
    margin: theme.spacing(0, 0.5),
  },
  topPaper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    background: 'none'
  }, 

  maxWidth150: {
    maxWidth: '150px'
  }, 
    maxWidth30: {
    maxWidth: '30px'
  }, 

  seperatorDiv :{
    height: '5px',
    padding : '0',
    margin : '0'
  },
  nobackground:{
      
    background: 'none',
    boxShadow: 'none',
  },
  loadMain: {
    marginTop: '0px',
    padding: '0 20px',
    '& paper': {
      boxShadow: 'none',
      borderRadius: '0',
      border: '0',
      borderBottom: '1px solid #f2f2f2'
    }
  } 
  ,
  search: {
    position: 'relative',
    borderRadius: '32px',
    backgroundColor: '#dcdcdc!important',
    '&:hover': {
      backgroundColor: '#dcdcdc!important',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      maxWidth: '479px',
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
    opacity: '0.5',
    fontSize: '16px',
    fontWeight: '500' ,
    color:'#000000',
    [theme.breakpoints.up('sm')]: {
      width: 400,
      '&:focus': {
        width: 300,
      },
    },
  }, 
  marginbottom15: {
    marginBottom: '15px',
    marginTop: '15px  '
  },
  ".MuiFormLabel-root":{
    "fontSize": 16,
 }
, 
}) ;
 