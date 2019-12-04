import React from 'react';
import Button from '@material-ui/core/Button';
 
import { withRouter } from 'react-router-dom';
 

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class DateSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            setOpen: false,
            theArray: [],
        }

        //const [value, selectedDay] = React.useState(' ');
        //   const [theArray, setTheArray] = React.useState([]);
    }


    addToSelectedDateList(day, index, values ) {
        //this.props.validate(values)
        this.props.handleBlur(values)
 
        if (this.props.props.values.days.indexOf(day) < 0) { 
            this.props.props.values.days.push(day);
            this.state.theArray.push(index);
            this.setState({
                theArray: this.state.theArray
            })
       
        
            //  setTheArray([...theArray, index]);   
        }
        else {
            this.props.props.values.days.pop(day);
            this.state.theArray.pop(index);
            this.setState({
                theArray: this.state.theArray,
            })
            //   
           // console.log(this.state.theArray)
            //   setTheArray(theArray.splice(index,1));  

            //  
            //  selectedDay(value => index); 

        }


    };
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    determineItemStyle(index) {

        if (this.state.theArray.indexOf(index) > -1) {
            return ` MuiButton-outlinedPrimary ${index}`
        }
        if (this.state.theArray.indexOf(index) >= 0) {
            console.log(this.state.theArray.indexOf(index))
            return 'hompononi'
        }

    }
    render() {
        const { classes } = this.props;

        return (
            


                <React.Fragment>
                    {
                        days.map((day, index) => (

                            <div key={index} className={" displayInlineBlock "}>
                                <Button variant="outlined" name="day" className={this.determineItemStyle(index)} onClick={(e, values, arrayHelpers) => this.addToSelectedDateList(day, index,   values)}  >{day}</Button>
                            </div>

                        ))
                    } </React.Fragment>
         
        );
    }
}


 

export default withRouter(DateSelector)