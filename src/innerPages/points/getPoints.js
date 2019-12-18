import React from 'react'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; 
import 'date-fns';
import jsPDF from '../../../node_modules/jspdf'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
 
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid'; 
import { Paper } from '@material-ui/core'; 

import { styles } from '../../commonStyles.js';
import './team.css';
import spinner from '../../images/Spinner-1s-60px.gif';

import arrow from '../../images/arrow-back.png';

class GetPoints extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        selectedStartDate: this.GetFormattedDate(new Date('2019-08-18T21:11:54')),
        selectedEndDate: this.GetFormattedDate(new Date('2019-08-18T21:11:54')),
        downloadAs: ['Select a Format','PDF', 'CSV'  ],
        formatSelected: "Select a Format",
        validateSelect:true
      }
  
  
      this._nodes = new Map()
    this.handleChange = this.handleChange.bind(this);
      this._handleClick = this.handleClick.bind(this);
  
  
    };
    handleChange = (e, i)  => {
      var target = e.target || e.srcElement;  
    this.setState({
      formatSelected:target.value
      })
      if(this.state.formatSelected ===  "Select a Format") {
        this.setState({
         validateSelect:false 
           })
     }
      if(this.state.formatSelected !=  "Select a Format") {
       console.log('hi');
         this.setState({
         validateSelect:true  
           })
     }
    }
    handleClick = (e, i)  => { 

      this.checkValid();
         var doc = new jsPDF()
      if(this.state.formatSelected == "CSV"){

     

     
    
        this.exportToCsv('export.csv', [
          ['name','description'],	
          ['david','123'],
          ['jona','""'],
          ['a','b'],
          
 ])
      }
      if(this.state.formatSelected == "PDF"){ 
        doc.text('Hello world!', 10, 10)
        doc.save('export.pdf')
      } 
      
        
    }
    checkValid(){
      
      if(this.state.formatSelected ==  "Select a Format") {
        this.setState({
         validateSelect:false 
           })
     }
     else{
       console.log('hi');
         this.setState({
         validateSelect:true  
           })
     }
     
    }
 exportToCsv(filename, rows) {
      var processRow = function (row) {
          var finalVal = '';
          for (var j = 0; j < row.length; j++) {
              var innerValue = row[j] === null ? '' : row[j].toString();
              if (row[j] instanceof Date) {
                  innerValue = row[j].toLocaleString();
              };
              var result = innerValue.replace(/"/g, '""');
              if (result.search(/("|,|\n)/g) >= 0)
                  result = '"' + result + '"';
              if (j > 0)
                  finalVal += ',';
              finalVal += result;
          }
          return finalVal + '\n';
      };

      var csvFile = '';
      for (var i = 0; i < rows.length; i++) {
          csvFile += processRow(rows[i]);
      }

      var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
      if (navigator.msSaveBlob) { // IE 10+
          navigator.msSaveBlob(blob, filename);
      } else {
          var link = document.createElement("a");
          if (link.download !== undefined) { // feature detection
              // Browsers that support HTML5 download attribute
              var url = URL.createObjectURL(blob);
              link.setAttribute("href", url);
              link.setAttribute("download", filename);
              link.style.visibility = 'hidden';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          }
      }
  }
  
  
  
    searchPastAttendace() {
  

    }
    GetFormattedDate(date) {
      var todayTime = date;
      //var month =  date.getMonth() + 1 ;
      var month = date.toLocaleString('default', { month: 'short' });
      var day = date.getDate();
      var year = date.getFullYear();
      return month + " " + day + " " + year;
  
    }
    handleDateStartDateChange = date => {
      const selectedStartDate = this.state.selectedStartDate || "No Start Date Selected";
      const formattedDate = this.GetFormattedDate(date)
  
      this.setState({
        selectedStartDate: formattedDate,
      })
  
      if (date == null) {
        this.setState({
          selectedEndDate: formattedDate,
        })
      }
    }
    handleDateEndDateChange = date => {
      const selectedStartDate = this.state.selectedStartDate || "No Start Date Selected";
      const formattedDate = this.GetFormattedDate(date)
      this.setState({
        selectedEndDate: formattedDate,
      })
      if (date == null) {
  
        this.setState({
          selectedEndDate: formattedDate,
        })
  
      }
    }
    render() {
      const { classes } = this.props;
  
      const dateRange = this.state.selectedStartDate + " - " + this.state.selectedEndDate;
      const teamList = [1, 2, 3];  
  
      const listItems = teamList.map(function (object,item) {
        return (
    
     
        
               <List component="nav" key={item} className={[classes.root + "  border-bottom-gery  margin-0-17  "].join(' ')} aria-label="mailbox folders">
                <ListItem className={ " alignLeft "} >
                  <ListItemText primary="01/12/2019" />
     
                </ListItem>
                <ListItem  className={ " alignLeft "}  >
    
                  <ListItemText primary="Description" className={ " wrappedListItemTop "} /> 
                </ListItem>
    
                <ListItem  className={ " alignLeft "}  >
                  <ListItemText primary="1000Pts" />
                </ListItem>
                <ListItem className={classes.flexWrapParent} >
    
               
                  <ListItemText primary="1000Pts"  />
                </ListItem>
                <ListItem className={ " alignRight " } >
    
                  <ListItemText primary="5642154Pts"  className={ " alignRight " } />
                </ListItem>
    
             
              </List> 
           
        );   
      })
      return (
        <React.Fragment>
          <div  className={" gridParent "} >    
            <Grid container spacing={3}>
    
              <Grid item xs={12} sm={6}>
                <Paper className={[classes.alignLeft, classes.topPaper + "  padding-left-0  "].join(' ')}><h1 className="{ main_heading-text }">     Point Transacions</h1>
                <h2 className={ "  small-heading alignLeft  padding-left-0 "}>Point Balance: 45124568 Pt</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Paper className={classes.topPaper + " margin-top-30 "}>
                 
                </Paper>
              </Grid>
    
            </Grid>
    
            <Grid container spacing={2} className={"  border-bottom-gery padding-bottom-30 "}>
    
    <Grid item xs={12} sm={2} className={" margin-top-40 "}>
      <Paper className={classes.nobackground + " alignLeft padding-left-0 line-hight-35"}>
        Select a Period: </Paper>
    </Grid>
    <Grid item xs={12} sm={2} className={classes.nobackground + "   line-hight-35 maxWidth100"}>
      <Paper className={classes.nobackground + " alignRight line-hight-35 maxWidth100"}>  From: </Paper>
    </Grid>
    <Grid item xs={12} sm={2}>
      <Paper className={classes.nobackground + " min-width-150 "}>
    
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.nobackground + " min-width-150 "}
            value={this.state.selectedStartDate}
            placeholder="10/10/2018"
            onChange={date => this.handleDateStartDateChange(date)}
    
            format="dd/MM/yyyy"
          />
        </MuiPickersUtilsProvider>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={2} className={classes.nobackground + " alignRight line-hight-35 maxWidth100"}>
      <Paper className={classes.nobackground + " alignRight line-hight-35 maxWidth100"}>  To:</Paper>
    </Grid>
    <Grid item xs={12} sm={2}>
      <Paper className={classes.nobackground + " min-width-150 "}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.nobackground + " min-width-150 "}
            value={this.state.selectedEndDate}
            placeholder="10/10/2018"
            onChange={date => this.handleDateEndDateChange(date)}
            disableFuture
            format="dd/MM/yyyy"
          />
        </MuiPickersUtilsProvider>
    
      </Paper>
    </Grid>
    <Grid item xs={12} sm={2} className={" alignRight "}>
      <Button variant="contained" color="primary" onClick={this.searchPastAttendace()}>
        SUBMIT
    </Button>
      <img className={classes.img + "  position-absolute "} alt="complex" src={spinner} />
    </Grid>
    
    <Grid container spacing={3} className={" margin-top-40 "}>

<Grid item xs={12}>
  <Paper className={[classes.alignLeft, classes.nobackground + " flexAlignLeft  padding-bottom-0 "].join(' ')}>
    <List component="nav" className={classes.root + " width-100  flexAlignLeft"} >
      <ListItem className={" flexWrapParent  flexAlignLeft  padding-left-10 "}  >
        <ListItemText primary={dateRange} className={"  flexAlignLeft  "} />
      </ListItem>
    </List>

  </Paper>
</Grid>


</Grid>
    </Grid> 
          </div>
          <Paper className={classes.rootOne +  " margin-top-40 "}>
            <List component="nav" className={classes.rootOne} aria-label="mailbox folders">
              <ListItem   variant="raised">
                <ListItemText className={ " headingText alignLeft padding-left-16" }  primary="Date" />
              </ListItem>
              <ListItem variant="raised">
                <ListItemText className={ " headingText alignLeft padding-left-16" }  primary="Description" />
              </ListItem>
              <ListItem variant="raised">
                <ListItemText className={ " headingText alignLeft padding-left-16" }  primary="WithDrawal Points" />
              </ListItem>
              <ListItem variant="raised">
                <ListItemText className={ " headingText alignLeft padding-left-16" }  primary="Deposit Points" />
              </ListItem>
              <ListItem variant="raised">
                <ListItemText className={ " headingText alignRight padding-left-16" }  primary="Closing Balance" />
              </ListItem>
     
    
            </List>
          </Paper>
          <Paper className={classes.root} style={{flexWrap:'wrap', width: '100%'}}> 
          {listItems}
          </Paper>
       
        <BottomNavigation id="bottom-aligned-navbar" value={this.state.formatSelected} onChange={e => this.handleChange(e )}  className={" bottomNavBar "}> 
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.state.formatSelected}
          onChange={e => this.handleChange(e )} className={(this.state.formatSelected  ===  "Select a Format" && this.state.validateSelect == false ) ? "badge-warning" : " "}
        >
           
          {this.state.downloadAs.map((el, i) => ( 
          <MenuItem key={i}  value={el} > {el } </MenuItem>
          ))}

        </Select>
        <Button
                          type="button"
                          fullWidth
                          variant="contained"
                          color="primary"  onClick={e => this.handleClick(e )} 
                          className={" maxWidth150 margin-10 height48"}
                        >
                         DOWNLOAD
     </Button>
    </BottomNavigation>
        </React.Fragment>
      );
    }
} 
export default withStyles(styles)(GetPoints); 